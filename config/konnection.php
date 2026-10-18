<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Plan gratuito
    |--------------------------------------------------------------------------
    |
    | Límites aplicados a los usuarios NO certificados por Profetit. Los
    | profesionales certificados por Profetit tienen acceso gratuito y sin
    | restricciones (ver User::hasFreeAccess()).
    |
    */

    'free_plan' => [
        // Número máximo de productos/servicios publicables.
        'products' => env('KONNECTION_FREE_PRODUCTS', 5),

        // Número máximo de empresas (el formulario actual admite una sola).
        'companies' => env('KONNECTION_FREE_COMPANIES', 1),
    ],

    /*
    |--------------------------------------------------------------------------
    | Registro público
    |--------------------------------------------------------------------------
    |
    | Al registrarse libremente la cuenta queda activa de inmediato. Las cuentas
    | importadas desde Profetit nacen como "pending_activation" hasta que el
    | profesional define su contraseña.
    |
    */

    'new_users_status' => 'active',
];
