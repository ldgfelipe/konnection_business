<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'
import { VBtn, VCard, VCardTitle, VCardText, VCardActions, VTextField, VAlert, VDivider, VIcon, VChip, VDialog, VForm, VContainer, VRow, VCol, VSelect } from 'vuetify/components'
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

// Props from Inertia
const props = defineProps<{
  webhookSecret: string
  apiKey: string
  webhookUrl: string
  events: Record<string, string>
}>()

const saving = ref(false)
const testing = ref(false)
const showApiKey = ref(false)
const generatedApiKey = ref('')
const showGeneratedKeyDialog = ref(false)

const form = useForm({
  webhook_secret: '',
  api_key: '',
})

const testResult = ref<{
  success: boolean
  message: string
  webhook_url?: string
  test_signature?: string
  test_payload?: Record<string, unknown>
} | null>(null)

const handleSave = () => {
  saving.value = true
  form.put(route('admin.settings.integrations.update'), {
    onSuccess: () => {
      saving.value = false
      // Actualizar props locales
      if (form.webhook_secret) props.webhookSecret = '••••••••'
      if (form.api_key) props.apiKey = '••••••••'
    },
    onError: () => {
      saving.value = false
    },
  })
}

const handleGenerateApiKey = () => {
  saving.value = true
  router.post(route('admin.settings.integrations.generate-api-key'), {
    onSuccess: (page) => {
      saving.value = false
      generatedApiKey.value = page.props.api_key
      props.apiKey = '••••••••'
      showGeneratedKeyDialog.value = true
    },
    onError: () => {
      saving.value = false
    },
  })
}

const handleTestWebhook = () => {
  testing.value = true
  router.post(route('admin.settings.integrations.test-webhook'), {
    onSuccess: (page) => {
      testing.value = false
      testResult.value = page.props
    },
    onError: () => {
      testing.value = false
    },
  })
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}
</script>

<template>
  <AdminLayout
    title="Configuración de Integraciones"
    subtitle="Gestiona la conexión con Profetit.org"
    :breadcrumbs="[
      { title: 'Configuración Integraciones', route: route('admin.settings.integrations') }
    ]"
  >
    <template #actions>
      <VBtn color="primary" @click="handleGenerateApiKey" :disabled="saving">
        <VIcon start>mdi-key</VIcon>
        Generar API Key
      </VBtn>
    </template>

    <VContainer fluid class="pa-4">

    <!-- Webhook Configuration -->
    <VCard class="mb-6" variant="tonal">
      <VCardTitle class="d-flex align-center justify-space-between">
        <span>Webhook de Profetit.org</span>
        <VChip size="x-small" color="success" variant="tonal">Activo</VChip>
      </VCardTitle>
      <VCardText>
        <div class="mb-4">
          <label class="text-caption text-secondary mb-1 d-block">URL del Endpoint</label>
          <div class="d-flex gap-2">
            <VTextField
              :value="webhookUrl"
              readonly
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
            />
            <VBtn
              variant="text"
              @click="copyToClipboard(webhookUrl)"
              :disabled="testing"
            >
              <VIcon start>mdi-content-copy</VIcon>
              Copiar
            </VBtn>
          </div>
        </div>

        <div class="mb-4">
          <label class="text-caption text-secondary mb-1 d-block">Secret Key del Webhook</label>
          <VTextField
            v-model="form.webhook_secret"
            :label="'Secret Key (HMAC-SHA256)'"
            :type="showApiKey ? 'text' : 'password'"
            variant="outlined"
            density="comfortable"
            class="mb-2"
            :append-inner-icon="showApiKey ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showApiKey = !showApiKey"
            :disabled="saving"
            :counter="255"
          />
          <div class="text-caption text-secondary">
            Esta clave se usa para validar la firma HMAC-SHA256 en los webhooks entrantes (header <code>X-Profetit-Signature</code>).
          </div>
        </div>

        <VBtn
          color="primary"
          @click="handleSave"
          :disabled="saving"
          :loading="saving"
        >
          <VIcon start>mdi-content-save</VIcon>
          Guardar Configuración
        </VBtn>
      </VCardText>
    </VCard>

    <!-- API Key Configuration -->
    <VCard class="mb-6" variant="tonal">
      <VCardTitle>API Key de KonnectionBusiness</VCardTitle>
      <VCardText>
        <div class="mb-4">
          <label class="text-caption text-secondary mb-1 d-block">API Key Actual</label>
          <div class="d-flex gap-2">
            <VTextField
              :value="apiKey"
              readonly
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
            />
            <VBtn
              variant="text"
              @click="copyToClipboard(props.apiKey)"
              :disabled="saving"
            >
              <VIcon start>mdi-content-copy</VIcon>
              Copiar
            </VBtn>
            <VBtn
              variant="text"
              @click="showApiKey = !showApiKey"
            >
              <VIcon start>{{ showApiKey ? 'mdi-eye-off' : 'mdi-eye' }}</VIcon>
            </VBtn>
          </div>
        </div>

        <VBtn
          color="secondary"
          @click="handleGenerateApiKey"
          :disabled="saving"
          :loading="saving"
        >
          <VIcon start>mdi-key-plus</VIcon>
          Generar Nueva API Key
        </VBtn>
      </VCardText>
    </VCard>

    <!-- Test Webhook -->
    <VCard class="mb-6" variant="tonal">
      <VCardTitle>Probar Conexión</VCardTitle>
      <VCardText>
        <VBtn
          color="info"
          @click="handleTestWebhook"
          :disabled="testing"
          :loading="testing"
        >
          <VIcon start>mdi-webhook</VIcon>
          Test Webhook
        </VBtn>

        <VDivider class="my-4" />

        <VAlert v-if="testResult" :type="testResult.success ? 'success' : 'error'" variant="tonal" class="mt-4">
          <div v-if="testResult.success">
            <h4 class="mb-2">✅ Conexión Exitosa</h4>
            <div class="d-flex gap-2 mb-2">
              <VChip size="small" variant="outlined">{{ testResult.webhook_url }}</VChip>
            </div>
            <details class="text-caption">
              <summary>Ver firma de prueba</summary>
              <pre class="mt-2 p-2 bg-surface-variant rounded">{{ testResult.test_signature }}</pre>
            </details>
            <details class="text-caption mt-2">
              <summary>Ver payload de prueba</summary>
              <pre class="mt-2 p-2 bg-surface-variant rounded">{{ JSON.stringify(testResult.test_payload, null, 2) }}</pre>
            </details>
          </div>
          <div v-else>
            <h4 class="mb-2">❌ Error</h4>
            <p>{{ testResult.message }}</p>
          </div>
        </VAlert>
      </VCardText>
    </VCard>

    <!-- Events Documentation -->
    <VCard variant="tonal">
      <VCardTitle>Eventos Soportados</VCardTitle>
      <VCardText>
        <div class="d-flex flex-wrap gap-2">
          <VChip
            v-for="(event, key) in events"
            :key="key"
            size="small"
            variant="outlined"
          >
            <strong>{{ key }}</strong> → {{ event }}
          </VChip>
        </div>
      </VCardText>
    </VCard>

    <!-- Generated API Key Dialog -->
    <VDialog v-model="showGeneratedKeyDialog" max-width="600">
      <VCard>
        <VCardTitle class="text-warning">
          <VIcon start>mdi-key</VIcon>
          Nueva API Key Generada
        </VCardTitle>
        <VCardText>
          <VAlert type="warning" variant="tonal">
            <strong>¡Importante!</strong> Guarda esta clave en un lugar seguro. No se mostrará nuevamente.
          </VAlert>
          <div class="d-flex gap-2">
            <VTextField
              :value="generatedApiKey"
              readonly
              variant="outlined"
              density="comfortable"
              class="flex-grow-1"
            />
            <VBtn
              variant="text"
              @click="copyToClipboard(generatedApiKey)"
            >
              <VIcon start>mdi-content-copy</VIcon>
              Copiar
            </VBtn>
          </div>
        </VCardText>
        <VCardActions class="justify-end">
          <VBtn @click="showGeneratedKeyDialog = false">Entendido</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VContainer>
</AdminLayout>
</template>