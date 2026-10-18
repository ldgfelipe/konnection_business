<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

/**
 * Blocks accounts that are still pending activation (Profetit imports that did
 * not finish onboarding) or suspended from publishing content.
 */
class EnsureAccountIsActive
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (! $user) {
            return $request->expectsJson()
                ? response()->json(['message' => 'No autenticado'], 401)
                : redirect()->guest(route('login'));
        }

        if ($user->isSuspended()) {
            Log::notice('Acceso denegado: cuenta suspendida', [
                'user_id' => $user->id,
                'path' => $request->path(),
            ]);

            abort(403, 'Tu cuenta está suspendida. Contacta al administrador.');
        }

        if (! $user->canUseSystem()) {
            return $request->expectsJson()
                ? response()->json([
                    'message' => 'Debes activar tu cuenta para continuar.',
                    'code' => 'account_pending_activation',
                ], 403)
                : redirect()
                    ->route('activate.account', ['token' => $user->activation_token])
                    ->with('status', 'Activa tu cuenta para poder publicar tu empresa o servicios.');
        }

        return $next($request);
    }
}
