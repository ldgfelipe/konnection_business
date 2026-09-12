
<template>
<v-card max-width="500" class="ma-auto">
    <v-card-title class="text-center">
        Datos de Empresa
    </v-card-title>
    <v-card-text>
<img v-if="empr.logo" :src="$assetUrl(empr.logo)" /> 
<form method="POST">
    <v-text-field type="hidden" name="logo_del" :value="empr.logo"></v-text-field>
    <v-text-field type="hidden" name="_token" :value="this.$page.props.csrf_token"></v-text-field>
    <v-btn type="submit" v-if="empr.logo" style="color:#fff; background-color:red;">Eliminar Imagen</v-btn>
</form>
            <form method="POST" id="guardaEmpresa" enctype="multipart/form-data">
                    <v-file-input outlined  name="logo" label="Sube tu logo" v-if="!empr.logo" ></v-file-input>
                    <v-text-field outlined required name="nombre" label="Nombre de Empresa" v-model="empr.nombre" ></v-text-field>
                    <v-text-field outlined 
                            :rules="[rules.required, rules.min]"
                            hint="Maximo de caracteres 13" 
                            required name="rfc"  
                            counter
                            label="RFC" 
                            v-model="empr.rfc" 
                    ></v-text-field>
                    <v-text-field outlined required name="descripcion" label="Descripción de la Empresa" v-model="empr.descripcion" ></v-text-field>
                    <v-text-field outlined required name="telefono" label="Teléfono" v-model="empr.telefono" ></v-text-field>
                    <v-text-field outlined required name="direccion" label="Dirección" v-model="empr.direccion" ></v-text-field>
                    <v-text-field outlined name="sitio_web" label="Sitio Web" v-model="empr.sitio_web" ></v-text-field>
                    <v-text-field type="hidden" name="_token" :value="this.$page.props.csrf_token"></v-text-field>
                   Categoria de la empresa: <b>{{ empr.categorias }}</b>
                    <v-select :items="categorias"  name="categorias" v-model="empr.categorias"></v-select>
                <v-btn type="submit"  style="background-color:#000066; color:white;" >Guardar</v-btn>
            </form>
         
    </v-card-text>
</v-card>
</template>
<script>

import Categorias from '../../schemas/categorias';

export default{
    data(){
        return{
            empr:{
                nombre:'',
                rfc:'',
                descripcion:'',
                telefono:'',
                direccion:'',
                sitio_web:'',
                logo:'',
                categorias:''
                
            },
            categorias:Categorias,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
        },
        }
    },
    props:{
        empresa:{
            type:Object
        }
    },
    mounted(){
        if(this.empresa){
            this.empr.nombre=this.empresa.nombre;
            this.empr.rfc=this.empresa.rfc;
            this.empr.descripcion=this.empresa.descripcion;
            this.empr.telefono=this.empresa.telefono;
            this.empr.direccion=this.empresa.direccion;
            this.empr.sitio_web=this.empresa.sitio_web;
            this.empr.logo=this.empresa.logo;
            this.empr.categorias=this.empresa.categorias;
        }
    },
   
}
            

       




</script>