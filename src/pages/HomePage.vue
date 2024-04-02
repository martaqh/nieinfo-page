<script setup lang="ts">
import BasePage from '@/pages/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <BasePage>
    <div class="home">
      <section class="home__hero">
        <div class="home__hero__text">
          <h1 class="home__hero__text--title">Naucz się programowania <span>baz danych</span></h1>
          <p class="home__hero__text--subtitle">Od zera do poziomu zaawansowanego</p>

          <BaseButton> Pobierz darmowe ebooki </BaseButton>
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

    &__text {
      width: min-content;
      display: flex;
      flex-direction: column;
      padding: 80px 0;

      &--title {
        font-family: $font-title;
        margin-bottom: 48px;
        font-size: 4rem;
        font-weight: 800;
        line-height: 120%;
        background: $text-gradient;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &--subtitle {
        font-size: 1.2rem;
        line-height: 120%;
        margin-bottom: 80px;
      }
    }

    &__picture {
      position: relative;
      width: 40%;

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
}
</style>
