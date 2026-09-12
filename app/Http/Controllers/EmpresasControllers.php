<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Empresa;
use App\Models\Producto;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class EmpresasControllers extends Controller {

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
    public function formempresa(Request $request):Response{
        $dirlogo="";
        if($request->_token){  
            if($request->file('logo') AND $request->file('logo')->path()!=NULL){
                $FileUp=$request->file('logo');
                $fileName = 'Empresa/'.Auth::user()->id.'/'.time() . '_' . $FileUp->getClientOriginalName();
                $filePath = $FileUp->storeAs('public', $fileName);
                $dirlogo="/storage/".$fileName;
            }   
          
            if($request->input('logo_del') AND $request->input('logo_del')!=NULL){

             $file_path=storage_path('app').str_replace('storage','public',$request->input('logo_del'));
         
                if (File::exists($file_path)) {
                    File::delete($file_path);
                    $updated=Array(
                        "logo"=>''
                    );
                    Empresa::where('id_user',Auth::user()->id)->update($updated);
                } 
                
            }else{
             
            $check=Empresa::where('id_user',Auth::user()->id)->count();
            if($check==0){
            $addEmpresas=new Empresa();
            $addEmpresas->nombre=$request->input('nombre');
            $addEmpresas->rfc=$request->input('rfc');
            $addEmpresas->descripcion=$request->input('descripcion');
            $addEmpresas->telefono=$request->input('telefono');
            $addEmpresas->direccion=$request->input('direccion');
            $addEmpresas->logo=$dirlogo;
            $addEmpresas->sitio_web=$request->input('sitio_web');
            $addEmpresas->categorias=$request->input('categorias');
            $addEmpresas->id_user=Auth::user()->id;
            $addEmpresas->save();
            }else{
                $update=Array(
                    "nombre"=>$request->input('nombre'),
                    "rfc"=>$request->input('rfc'),
                    "descripcion"=>$request->input('descripcion'),
                    "telefono"=>$request->input('telefono'),
                    "direccion"=>$request->input('direccion'),
                    "categorias"=>$request->input('categorias'),
                    "sitio_web"=>$request->input('sitio_web')
                );
                if($dirlogo!=''){
                    $update["logo"]=$dirlogo;
                }
              
                Empresa::where('id_user',Auth::user()->id)->update($update);
            }    

        }
    }
        $userdata=Auth::user();
        $empresa=Empresa::where('id_user',Auth::user()->id)->first();
        return Inertia::render('Empresas/Empresas',[
             'empresa'=>$empresa,
        ]);

    }

    public function empresa(Request $request){
        //// toma datos de empresa 
        $empresa=Empresa::where('id',$request->id)->first();
        if(!$empresa){
            abort(404);
        }
        //// toma datos de producto 
        $productos=Producto::where('id_empresa',$request->id)->paginate(10);

        return inertia::render('Empresas/Empresa',[
            'empresa'=>$empresa,
            'productos'=>$productos
        
        ]);
    }

}