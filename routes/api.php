<?php

use App\Http\Controllers\Api\ProfetitWebhookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
| Profetit Webhook Routes
|--------------------------------------------------------------------------
*/
Route::prefix('v1/webhooks')->name('webhooks.')->group(function () {
    // Firma HMAC obligatoria. Rate limit para evitar abuso/fuerza bruta.
    Route::post('/profetit', [ProfetitWebhookController::class, 'handle'])
        ->middleware('throttle:60,1')
        ->name('profetit');
});