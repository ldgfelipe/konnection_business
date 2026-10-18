<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'
import { VBtn, VCard, VCardTitle, VCardText, VCardActions, VTextField, VFileInput, VAlert, VProgressLinear, VDivider, VChip, VIcon } from 'vuetify/components'
import { useForm } from '@inertiajs/vue3'
import TrustBadge from '@/Components/TrustBadge.vue'

const token = route.query.token as string
const valid = ref(false)
const error = ref<string | null>(null)
const expired = ref(false)
const alreadyActive = ref(false)
const loading = ref(false)
const userInfo = ref<{
  name: string
  email: string
  profetit_verified: boolean
  profetit_certificate_type: string | null
} | null>(null)

const form = useForm({
  token: token,
  password: '',
  password_confirmation: '',
  profile_photo: null as File | null,
  company_name: '',
  company_rfc: '',
  company_phone: '',
  company_address: '',
  company_website: '',
  company_category: '',
  company_description: '',
})

const errors = computed(() => form.errors)

const showCompanyFields = computed(() => {
  return form.company_name || form.company_rfc || form.company_phone || form.company_address
})

onMounted(async () => {
  if (!token) {
    error.value = 'Token de activación requerido'
    return
  }

  try {
    const response = await router.get('/activate-account', { params: { token } })
    // Si llegamos aquí, la página ya tiene los props
  } catch (e) {
    error.value = 'Error al cargar la página de activación'
  }
})

const handleSubmit = () => {
  loading.value = true
  form.post('/activate-account', {
    onSuccess: () => {
      loading.value = false
    },
    onError: () => {
      loading.value = false
    },
  })
}

const handlePhotoChange = (file: File | null) => {
  form.profile_photo = file
}
</script>

<template>
  <div class="d-flex justify-center align-center min-vh-100 pa-4" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
    <VCard class="w-100" max-width="520" elevation="4" variant="tonal">
      <VCardTitle class="text-center pb-2">
        <div class="d-flex justify-center mb-3">
          <VIcon size="x-large" color="primary">mdi-shield-check</VIcon>
        </div>
        <h2 class="mb-1">Activar Cuenta B2B</h2>
        <span class="text-caption text-secondary">KonnectionBusiness - Perfil Profesional Verificado</span>
      </VCardTitle>

      <VCardText class="pt-0">
        <!-- Error/Info Messages -->
        <VAlert v-if="error" type="error" :closable="false" class="mb-4" variant="tonal">
          <VIcon start>mdi-alert-circle-outline</VIcon>
          {{ error }}
        </VAlert>

        <VAlert v-if="expired" type="warning" :closable="false" class="mb-4" variant="tonal">
          <VIcon start>mdi-clock-alert-outline</VIcon>
          El token de activación ha expirado. Contacta a soporte para recibir uno nuevo.
        </VAlert>

        <VAlert v-if="alreadyActive" type="success" :closable="false" class="mb-4" variant="tonal">
          <VIcon start>mdi-check-circle-outline</VIcon>
          {{ message }}
        </VAlert>

        <!-- Valid State - Show Form -->
        <div v-if="valid && !alreadyActive">
          <div class="mb-4 p-3 rounded-lg" style="background: var(--v-theme-primary-lighten-5);">
            <div class="d-flex align-center gap-2 mb-2">
              <VIcon color="primary">mdi-account-check</VIcon>
              <span class="font-weight-medium">Bienvenido, {{ userInfo?.name }}</span>
            </div>
            <div class="text-caption text-secondary ms-6">
              <div>{{ userInfo?.email }}</div>
              <TrustBadge v-if="userInfo?.profetit_verified" :badge="{
                type: userInfo.profetit_certificate_type,
                label: userInfo.profetit_certificate_type === 'titulo_oficial' ? 'Título Oficial' : 'Testimonio de Estudios',
                icon: userInfo.profetit_certificate_type === 'titulo_oficial' ? 'mdi-certificate' : 'mdi-file-document-check',
                color: userInfo.profetit_certificate_type === 'titulo_oficial' ? 'primary' : 'info',
              }" size="small" />
            </div>
          </div>

          <p class="text-body-2 mb-4">Define tu contraseña y completa tu perfil profesional para acceder a la red B2B.</p>

          <!-- Password Fields -->
          <VTextField
            v-model="form.password"
            :label="'Nueva Contraseña'"
            type="password"
            :error-messages="errors.password"
            :rules="[(v) => !!v || 'La contraseña es requerida', (v) => (v && v.length >= 8) || 'Mínimo 8 caracteres']"
            counter="64"
            variant="outlined"
            density="comfortable"
            class="mb-3"
            :disabled="loading"
          />

          <VTextField
            v-model="form.password_confirmation"
            :label="'Confirmar Contraseña'"
            type="password"
            :error-messages="errors.password_confirmation"
            :rules="[(v) => v === form.password || 'Las contraseñas no coinciden']"
            variant="outlined"
            density="comfortable"
            class="mb-4"
            :disabled="loading"
          />

          <!-- Profile Photo -->
          <VFileInput
            v-model="form.profile_photo"
            on-change="handlePhotoChange"
            :label="'Foto de Perfil (opcional)'"
            accept="image/*"
            show-size
            max-size="2048"
            variant="outlined"
            density="comfortable"
            class="mb-4"
            :disabled="loading"
          />

          <!-- Company Info (Optional) -->
          <VDivider class="my-4" />
          <h4 class="mb-3">Información de tu Empresa <span class="text-caption text-secondary font-weight-normal">(opcional)</span></h4>

          <VTextField
            v-model="form.company_name"
            :label="'Nombre de la Empresa'"
            variant="outlined"
            density="comfortable"
            class="mb-3"
            :disabled="loading"
          />

          <div class="d-flex gap-3 mb-3">
            <VTextField
              v-model="form.company_rfc"
              :label="'RFC'"
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
              :disabled="loading"
            />
            <VTextField
              v-model="form.company_phone"
              :label="'Teléfono'"
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
              :disabled="loading"
            />
          </div>

          <VTextField
            v-model="form.company_address"
            :label="'Dirección'"
            variant="outlined"
            density="comfortable"
            class="mb-3"
            :disabled="loading"
          />

          <div class="d-flex gap-3 mb-3">
            <VTextField
              v-model="form.company_website"
              :label="'Sitio Web'"
              type="url"
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
              :disabled="loading"
            />
            <VTextField
              v-model="form.company_category"
              :label="'Categoría/Giro'"
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
              :disabled="loading"
            />
          </div>

          <VTextField
            v-model="form.company_description"
            :label="'Descripción de la Empresa'"
            variant="outlined"
            density="comfortable"
            multi-line
            rows="3"
            class="mb-4"
            :disabled="loading"
          />

          <!-- Submit Button -->
          <VProgressLinear v-if="loading" :indeterminate="true" color="primary" class="mb-4" />

          <VBtn
            v-else
            :loading="loading"
            color="primary"
            size="large"
            class="w-100"
            @click="handleSubmit"
          >
            <VIcon start>mdi-check-circle</VIcon>
            Activar mi Cuenta
          </VBtn>

          <p class="text-caption text-center text-secondary mt-4">
            Al activar tu cuenta, aceptas los <a href="#" class="text-primary">Términos y Condiciones</a> y la <a href="#" class="text-primary">Política de Privacidad</a>.
          </p>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>