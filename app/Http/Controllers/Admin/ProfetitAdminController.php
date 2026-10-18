<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AppSetting;
use App\Models\User;
use App\Services\ProfetitNotificationService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ProfetitAdminController extends Controller
{
    public function __construct(private ProfetitNotificationService $notifier)
    {
    }

    /**
     * Vista de configuración de integraciones
     */
    public function settings(): Response
    {
        return Inertia::render('Admin/Settings/Integrations', [
            'webhookSecret' => AppSetting::getOrConfig('profetit.webhook_secret', 'profetit.webhook_secret') ? '••••••••' : '',
            'apiKey' => AppSetting::getOrConfig('profetit.api_key', 'profetit.api_key') ? '••••••••' : '',
            'webhookUrl' => config('profetit.webhook_url'),
            'events' => config('profetit.events'),
        ]);
    }

    /**
     * Actualizar la configuración del webhook (persistida en base de datos).
     */
    public function updateSettings(Request $request): JsonResponse
    {
        $request->validate([
            'webhook_secret' => 'nullable|string|max:255',
            'api_key' => 'nullable|string|max:255',
        ]);

        if ($request->filled('webhook_secret')) {
            AppSetting::set('profetit.webhook_secret', $request->webhook_secret);
        }

        if ($request->filled('api_key')) {
            AppSetting::set('profetit.api_key', $request->api_key);
        }

        return response()->json([
            'success' => true,
            'message' => 'Configuración guardada correctamente',
        ]);
    }

    /**
     * Generar nueva API Key
     */
    public function generateApiKey(): JsonResponse
    {
        $apiKey = 'kb_' . Str::random(40);

        AppSetting::set('profetit.api_key', $apiKey);

        return response()->json([
            'success' => true,
            'api_key' => $apiKey,
            'message' => 'Nueva API Key generada. Guárdala en un lugar seguro.',
        ]);
    }

    /**
     * Probar conexión webhook
     */
    public function testWebhook(): JsonResponse
    {
        return app(\App\Http\Controllers\Api\ProfetitWebhookController::class)->test(request());
    }

    /**
     * Listar usuarios con certificación Profetit
     */
    public function users(Request $request): Response
    {
        $users = User::with(['profetitCertificates' => fn ($q) => $q->latest()])
            ->where(function ($q) {
                $q->where('profetit_verified', true)
                    ->orWhere('profile_status', User::STATUS_PENDING_ACTIVATION)
                    ->orWhereNotNull('profetit_code');
            })
            ->when($request->filled('status'), fn ($q) => $q->where('profile_status', $request->status))
            ->when($request->filled('search'), function ($q) use ($request) {
                $search = $request->search;
                $q->where(function ($sub) use ($search) {
                    $sub->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('profetit_code', 'like', "%{$search}%")
                        ->orWhere('profetit_folio', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Admin/ProfetitUsers/Index', [
            'users' => $users,
            'filters' => $request->only(['status', 'search']),
            'statusOptions' => [
                'pending_activation' => 'Pendiente de Activación',
                'active' => 'Activo',
                'suspended' => 'Suspendido',
            ],
        ]);
    }

    /**
     * Reenviar correo de activación
     */
    public function resendActivation(User $user): JsonResponse
    {
        if ($user->isActive() && $user->activation_token === null) {
            return response()->json([
                'success' => false,
                'message' => 'El usuario ya tiene su cuenta activada',
            ], 400);
        }

        $user->generateActivationToken();

        $sent = $this->notifier->sendActivationEmail($user);

        return response()->json([
            'success' => $sent,
            'message' => $sent
                ? 'Correo de activación reenviado'
                : 'No se pudo enviar el correo. Revisa la configuración de correo.',
        ], $sent ? 200 : 500);
    }

    /**
     * Sincronizar/Revocar manualmente
     */
    public function syncUser(Request $request, User $user): JsonResponse
    {
        $request->validate([
            'action' => 'required|in:sync,revoke',
        ]);

        if ($request->action === 'revoke') {
            $certificate = $user->profetitCertificates()->where('status', 'active')->first();

            if ($certificate) {
                $certificate->status = 'revoked';
                $certificate->revoked_at = now();
                $certificate->save();
            }

            $user->clearProfetitVerification();
            $user->save();

            return response()->json([
                'success' => true,
                'message' => 'Certificado revocado manualmente',
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Sincronización manual iniciada (requiere implementación de API externa)',
        ]);
    }

    /**
     * Activar / suspender manualmente una cuenta certificada.
     */
    public function updateStatus(Request $request, User $user): JsonResponse
    {
        $request->validate([
            'status' => 'required|in:active,suspended,pending_activation',
        ]);

        $user->profile_status = $request->status;

        if ($request->status === User::STATUS_ACTIVE) {
            $user->markAsActive();
        }

        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Estado actualizado a ' . $request->status,
        ]);
    }

    /**
     * Ver detalle de usuario
     */
    public function showUser(User $user): Response
    {
        $user->load(['profetitCertificates' => fn ($q) => $q->latest()]);

        return Inertia::render('Admin/ProfetitUsers/Show', [
            'user' => $user,
            'certificates' => $user->profetitCertificates,
            'profetitProfile' => $user->getProfetitProfile(),
        ]);
    }
}
