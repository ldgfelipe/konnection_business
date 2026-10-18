<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'
import { VBtn, VCard, VCardTitle, VCardText, VDataTable, VTextField, VSelect, VIcon, VChip, VMenu, VDialog, VAlert, VProgressLinear, VTooltip, VAvatar } from 'vuetify/components'
import { useForm } from '@inertiajs/vue3'
import TrustBadge from '@/Components/TrustBadge.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const route = (name: string, params?: any) => (window as any).route(name, params)

// Props from Inertia
const props = defineProps<{
  users: {
    data: Array<{
      id: number
      name: string
      email: string
      profetit_verified: boolean
      profetit_certificate_type: string | null
      profetit_code: string | null
      profile_status: string
      activation_token: string | null
      activation_token_expires_at: string | null
      profetit_certificates: Array<{
        id: number
        certificate_code: string
        certificate_type: string
        status: string
        issue_date: string
      }>
    }>
    current_page: number
    last_page: number
    per_page: number
    total: number
    from: number
    to: number
    links: Array<{ url: string | null; label: string; active: boolean }>
  }
  filters: { status?: string; search?: string }
  statusOptions: Record<string, string>
}>()

const search = ref(props.filters.search || '')
const statusFilter = ref(props.filters.status || '')
const loading = ref(false)

const items = computed(() => props.users.data.map(user => ({
  ...user,
  certificates: user.profitit_certificates || [],
  activeCertificate: user.profitit_certificates?.find(c => c.status === 'active'),
})))

const headers = [
  { title: 'Usuario', key: 'name', sortable: false },
  { title: 'Email', key: 'email', sortable: false },
  { title: 'Certificado', key: 'certificate', sortable: false },
  { title: 'Estado', key: 'profile_status', sortable: false },
  { title: 'Acciones', key: 'actions', sortable: false, width: '180px' },
]

const statusColors: Record<string, string> = {
  pending_activation: 'warning',
  active: 'success',
  suspended: 'error',
}

const statusLabels: Record<string, string> = {
  pending_activation: 'Pendiente de Activación',
  active: 'Activo',
  suspended: 'Suspendido',
}

const handleSearch = () => {
  router.get(route('admin.profetit-users.index'), {
    search: search.value,
    status: statusFilter.value,
  }, {
    preserveScroll: true,
    replace: true,
  })
}

const handleResendActivation = (user: typeof items.value[0]) => {
  if (!confirm(`¿Reenviar correo de activación a ${user.email}?`)) return

  loading.value = true
  router.post(route('admin.profetit-users.resend-activation', user.id), {
    onSuccess: () => {
      loading.value = false
      // Refresh
      router.get(route('admin.profetit-users.index'), {
        search: search.value,
        status: statusFilter.value,
      }, { preserveScroll: true })
    },
    onError: () => {
      loading.value = false
    },
  })
}

const handleSync = (user: typeof items.value[0], action: 'sync' | 'revoke') => {
  const actionLabel = action === 'sync' ? 'sincronizar' : 'revocar'
  if (!confirm(`¿${actionLabel.charAt(0).toUpperCase() + actionLabel.slice(1)} certificado de ${user.email}?`)) return

  loading.value = true
  router.post(route('admin.profetit-users.sync', user.id), {
    data: { action },
    onSuccess: () => {
      loading.value = false
      router.get(route('admin.profetit-users.index'), {
        search: search.value,
        status: statusFilter.value,
      }, { preserveScroll: true })
    },
    onError: () => {
      loading.value = false
    },
  })
}
</script>

<template>
  <AdminLayout
    title="Usuarios Certificados Profetit"
    subtitle="Gestión de usuarios con certificación B2B verificada"
    :breadcrumbs="[
      { title: 'Usuarios Certificados', route: route('admin.profetit-users.index') }
    ]"
  >
    <div class="pa-4">
    <div class="d-flex justify-space-between align-center mb-6">
      <div>
        <h1 class="display-medium mb-1">Usuarios Certificados Profetit</h1>
        <p class="text-secondary">Gestión de usuarios con certificación B2B verificada</p>
      </div>
    </div>

    <!-- Filters -->
    <VCard variant="tonal" class="mb-6">
      <VCardText>
        <div class="d-flex flex-wrap gap-4 align-end">
          <VTextField
            v-model="search"
            :label="'Buscar usuario/email/código'"
            variant="outlined"
            density="comfortable"
            class="flex-grow-1"
            min-width="250"
            @keyup.enter="handleSearch"
          />
          <VSelect
            v-model="statusFilter"
            :items="Object.entries(statusOptions).map(([value, label]) => ({ title: label, value }))"
            :label="'Filtrar por Estado'"
            variant="outlined"
            density="comfortable"
            min-width="200"
            @update:model-value="handleSearch"
          />
          <VBtn
            color="primary"
            @click="handleSearch"
            :disabled="loading"
            :loading="loading"
          >
            <VIcon start>mdi-magnify</VIcon>
            Filtrar
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <!-- Data Table -->
    <VCard variant="tonal">
      <VDataTable
        :headers="headers"
        :items="items"
        :page="users.current_page"
        :items-per-page="users.per_page"
        :server-items-length="users.total"
        :loading="loading"
        :footer-props="{
          'items-per-page-options': [10, 20, 50, 100],
          'show-current-page': true,
          'show-first-last-page': true,
        }"
        :options="{
          page: users.current_page,
          itemsPerPage: users.per_page,
          sortBy: [],
          sortDesc: [],
        }"
      >
        <template #[`item.name`]="{ item }">
          <div>
            <div class="font-weight-medium">{{ item.name }}</div>
            <div class="text-caption text-secondary">ID: {{ item.id }}</div>
          </div>
        </template>

        <template #[`item.email`]="{ item }">
          <div>{{ item.email }}</div>
        </template>

        <template #[`item.certificate`]="{ item }">
          <div v-if="item.activeCertificate">
            <TrustBadge
              :badge="{
                type: item.activeCertificate.certificate_type,
                label: item.activeCertificate.certificate_type === 'titulo_oficial' ? 'Título Oficial' : 'Testimonio de Estudios',
                icon: item.activeCertificate.certificate_type === 'titulo_oficial' ? 'mdi-certificate' : 'mdi-file-document-check',
                color: item.activeCertificate.certificate_type === 'titulo_oficial' ? 'primary' : 'info',
                code: item.activeCertificate.certificate_code,
              }"
              size="small"
            />
            <div class="text-caption text-secondary mt-1">
              Código: {{ item.activeCertificate.certificate_code }}
            </div>
            <div class="text-caption text-secondary">
              Emitido: {{ new Date(item.activeCertificate.issue_date).toLocaleDateString('es-MX') }}
            </div>
          </div>
          <VChip v-else size="x-small" variant="outlined" color="surface-variant">
            Sin certificado activo
          </VChip>
        </template>

        <template #[`item.profile_status`]="{ item }">
          <VChip
            :color="statusColors[item.profile_status] || 'default'"
            size="small"
            variant="tonal"
          >
            {{ statusLabels[item.profile_status] || item.profile_status }}
          </VChip>
        </template>

        <template #[`item.actions`]="{ item }">
          <VMenu>
            <template #activator="{ props: menuProps }">
              <VBtn
                v-bind="menuProps"
                variant="tonal"
                size="small"
                color="primary"
              >
                <VIcon>mdi-dots-vertical</VIcon>
              </VBtn>
            </template>
            <VCard class="pa-2" min-width="200">
              <VBtn
                block
                variant="text"
                color="primary"
                @click="handleResendActivation(item)"
                :disabled="item.profile_status !== 'pending_activation' || loading"
              >
                <VIcon start>mdi-email-outline</VIcon>
                Reenviar Activación
              </VBtn>
              <VBtn
                block
                variant="text"
                color="info"
                @click="handleSync(item, 'sync')"
                :disabled="loading"
              >
                <VIcon start>mdi-sync</VIcon>
                Sincronizar
              </VBtn>
              <VBtn
                block
                variant="text"
                color="error"
                @click="handleSync(item, 'revoke')"
                :disabled="item.profile_status !== 'active' || loading"
              >
                <VIcon start>mdi-shield-off</VIcon>
                Revocar Certificado
              </VBtn>
            </VCard>
          </VMenu>
        </template>
      </VDataTable>

      <template #no-data>
        <div class="text-center py-12">
          <VIcon size="x-large" color="secondary">mdi-account-search-outline</VIcon>
          <p class="mt-4 text-secondary">No se encontraron usuarios</p>
        </div>
      </template>
    </VCard>

    <!-- Pagination Info -->
    <div class="d-flex justify-space-between align-center mt-4 text-caption text-secondary">
      <span>Mostrando {{ users.from }} - {{ users.to }} de {{ users.total }} usuarios</span>
    </div>
  </div>
</AdminLayout>
</template>