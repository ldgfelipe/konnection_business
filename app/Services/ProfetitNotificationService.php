<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

/**
 * Sends every user-facing notification related to the Profetit integration.
 *
 * Kept as a service (instead of private controller methods) so the webhook and
 * the admin panel can share exactly the same emails.
 */
class ProfetitNotificationService
{
    /**
     * Build the activation URL for a user.
     */
    public function activationUrl(User $user): string
    {
        $token = $user->activation_token ?: $user->generateActivationToken();

        return url('/activate-account?token=' . $token);
    }

    /**
     * Email explaining the new credentials + activation link.
     */
    public function sendActivationEmail(User $user): bool
    {
        try {
            Mail::send('emails.profetit-activation', [
                'user' => $user,
                'activationUrl' => $this->activationUrl($user),
                'expiryDate' => $user->activation_token_expires_at?->format('d/m/Y'),
                'loginEmail' => $user->email,
            ], function ($message) use ($user) {
                $message->to($user->email, $user->name)
                    ->subject('¡Tu perfil profesional B2B verificado está listo en KonnectionBusiness!');
            });

            return true;
        } catch (\Throwable $e) {
            Log::error('Error enviando correo de activación', [
                'user_id' => $user->id,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    /**
     * Email sent when an existing (already active) account gets certified.
     */
    public function sendVerificationNotification(User $user): bool
    {
        try {
            Mail::send('emails.profetit-verification', [
                'user' => $user,
                'dashboardUrl' => url('/dashboard'),
                'companyUrl' => url('/perfilEmpresas'),
            ], function ($message) use ($user) {
                $message->to($user->email, $user->name)
                    ->subject('Tu perfil B2B ha sido verificado en KonnectionBusiness');
            });

            return true;
        } catch (\Throwable $e) {
            Log::error('Error enviando notificación de verificación', [
                'user_id' => $user->id,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }
}
