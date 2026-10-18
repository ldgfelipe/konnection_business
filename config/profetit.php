<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Profetit.org Integration Configuration
    |--------------------------------------------------------------------------
    |
    | Configuration for the B2B integration with profetit.org certification ecosystem.
    |
    */

    'webhook_secret' => env('PROFETIT_WEBHOOK_SECRET'),

    'api_key' => env('KONNECTION_API_KEY'),

    'webhook_url' => env('APP_URL') . '/api/v1/webhooks/profetit',

    'events' => [
        'certificate.issued' => 'certificate_issued',
        'user.certified' => 'user_certified',
        'certificate.revoked' => 'certificate_revoked',
        'certificate.expired' => 'certificate_expired',
    ],

    'activation_token_expiry_days' => 7,

    'certificate_types' => [
        'titulo_oficial' => 'Título Oficial',
        'testimonio_estudios' => 'Testimonio de Estudios',
    ],
];