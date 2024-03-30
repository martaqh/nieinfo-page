<script setup lang="ts">
import BasePage from '@/pages/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <BasePage>
    <div class="home">
      <section class="home__hero">
        <div class="home__hero__text">
          <h1 class="home__hero__text--title">Naucz się programować <span>bazy danych</span></h1>
          <p class="home__hero__text--subtitle">Od zera do poziomu zaawansowanego</p>

          <BaseButton> Pobierz darmowe ebooki </BaseButton>
        </div>
        <div class="home__hero__picture">
          <img src="/src/assets/moje zdjecie.png" />
          <div class="home__hero__picture__icons-wrapper">
            <span class="material-symbols-outlined"> database </span>
            <span class="material-symbols-outlined"> manufacturing </span>
            <span class="material-symbols-outlined"> terminal </span>
            <span class="material-symbols-outlined"> network_node </span>
            <span class="material-symbols-outlined"> auto_transmission </span>
            <span class="material-symbols-outlined"> storage </span>
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
    gap: 150px;

    &__text {
      width: max-content;
      display: flex;
      flex-direction: column;
      padding: 80px 0;

      &--title {
        margin-bottom: 48px;
        font-size: 4.5rem;
        font-weight: 800;
        font-family: $font-title;
        line-height: 120%;
        background: $text-gradient;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &--subtitle {
        font-size: 1.5rem;
        line-height: 120%;
        margin-bottom: 80px;
      }
    }

    &__picture {
      position: relative;
      min-width: 30%;

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
          font-size: 4rem;
          color: $color-accent;
          text-shadow: $text-shadow;
        }

        span:first-child {
          left: -40px;
          top: 130px;
        }

        span:nth-child(2) {
          left: 0;
          top: 300px;
        }

        span:nth-child(3) {
          left: 80px;
          top: 0;
        }

        span:nth-child(4) {
          left: 450px;
          top: 100px;
        }

        span:nth-child(5) {
          left: 470px;
          top: 410px;
        }

        span:last-child {
          left: 550px;
          top: 250px;
        }
      }
    }
  }
}
</style>
