<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activa tu cuenta en KonnectionBusiness</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%); padding: 40px 30px; text-align: center;">
                            <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="margin: auto;">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <path d="M9 12l2 2 4-4"></path>
                                </svg>
                            </div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">¡Bienvenido a KonnectionBusiness!</h1>
                            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 16px;">Tu perfil profesional B2B verificado está listo</p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; color: #333333; line-height: 1.6; margin-top: 0;">Hola <strong>{{ $user->name }}</strong>,</p>

                            <p style="font-size: 16px; color: #333333; line-height: 1.6;">¡Felicitaciones! Has obtenido tu certificación en <strong>Profetit.org</strong> y tu perfil profesional B2B ha sido creado automáticamente en <strong>KonnectionBusiness</strong>.</p>

                            <!-- Certificate Badge -->
                            <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center;">
                                <div style="display: inline-flex; align-items: center; gap: 8px; background: #1976d2; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <path d="M9 12l2 2 4-4"></path>
                                    </svg>
                                    <span>Verificado por Profetit.org</span>
                                </div>
                                <p style="margin: 12px 0 0; color: #1565c0; font-size: 14px;">
                                    {{ $user->profetit_certificate_type === 'titulo_oficial' ? '📜 Título Oficial' : '📄 Testimonio de Estudios' }}
                                    @if($user->profetit_code)
                                    <br><span style="font-family: monospace; font-size: 12px;">{{ $user->profetit_code }}</span>
                                    @endif
                                </p>
                            </div>

                            <p style="font-size: 16px; color: #333333; line-height: 1.6;">Profetit.org ha creado automáticamente tu <strong>usuario y contraseña</strong> para que puedas acceder al sistema de KonnectionBusiness. Solo necesitas establecer tu contraseña con el botón de abajo.</p>

                            <!-- Credenciales -->
                            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 24px 0;">
                                <h3 style="margin: 0 0 12px; font-size: 15px; color: #333333;">🔑 Tus datos de acceso</h3>
                                <p style="margin: 0 0 8px; font-size: 14px; color: #555555;">
                                    <strong>Usuario:</strong>
                                    <span style="font-family: monospace; background: #f5f5f5; padding: 3px 8px; border-radius: 4px;">{{ $loginEmail }}</span>
                                </p>
                                <p style="margin: 0; font-size: 14px; color: #555555;">
                                    <strong>Contraseña:</strong> la que definas en el siguiente paso.
                                </p>
                            </div>

                            <!-- CTA Button -->
                            <div style="text-align: center; margin: 32px 0;">
                                <a href="{{ $activationUrl }}" style="display: inline-block; background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4);">
                                    Crear mi contraseña y activar mi cuenta
                                </a>
                            </div>

                            <!-- Benefits -->
                            <div style="background: #fafafa; border-radius: 8px; padding: 24px; margin: 24px 0;">
                                <h3 style="margin: 0 0 16px; font-size: 16px; color: #333333;">🚀 Beneficios de tu cuenta B2B:</h3>
                                <ul style="margin: 0; padding-left: 20px; color: #555555; line-height: 1.8;">
                                    <li><strong>Registra tu empresa o servicio GRATIS y sin restricciones</strong></li>
                                    <li>Directorio de proveedores y empresas verificadas</li>
                                    <li>Publicación de servicios y ofertas comerciales</li>
                                    <li>Red de networking con profesionales certificados</li>
                                    <li>Insignia "Verificado por Profetit" en tu perfil público</li>
                                </ul>
                            </div>

                            <!-- Expiry Notice -->
                            <div style="background: #fff3e0; border: 1px solid #ffe0b2; border-radius: 8px; padding: 16px; margin: 24px 0;">
                                <p style="margin: 0; color: #e65100; font-size: 14px;">
                                    <strong>⏰ Importante:</strong> Este enlace de activación expira el <strong>{{ $expiryDate }}</strong>.
                                    Si no activas tu cuenta antes de esa fecha, deberás solicitar un nuevo enlace.
                                </p>
                            </div>

                            <p style="font-size: 14px; color: #888888; margin-top: 32px;">Si no solicitaste esta cuenta, puedes ignorar este correo.</p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background: #fafafa; padding: 24px 30px; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0 0 8px; font-size: 12px; color: #999999;">KonnectionBusiness - Comunidad Empresarial B2B</p>
                            <p style="margin: 0; font-size: 11px; color: #bbbbbb;">
                                © {{ date('Y') }} KonnectionBusiness. Todos los derechos reservados.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>