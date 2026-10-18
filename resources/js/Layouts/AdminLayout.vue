<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { Link, router } from '@inertiajs/vue3'
import { VIcon } from 'vuetify/components'

interface Breadcrumb {
  title: string
  route?: string
}

interface Props {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

const props = defineProps<Props>()
const slots = useSlots()

// Ziggy exposes `route()` globally (see @routes directive in app.blade.php)
const route = (name: string, params?: any) => (window as any).route(name, params)

const breadcrumbs = computed<Breadcrumb[]>(() => [
  { title: 'Dashboard', route: route('dashboard') },
  ...(props.breadcrumbs || []),
])

const isActive = (name: string) => {
  const current = (window as any).route().current()
  return current === name || (current || '').startsWith(name.replace(/\.index$/, ''))
}

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.visit(route('dashboard'))
  }
}
</script>

<template>
  <div class="admin-layout bg-gray-100 min-h-screen">
    <!-- Breadcrumbs -->
    <nav class="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <ol class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-x-1 text-sm">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <Link
            v-if="crumb.route && index < breadcrumbs.length - 1"
            :href="crumb.route"
            class="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {{ crumb.title }}
          </Link>
          <span v-else class="text-gray-900 font-medium">{{ crumb.title }}</span>

          <VIcon v-if="index < breadcrumbs.length - 1" class="mx-1 text-gray-400" size="small">
            mdi-chevron-right
          </VIcon>
        </li>
      </ol>
    </nav>

    <!-- Admin sub-navigation -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-6 -mb-px">
          <Link
            :href="route('admin.settings.integrations')"
            class="inline-flex items-center px-1 py-3 border-b-2 text-sm font-medium transition-colors"
            :class="isActive('admin.settings.integrations')
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          >
            <VIcon start size="small">mdi-cog-outline</VIcon>
            Integraciones
          </Link>
          <Link
            :href="route('admin.profetit-users.index')"
            class="inline-flex items-center px-1 py-3 border-b-2 text-sm font-medium transition-colors"
            :class="isActive('admin.profetit-users')
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          >
            <VIcon start size="small">mdi-account-cert</VIcon>
            Usuarios Certificados Profetit
          </Link>
        </div>
      </div>
    </div>

    <!-- Page Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="min-w-0">
            <h1 class="text-2xl font-bold text-gray-900 truncate">{{ title }}</h1>
            <p v-if="subtitle" class="mt-1 text-sm text-gray-600 truncate">{{ subtitle }}</p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <slot name="actions" />

            <button
              type="button"
              @click="goBack"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <VIcon start size="small">mdi-arrow-left</VIcon>
              Volver
            </button>

            <Link
              :href="route('dashboard')"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <VIcon start size="small">mdi-view-dashboard-outline</VIcon>
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <slot />
    </main>
  </div>
</template>
