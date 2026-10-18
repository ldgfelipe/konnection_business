<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class ActivationController extends Controller
{
    /**
     * Mostrar formulario de activación
     */
    public function show(Request $request): Response
    {
        $token = $request->query('token');

        if (!$token) {
            return Inertia::render('Auth/ActivateAccount', [
                'error' => 'Token de activación requerido',
                'valid' => false,
            ]);
        }

        $user = User::where('activation_token', $token)->first();

        if (!$user) {
            return Inertia::render('Auth/ActivateAccount', [
                'error' => 'Token de activación inválido',
                'valid' => false,
            ]);
        }

        if ($user->activation_token_expires_at && $user->activation_token_expires_at->isPast()) {
            return Inertia::render('Auth/ActivateAccount', [
                'error' => 'El token de activación ha expirado',
                'valid' => false,
                'expired' => true,
            ]);
        }

        if ($user->isActive()) {
            return Inertia::render('Auth/ActivateAccount', [
                'message' => 'Tu cuenta ya está activada. Puedes iniciar sesión.',
                'valid' => true,
                'already_active' => true,
            ]);
        }

        return Inertia::render('Auth/ActivateAccount', [
            'token' => $token,
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'profetit_verified' => $user->profetit_verified,
                'profetit_certificate_type' => $user->profetit_certificate_type,
            ],
            'valid' => true,
        ]);
    }

    /**
     * Procesar activación de cuenta
     */
    public function activate(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => 'required|string',
            'password' => ['required', 'confirmed', Password::defaults()],
            'profile_photo' => 'nullable|image|max:2048',
            'company_name' => 'nullable|string|max:255',
            'company_rfc' => 'nullable|string|max:20',
            'company_phone' => 'nullable|string|max:20',
            'company_address' => 'nullable|string|max:500',
            'company_website' => 'nullable|url|max:255',
            'company_category' => 'nullable|string|max:100',
            'company_description' => 'nullable|string|max:2000',
        ]);

        $user = User::where('activation_token', $request->token)->first();

        if (!$user) {
            return back()->withErrors(['token' => 'Token inválido']);
        }

        if ($user->activation_token_expires_at && $user->activation_token_expires_at->isPast()) {
            return back()->withErrors(['token' => 'Token expirado']);
        }

        // Actualizar usuario y activar la cuenta
        $user->password = Hash::make($request->password);
        $user->markAsActive();
        $user->save();

        // Foto de perfil opcional (se guarda en el campo profetit_photo)
        if ($request->hasFile('profile_photo')) {
            $path = $request->file('profile_photo')->store('profile-photos', 'public');
            $user->profetit_photo = Storage::url($path);
            $user->save();
        }

        // Si proporcionó datos de empresa, crearla
        if ($request->filled('company_name')) {
            \App\Models\Empresa::updateOrCreate(
                ['id_user' => $user->id],
                [
                    'nombre' => $request->company_name,
                    'rfc' => $request->company_rfc,
                    'telefono' => $request->company_phone,
                    'direccion' => $request->company_address,
                    'sitio_web' => $request->company_website,
                    'categorias' => $request->company_category,
                    'descripcion' => $request->company_description,
                ]
            );
        }

        // Iniciar sesión automáticamente y llevar al registro gratuito de la empresa/servicios
        Auth::login($user);
        $request->session()->regenerate();

        return redirect()
            ->route('perfilEmpresas')
            ->with('status', '¡Cuenta activada! Como profesional certificado por Profetit puedes registrar tu empresa o servicio de forma gratuita y sin restricciones.');
    }
}