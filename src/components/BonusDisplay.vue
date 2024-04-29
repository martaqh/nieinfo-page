<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import ProgressCircle from '@/components/ProgressCircle.vue'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/sanityClient'

interface Props {
  number: number
  totalBonuses: number
  reverse: boolean
  title: string
  learningStage: string
  buttonLabel: string
  imageUrl: any
  bonusUrl: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false
})

const builder = imageUrlBuilder(client)

function urlFor(source: string) {
  return builder.image(source)
}

const isEven = computed(() => {
  return props.number % 2 === 0
})
</script>

<template>
  <div class="bonus-display" :class="{ reverse: isEven }">
    <img class="bonus-display__image" :src="urlFor(imageUrl).url()" />
    <div class="bonus-display__text">
      <div class="bonus-display__text__level">
        <ProgressCircle :max-value="props.totalBonuses" :current-value="props.number" />
        <h6>{{ learningStage }}</h6>
      </div>

      <h2>{{ title }}</h2>
      <p>
        {{ description }}
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

  @include medium {
    gap: 80px;
    margin: 64px 48px;
  }

  @include small {
    flex-direction: column;
    gap: 48px;
    margin: 24px 0;
  }

  &__image {
    max-width: 500px;
    object-fit: cover;
    overflow: hidden;

    @include medium {
      max-width: 350px;
      min-width: 250px;
    }
  }

  &__text {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    line-height: 150%;

    @include medium {
      gap: 32px;
    }

    &__level {
      display: flex;
      align-items: center;
      gap: 24px;
      font-weight: 200;

      h6 {
        font-size: 1.2rem;

        color: $color-text-light;
        text-transform: uppercase;

        @include medium {
          font-size: 1rem;
        }
      }
    }

    h2 {
      font-family: $font-title;
      font-size: 2rem;
      font-weight: 600;
      line-height: 120%;

      @include medium {
        font-size: 1.7rem;
      }
    }

    p {
      margin: 24px 0;
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 150%;

      @include medium {
        font-size: 1rem;
      }

      strong {
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  &.reverse {
    display: flex;
    flex-direction: row-reverse;

    @include small {
      flex-direction: column;
    }
  }
}
</style>
