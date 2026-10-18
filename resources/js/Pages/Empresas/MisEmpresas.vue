<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import axios from 'axios';
import { ref } from 'vue';

const props = defineProps({
    empresas: { type: Array, default: () => [] },
    freeAccess: { type: Boolean, default: false },
    limit: { type: Number, default: 0 },
    canCreate: { type: Boolean, default: false },
});

const deleting = ref(false);

const eliminar = (empresa) => {
    if (!confirm(`¿Eliminar "${empresa.nombre}" y todas sus publicaciones?`)) {
        return;
    }

    deleting.value = true;

    axios.post(route('empresas.eliminar'), { id: empresa.id })
        .then(() => {
            router.reload({ only: ['empresas'] });
        })
        .catch(() => {
            alert('No se pudo eliminar la empresa.');
        })
        .finally(() => {
            deleting.value = false;
        });
};
</script>

<template>
    <Head title="Mis Empresas" />
    <AuthenticatedLayout>
        <v-container>
            <v-alert
                v-if="$page.props.flash?.status"
                type="success"
                variant="tonal"
                class="mb-4"
            >{{ $page.props.flash.status }}</v-alert>

            <v-alert
                v-if="$page.props.flash?.error"
                type="warning"
                variant="tonal"
                class="mb-4"
            >{{ $page.props.flash.error }}</v-alert>

            <v-card>
                <v-card-title class="d-flex align-center justify-space-between flex-wrap ga-2">
                    <span>Mis Empresas y Servicios</span>
                    <v-btn
                        v-if="canCreate"
                        :href="route('perfilEmpresas')"
                        style="background-color:#000066; color:#fff;"
                    >
                        <v-icon start>mdi-plus</v-icon> Nueva Empresa / Servicio
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    <v-alert
                        v-if="freeAccess"
                        type="success"
                        variant="tonal"
                        density="compact"
                        class="mb-4"
                    >
                        Profesional certificado por Profetit: puedes registrar empresas y servicios
                        <strong>ilimitados, gratis y sin restricciones</strong>.
                    </v-alert>

                    <v-alert
                        v-else
                        type="info"
                        variant="tonal"
                        density="compact"
                        class="mb-4"
                    >
                        Plan gratuito: hasta {{ limit }} empresa. Certifícate con Profetit para
                        registrar empresas y servicios ilimitados sin coste.
                    </v-alert>

                    <v-row v-if="empresas.length">
                        <v-col cols="12" sm="6" md="4" v-for="e in empresas" :key="e.id">
                            <v-card variant="outlined" class="h-100">
                                <v-img
                                    v-if="e.logo"
                                    :src="$assetUrl(e.logo)"
                                    height="150"
                                    cover
                                />

                                <v-card-title class="text-wrap">{{ e.nombre }}</v-card-title>

                                <v-card-text>
                                    <v-chip
                                        v-if="e.categorias"
                                        color="primary"
                                        size="small"
                                        class="mb-2"
                                    >{{ e.categorias }}</v-chip>

                                    <p class="text-body-2">{{ e.descripcion }}</p>

                                    <small class="text-medium-emphasis">
                                        {{ e.productos_count || 0 }} publicación(es)
                                    </small>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn size="small" :href="'/empresa/' + e.id">Ver</v-btn>
                                    <v-btn
                                        size="small"
                                        style="background-color:#000066; color:#fff;"
                                        :href="route('perfilEmpresas') + '?id=' + e.id"
                                    >Editar</v-btn>
                                    <v-spacer />
                                    <v-btn
                                        size="small"
                                        color="error"
                                        variant="text"
                                        :disabled="deleting"
                                        @click="eliminar(e)"
                                    >Eliminar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-alert v-else type="info" variant="tonal">
                        Aún no has registrado ninguna empresa o servicio.
                        <a :href="route('perfilEmpresas')" class="font-weight-bold">Registrar ahora</a>
                    </v-alert>
                </v-card-text>
            </v-card>
        </v-container>
    </AuthenticatedLayout>
</template>
