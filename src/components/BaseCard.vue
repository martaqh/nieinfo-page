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
  border: 1px solid $color-accent;
  border-radius: $border-radius;

  &__title {
    display: block;
    text-align: center;
    background-color: $color-accent;
    color: $color-background;
    font-weight: 500;
    font-family: $font-title;
    padding: 16px;
    position: absolute;
    left: -32px;
    top: -32px;
    border-radius: $border-radius;
    min-width: 50%;
  }

  &__text {
    padding: 48px;
  }

  &:hover {
    box-shadow: $box-shadow;
  }
}
</style>
