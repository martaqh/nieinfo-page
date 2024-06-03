<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import BaseContainer from '@/components/BaseContainer.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HeroView from '@/views/HeroView.vue'
import BonusesView from '@/views/BonusesView.vue'
import CoursesView from '@/views/CoursesView.vue'
</script>

<template>
  <main class="app">
    <TheHeader />
    <BaseContainer>
      <HeroView />
      <BaseDivider />
      <BonusesView />
      <BaseDivider reverse />
      <AboutView />
      <BaseDivider />
      <CoursesView />
      <BaseDivider reverse />
      <ContactView />
    </BaseContainer>
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
