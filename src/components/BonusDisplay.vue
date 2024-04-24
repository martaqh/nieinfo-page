<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/sanityClient'

interface Props {
  number: number
  reverse: boolean
  title: string
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

const secondDotColor = computed(() => {
  return props.number >= 2 ? '#38bcd6' : 'white'
})

const thirdDotColor = computed(() => {
  return props.number === 3 ? '#38bcd6' : 'white'
})
</script>

<template>
  <div class="bonus-display" :class="{ reverse: isEven }">
    <img class="bonus-display__image" :src="urlFor(imageUrl).url()" />
    <div class="bonus-display__text">
      <div class="bonus-display__text__level">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h6>#bonus {{ number }}</h6>
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
      span {
        &::after {
          content: '';
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          margin-right: 8px;
          background-color: $color-accent;
        }
      }

      span:nth-child(2)::after {
        background-color: v-bind('secondDotColor');
      }
      span:nth-child(3)::after {
        background-color: v-bind('thirdDotColor');
      }
    }

    h6 {
      font-size: 2rem;
      font-weight: 200;
      color: $color-text-light;

      @include medium {
        font-size: 1.5rem;
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
@/sanity/sanityClient
