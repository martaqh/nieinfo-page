<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  text: string
  icon: string
}

const props = defineProps<Props>()

const iconClass = computed(() => {
  return `material-symbols-outlined ${props.icon}`
})
</script>

<template>
  <div class="fact-item">
    <span :class="iconClass">{{ props.icon }}</span>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss">
.fact-item {
  padding: 24px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: color 1s ease-out 100ms;
  transition: font-size 1s ease-out 100ms;
  line-height: 140%;

  span {
    font-size: 32px;
  }

  &:hover {
    font-weight: 400;
    font-size: 1.2rem;
    color: $color-accent;
    text-shadow: $text-shadow;
  }
}
</style>
