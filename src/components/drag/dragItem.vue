<template>
  <div ref="domItem" draggable="true" data-drag-item="yes" @dragstart="onDragItem">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { DRAG_CONTEXT_KEY, getElementIndex } from './common'
import type { DragContext } from './common'

const domItem = ref<HTMLDivElement>()
const dragContext: DragContext | undefined = inject<DragContext>(DRAG_CONTEXT_KEY)
const onDragItem = (e: DragEvent) => {
  e.stopPropagation()
  const index = getElementIndex(domItem.value || null)
  if (dragContext && dragContext?.activeIndex >= -1) {
    dragContext.activeIndex = index
  }
}
</script>
