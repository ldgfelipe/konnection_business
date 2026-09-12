<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

defineProps({ 
    empresas: Array,
    publicidades: Array,
    promociones: Array,
    productos: Array
});

</script>

<template>
    <Head title="Dashboard" />
   
    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-h5 font-weight-bold">Konnection Business</h2>
        </template>

        <v-container fluid class="pa-0">
            <!-- Carrusel de Publicidades -->
            <v-row v-if="publicidades && publicidades.length > 0">
                <v-col cols="12">
                    <v-carousel hide-delimiter-background height="300" cycle>
                        <v-carousel-item
                            v-for="(pub, index) in publicidades"
                            :key="index"
                            :src="$assetUrl(pub.imagen)"
                            cover
                        >
                            <div class="d-flex fill-height align-end justify-center bg-gradient-overlay pb-4">
                                <v-card class="mb-4 bg-transparent" max-width="800" flat>
                                    <v-card-title class="text-h5 text-white font-weight-bold text-center">
                                        {{ pub.titulo }}
                                    </v-card-title>
                                    <v-card-text v-if="pub.contenido" class="text-center text-white">
                                        {{ pub.contenido }}
                                    </v-card-text>
                                    <v-card-actions v-if="pub.link" class="justify-center">
                                        <v-btn color="white" variant="flat" :href="pub.link" target="_blank">
                                            Ver más
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>

            <!-- Promociones del Mes -->
            <v-row v-if="promociones && promociones.length > 0" class="mt-4">
                <v-col cols="12">
                    <v-card class="mx-4" flat>
                        <v-card-title class="text-h5 font-weight-bold d-flex align-center">
                            <v-icon color="warning" class="mr-2">mdi-tag-off</v-icon>
                            Promociones del Mes
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col v-for="(promo, index) in promociones" :key="index" cols="12" sm="6" md="4">
                                    <v-card class="elevation-2" variant="outlined">
                                        <v-card-title>{{ promo.titulo }}</v-card-title>
                                        <v-card-text>
                                            <p>{{ promo.descripcion }}</p>
                                            <v-chip color="success" class="mt-2">
                                                {{ promo.descuento }}% DESC
                                            </v-chip>
                                            <p class="text-caption mt-2">
                                                Válido: {{ promo.fecha_inicio }} - {{ promo.fecha_fin }}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Productos Recientes -->
            <v-row v-if="productos && productos.length > 0" class="mt-4">
                <v-col cols="12">
                    <v-card class="mx-4 mb-4" flat>
                        <v-card-title class="text-h5 font-weight-bold d-flex align-center">
                            <v-icon color="primary" class="mr-2">mdi-store</v-icon>
                            Productos Recientes
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col v-for="(producto, index) in productos" :key="index" cols="12" sm="6" md="3">
                                    <v-card class="elevation-2" variant="outlined">
                                        <v-img
                                            v-if="producto.imagen"
                                            :src="$assetUrl(producto.imagen.split(',')[0])"
                                            height="150"
                                            cover
                                        >
                                            <template #placeholder>
                                                <div class="d-flex align-center justify-center fill-height">
                                                    <v-icon size="large" color="grey">mdi-image</v-icon>
                                                </div>
                                            </template>
                                        </v-img>
                                        <v-img v-else height="150" color="grey-lighten-2" cover>
                                            <div class="d-flex align-center justify-center fill-height">
                                                <v-icon size="large" color="grey">mdi-image</v-icon>
                                            </div>
                                        </v-img>
                                        <v-card-title class="text-body-1 font-weight-bold">
                                            {{ producto.nombre }}
                                        </v-card-title>
                                        <v-card-text>
                                            <div class="text-h6 text-primary font-weight-bold">
                                                ${{ producto.precio }}
                                            </div>
                                            <div v-if="producto.empresa" class="text-caption text-grey mt-1">
                                                {{ producto.empresa.nombre }}
                                            </div>
                                            <div v-if="producto.categoria" class="mt-2">
                                                <v-chip size="small" color="blue-grey" variant="tonal">
                                                    {{ producto.categoria }}
                                                </v-chip>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Empresas -->
            <v-row class="mt-4">
                <v-col cols="12">
                    <v-card class="mx-4 mb-4" flat>
                        <v-card-title class="text-h5 font-weight-bold d-flex align-center">
                            <v-icon color="secondary" class="mr-2">mdi-domain</v-icon>
                            Empresas
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col v-for="(empresa, index) in empresas" :key="index" cols="12" sm="6" md="4">
                                    <v-card class="elevation-2" variant="outlined" :to="`/empresa/${empresa.id}`">
                                        <v-img
                                            v-if="empresa.logo"
                                            :src="$assetUrl(empresa.logo)"
                                            height="100"
                                            cover
                                            class="bg-grey-lighten-3"
                                        >
                                            <template #placeholder>
                                                <div class="d-flex align-center justify-center fill-height">
                                                    <v-icon size="large" color="grey">mdi-domain</v-icon>
                                                </div>
                                            </template>
                                        </v-img>
                                        <v-img v-else height="100" color="grey-lighten-2" cover>
                                            <div class="d-flex align-center justify-center fill-height">
                                                <v-icon size="large" color="grey">mdi-domain</v-icon>
                                            </div>
                                        </v-img>
                                        <v-card-title class="text-body-1 font-weight-bold">
                                            {{ empresa.nombre }}
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="text-truncate">{{ empresa.descripcion }}</p>
                                            <div v-if="empresa.telefono" class="text-caption">
                                                <v-icon size="small">mdi-phone</v-icon> {{ empresa.telefono }}
                                            </div>
                                            <div v-if="empresa.categorias" class="mt-2">
                                                <v-chip size="small" color="primary" variant="tonal">
                                                    {{ empresa.categorias }}
                                                </v-chip>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </AuthenticatedLayout>
</template>

<style scoped>
.bg-gradient-overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
}
</style>