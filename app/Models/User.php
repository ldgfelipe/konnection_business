<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public const ROLE_ADMIN = 'admin';
    public const ROLE_USER = 'user';

    public const STATUS_PENDING_ACTIVATION = 'pending_activation';
    public const STATUS_ACTIVE = 'active';
    public const STATUS_SUSPENDED = 'suspended';

    /**
     * The attributes that are mass assignable.
     *
     * Privileged columns (role, profile_status, profetit_*, activation_token)
     * are intentionally NOT mass assignable. They are only changed through the
     * explicit helper methods below or by trusted server-side flows.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'is_admin',
        'has_free_access',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'profetit_verified' => 'boolean',
        'activation_token_expires_at' => 'datetime',
        'profetit_specialties' => 'array',
    ];

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */

    public function profetitCertificates(): HasMany
    {
        return $this->hasMany(ProfetitCertificate::class);
    }

    public function activeCertificate(): HasMany
    {
        return $this->hasMany(ProfetitCertificate::class)->where('status', 'active');
    }

    /*
    |--------------------------------------------------------------------------
    | Role / permission helpers
    |--------------------------------------------------------------------------
    */

    public function isAdmin(): bool
    {
        return $this->role === self::ROLE_ADMIN;
    }

    /**
     * Expose isAdmin() to the frontend as "is_admin".
     */
    public function getIsAdminAttribute(): bool
    {
        return $this->isAdmin();
    }

    /**
     * Profetit certified users get free, unrestricted access to publish their
     * company and services on KonnectionBusiness.
     */
    public function hasFreeAccess(): bool
    {
        return $this->isAdmin() || (bool) $this->profetit_verified;
    }

    /**
     * Expose hasFreeAccess() to the frontend as "has_free_access".
     */
    public function getHasFreeAccessAttribute(): bool
    {
        return $this->hasFreeAccess();
    }

    public function isProfetitVerified(): bool
    {
        return (bool) $this->profetit_verified;
    }

    /**
     * Assign a role. Only callable from trusted server-side code.
     */
    public function assignRole(string $role): void
    {
        if (! in_array($role, [self::ROLE_ADMIN, self::ROLE_USER], true)) {
            throw new \InvalidArgumentException("Rol inválido: {$role}");
        }

        $this->role = $role;
    }

    /*
    |--------------------------------------------------------------------------
    | Account status helpers
    |--------------------------------------------------------------------------
    */

    public function isPendingActivation(): bool
    {
        return $this->profile_status === self::STATUS_PENDING_ACTIVATION;
    }

    public function isActive(): bool
    {
        return $this->profile_status === self::STATUS_ACTIVE;
    }

    public function isSuspended(): bool
    {
        return $this->profile_status === self::STATUS_SUSPENDED;
    }

    /**
     * The account can use the system (publish company/services, etc).
     */
    public function canUseSystem(): bool
    {
        return $this->isActive() || $this->isAdmin();
    }

    public function markAsActive(): void
    {
        $this->profile_status = self::STATUS_ACTIVE;
        $this->email_verified_at = $this->email_verified_at ?: now();
        $this->activation_token = null;
        $this->activation_token_expires_at = null;
    }

    public function markAsPendingActivation(): void
    {
        $this->profile_status = self::STATUS_PENDING_ACTIVATION;
    }

    /**
     * Generate a new activation token.
     */
    public function generateActivationToken(): string
    {
        $token = bin2hex(random_bytes(32));

        $this->activation_token = $token;
        $this->activation_token_expires_at = now()->addDays(7);
        $this->save();

        return $token;
    }

    /*
    |--------------------------------------------------------------------------
    | Profetit helpers
    |--------------------------------------------------------------------------
    */

    /**
     * Mark this user as a verified Profetit professional and store the
     * certificate + extended profile data. Only callable server-side.
     */
    public function markProfetitVerified(string $certificateType, string $certificateCode, array $profile = []): void
    {
        $this->profetit_verified = true;
        $this->profetit_certificate_type = $certificateType;
        $this->profetit_code = $certificateCode;

        $this->syncProfetitProfile($profile);
    }

    /**
     * Store the extended Profetit profile fields.
     */
    public function syncProfetitProfile(array $profile): void
    {
        $map = [
            'folio' => 'profetit_folio',
            'license' => 'profetit_license',
            'institution' => 'profetit_institution',
            'category' => 'profetit_category',
            'level' => 'profetit_level',
            'career' => 'profetit_career',
            'country' => 'profetit_country',
            'photo' => 'profetit_photo',
        ];

        foreach ($map as $key => $column) {
            if (array_key_exists($key, $profile) && $profile[$key] !== null) {
                $this->{$column} = $profile[$key];
            }
        }

        if (array_key_exists('specialties', $profile)) {
            $specialties = $profile['specialties'] ?? [];

            // Accept a JSON string or an array and normalise to an array so the
            // "array" cast stores valid JSON (never double encoded).
            if (is_string($specialties)) {
                $decoded = json_decode($specialties, true);
                $specialties = is_array($decoded) ? $decoded : array_filter(array_map('trim', explode(',', $specialties)));
            }

            $this->profetit_specialties = is_array($specialties) ? array_values($specialties) : [];
        }
    }

    /**
     * Remove the Profetit verification (revoked/expired certificate).
     */
    public function clearProfetitVerification(): void
    {
        $this->profetit_verified = false;
        $this->profetit_code = null;
        $this->profetit_certificate_type = null;
    }

    /*
    |--------------------------------------------------------------------------
    | Presentation helpers
    |--------------------------------------------------------------------------
    */

    /**
     * Get the certificate badge info.
     */
    public function getCertificateBadge(): ?array
    {
        if (! $this->profetit_verified || ! $this->profetit_certificate_type) {
            return null;
        }

        $certificate = $this->profetitCertificates()->where('status', 'active')->first();

        return [
            'type' => $this->profetit_certificate_type,
            'label' => match ($this->profetit_certificate_type) {
                'titulo_oficial' => 'Título Oficial',
                'testimonio_estudios' => 'Testimonio de Estudios',
                default => 'Certificado Profetit',
            },
            'icon' => match ($this->profetit_certificate_type) {
                'titulo_oficial' => 'mdi-certificate',
                'testimonio_estudios' => 'mdi-file-document-check',
                default => 'mdi-shield-check',
            },
            'color' => match ($this->profetit_certificate_type) {
                'titulo_oficial' => 'primary',
                'testimonio_estudios' => 'info',
                default => 'success',
            },
            'code' => $this->profetit_code,
            'certificate_id' => $certificate?->id,
        ];
    }

    /**
     * Get full Profetit profile data for display.
     */
    public function getProfetitProfile(): ?array
    {
        if (! $this->profetit_verified) {
            return null;
        }

        $certificate = $this->profetitCertificates()->where('status', 'active')->first();

        return [
            'folio' => $this->profetit_folio,
            'license' => $this->profetit_license,
            'institution' => $this->profetit_institution,
            'category' => $this->profetit_category,
            'level' => $this->profetit_level,
            'career' => $this->profetit_career,
            'specialties' => $this->profetit_specialties ?? [],
            'country' => $this->profetit_country,
            'photo' => $this->profetit_photo,
            'certificate_type' => $this->profetit_certificate_type,
            'certificate_code' => $this->profetit_code,
            'issue_date' => $certificate?->issue_date,
            'status' => $certificate?->status,
            'badge' => $this->getCertificateBadge(),
        ];
    }

    /**
     * Check if user has a complete Profetit profile.
     */
    public function hasCompleteProfetitProfile(): bool
    {
        return $this->profetit_verified
            && $this->profetit_folio
            && $this->profetit_license
            && $this->profetit_institution;
    }

    /**
     * Does the user already have a company registered?
     */
    public function hasCompany(): bool
    {
        return $this->empresas()->exists();
    }

    public function empresas(): HasMany
    {
        return $this->hasMany(Empresa::class, 'id_user');
    }
}
