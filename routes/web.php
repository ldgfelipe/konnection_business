<?php

use App\Http\Controllers\EmpresasControllers;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\ActivationController;
use App\Http\Controllers\Admin\ProfetitAdminController;
use App\Models\Empresa;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function (Request $request) {
    $today = now()->toDateString();

    if (isset($_REQUEST['busqueda'])) {
        $empresas = Empresa::where('nombre', 'LIKE', '%'.$_REQUEST['busqueda'].'%')->get();
    } else {
        $empresas = Empresa::get();
    }

    $publicidades = \App\Models\Publicidad::where('fecha_inicio', '<=', $today)
        ->where('fecha_fin', '>=', $today)
        ->get();

    $promociones = \App\Models\Promocion::where('fecha_inicio', '<=', $today)
        ->where('fecha_fin', '>=', $today)
        ->get()
        ->map(function ($promo) {
            $promo->empresa = \App\Models\Empresa::where('id_user', $promo->id_user)->first();

            return $promo;
        });

    $productos = \App\Models\Producto::with(['empresa' => function ($query) {
        $query->select('id', 'nombre', 'logo');
    }])
        ->orderBy('created_at', 'desc')
        ->limit(10)
        ->get();

    return Inertia::render('Dashboard', [
        'empresas' => $empresas,
        'publicidades' => $publicidades,
        'promociones' => $promociones,
        'productos' => $productos,
    ]);
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Email verification routes (internal to profile)
    Route::post('/profile/verify-email', [ProfileController::class, 'sendVerification'])->name('profile.verify-email.send');
    Route::get('/profile/verify-email/{id}/{hash}', [ProfileController::class, 'verifyEmail'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('profile.verify-email');
});

/*
|--------------------------------------------------------------------------
| Catálogo público (no requiere sesión)
|--------------------------------------------------------------------------
*/
Route::get('/empresas', [EmpresasControllers::class, 'empresas'])->name('empresas');
Route::get('/empresas/{categoria}', [EmpresasControllers::class, 'empresas'])->name('empresas.categoria');
Route::post('/empresas', [EmpresasControllers::class, 'empresas'])->name('empresas.post');
Route::get('/empresa/{id}', [EmpresasControllers::class, 'empresa']);

/*
|--------------------------------------------------------------------------
| Zona privada (empresa y servicios propios)
|--------------------------------------------------------------------------
| Requiere sesión y cuenta activada. Los usuarios certificados por Profetit
| acceden sin restricciones ni coste para publicar su empresa y servicios.
*/
Route::middleware(['auth', 'account.active'])->group(function () {
    // Perfil de empresa
    Route::get('/misempresas', [EmpresasControllers::class, 'misempresas'])->name('misempresas');
    Route::post('/empresas/eliminar', [EmpresasControllers::class, 'eliminarempresa'])->name('empresas.eliminar');
    Route::get('/perfilEmpresas', [EmpresasControllers::class, 'formempresa'])->name('perfilEmpresas');
    Route::post('/perfilEmpresas', [EmpresasControllers::class, 'formempresa'])->name('perfilEmpresas.post');

    // Productos / servicios propios
    Route::get('/misproductos', [ProductosController::class, 'misproductos'])->name('misproductos');
    Route::post('/guardaProducto', [ProductosController::class, 'guardaproducto'])->name('guardaProducto');
    Route::post('/eliminaproducto', [ProductosController::class, 'eliminaproducto'])->name('eliminaproducto');
    Route::post('/cargaProductos', [ProductosController::class, 'cargaProductos'])->name('cargaProductos');

    // Listado de productos (búsqueda)
    Route::get('/productos', [ProductosController::class, 'productos'])->name('productos');
    Route::post('/productos', [ProductosController::class, 'productos'])->name('productos.post');
});

/*
|--------------------------------------------------------------------------
| Profetit Activation Routes
|--------------------------------------------------------------------------
*/
Route::get('/activate-account', [ActivationController::class, 'show'])->name('activate.account');
Route::post('/activate-account', [ActivationController::class, 'activate'])->name('activate.account.submit');

/*
|--------------------------------------------------------------------------
| Admin Routes (Profetit Integration)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    // Configuración de integraciones
    Route::get('/settings/integrations', [ProfetitAdminController::class, 'settings'])->name('settings.integrations');
    Route::put('/settings/integrations', [ProfetitAdminController::class, 'updateSettings'])->name('settings.integrations.update');
    Route::post('/settings/integrations/generate-api-key', [ProfetitAdminController::class, 'generateApiKey'])->name('settings.integrations.generate-api-key');
    Route::post('/settings/integrations/test-webhook', [ProfetitAdminController::class, 'testWebhook'])->name('settings.integrations.test-webhook');

    // Gestión de usuarios certificados
    Route::get('/profetit-users', [ProfetitAdminController::class, 'users'])->name('profetit-users.index');
    Route::get('/profetit-users/{user}', [ProfetitAdminController::class, 'showUser'])->name('profetit-users.show');
    Route::post('/profetit-users/{user}/resend-activation', [ProfetitAdminController::class, 'resendActivation'])->name('profetit-users.resend-activation');
    Route::post('/profetit-users/{user}/sync', [ProfetitAdminController::class, 'syncUser'])->name('profetit-users.sync');
    Route::post('/profetit-users/{user}/status', [ProfetitAdminController::class, 'updateStatus'])->name('profetit-users.status');
});

require __DIR__.'/auth.php';