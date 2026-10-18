<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\ProfetitCertificate;
use App\Services\ProfetitNotificationService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ProfetitWebhookController extends Controller
{
    public function __construct(private ProfetitNotificationService $notifier)
    {
    }

    /**
     * Handle incoming webhook from Profetit.org
     */
    public function handle(Request $request): JsonResponse
    {
        // Validar firma HMAC
        if (!$this->validateSignature($request)) {
            Log::warning('Profetit webhook: Firma inválida', [
                'ip' => $request->ip(),
                'headers' => $request->headers->all(),
            ]);

            return response()->json(['message' => 'Firma inválida'], 401);
        }

        $payload = $request->json()->all();
        $event = $request->header('X-Profetit-Event') ?? $payload['event'] ?? null;

        Log::info('Profetit webhook recibido', [
            'event' => $event,
            'payload' => $payload,
        ]);

        try {
            return match ($event) {
                'certificate.issued', 'user.certified' => $this->handleCertificateIssued($payload),
                'certificate.revoked' => $this->handleCertificateRevoked($payload),
                'certificate.expired' => $this->handleCertificateExpired($payload),
                default => response()->json(['message' => 'Evento no reconocido'], 400),
            };
        } catch (\Throwable $e) {
            Log::error('Error procesando webhook Profetit', [
                'event' => $event,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json(['message' => 'Error interno'], 500);
        }
    }

    /**
     * Validar firma HMAC-SHA256
     */
    private function validateSignature(Request $request): bool
    {
        $secret = \App\Models\AppSetting::getOrConfig('profetit.webhook_secret', 'profetit.webhook_secret');

        if (!$secret) {
            Log::error('PROFETIT_WEBHOOK_SECRET no configurado');

            return false;
        }

        $signature = $request->header('X-Profetit-Signature');

        if (!$signature) {
            return false;
        }

        $payload = $request->getContent();
        $expectedSignature = 'sha256=' . hash_hmac('sha256', $payload, $secret);

        return hash_equals($expectedSignature, $signature);
    }

    /**
     * Manejar evento certificate.issued / user.certified
     * Mapea campos del formato Profetit.org
     */
    private function handleCertificateIssued(array $payload): JsonResponse
    {
        $email = $this->extractEmail($payload);
        $certificateCode = $this->extractCertificateCode($payload);
        $certificateType = $this->mapCertificateType($payload);
        $issueDate = $this->extractIssueDate($payload);

        if (!$email || !$certificateCode) {
            Log::warning('Payload Profetit incompleto', ['payload' => $payload]);

            return response()->json(['message' => 'Datos incompletos: email y certificate_code requeridos'], 400);
        }

        $profetitData = $this->extractProfetitData($payload);

        $user = User::where('email', $email)->first();

        if (!$user) {
            // ---------------------------------------------------------------
            // Usuario nuevo: se crea con acceso pendiente de activación.
            // Los campos privilegiados (role, profile_status, profetit_*) NO
            // son asignables en masa, se establecen aquí explícitamente.
            // ---------------------------------------------------------------
            $user = new User();
            $user->name = $profetitData['name'] ?: explode('@', $email)[0];
            $user->email = $email;
            $user->password = Hash::make(Str::random(32));
            $user->role = User::ROLE_USER;
            $user->profile_status = User::STATUS_PENDING_ACTIVATION;
            $user->markProfetitVerified($certificateType, $certificateCode, $profetitData);
            $user->save();

            $user->generateActivationToken();

            ProfetitCertificate::create([
                'user_id' => $user->id,
                'certificate_code' => $certificateCode,
                'certificate_type' => $certificateType,
                'issue_date' => $issueDate,
                'status' => 'active',
                'raw_payload' => $payload,
            ]);

            $this->notifier->sendActivationEmail($user);

            Log::info('Nuevo usuario creado desde webhook Profetit', [
                'user_id' => $user->id,
                'email' => $email,
                'certificate_code' => $certificateCode,
                'folio' => $profetitData['folio'] ?? null,
            ]);

            return response()->json([
                'message' => 'Usuario creado y correo de activación enviado',
                'user_id' => $user->id,
            ]);
        }

        // -------------------------------------------------------------------
        // Usuario existente: se certifica y se activa si estaba pendiente.
        // -------------------------------------------------------------------
        $wasPending = $user->isPendingActivation();

        $user->markProfetitVerified($certificateType, $certificateCode, $profetitData);

        if ($wasPending) {
            // Al certificarse una cuenta que no había activado, mantenemos el
            // token para que el usuario fije su contraseña, pero no la
            // bloqueamos: puede usar el sistema como usuario certificado.
            $user->profile_status = User::STATUS_ACTIVE;
        }

        $user->save();

        ProfetitCertificate::updateOrCreate(
            ['certificate_code' => $certificateCode],
            [
                'user_id' => $user->id,
                'certificate_type' => $certificateType,
                'issue_date' => $issueDate,
                'status' => 'active',
                'raw_payload' => $payload,
                'revoked_at' => null,
                'expires_at' => null,
            ]
        );

        if ($wasPending) {
            $this->notifier->sendActivationEmail($user);
        } else {
            $this->notifier->sendVerificationNotification($user);
        }

        Log::info('Usuario existente actualizado con certificado Profetit', [
            'user_id' => $user->id,
            'email' => $email,
            'certificate_code' => $certificateCode,
        ]);

        return response()->json([
            'message' => 'Perfil actualizado con certificado',
            'user_id' => $user->id,
        ]);
    }

    /**
     * Extraer email del payload (múltiples ubicaciones posibles)
     */
    private function extractEmail(array $payload): ?string
    {
        return $payload['email']
            ?? $payload['user_email']
            ?? $payload['professional_email']
            ?? $payload['data']['email']
            ?? $payload['data']['user_email']
            ?? null;
    }

    /**
     * Extraer código de certificado (folio internacional)
     */
    private function extractCertificateCode(array $payload): ?string
    {
        return $payload['certificate_code']
            ?? $payload['folio']
            ?? $payload['folio_internacional']
            ?? $payload['international_folio']
            ?? $payload['license']
            ?? $payload['international_license']
            ?? $payload['data']['folio']
            ?? $payload['data']['certificate_code']
            ?? null;
    }

    /**
     * Mapear tipo de certificado
     */
    private function mapCertificateType(array $payload): string
    {
        $type = strtolower($payload['certificate_type'] ?? $payload['category'] ?? $payload['tipo'] ?? '');

        return match (true) {
            str_contains($type, 'testimonio') || str_contains($type, 'testimonial') => 'testimonio_estudios',
            default => 'titulo_oficial',
        };
    }

    /**
     * Extraer fecha de emisión
     */
    private function extractIssueDate(array $payload): string
    {
        return $payload['issue_date']
            ?? $payload['fecha_emision']
            ?? $payload['date_issued']
            ?? $payload['data']['issue_date']
            ?? now()->toDateString();
    }

    /**
     * Extraer datos completos del perfil Profetit
     */
    private function extractProfetitData(array $payload): array
    {
        $data = $payload['data'] ?? $payload;

        return [
            'name' => $data['name'] ?? $data['professional_name'] ?? $data['full_name'] ?? null,
            'folio' => $data['folio'] ?? $data['folio_internacional'] ?? $data['international_folio'] ?? null,
            'license' => $data['license'] ?? $data['international_license'] ?? $data['licencia_internacional'] ?? null,
            'institution' => $data['institution'] ?? $data['institucion'] ?? $data['model_name'] ?? $data['institution_name'] ?? null,
            'category' => $data['category'] ?? $data['categoria'] ?? $data['registration_category'] ?? null,
            'level' => $data['level'] ?? $data['education_level'] ?? $data['nivel_estudios'] ?? null,
            'career' => $data['career'] ?? $data['professional_career'] ?? $data['carrera'] ?? null,
            'specialties' => $data['specialties'] ?? $data['especialidades'] ?? $data['especialidad'] ?? [],
            'country' => $data['country'] ?? $data['pais'] ?? $data['nationality'] ?? null,
            'photo' => $data['photo'] ?? $data['profile_photo'] ?? $data['foto'] ?? null,
        ];
    }

    /**
     * Manejar evento certificate.revoked
     */
    private function handleCertificateRevoked(array $payload): JsonResponse
    {
        $certificate = $this->findCertificate($payload);

        if (!$certificate) {
            return response()->json(['message' => 'Certificado no encontrado'], 404);
        }

        $certificate->status = 'revoked';
        $certificate->revoked_at = now();
        $certificate->raw_payload = array_merge($certificate->raw_payload ?? [], ['revocation' => $payload]);
        $certificate->save();

        $user = $certificate->user;

        if ($user) {
            $user->clearProfetitVerification();
            $user->save();
        }

        Log::info('Certificado revocado', [
            'certificate_id' => $certificate->id,
            'user_id' => $certificate->user_id,
        ]);

        return response()->json(['message' => 'Certificado revocado']);
    }

    /**
     * Manejar evento certificate.expired
     */
    private function handleCertificateExpired(array $payload): JsonResponse
    {
        $certificate = $this->findCertificate($payload);

        if (!$certificate) {
            return response()->json(['message' => 'Certificado no encontrado'], 404);
        }

        $certificate->status = 'expired';
        $certificate->expires_at = now();
        $certificate->raw_payload = array_merge($certificate->raw_payload ?? [], ['expiration' => $payload]);
        $certificate->save();

        $user = $certificate->user;

        if ($user) {
            $user->clearProfetitVerification();
            $user->save();
        }

        Log::info('Certificado expirado', [
            'certificate_id' => $certificate->id,
            'user_id' => $certificate->user_id,
        ]);

        return response()->json(['message' => 'Certificado marcado como expirado']);
    }

    /**
     * Locate a certificate by code or by the owner's email.
     */
    private function findCertificate(array $payload): ?ProfetitCertificate
    {
        $certificateCode = $this->extractCertificateCode($payload);
        $email = $this->extractEmail($payload);

        if (!$certificateCode && !$email) {
            return null;
        }

        return ProfetitCertificate::query()
            ->when($certificateCode, fn ($q) => $q->where('certificate_code', $certificateCode))
            ->when(!$certificateCode && $email, function ($q) use ($email) {
                $q->whereHas('user', fn ($u) => $u->where('email', $email));
            })
            ->first();
    }

    /**
     * Endpoint de prueba (solo accesible desde el panel de administración).
     */
    public function test(Request $request): JsonResponse
    {
        $secret = \App\Models\AppSetting::getOrConfig('profetit.webhook_secret', 'profetit.webhook_secret');

        if (!$secret) {
            return response()->json([
                'success' => false,
                'message' => 'PROFETIT_WEBHOOK_SECRET no configurado',
            ]);
        }

        $testPayload = [
            'event' => 'certificate.issued',
            'email' => 'martin.vargas@example.com',
            'name' => 'Martín Vargas Pérez',
            'folio' => 'F-187951',
            'license' => 'FT03-G1970-04113',
            'category' => 'Especialidad',
            'institution' => 'Federación Internacional de Especialistas',
            'level' => 'Post-doctorado',
            'career' => 'Posdoctorado en Ciencias Políticas',
            'specialties' => [
                'Planeación Estratégica en Educación',
                'Planeación Estratégica de Negocios',
                'Planeación Estratégica Económica, Política y Financiera',
            ],
            'country' => 'México',
            'issue_date' => now()->toDateString(),
        ];

        $payloadJson = json_encode($testPayload);
        $signature = 'sha256=' . hash_hmac('sha256', $payloadJson, $secret);

        return response()->json([
            'success' => true,
            'webhook_url' => config('profetit.webhook_url'),
            'test_signature' => $signature,
            'test_payload' => $testPayload,
            'message' => 'Configuración OK. Usa estos datos para probar en Profetit.org',
        ]);
    }
}
