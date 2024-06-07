<script setup lang="ts">
import BaseDivider from '@/components/BaseDivider.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HeroView from '@/views/HeroView.vue'
import BonusesView from '@/views/BonusesView.vue'
import CoursesView from '@/views/CoursesView.vue'
</script>

<template>
  <main>
    <HeroView />
    <BaseDivider />
    <BonusesView />
    <BaseDivider reverse />
    <AboutView />
    <BaseDivider />
    <CoursesView />
    <BaseDivider reverse />
    <ContactView />
  </main>
</template>
