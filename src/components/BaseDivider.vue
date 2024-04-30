<script setup lang="ts">
interface Props {
  reverse?: boolean
}

withDefaults(defineProps<Props>(), {
  reverse: false
})
</script>

<template>
  <div class="base-divider" :class="{ reverse: reverse }"></div>
</template>

<style lang="scss" scoped>
.base-divider {
  max-width: 1400px;
  width: 100%;
  height: 1px;
  border-radius: $border-radius;
  background-image: $divider-gradient;

  &.reverse {
    background-image: $divider-gradient-reverse;
  }
}
</style>
