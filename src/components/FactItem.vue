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

const isLink = computed(() => {
  return props.icon === 'videocam'
})
</script>

<template>
  <div class="fact-item">
    <span :class="iconClass">{{ props.icon }}</span>
    <div class="fact-item__text">
      <a v-if="isLink" href="http://youtube.com/nieinformatyk" target="_blank">{{ text }}</a>
      <p v-else>{{ text }}</p>

      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.fact-item {
  padding: 12px 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: color 1s ease-out 100ms;
  transition: font-size 1s ease-out 100ms;
  line-height: 140%;

  &:hover {
    font-weight: 400;
    font-size: 1.2rem;
    color: $color-accent;
    text-shadow: $text-shadow;
  }

  span {
    font-size: 32px;

    @include medium {
      font-size: 28px;
    }

    @include small {
      font-size: 24px;
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @include medium {
    font-size: 0.9rem;
  }

  @include small {
    padding: 12px 0;
    font-size: 0.9rem;
    align-items: flex-start;

    &:hover {
      font-size: 0.9rem;
      text-shadow: none;
    }
  }

  &__text {
    display: flex;
    align-items: center;

    @include small {
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
