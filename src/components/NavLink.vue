<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  href?: string
  blank?: boolean
}

const props = defineProps<Props>()

const componentVariant = computed(() => {
  return props.to ? 'router-link' : 'a'
})
</script>

<template>
  <component
    :is="componentVariant"
    class="nav-link"
    :to="to"
    :href="href || to"
    :target="blank ? blank : null"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.nav-link {
  &:hover {
    cursor: pointer;
    color: $color-accent;
    text-shadow: $text-shadow;
  }
}
</style>
