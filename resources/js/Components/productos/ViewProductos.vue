<template>
    
    <v-dialog v-model="props.state" fullscreen>
        <v-card>
            <v-card-title style="background-color:blue; color:white;" >
                <b>Titulo de Productos</b> <v-btn @click="$emit('cerrarventana',false)" ><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(key,index) in imagenes"  :key="index" v-if="key">
                                <v-img :src="$assetUrl(key)" />
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                       <h2 class="text-h2"> {{ props.producto.nombre }}</h2>
                       <hr />
                       <p> {{ props.producto.descripcion }}</p>
                       <hr />
                       <h4 class="text-h4">Precio: ${{ props.producto.precio }}</h4>
                       <hr />
                       <h5 class="text-h5">Stock: {{ props.producto.stock }}</h5>
                    </v-col>
                </v-row>
          
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script setup>
import {ref, defineProps,computed} from 'vue';

const props = defineProps(['state','producto']);
const imagenes = computed(()=>{
    if(!props.producto || !props.producto.imagen) return [];
    return props.producto.imagen.split(',')
})


</script>