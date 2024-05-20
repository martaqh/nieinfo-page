<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BasePage from '@/pages/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BonusDisplay from '@/components/BonusDisplay.vue'
import { getBonuses, getHeroData } from '@/sanity/service/HomePage'
import AboutPage from '@/pages/AboutPage.vue'
import ContactView from '@/pages/ContactView.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const bonuses = ref()

const hero = ref()

async function fetchHeroData() {
  try {
    hero.value = await getHeroData()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

async function fetchBonuses() {
  try {
    bonuses.value = await getBonuses()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(() => {
  fetchHeroData()
  fetchBonuses()
})
</script>

<template>
  <BasePage>
    <div class="home">
      <section class="home__hero" id="hero">
        <div v-if="hero" class="home__hero__text">
          <SectionTitle size="large">{{ hero[0].title }}</SectionTitle>
          <p class="home__hero__text--subtitle">{{ hero[0].subtitle }}</p>

          <BaseButton href="#bonuses">
            <span class="material-symbols-outlined"> arrow_downward </span>
            {{ hero[0].buttonLabel }}<span class="material-symbols-outlined"> arrow_downward </span>
          </BaseButton>
        </div>
        <div class="home__hero__picture">
          <img src="/src/assets/moje zdjecie.png" />
          <div class="home__hero__picture__icons-wrapper">
            <span class="material-symbols-outlined database"> database </span>
            <span class="material-symbols-outlined gears"> manufacturing </span>
            <span class="material-symbols-outlined terminal"> terminal </span>
            <span class="material-symbols-outlined analytics"> analytics </span>
            <span class="material-symbols-outlined node"> network_node </span>
            <span class="material-symbols-outlined table"> data_table </span>
          </div>
        </div>
      </section>
      <BaseDivider />
      <section class="home__bonuses" id="bonuses">
        <BonusDisplay
          v-for="bonus of bonuses"
          :key="bonus.number"
          :number="bonus.number"
          :total-bonuses="bonuses.length"
          :title="bonus.title"
          :learning-stage="bonus.learningStage"
          :button-label="bonus.buttonLabel"
          :image-url="bonus.image"
          :description="bonus.description"
          :bonus-url="bonus.bonusUrl"
        >
        </BonusDisplay>
      </section>
    </div>
    <AboutPage />
    <ContactView />
  </BasePage>
</template>

<style lang="scss" scoped>
.home {
  &__hero {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-weight: $font-weight-main;

    @include medium {
      padding-left: 48px;
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
        padding: 64px 24px;
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
      width: 40%;
      max-height: 70%;
      min-width: 376px;

      @include medium {
        min-width: 0;
        width: 376px;
        max-height: 50%;
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

          @include medium {
            left: 300px;
            top: 120px;
          }
        }

        .table {
          left: 420px;
          top: 310px;

          @include medium {
            display: none;
          }
        }
      }
    }
  }

  &__bonuses {
    padding: 64px 48px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    @include small {
      gap: 80px;
    }

    strong {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}
</style>
