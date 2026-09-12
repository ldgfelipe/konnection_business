<script setup>
import EditEmpresa from '@/Components/empresas/EditEmpresas.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue'


defineProps({
   empresa:{
      type:Array
   }
})

</script>
<template>
     <Head title="Edita Empresa" />
     <AuthenticatedLayout>
     
      <EditEmpresa :empresa="empresa" ></EditEmpresa>


     </AuthenticatedLayout>
</template>
