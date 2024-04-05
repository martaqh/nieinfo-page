<script setup lang="ts">
import BasePage from '@/pages/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BonusDisplay from '@/components/BonusDisplay.vue'
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
          number="1"
          button-label="Pobierz e-book"
          image-url="/src/assets/ecover.png"
          bonus-url="https://promo.podstawybazdanych.pl/"
        >
          <template #title>E-book dla początkujących</template>
          <template #description>
            Chcesz zostać programistą baz danych, ale informatyka to dla Ciebie zupełna nowość?
            Jeśli myślisz o przebranżowieniu do IT to ten e-book
            <strong>BARDZO CI SIĘ SPODOBA!</strong>
          </template>
        </BonusDisplay>
        <BonusDisplay
          number="2"
          buttonLabel="Pobierz e-book"
          image-url="/src/assets/mistrz_sql_promo.png"
          bonus-url="https://www.mistrzsql.pl/"
          reverse
        >
          <template #title>Porównanie SQL w RDBMS</template>
          <template #description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus
            lobortis condimentum. Aliquam nonummy auctor massa.
          </template>
        </BonusDisplay>
        <BonusDisplay
          number="2"
          buttonLabel="Pobierz poradnik"
          image-url="/src/assets/BONUS_LEAD_MAGNET.png"
          bonus-url="https://promo.plsql.pl/"
        >
          <template #title>Poradnik dla programistów PL/SQL</template>
          <template #description>
            Jeśli chcesz poprawić wydajność i jakość Twoich aplikacji w bazie danych Oracle to
            koniecznie sięgnij po ten poradnik. Poznasz w nim
            <strong>siedem najczęstszych błędów</strong> programistów PL/SQL wraz z analizą kodu i
            zaleceniami.
          </template>
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

    &__text {
      width: min-content;
      display: flex;
      flex-direction: column;
      padding: 120px 0;

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
      max-height: 70%;

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
