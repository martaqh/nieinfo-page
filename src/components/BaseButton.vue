<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  href?: string
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

  &:hover {
    outline: 2px solid $color-accent;
    box-shadow: $box-shadow;
    cursor: pointer;
  }
}
</style>
