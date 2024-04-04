<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main class="app">
    <TheHeader />

    <RouterView />
    <TheFooter />
  </main>
</template>

<style lang="scss" scoped>
.app {
  font-family: $font-main;
  font-weight: 300;
  background-color: $color-background;
  color: $color-text;
  background-image: $background-gradient;
}
</style>
