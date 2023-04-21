<template>
  <button class="btn" :class="[props.btnStyle, props.disabled]">
    <span class="title1">
      <slot>Button</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  btnStyle?: string
  disabled?: string
}>()
</script>
