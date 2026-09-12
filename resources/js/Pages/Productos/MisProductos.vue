<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ListaProductos from '@/Components/productos/ListaProductos.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue'


defineProps({ empresas: Array, listaproductos:Array,dtUser:Array,dtEmpresa:Array  });

</script>
<template>
     <Head title="Lista de Productos" />
     <AuthenticatedLayout>
     <v-container>
        
      <ListaProductos :dtEmpresa="dtEmpresa"></ListaProductos>
    </v-container>
      


     </AuthenticatedLayout>
</template>