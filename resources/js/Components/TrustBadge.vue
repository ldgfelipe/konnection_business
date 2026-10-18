<script setup lang="ts">
import { computed } from 'vue'
import { VIcon, VChip, VTooltip } from 'vuetify/components'

interface Props {
  badge: {
    type: string
    label: string
    icon: string
    color: string
    code?: string
    certificate_id?: number
  } | null
  size?: 'small' | 'medium' | 'large'
  showTooltip?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  showTooltip: true,
  clickable: false,
})

const sizeClasses = computed(() => ({
  icon: props.size === 'small' ? 'x-small' : props.size === 'medium' ? 'medium' : 'large',
  chip: props.size === 'small' ? 'x-small' : props.size === 'medium' ? 'small' : 'medium',
}))

const tooltipText = computed(() => {
  if (!props.badge) return ''
  return `${props.badge.label}${props.badge.code ? ` (${props.badge.code})` : ''}`
})
</script>

<template>
  <span v-if="badge" class="d-inline-flex align-center">
    <VTooltip v-if="showTooltip" :location="'top'" :content="tooltipText">
      <template #activator="{ props: tooltipProps }">
        <VChip
          v-bind="tooltipProps"
          :size="sizeClasses.chip"
          :color="badge.color"
          variant="tonal"
          class="d-flex align-center gap-2"
          :clickable="clickable"
        >
          <VIcon :size="sizeClasses.icon" class="text-white">{{ badge.icon }}</VIcon>
          <span class="text-capitalize font-weight-medium">{{ badge.label }}</span>
        </VChip>
      </template>
    </VTooltip>

    <VChip
      v-else
      :size="sizeClasses.chip"
      :color="badge.color"
      variant="tonal"
      class="d-flex align-center gap-2"
      :clickable="clickable"
    >
      <VIcon :size="sizeClasses.icon" class="text-white">{{ badge.icon }}</VIcon>
      <span class="text-capitalize font-weight-medium">{{ badge.label }}</span>
    </VChip>
  </span>

  <span v-else class="d-inline-flex align-center">
    <VChip
      :size="sizeClasses.chip"
      color="surface-variant"
      variant="tonal"
      class="d-flex align-center gap-2"
    >
      <VIcon :size="sizeClasses.icon">mdi-shield-off-outline</VIcon>
      <span class="text-capitalize">No verificado</span>
    </VChip>
  </span>
</template>