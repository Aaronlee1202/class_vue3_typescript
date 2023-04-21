<template>
  <div v-if="show">
    <div>{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { MessageType } from '@/types'
const show = ref<boolean>(false)
onMounted(() => {
  show.value = true
})
const props = withDefaults(
  defineProps<{
    text?: string
    type?: MessageType
  }>(),
  {
    type: 'info'
  }
)
const closeMessage = () => {
  show.value = false
}
defineExpose({ closeMessage: closeMessage })
</script>
