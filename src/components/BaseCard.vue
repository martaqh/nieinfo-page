<script setup lang="ts">
interface Props {
  title: string
  text: string
  iconName: string
}

defineProps<Props>()
</script>

<template>
  <div class="base-card">
    <div class="base-card__title">
      <span class="base-card__title-icon material-symbols-outlined">{{ iconName }}</span>
      <span class="base-card__title-wording">{{ title }}</span>
    </div>

    <p class="base-card__text">{{ text }}</p>
  </div>
</template>

<style lang="scss">
.base-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: $border-radius;
  border-top-left-radius: -1.25rem;
  padding: 8px;
  transition: opacity 1s ease-out 100ms;

  &__title {
    display: flex;
    align-items: center;
    border-radius: $border-radius;
    text-transform: uppercase;
    background-color: inherit;
    color: $color-accent;
    font-weight: 700;
    font-family: $font-title;
    font-size: 1.8rem;
    opacity: 0.7;

    @include medium {
      font-size: 1.5rem;
    }

    @include small {
      font-size: 1.2rem;
    }

    &-icon {
      margin-right: 16px;
      font-size: 2rem;

      @include medium {
        font-size: 1.8rem;
      }

      @include small {
        font-size: 1.5rem;
      }
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
