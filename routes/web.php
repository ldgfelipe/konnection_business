<?php

use App\Http\Controllers\EmpresasControllers;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\ProfileController;
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
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/perfilEmpresas', [EmpresasControllers::class, 'formempresa'])->name('perfilEmpresas');
Route::post('/perfilEmpresas', [EmpresasControllers::class, 'formempresa'])->name('perfilEmpresas');

Route::get('/empresas', [EmpresasControllers::class, 'empresas'])->name('empresas');
Route::get('/empresas/{categoria}', [EmpresasControllers::class, 'empresas'])->name('empresas');
Route::post('/empresas', [EmpresasControllers::class, 'empresas'])->name('empresas');

Route::get('/empresa/{id}', [EmpresasControllers::class, 'empresa']);
/// productos
Route::get('/productos', [ProductosController::class, 'productos'])->name('productos');
Route::post('/productos', [ProductosController::class, 'productos'])->name('productos');

Route::get('/misproductos', [ProductosController::class, 'misproductos'])->name('misproductos');
Route::post('/guardaProducto', [ProductosController::class, 'guardaproducto'])->name('guardaProducto');
Route::post('cargaProductos', [ProductosController::class, 'cargaProductos']);
Route::post('/eliminaproducto', [ProductosController::class, 'eliminaproducto'])->name('eliminaproducto');

require __DIR__.'/auth.php';
