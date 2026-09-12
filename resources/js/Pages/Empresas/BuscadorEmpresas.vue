<script>
import BuscadorEmpresas from '@/Components/empresas/BuscadorEmpresas.vue';
import ListaEmpresas from '@/Components/empresas/ListadoEmpresas.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Categorizacion from '@/Components/elementos/categorizacion.vue';
import { Head } from '@inertiajs/vue3';



//defineProps({ empresas: Array });

export default {
     data(){
          return {
               catselect:''
          }
     },
     props:{
          empresas:Array
     },
     components:{
          BuscadorEmpresas,
          ListaEmpresas,
          AuthenticatedLayout,
          Categorizacion,
          Head
     },
     methods:{
          cargaCategoria(evt){
               window.location.href=window.location.origin+'/empresas/'+evt
          }
     }
}

</script>
<template>
     <Head title="Edita Empresa" />
     <AuthenticatedLayout>
     
   
        <BuscadorEmpresas  />
        <Categorizacion :label="'Seleccione la categoría de la empresa'"  @catselect="cargaCategoria"></Categorizacion>
        <br />
       Categoria: {{ catselect }}
      
            <ListaEmpresas :empresas="empresas"  :catselect="catselect"  />


     </AuthenticatedLayout>
</template>