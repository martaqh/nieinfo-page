<script setup lang="ts">
import NavLink from '@/components/NavLink.vue'
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
    flex-direction: column;
  }

  &__logo {
    img {
      max-width: 300px;
      padding-left: 45px;
    }
  }

  &__nav {
    font-size: 1.1rem;

    @include medium {
      font-size: 1rem;
    }

    @include small {
      width: 100%;
      font-size: 0.9rem;
      border: 1px solid white;
      display: flex;
      justify-content: center;
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
    }
  }
}
</style>
