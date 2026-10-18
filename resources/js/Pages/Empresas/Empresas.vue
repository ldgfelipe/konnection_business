<script setup>
import EditEmpresa from '@/Components/empresas/EditEmpresas.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';


defineProps({
   empresa:{
      type:Object,
      default:null
   },
   freeAccess:{
      type:Boolean,
      default:false
   }
})

</script>
<template>
     <Head title="Mi Empresa" />
     <AuthenticatedLayout>
     <v-container>

      <EditEmpresa :empresa="empresa" :free-access="freeAccess"></EditEmpresa>


     </v-container>
     </AuthenticatedLayout>
</template>
