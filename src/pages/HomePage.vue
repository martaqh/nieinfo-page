<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BasePage from '@/pages/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BonusDisplay from '@/components/BonusDisplay.vue'
import { getBonuses } from '@/sanity/sanity'

const bonuses = ref()

async function fetchBonuses() {
  try {
    bonuses.value = await getBonuses()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(() => {
  fetchBonuses()
})
</script>

<template>
  <BasePage>
    <div class="home">
      <section class="home__hero">
        <div class="home__hero__text">
          <h1 class="home__hero__text--title">Naucz się programowania <span>baz danych</span></h1>
          <p class="home__hero__text--subtitle">Od zera do poziomu zaawansowanego</p>

          <BaseButton href="#bonuses">
            <span class="material-symbols-outlined"> arrow_downward </span>
            Pobierz darmowe ebooki <span class="material-symbols-outlined"> arrow_downward </span>
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
          :title="bonus.title"
          :button-label="bonus.buttonLabel"
          :image-url="bonus.image"
          :description="bonus.description"
          :bonus-url="bonus.bonusUrl"
        >
        </BonusDisplay>
      </section>
    </div>
  </BasePage>
</template>

<style lang="scss" scoped>
.home {
  &__hero {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    font-weight: $font-weight-main;

    @include medium {
      padding: 0 48px;
    }

    &__text {
      width: min-content;
      display: flex;
      flex-direction: column;
      padding: 120px 0;

      @include small {
        width: max-content;
        padding: 80px 48px;
        text-align: center;
      }

      &--title {
        font-family: $font-title;
        margin-bottom: 48px;
        font-size: 4rem;
        font-weight: 800;
        line-height: 120%;
        background: $text-gradient;
        background-clip: text;
        -webkit-text-fill-color: transparent;

        @include medium {
          font-size: 3rem;
        }

        @include small {
          font-size: 2.5rem;
        }

        @include x-small {
          font-size: 2.2rem;
        }
      }

      &--subtitle {
        font-size: 1.2rem;
        line-height: 130%;
        margin-bottom: 80px;

        @include small {
          font-size: 1.1rem;
        }
      }
    }

    &__picture {
      position: relative;
      width: 40%;
      max-height: 70%;
      min-width: 376px;

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
        }

        .database {
          left: -40px;
          top: 130px;
        }

        .gears {
          left: 420px;
          top: 130px;
        }

        .terminal {
          left: 30px;
          top: 40px;
        }

        .node {
          left: 30px;
          top: 220px;
        }
        .analytics {
          left: 490px;
          top: 220px;
        }

        .table {
          left: 420px;
          top: 310px;
        }
      }
    }
  }

  &__bonuses {
    padding: 80px 48px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    strong {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}
</style>
