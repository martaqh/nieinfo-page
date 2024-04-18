<script setup lang="ts">
import NavLink from '@/components/NavLink.vue'
</script>

<template>
  <header class="header">
    <NavLink class="header__logo--link" to="/">
      <img class="header__logo" src="/src/assets/logo.svg" />
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

  &__logo {
    max-width: 400px;
    max-height: 200px;
    margin: -30px 0 -30px -20px;

    @include medium {
      max-width: 300px;
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
      }
    }
  }
}
</style>
