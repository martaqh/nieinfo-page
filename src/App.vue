<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import BaseContainer from '@/components/BaseContainer.vue'
</script>

<template>
  <main class="app">
    <TheHeader />

    <BaseContainer>
      <RouterView />
    </BaseContainer>
    <TheFooter />
  </main>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  font-family: $font-main;
  font-weight: 300;
  background-color: $color-background;
  color: $color-text;
  background-image: $background-gradient;
}
</style>
