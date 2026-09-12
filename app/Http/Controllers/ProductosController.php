<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Producto;
use App\Models\Empresa;


class ProductosController extends Controller
{public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->user = Auth::user();
            return $next($request);
        });
    }


    public function eliminaproducto(Request $request){

        // busca información del producto en la base de datos 
        $prod=Producto::where('id','=',$request->id)->first();
        if(isset($prod->imagen) and $prod->imagen!=NULL){ // comprueba si el producto tiene imagenes
        $imgsep=explode(",",$prod->imagen);// separa el string por comas de las imagenes en un array 
        
       
        foreach($imgsep as $dimg){ /// toma las imagenes y se eliminan con un foreach 
            if(!is_dir($dimg)){
            if(is_file(public_path($dimg))){
                unlink(public_path($dimg));
            }
        }
        }

        //// pendiente eliminacion de carpetas vacias 
            
    }
  
        Producto::where('id','=',$request->id)->delete();      /// se eliminma de la base el producto 
    
      return response()->json(Array('res'=>'Se va a eliminar el producto '.$request->id)); /// se regresa respuesta 
    }


    public function productos(Request $request){

        $query = Producto::with(['empresa' => function ($q) {
            $q->select('id', 'nombre', 'logo');
        }]);

        if($request->has('busqueda') && $request->busqueda != ''){
            $busqueda = $request->busqueda;
            $query->where(function($q) use ($busqueda){
                $q->where('nombre', 'LIKE', '%'.$busqueda.'%')
                  ->orWhere('descripcion', 'LIKE', '%'.$busqueda.'%')
                  ->orWhere('palabras_clave', 'LIKE', '%'.$busqueda.'%');
            });
        }

        if($request->has('categoria') && $request->categoria != ''){
            $query->where('categoria', '=', $request->categoria);
        }

        $productos=$query->orderBy('created_at', 'desc')->paginate(12)->withQueryString();

        return Inertia::render('Productos/ListaProductos',[
            'productos'=>$productos,
            'categorias' => \App\Models\Producto::select('categoria')->whereNotNull('categoria')->distinct()->orderBy('categoria')->pluck('categoria'),
            'filtros' => [
                'busqueda' => $request->busqueda ?? '',
                'categoria' => $request->categoria ?? '',
            ]
        ]);
        
    }

    public function misproductos(Request $request){
        $listaproductos=Producto::where('id_user','=',Auth::user()->id)->get();
        $dtEmpresa=Empresa::where('id_user','=',Auth::user()->id)->first();
        $datosUser=Auth::user();
        return Inertia::render('Productos/MisProductos',[
            'listaproductos'=>$listaproductos,
            'dtUser'=>$datosUser,
            'dtEmpresa'=>$dtEmpresa
        ]);
    }

    public function guardaproducto(Request $request){
        $dirImagen="";
        $mensajedata="";



       if(isset($request->action) and $request->action=="actualizar"){
        //actualiza producto
        $dirImagen=$request->imagen;
     

        if(isset($request->eliminaImagenes) and $request->eliminaImagenes!=NULL){

                $eliminaImg=json_decode($request->eliminaImagenes);
                
            forEach($eliminaImg as $dimg){
                /// unlink elimina archivo de sistema 
               
                $request->actualiImagen=str_replace($dimg.",","",$request->actualiImagen);
                        if(file_exists(public_path($dimg))){
                            unlink(public_path($dimg));
                        }
            }

           
        }   

        if(isset($request->archivo) and count($request->archivo)>0){
            $num=0;

           
            foreach($request->archivo as $file){
                $fileName = 'Empresa/'.Auth::user()->id.'/productos/'.$request->id.'/'.time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public', $fileName);
                $request->actualiImagen.="/storage/".$fileName.",";
            }
        }

        ////elimina imagnes y actualiza lista de imagnes 

       


        $payload=Array(
            "nombre"=>$request->nombre,
            "descripcion"=>$request->descripcion,
            "id_empresa"=>$request->id_empresa,
            "precio"=>$request->precio,
            "stock"=>$request->stock,
            'imagen'=>$request->actualiImagen,
            'categoria'=>$request->categoria ? $request->categoria : '',
            'palabras_clave'=>$request->palabras_clave ? $request->palabras_clave : ''
        );

        Producto::where('id','=',$request->id)->update($payload);

        $mensajedata="Producto Actualizado";

       }
       
       if(isset($request->action) and $request->action=="nuevo"){
        //crea producto 
        $prod=new Producto();
        $prod->id_user=Auth::user()->id;
        $prod->id_empresa=$request->id_empresa;
        $prod->nombre=$request->nombre;
        $prod->descripcion=$request->descripcion;
        $prod->precio=$request->precio;
        $prod->stock=$request->stock;
        $prod->categoria=$request->categoria ? $request->categoria : '';
        $prod->palabras_clave=$request->palabras_clave ? $request->palabras_clave : '';
        $prod->save();

        $idproducto=$prod->id;
        if(isset($request->archivo) and count($request->archivo)>0){

            $num=0;
            foreach($request->archivo as $file){
                $fileName = 'Empresa/'.Auth::user()->id.'/productos/'.$idproducto.'/'.time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public', $fileName);
                $dirImagen.="/storage/".$fileName.",";
            } 


        }

       producto::where('id','=',$prod->id)->update(Array('imagen'=>$dirImagen));
    
       $mensajedata="Nuevo producto agregado";
    }
        
        
        
        return response()->json(Array('res'=>$mensajedata));
    }

    public function cargaProductos(Request $request){

        $iduser=Auth::user()->id;
        $productos=Producto::where('id_user','=',$iduser)->get();
        return response()->json($productos);



    }

   
}