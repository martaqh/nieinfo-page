<script setup lang="ts">
import { ref } from 'vue'
import NavLink from '@/components/NavLink.vue'
import BaseButton from '@/components/BaseButton.vue'

const menuModal = ref<HTMLDialogElement | null>(null)

const openModal = () => {
  if (menuModal.value) {
    menuModal.value.showModal()
  }
}

// Method to close the dialog
const closeModal = () => {
  if (menuModal.value) {
    menuModal.value.close()
  }
}
</script>

<template>
  <header class="header">
    <NavLink class="header__logo" to="/">
      <img src="/src/assets/logo.svg" />
    </NavLink>

    <nav class="header__nav">
      <ul>
        <li><NavLink>O mnie</NavLink></li>
        <li><NavLink>Produkty</NavLink></li>
        <li><NavLink>Kontakt</NavLink></li>
      </ul>
    </nav>
    <BaseButton class="header__menu" plain @click="openModal">
      <span class="material-symbols-outlined menu">menu</span>
    </BaseButton>

    <dialog class="header__nav--mobile" ref="menuModal">
      <BaseButton class="header__nav--mobile__close" plain @click="closeModal">
        <span class="material-symbols-outlined close">close</span>
      </BaseButton>

      <ul class="header__nav--mobile__links">
        <li><NavLink>O mnie</NavLink></li>
        <li><NavLink>Produkty</NavLink></li>
        <li><NavLink>Kontakt</NavLink></li>
      </ul>
    </dialog>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 48px 0;

  @include small {
    padding: 32px 24px;
  }

  &__logo {
    display: flex;
    align-items: center;
    img {
      max-width: 300px;
      padding-left: 45px;

      @include small {
        max-width: 250px;

        padding: 0;
      }

      @include x-small {
        max-width: 200px;
      }
    }
  }

  &__nav {
    font-size: 1.1rem;

    @include medium {
      font-size: 1rem;
    }

    @include small {
      display: none;
    }
    ul {
      display: flex;

      li {
        padding: 0 48px;

        @include medium {
          padding: 0 32px;
        }

        @include small {
          padding: 24px 32px;
        }
      }

      li:last-child {
        padding-right: 48px;
      }
    }

    &--mobile {
      width: 100%;
      min-height: 100vh;
      background: $color-background;
      border: none;
      color: $color-text;
      font-size: 2rem;
      margin: 0;

      &__links {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 64px;
        margin-top: 120px;
      }

      &__close {
        span {
          font-size: 3rem;
        }
      }
    }
  }

  &__menu {
    cursor: pointer;
    align-self: flex-start;

    span {
      font-size: 3rem;

      @include x-small {
        font-size: 2rem;
      }
    }

    @include medium {
      display: none;
    }

    @include large {
      display: none;
    }

    @include x-large {
      display: none;
    }
  }
}
</style>
