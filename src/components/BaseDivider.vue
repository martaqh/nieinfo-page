<script setup lang="ts">
interface Props {
  reverse: boolean
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
  margin: 0 -100px;
  height: 1px;
  border-radius: $border-radius;
  background-image: $divider-gradient;

  &.reverse {
    background-image: $divider-gradient-reverse;
  }
}
</style>
