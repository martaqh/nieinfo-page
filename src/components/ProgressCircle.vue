<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  maxValue: number
  currentValue: number
}

const props = defineProps<Props>()

const progressLevel = computed(() => {
  return (props.currentValue / props.maxValue) * 100
})

const gradientStyle = computed(() => {
  return `radial-gradient(closest-side, #151f21 80%, transparent 82% 100%),
    conic-gradient(#38bcd6 ${progressLevel.value}%, #353636 0)`
})
</script>

<template>
  <div
    class="progress-bar"
    role="progressbar"
    :aria-valuenow="props.currentValue"
    aria-valuemin="1"
    :aria-valuemax="props.maxValue"
  >
    <span> {{ currentValue }}/{{ maxValue }} </span>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: inherit;
  background-image: v-bind(gradientStyle);

  span {
    font-size: 0.9rem;
  }
}
</style>
