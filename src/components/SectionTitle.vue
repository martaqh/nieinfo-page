<script setup lang="ts">
import { computed } from 'vue'
type Size = 'large' | 'regular' | 'small'
type Color = 'white' | 'accent' | 'gradient'

interface Props {
  size?: Size
  color?: Color
}

const props = withDefaults(defineProps<Props>(), {
  size: 'regular',
  color: 'accent'
})

const isMainTitle = computed(() => {
  return props.size === 'large'
})

const titleType = computed(() => {
  return isMainTitle.value ? 'h1' : 'h2'
})
</script>

<template>
  <component :is="titleType" class="section-title" :class="{ main: isMainTitle }">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.section-title {
  font-family: $font-title;
  font-weight: 600;
  line-height: 120%;
  font-size: 3rem;
  text-align: start;
  background: $text-gradient-secondary;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  //width: fit-content;

  @include medium {
    font-size: 2rem;
  }

  @include small {
    font-size: 2rem;
  }

  &.main {
    font-weight: 800;
    font-size: 4rem;
    background: $text-gradient;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @include medium {
      font-size: 2.5rem;
    }

    @include small {
      font-size: 2.5rem;
      text-align: center;
    }

    @include x-small {
      font-size: 2rem;
    }
  }

  &.small {
    font-size: 2rem;
  }
}
</style>
