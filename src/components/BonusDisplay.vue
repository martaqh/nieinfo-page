<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'

interface Props {
  number?: string
  reverse: boolean
  buttonLabel: string
  imageUrl: string
  bonusUrl: string
}

withDefaults(defineProps<Props>(), {
  reverse: false
})
</script>

<template>
  <div class="bonus-display" :class="{ reverse: reverse }">
    <img class="bonus-display__image" :src="imageUrl" />
    <div class="bonus-display__text">
      <h6>#bonus {{ number }}</h6>
      <h2><slot name="title"></slot></h2>
      <p>
        <slot name="description"></slot>
      </p>
      <BaseButton :href="bonusUrl">{{ buttonLabel }}</BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bonus-display {
  margin: 80px;
  display: flex;
  justify-content: space-between;
  gap: 120px;
  height: fit-content;

  &__image {
    max-width: 500px;
    object-fit: cover;
    overflow: hidden;
  }

  &__text {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    line-height: 150%;

    h6 {
      font-size: 2rem;
      font-weight: 200;
      color: $color-text-light;
    }

    h2 {
      font-family: $font-title;
      font-size: 2rem;
      font-weight: 600;
      line-height: 120%;
    }

    p {
      margin: 24px 0;
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 150%;

      strong {
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  &.reverse {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
