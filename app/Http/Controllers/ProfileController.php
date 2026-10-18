<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => !$request->user()->hasVerifiedEmail(),
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Send email verification notification.
     */
    public function sendVerification(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return Redirect::route('profile.edit')->with('status', 'El correo ya está verificado.');
        }

        $request->user()->sendEmailVerificationNotification();

        return Redirect::route('profile.edit')->with('status', 'Enlace de verificación enviado.');
    }

    /**
     * Verify email via signed URL.
     */
    public function verifyEmail(Request $request, $id, $hash): RedirectResponse
    {
        if (!$request->hasValidSignature()) {
            return Redirect::route('profile.edit')->with('status', 'Enlace de verificación inválido o expirado.');
        }

        $user = $request->user();

        if ($user->id != $id) {
            return Redirect::route('profile.edit')->with('status', 'Enlace de verificación inválido.');
        }

        if (!hash_equals((string) $hash, hash('sha256', $user->getEmailForVerification()))) {
            return Redirect::route('profile.edit')->with('status', 'Enlace de verificación inválido.');
        }

        if ($user->hasVerifiedEmail()) {
            return Redirect::route('profile.edit')->with('status', 'El correo ya está verificado.');
        }

        $user->markEmailAsVerified();

        return Redirect::route('profile.edit')->with('status', 'Correo verificado correctamente.');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}