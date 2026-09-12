<template>
   <form  id="formbusqueda" @submit.prevent="buscar">

    <v-row>
        <v-col cols="10">
         
            <v-text-field 
                v-model="busqueda"  name="busqueda"
                label="Ingrese el nombre de la Empresa"  
                hide-details
                ></v-text-field>
        </v-col>    
        <v-col cols="2">
            <v-btn type="submit" style="background-color:#000066; color:white;">Buscar</v-btn>
        </v-col>
    </v-row>
    
</form>
       

</template>
<script setup>

import { ref, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'

const busqueda = ref('');

function buscar() {
    router.get('/empresas', {
        busqueda: busqueda.value || '',
    }, { preserveState: true, replace: true });
}

onMounted(() => {
    var params = new URLSearchParams(window.location.search);
    busqueda.value = params.get('busqueda') || '';
})

</script>
