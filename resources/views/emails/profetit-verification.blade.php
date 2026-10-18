<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu perfil B2B ha sido verificado</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%); padding: 40px 30px; text-align: center;">
                            <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="margin: auto;">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <path d="M9 12l2 2 4-4"></path>
                                </svg>
                            </div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">¡Perfil B2B Verificado!</h1>
                            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 16px;">Tu certificación Profetit ya está activa en KonnectionBusiness</p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; color: #333333; line-height: 1.6; margin-top: 0;">Hola <strong>{{ $user->name }}</strong>,</p>

                            <p style="font-size: 16px; color: #333333; line-height: 1.6;">Excelente noticia: tu perfil profesional en <strong>KonnectionBusiness</strong> ha sido verificado automáticamente gracias a tu certificación en <strong>Profetit.org</strong>.</p>

                            <!-- Certificate Badge -->
                            <div style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center;">
                                <div style="display: inline-flex; align-items: center; gap: 8px; background: #2e7d32; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <path d="M9 12l2 2 4-4"></path>
                                    </svg>
                                    <span>✅ Perfil Verificado B2B</span>
                                </div>
                                <p style="margin: 12px 0 0; color: #1b5e20; font-size: 14px;">
                                    {{ $user->profetit_certificate_type === 'titulo_oficial' ? '📜 Título Oficial' : '📄 Testimonio de Estudios' }}
                                    @if($user->profetit_code)
                                    <br><span style="font-family: monospace; font-size: 12px;">{{ $user->profetit_code }}</span>
                                    @endif
                                </p>
                            </div>

                            <p style="font-size: 16px; color: #333333; line-height: 1.6;">Ahora tu perfil público muestra la insignia <strong>"Verificado por Profetit"</strong>, lo que aumenta tu credibilidad ante empresas y proveedores en la red B2B.</p>

                            <!-- CTA Button -->
                            <div style="text-align: center; margin: 32px 0;">
                                <a href="{{ $dashboardUrl }}" style="display: inline-block; background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(46, 125, 50, 0.4);">
                                    Ir a mi Dashboard
                                </a>
                            </div>

                            <!-- What's New -->
                            <div style="background: #fafafa; border-radius: 8px; padding: 24px; margin: 24px 0;">
                                <h3 style="margin: 0 0 16px; font-size: 16px; color: #333333;">✨ ¿Qué cambia ahora?</h3>
                                <ul style="margin: 0; padding-left: 20px; color: #555555; line-height: 1.8;">
                                    <li>Insignia de verificación visible en tu perfil y en el directorio</li>
                                    <li>Prioridad en resultados de búsqueda B2B</li>
                                    <li>Acceso a oportunidades exclusivas para profesionales certificados</li>
                                    <li>Generación de confianza inmediata con clientes potenciales</li>
                                </ul>
                            </div>

                            <p style="font-size: 14px; color: #888888; margin-top: 32px;">Si tienes preguntas, contacta a nuestro equipo de soporte.</p>
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