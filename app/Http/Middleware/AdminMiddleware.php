<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Only users with the "admin" role may continue.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (! $user) {
            return $request->expectsJson()
                ? response()->json(['message' => 'No autenticado'], 401)
                : redirect()->guest(route('login'));
        }

        if (! $user->isAdmin()) {
            Log::warning('Acceso a zona de administración denegado', [
                'user_id' => $user->id,
                'email' => $user->email,
                'role' => $user->role,
                'path' => $request->path(),
                'ip' => $request->ip(),
            ]);

            abort(403, 'Acceso denegado. Se requiere rol de administrador.');
        }

        return $next($request);
    }
}
