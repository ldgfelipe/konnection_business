<script setup lang="ts">
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import { VBtn, VCard, VCardTitle, VCardText, VCardSubtitle, VDivider, VIcon, VChip, VAvatar, VList, VListItem, VListItemTitle, VListItemSubtitle, VTooltip } from 'vuetify/components'
import { useForm } from '@inertiajs/vue3'
import TrustBadge from '@/Components/TrustBadge.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const route = (name: string, params?: any) => (window as any).route(name, params)

const props = defineProps<{
  user: {
    id: number
    name: string
    email: string
    profetit_verified: boolean
    profetit_certificate_type: string | null
    profetit_code: string | null
    profile_status: string
    activation_token: string | null
    activation_token_expires_at: string | null
    created_at: string
    email_verified_at: string | null
  }
  certificates: Array<{
    id: number
    certificate_code: string
    certificate_type: string
    status: string
    issue_date: string
    revoked_at: string | null
    expires_at: string | null
    raw_payload: Record<string, unknown> | null
  }>
}>()

const loading = ref(false)

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

const certificateStatusColors: Record<string, string> = {
  active: 'success',
  revoked: 'error',
  expired: 'warning',
}

const certificateStatusLabels: Record<string, string> = {
  active: 'Activo',
  revoked: 'Revocado',
  expired: 'Expirado',
}

const handleResendActivation = () => {
  if (!confirm(`¿Reenviar correo de activación a ${props.user.email}?`)) return

  loading.value = true
  router.post(route('admin.profetit-users.resend-activation', props.user.id), {
    onSuccess: () => {
      loading.value = false
    },
    onError: () => {
      loading.value = false
    },
  })
}

const handleRevoke = () => {
  if (!confirm('¿Revocar certificado activo? Esta acción no se puede deshacer.')) return

  loading.value = true
  router.post(route('admin.profetit-users.sync', props.user.id), {
    data: { action: 'revoke' },
    onSuccess: () => {
      loading.value = false
      router.back()
    },
    onError: () => {
      loading.value = false
    },
  })
}

const formatDate = (dateString: string | null) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const formatDateTime = (dateString: string | null) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <AdminLayout
    :title="user.name"
    :subtitle="user.email"
    :breadcrumbs="[
      { title: 'Usuarios Certificados', route: route('admin.profetit-users.index') },
      { title: user.name }
    ]"
  >
    <template #actions>
      <VBtn
        v-if="user.profile_status === 'active'"
        variant="outlined"
        color="error"
        @click="handleRevoke"
        :disabled="loading"
      >
        <VIcon start>mdi-shield-off</VIcon>
        Revocar Certificado
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click="handleResendActivation"
        :disabled="user.profile_status !== 'pending_activation' || loading"
        :loading="loading"
      >
        <VIcon start>mdi-email-outline</VIcon>
        Reenviar Activación
      </VBtn>
    </template>

    <div class="d-flex gap-6">
      <!-- User Info Card -->
      <VCard variant="tonal" class="flex-grow-1" min-width="350">
        <VCardTitle>Información del Usuario</VCardTitle>
        <VCardText>
          <div class="d-flex align-center gap-4 mb-4">
            <VAvatar size="80" color="primary" variant="tonal">
              <VIcon size="x-large">mdi-account</VIcon>
            </VAvatar>
            <div>
              <div class="text-h6 mb-1">{{ user.name }}</div>
              <div class="text-secondary">{{ user.email }}</div>
              <TrustBadge
                v-if="user.profitit_verified"
                :badge="{
                  type: user.profetit_certificate_type,
                  label: user.profetit_certificate_type === 'titulo_oficial' ? 'Título Oficial' : 'Testimonio de Estudios',
                  icon: user.profetit_certificate_type === 'titulo_oficial' ? 'mdi-certificate' : 'mdi-file-document-check',
                  color: user.profetit_certificate_type === 'titulo_oficial' ? 'primary' : 'info',
                  code: user.profetit_code,
                }"
              />
            </div>
          </div>

          <VDivider class="my-4" />

          <VList>
            <VListItem>
              <VListItemTitle>Estado del Perfil</VListItemTitle>
              <VListItemSubtitle>
                <VChip
                  :color="statusColors[user.profile_status] || 'default'"
                  size="small"
                  variant="tonal"
                >
                  {{ statusLabels[user.profile_status] || user.profile_status }}
                </VChip>
              </VListItemSubtitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>Verificación Profetit</VListItemTitle>
              <VListItemSubtitle>
                <VChip
                  :color="user.profetit_verified ? 'success' : 'error'"
                  size="small"
                  variant="tonal"
                >
                  {{ user.profetit_verified ? 'Verificado' : 'No verificado' }}
                </VChip>
              </VListItemSubtitle>
            </VListItem>

            <VListItem v-if="user.profetit_certificate_type">
              <VListItemTitle>Tipo de Certificado</VListItemTitle>
              <VListItemSubtitle>
                <TrustBadge
                  :badge="{
                    type: user.profetit_certificate_type,
                    label: user.profetit_certificate_type === 'titulo_oficial' ? 'Título Oficial' : 'Testimonio de Estudios',
                    icon: user.profetit_certificate_type === 'titulo_oficial' ? 'mdi-certificate' : 'mdi-file-document-check',
                    color: user.profetit_certificate_type === 'titulo_oficial' ? 'primary' : 'info',
                    code: user.profetit_code,
                  }"
                  size="small"
                />
              </VListItemSubtitle>
            </VListItem>

            <VListItem v-if="user.profetit_code">
              <VListItemTitle>Código Profetit</VListItemTitle>
              <VListItemSubtitle class="font-monospace">{{ user.profetit_code }}</VListItemSubtitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>Fecha de Registro</VListItemTitle>
              <VListItemSubtitle>{{ formatDateTime(user.created_at) }}</VListItemSubtitle>
            </VListItem>

            <VListItem v-if="user.email_verified_at">
              <VListItemTitle>Email Verificado</VListItemTitle>
              <VListItemSubtitle>{{ formatDateTime(user.email_verified_at) }}</VListItemSubtitle>
            </VListItem>

            <VListItem v-if="user.activation_token_expires_at">
              <VListItemTitle>Token Expira</VListItemTitle>
              <VListItemSubtitle>{{ formatDateTime(user.activation_token_expires_at) }}</VListItemSubtitle>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>

      <!-- Certificates Card -->
      <VCard variant="tonal" class="flex-grow-1" min-width="400">
        <VCardTitle class="d-flex justify-space-between align-center">
          <span>Certificados Profetit</span>
          <VChip size="x-small" :color="certificates.length > 0 ? 'primary' : 'surface-variant'">
            {{ certificates.length }} certificado(s)
          </VChip>
        </VCardTitle>
        <VCardText>
          <div v-if="certificates.length === 0" class="text-center py-12">
            <VIcon size="x-large" color="secondary">mdi-certificate-outline</VIcon>
            <p class="mt-4 text-secondary">No hay certificados registrados</p>
          </div>

          <div v-else class="d-flex flex-column gap-4">
            <VCard
              v-for="cert in certificates"
              :key="cert.id"
              variant="outlined"
            >
              <VCardText>
                <div class="d-flex justify-space-between align-start">
                  <div>
                    <TrustBadge
                      :badge="{
                        type: cert.certificate_type,
                        label: cert.certificate_type === 'titulo_oficial' ? 'Título Oficial' : 'Testimonio de Estudios',
                        icon: cert.certificate_type === 'titulo_oficial' ? 'mdi-certificate' : 'mdi-file-document-check',
                        color: cert.certificate_type === 'titulo_oficial' ? 'primary' : 'info',
                        code: cert.certificate_code,
                      }"
                    />
                  </div>
                  <VChip
                    :color="certificateStatusColors[cert.status] || 'default'"
                    size="small"
                    variant="tonal"
                  >
                    {{ certificateStatusLabels[cert.status] || cert.status }}
                  </VChip>
                </div>

                <VDivider class="my-3" />

                <div class="d-flex flex-wrap gap-6 text-caption">
                  <div>
                    <span class="text-secondary">Código:</span>
                    <div class="font-monospace">{{ cert.certificate_code }}</div>
                  </div>
                  <div>
                    <span class="text-secondary">Fecha de Emisión:</span>
                    <div>{{ formatDate(cert.issue_date) }}</div>
                  </div>
                  <div v-if="cert.revoked_at">
                    <span class="text-secondary">Revocado:</span>
                    <div>{{ formatDateTime(cert.revoked_at) }}</div>
                  </div>
                  <div v-if="cert.expires_at">
                    <span class="text-secondary">Expira:</span>
                    <div>{{ formatDateTime(cert.expires_at) }}</div>
                  </div>
                </div>

                <VTooltip v-if="cert.raw_payload" location="top" content="Ver payload completo">
                  <template #activator="{ props: tooltipProps }">
                    <VBtn
                      v-bind="tooltipProps"
                      variant="text"
                      size="small"
                      color="secondary"
                    >
                      <VIcon start>mdi-code-json</VIcon>
                      Ver Auditoría
                    </VBtn>
                  </template>
                </VTooltip>
              </VCardText>
            </VCard>
          </div>
        </VCardText>
      </VCard>
    </div>
  </AdminLayout>
</template>