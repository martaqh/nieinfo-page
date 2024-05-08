<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import NavLink from '@/components/NavLink.vue'
import BaseButton from '@/components/BaseButton.vue'
import { getNavLinks } from '@/sanity/service/Header'

interface NavLink {
  orderNumber: number
  label: string
  path: string
}

const navLinks = ref()

async function fetchNavLinks() {
  try {
    navLinks.value = await getNavLinks()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const sortedNavLinks = computed(() => {
  return navLinks.value?.slice().sort((a: NavLink, b: NavLink) => a.orderNumber - b.orderNumber)
})

const desktopNavLinks = computed(() => {
  return sortedNavLinks.value?.filter((link: NavLink) => link.path !== '/')
})

const menuModal = ref<HTMLDialogElement | null>(null)

const openModal = () => {
  if (menuModal.value) {
    menuModal.value.showModal()
  }
}

const closeModal = () => {
  if (menuModal.value) {
    menuModal.value.close()
  }
}

onMounted(() => {
  fetchNavLinks()
})
</script>

<template>
  <header class="header">
    <NavLink class="header__logo" to="/">
      <img src="/src/assets/logo.svg" />
    </NavLink>

    <nav class="header__nav">
      <ul>
        <li v-for="link of desktopNavLinks" :key="link.orderNumber">
          <NavLink :to="link.path">{{ link.label }}</NavLink>
        </li>
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
        <li v-for="link of sortedNavLinks" :key="link.orderNumber">
          <NavLink :to="link.path" @click="closeModal">{{ link.label }}</NavLink>
        </li>
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
      border: none;
      color: white;
      background-color: inherit;
      font-size: 1.2rem;
      margin: 0;

      &::backdrop {
        min-height: 100vh;
        background: $color-background;
        opacity: 0.9;
      }

      &__links {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 48px;
        padding: 48px 0;
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
