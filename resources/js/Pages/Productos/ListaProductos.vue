<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import { ref, watch } from 'vue'
import GridProductos from '@/Components/productos/GridProductos.vue'
import Pagination from '@/Components/productos/Pagination.vue'

const props = defineProps({
    productos: [Object, Array],
    categorias: Array,
    filtros: Object,
});

const busqueda = ref(props.filtros?.busqueda || '');
const categoria = ref(props.filtros?.categoria || '');

function buscar() {
    router.get('/productos', {
        busqueda: busqueda.value || '',
        categoria: categoria.value || '',
    }, { preserveState: true, replace: true });
}

function limpiar() {
    busqueda.value = '';
    categoria.value = '';
    router.get('/productos', {}, { preserveState: true, replace: true });
}

</script>
<template>
     <Head title="Lista de Productos" />
     <AuthenticatedLayout>
        <v-container>
            <v-card class="mb-4">
                <v-card-title style="background-color:#000066; color:white;">
                    Búsqueda de Productos y Servicios
                </v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="busqueda"
                                label="Nombre, descripción o palabras clave"
                                variant="outlined"
                                clearable
                                hide-details
                                @keyup.enter="buscar"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-select
                                v-model="categoria"
                                :items="categorias"
                                label="Categoría"
                                variant="outlined"
                                clearable
                                hide-details
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-btn style="background-color:#000066; color:white;" class="mr-2" @click="buscar">
                                <v-icon left>mdi-magnify</v-icon> Buscar
                            </v-btn>
                            <v-btn variant="outlined" class="mt-2 mt-md-0" @click="limpiar">Limpiar</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <v-row v-if="productos && productos.data && productos.data.length > 0">
                <v-col cols="12">
                    <GridProductos :productos="productos.data"></GridProductos>
                    <Pagination :links="productos.links"></Pagination>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols="12">
                    <v-alert type="info" text="No se encontraron productos con los filtros seleccionados."></v-alert>
                </v-col>
            </v-row>
        </v-container>
     </AuthenticatedLayout>
</template>
