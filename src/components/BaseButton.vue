<script setup lang="ts">
import { computed } from 'vue'

type Type = 'button' | 'submit'

interface Props {
  to?: string
  href?: string
  social?: boolean
  plain?: boolean
  disabled?: boolean
  type?: Type
}

const props = defineProps<Props>()

const componentVariant = computed(() => {
  if (props.to) {
    return 'router-link'
  } else if (props.href) {
    return 'a'
  } else {
    return 'button'
  }
})
</script>

<template>
  <component
    class="base-button"
    :is="componentVariant"
    :href="href || to"
    :to="to"
    :type="componentVariant === 'button' && props.type"
    :target="componentVariant === 'a' && '_blank'"
    :class="{ social: social, plain: plain, disabled: disabled }"
  >
    <div class="base-button__slot">
      <slot> </slot>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.base-button {
  padding: 14px 24px;
  background-color: inherit;
  font-family: $font-main;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: $color-accent;
  color: inherit;
  border: 2px solid $color-accent;
  border-radius: $border-radius;
  text-transform: uppercase;

  @include medium {
    font-size: 1rem;
  }

  @include small {
    font-size: 0.9rem;
  }

  &:hover {
    filter: saturate(150%);
    outline: 2px solid $color-accent;
    box-shadow: $box-shadow;
    cursor: pointer;
  }

  &__slot {
    text-align: center;
  }
  &.social {
    padding: 12px;
    background-color: inherit;
    width: 24px;
    height: 24px;
    border: none;

    * {
      filter: brightness(0) invert(1);
      height: 100%;
    }
  }

  &.plain {
    background: inherit;
    border: none;
    padding: 0;
  }

  &.disabled {
    background-color: $color-text-light;
    border: none;

    &:hover {
      box-shadow: none;
      cursor: not-allowed;
      outline: none;
    }
  }

  &__slot {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
