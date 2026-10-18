<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfetitCertificate extends Model
{
    use HasFactory;

    protected $table = 'profetit_certificates';

    protected $fillable = [
        'user_id',
        'certificate_code',
        'certificate_type',
        'issue_date',
        'status',
        'raw_payload',
        'revoked_at',
        'expires_at',
    ];

    protected $casts = [
        'issue_date' => 'date',
        'revoked_at' => 'datetime',
        'expires_at' => 'datetime',
        'raw_payload' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeRevoked($query)
    {
        return $query->where('status', 'revoked');
    }

    public function scopeExpired($query)
    {
        return $query->where('status', 'expired');
    }

    public function getBadgeLabelAttribute(): string
    {
        return match ($this->certificate_type) {
            'titulo_oficial' => 'Título Oficial',
            'testimonio_estudios' => 'Testimonio de Estudios',
            default => 'Certificado Profetit',
        };
    }

    public function getBadgeIconAttribute(): string
    {
        return match ($this->certificate_type) {
            'titulo_oficial' => 'mdi-certificate',
            'testimonio_estudios' => 'mdi-file-document-check',
            default => 'mdi-shield-check',
        };
    }

    public function getBadgeColorAttribute(): string
    {
        return match ($this->certificate_type) {
            'titulo_oficial' => 'primary',
            'testimonio_estudios' => 'info',
            default => 'success',
        };
    }
}