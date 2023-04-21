<script setup lang="ts">
import { RouterView } from 'vue-router'
// @ is an alias to /src
import NavBar from '@/views/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style lang="scss">
#app {
  height: 100vh;
  font-family: 'Noto Sans TC', 'Microsoft Yahei', '微軟雅黑', sans-serif;
  color: var(--bs-dark-grey);
  position: relative;
  padding: var(--pretso-header-height) 0 0 var(--pretso-navbar-weight);
  overflow: hidden;
  background-color: rgba(139, 152, 172, 0.1);
  a {
    text-decoration: none;
  }
}
</style>
