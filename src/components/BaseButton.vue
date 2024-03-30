<script setup lang="ts">
import { computed } from 'vue'

// type Size = 'small' | 'regular' | 'large'
// type Color = 'orange' | 'green' | 'dark-green' | 'red' | 'yellow'
// type ButtonType = 'button' | 'submit' | 'reset'

interface Props {
  to?: string
  href?: string
  // size?: Size
  // color?: Color
  // type: ButtonType
  // outlined?: boolean
  // disabled?: boolean
  // fullWidth?: boolean
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
  <component class="base-button" :is="componentVariant" :href="href || to" :to="to">
    <div class="base-button__slot">
      <slot>
        <!-- fallback content -->
        Click me
      </slot>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.base-button {
  padding: 14px 24px;
  background-color: inherit;
  font-family: $font-main;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: $color-accent;
  color: inherit;
  border: 2px solid $color-accent;
  border-radius: 8px;

  &:hover {
    outline: 2px solid $color-accent;
    box-shadow: $box-shadow;
    cursor: pointer;
  }
}
</style>
