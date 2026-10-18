<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ListaProductos from '@/Components/productos/ListaProductos.vue';
import { Head } from '@inertiajs/vue3';


defineProps({
   listaproductos:{ type:Array, default:()=>[] },
   dtUser:Object,
   dtEmpresa:{ type:Object, default:null },
   dtEmpresas:{ type:Array, default:()=>[] }
});

</script>
<template>
     <Head title="Lista de Productos" />
     <AuthenticatedLayout>
     <v-container>

      <ListaProductos :dtEmpresa="dtEmpresa" :dtEmpresas="dtEmpresas"></ListaProductos>
    </v-container>



     </AuthenticatedLayout>
</template>
