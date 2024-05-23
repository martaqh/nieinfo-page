<script setup lang="ts">
interface Props {
  title: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="base-card">
    <span class="base-card__title">{{ title }}</span>
    <p class="base-card__text">{{ text }}</p>
  </div>
</template>

<style lang="scss">
.base-card {
  position: relative;
  border-radius: $border-radius;
  border-top-left-radius: -1.25rem;
  padding: 8px;
  transition: opacity 1s ease-out 100ms;

  &__title {
    border-radius: $border-radius;
    text-transform: uppercase;
    background-color: inherit;
    color: $color-accent;
    font-weight: 700;
    font-family: $font-title;
    font-size: 3rem;
    opacity: 0.2;

    @include medium {
      font-size: 2.2rem;
    }

    @include small {
      font-size: 2rem;
      opacity: 0.3;
    }
  }

  &__text {
    @include medium {
      font-size: 0.9rem;
    }
  }

  &:hover .base-card__title {
    text-shadow: $box-shadow;
    opacity: 1;
  }
}
</style>
