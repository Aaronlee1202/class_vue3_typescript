<template>
  <span
    class="spinner-border spinner-border-sm"
    :class="props.spinnerStyle"
    role="status"
    aria-hidden="true"
  >
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const show = ref<boolean>(false)

onMounted(() => {
  show.value = true
})

const props = defineProps<{
  spinnerStyle?: string
}>()

const closeSpinner = () => {
  show.value = false
}

//指定組件中要暴露出去的屬性
defineExpose<{
  closeSpinner: () => void
}>({ closeSpinner: closeSpinner })

</script>
