<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
import { getHeroData } from '@/sanity/service/HomePage'

const hero = ref()

async function fetchHeroData() {
  try {
    hero.value = await getHeroData()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(() => {
  fetchHeroData()
})
</script>

<template>
  <section class="hero" id="hero">
    <div v-if="hero" class="hero__text">
      <SectionTitle size="large">{{ hero[0].title }}</SectionTitle>
      <p class="hero__text--subtitle">{{ hero[0].subtitle }}</p>

      <BaseButton href="#bonuses">
        <span class="material-symbols-outlined"> arrow_downward </span>
        {{ hero[0].buttonLabel }}<span class="material-symbols-outlined"> arrow_downward </span>
      </BaseButton>
    </div>
    <div class="hero__picture">
      <img src="/src/assets/moje zdjecie.png" />
      <div class="hero__picture__icons-wrapper">
        <span class="material-symbols-outlined database"> database </span>
        <span class="material-symbols-outlined gears"> manufacturing </span>
        <span class="material-symbols-outlined terminal"> terminal </span>
        <span class="material-symbols-outlined analytics"> analytics </span>
        <span class="material-symbols-outlined node"> network_node </span>
        <span class="material-symbols-outlined table"> data_table </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: $font-weight-main;

  padding-left: 48px;

  @include medium {
    padding-left: 0;
  }

  @include small {
    padding-left: 0;
  }

  &__text {
    width: min-content;
    display: flex;
    flex-direction: column;
    padding: 100px 32px 100px 0;

    @include large {
      padding-left: 48px;
    }

    @include medium {
      padding: 100px 32px 100px 0;
    }

    @include small {
      width: 100%;
      padding: 64px 0;
      text-align: center;
    }

    &--subtitle {
      font-size: 1.2rem;
      line-height: 130%;
      margin-top: 48px;
      margin-bottom: 80px;

      @include medium {
        font-size: 1.1rem;
      }

      @include small {
        font-size: 1rem;
      }
    }
  }

  &__picture {
    position: relative;
    max-width: 40%;
    max-height: 50%;
    min-width: 376px;

    @include medium {
      width: 376px;
    }

    @include small {
      display: none;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    &__icons-wrapper {
      position: absolute;
      inset: 0;
      width: 100%;

      span {
        position: absolute;
        font-size: 3rem;
        font-weight: 300;
        color: $color-accent;
        text-shadow: $text-shadow;

        @include large {
          font-size: 2.5rem;
        }

        @include medium {
          font-size: 2rem;
        }
      }

      .database {
        left: -40px;
        top: 130px;

        @include medium {
          left: -10px;
        }
      }

      .gears {
        left: 420px;
        top: 130px;

        @include large {
          left: 340px;
          top: 50px;
        }

        @include medium {
          left: 260px;
          top: 30px;
        }
      }

      .terminal {
        left: 30px;
        top: 40px;

        @include medium {
          left: 30px;
          top: 60px;
        }
      }

      .node {
        left: 30px;
        top: 220px;

        @include medium {
          left: 50px;
          top: 200px;
        }
      }
      .analytics {
        left: 490px;
        top: 220px;

        @include large {
          left: 400px;
          top: 150px;
        }

        @include medium {
          left: 300px;
          top: 120px;
        }
      }

      .table {
        left: 420px;
        top: 310px;

        @include large {
          display: none;
        }
      }
    }
  }
}
</style>
