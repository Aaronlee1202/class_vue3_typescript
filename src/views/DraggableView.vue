<template>
  <div>
    <Drag
      :horizontal="horizontal"
      :componentMap="componentMap"
      :layoutList="layoutList"
      @change="onChange"
    ></Drag>
  </div>
</template>

<script setup lang="ts">
import Drag from '../components/drag/index'
import Mod1 from '../components/drag/mod-1.vue'
import Mod2 from '../components/drag/mod-2.vue'
import Mod3 from '../components/drag/mod-3.vue'
const horizontal = false
const componentMap = {
  Mod1: Mod1,
  Mod2: Mod2,
  Mod3: Mod3
}
const layoutList = [
  {
    name: '元件001',
    componentName: 'Mod1'
  },
  {
    name: '元件002',
    componentName: 'Mod2'
  },
  {
    name: '元件003',
    componentName: 'Mod3'
  }
]
const onChange = (e: unknown) => {
  console.log('onChange ===', e)
}
</script>
