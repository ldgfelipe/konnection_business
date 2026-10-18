<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Empresa;
use App\Models\Producto;

class EmpresasControllers extends Controller {

    /**
     * Directorio público de empresas (con buscador y filtro por categoría).
     */
    public function empresas(Request $request){
        if(isset($request->busqueda)){

            if(isset($request->categoria) and $request->categoria!=NULL){
                $empresas=Empresa::where('nombre','LIKE','%'.$request->busqueda.'%')
                                   ->where('categorias','=',$request->categoria)->get();
            }else{
                $empresas=Empresa::where('nombre','LIKE','%'.$request->busqueda.'%')->get();
            }


        }else{
            if(isset($request->categoria) and $request->categoria!=NULL){
                $empresas=Empresa::where('categorias','=',$request->categoria)->get();
            }else{
                $empresas=Empresa::get();
            }
        }

        return Inertia::render('Empresas/BuscadorEmpresas',[
            'empresas'=>$empresas
        ]);

    }

    /**
     * Listado de las empresas del usuario autenticado.
     *
     * Los profesionales certificados por Profetit pueden registrar empresas
     * ilimitadas y sin coste; el resto se limita al plan gratuito.
     */
    public function misempresas(Request $request): Response
    {
        $user = Auth::user();

        $empresas = Empresa::where('id_user', $user->id)
            ->withCount('productos')
            ->latest('id')
            ->get();

        $freeAccess = $user->hasFreeAccess();
        $limit = $freeAccess ? 0 : (int) config('konnection.free_plan.companies', 1);

        return Inertia::render('Empresas/MisEmpresas', [
            'empresas' => $empresas,
            'freeAccess' => $freeAccess,
            'limit' => $limit,
            'canCreate' => $freeAccess || $limit === 0 || $empresas->count() < $limit,
        ]);
    }

    /**
     * Alta / edición de una empresa.
     *
     * GET  /perfilEmpresas            -> formulario de alta
     * GET  /perfilEmpresas?id=N       -> formulario de edición
     * POST /perfilEmpresas            -> crea
     * POST /perfilEmpresas?id=N       -> actualiza
     *
     * También atiende la eliminación de logo (POST sólo con "logo_del").
     */
    public function formempresa(Request $request): Response|RedirectResponse{
        $user = Auth::user();

        $empresa = null;
        if($request->filled('id')){
            $empresa = Empresa::where('id', $request->id)
                ->where('id_user', $user->id)
                ->first();

            if(!$empresa){
                abort(404);
            }
        }

        if($request->isMethod('post')){
            // --- Eliminar sólo el logo (formulario secundario del componente) ---
            if($request->filled('logo_del') && ! $request->filled('nombre')){
                $this->deleteStoredFile($request->input('logo_del'));

                if($empresa){
                    $empresa->logo = '';
                    $empresa->save();
                }

                return redirect()->route('misempresas')->with('status', 'Logo eliminado correctamente.');
            }

            $request->validate([
                'nombre' => 'required|string|max:255',
                'descripcion' => 'nullable|string|max:2000',
                'telefono' => 'nullable|string|max:50',
                'direccion' => 'nullable|string|max:255',
                'sitio_web' => 'nullable|string|max:255',
                'categorias' => 'nullable|string|max:120',
                'rfc' => 'nullable|string|max:20',
                'logo' => 'nullable|image|max:4096',
            ]);

            $dirlogo = null;
            if($request->hasFile('logo') && $request->file('logo')->path() != NULL){
                $FileUp = $request->file('logo');
                $fileName = 'Empresa/'.$user->id.'/'.time().'_'.$FileUp->getClientOriginalName();
                $FileUp->storeAs('public', $fileName);
                $dirlogo = '/storage/'.$fileName;
            }

            $esNueva = false;

            if(!$empresa){
                // Límite de empresas del plan gratuito
                if(! $user->hasFreeAccess()){
                    $limit = (int) config('konnection.free_plan.companies', 1);
                    $current = Empresa::where('id_user', $user->id)->count();

                    if($limit > 0 && $current >= $limit){
                        return redirect()->route('misempresas')->with(
                            'error',
                            "Tu plan gratuito permite {$limit} empresa. Certifícate con Profetit para registrar empresas ilimitadas sin coste."
                        );
                    }
                }

                $empresa = new Empresa();
                $empresa->id_user = $user->id;
                $esNueva = true;
            }

            $empresa->nombre = $request->input('nombre');
            $empresa->rfc = $request->input('rfc');
            $empresa->descripcion = $request->input('descripcion');
            $empresa->telefono = $request->input('telefono');
            $empresa->direccion = $request->input('direccion');
            $empresa->sitio_web = $request->input('sitio_web');
            $empresa->categorias = $request->input('categorias');

            if($dirlogo !== null){
                $empresa->logo = $dirlogo;
            }

            $empresa->save();

            return redirect()->route('misempresas')->with(
                'status',
                $esNueva ? 'Empresa registrada correctamente.' : 'Empresa actualizada correctamente.'
            );
        }

        return Inertia::render('Empresas/Empresas',[
             'empresa' => $empresa,
             'freeAccess' => $user->hasFreeAccess(),
        ]);
    }

    /**
     * Eliminar una empresa propia junto con sus publicaciones.
     */
    public function eliminarempresa(Request $request): JsonResponse
    {
        $empresa = Empresa::where('id', $request->input('id'))
            ->where('id_user', Auth::user()->id)
            ->first();

        if(!$empresa){
            return response()->json(['success' => false, 'message' => 'Empresa no encontrada'], 404);
        }

        $productos = Producto::where('id_empresa', $empresa->id)->get();

        foreach($productos as $producto){
            if(!empty($producto->imagen)){
                foreach(explode(',', $producto->imagen) as $imagen){
                    $this->deleteStoredFile($imagen);
                }
            }

            $producto->delete();
        }

        $this->deleteStoredFile($empresa->logo);
        $empresa->delete();

        return response()->json([
            'success' => true,
            'message' => 'Empresa y sus publicaciones fueron eliminadas.',
        ]);
    }

    /**
     * Ficha pública de una empresa.
     */
    public function empresa(Request $request){
        $empresa=Empresa::where('id',$request->id)->first();
        if(!$empresa){
            abort(404);
        }
        $productos=Producto::where('id_empresa',$request->id)->paginate(10);

        return inertia::render('Empresas/Empresa',[
            'empresa'=>$empresa,
            'productos'=>$productos

        ]);
    }

    /**
     * Borra un archivo del disco público a partir de su URL "/storage/...".
     */
    private function deleteStoredFile(?string $url): void
    {
        if(empty($url)){
            return;
        }

        $relative = preg_replace('#^/?storage/(app/public/)?#', '', $url);

        if($relative){
            Storage::disk('public')->delete($relative);
        }
    }

}
