<script setup lang="ts">
import BasePage from '@/pages/BasePage.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseDivider from '@/components/BaseDivider.vue'
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
      <BaseDivider />
      <section class="home__bonuses">
        <div class="home__bonuses__ebook">
          <img class="home__bonuses__ebook__image" src="/src/assets/ecover.png" />
          <div class="home__bonuses__ebook__text">
            <h6>#bonus 1</h6>
            <h2>Ebook dla początkujących</h2>
            <p>
              Chcesz zostać programistą baz danych, ale informatyka to dla Ciebie zupełna nowość?
              <br />
              Jeśli myślisz o przebranżowieniu do IT, to ten e-book jest
              <strong> właśnie dla Ciebie!</strong>
            </p>
            <BaseButton>Pobierz ebook</BaseButton>
          </div>
        </div>
        <div class="home__bonuses__ebook reverse">
          <img class="home__bonuses__ebook__image" src="/src/assets/BONUS_LEAD_MAGNET.png" />
          <div class="home__bonuses__ebook__text">
            <h6>#bonus 2</h6>
            <h2>Poradnik dla programistów PL/SQL</h2>
            <p>
              Jeśli chcesz poprawić wydajność i jakość Twoich aplikacji w bazie danych Oracle, to
              koniecznie sięgnij po ten poradnik. Dzięki niemu poznasz
              <strong>SIEDEM&nbsp;najczęstszych błędów</strong>
              programistów PL/SQL wraz z analizą kodu i zaleceniami.
            </p>
            <BaseButton>Pobierz poradnik</BaseButton>
          </div>
        </div>
      </section>
      <BaseDivider reverse />
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
    padding: 0 48px;

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

    &__ebook {
      margin: 80px;
      display: flex;
      justify-content: space-between;
      gap: 120px;
      height: fit-content;

      &__image {
        max-width: 500px;
        object-fit: cover;
        overflow: hidden;
      }

      &__text {
        min-width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 48px;
        line-height: 150%;

        h6 {
          font-size: 2rem;
          font-weight: 200;
          color: $color-text-light;
        }

        h2 {
          font-family: $font-title;
          font-size: 2rem;
          font-weight: 600;
          line-height: 120%;
        }

        p {
          margin: 24px 0;
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 150%;

          strong {
            text-transform: uppercase;
            font-weight: 700;
          }
        }
      }
      &.reverse {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
