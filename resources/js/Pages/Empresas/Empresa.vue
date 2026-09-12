<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue'
import GridProductos from '@/Components/productos/GridProductos.vue'
import Pagination from '@/Components/productos/Pagination.vue'

defineProps({
   empresa:{
      type:Array
   },
   productos:{
    type:Array
   }
})

</script>
<template>
     <Head :title="empresa.nombre" />
     <AuthenticatedLayout>
        <v-container>
            <v-card>
                <v-card-title style="background-color:blue; color:white;">{{ empresa.nombre }}</v-card-title>
                <v-card-text>

                    <v-row>
                        <v-col cols="12" md="5">
                            <v-img v-if="empresa.logo" :src="$assetUrl(empresa.logo)" style="width:100%; max-width:100%;" cover></v-img>
                            <v-img v-else height="250" color="grey-lighten-2" cover>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-icon size="large" color="grey">mdi-domain</v-icon>
                                </div>
                            </v-img>
                        </v-col>
                        <v-col cols="12" md="7" style="padding:2%;">
                                <v-card>
                                    <v-card-title>Descripción</v-card-title>
                                    <v-card-text>
                                        {{ empresa.descripcion }}
                                    </v-card-text>

                                    
                                    <v-card-title>Dirección</v-card-title>
                                    <v-card-text>
                                        {{ empresa.direccion }}
                                    </v-card-text>

                                    
                                    <v-card-title>Teléfono</v-card-title>
                                    <v-card-text>
                                        {{ empresa.telefono }}
                                    </v-card-text>

                                    
                                    <v-card-title>Sitio Web</v-card-title>
                                    <v-card-text>
                                        {{ empresa.sitio_web }}
                                    </v-card-text>


                                </v-card>
                        </v-col>
                        <v-col cols="12" >

                            <v-card>
                                <v-card-title style="background-color:blue; color:white">
                                   <h3> Productos</h3>
                                </v-card-title>
                                <v-card-text>
                          

                                        <GridProductos :productos="productos.data" ></GridProductos>
                                        <Pagination :links="productos.links"></Pagination>

                                </v-card-text>
                            </v-card>

                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
    </v-container>

     </AuthenticatedLayout>
</template>
