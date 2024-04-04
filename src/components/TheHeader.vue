<script setup lang="ts">
import BaseDivider from '@/components/BaseDivider.vue'
</script>

<template>
  <header class="header">
    <img class="header__logo" src="/src/assets/logo.svg" />
    <nav class="header__nav">
      <ul>
        <li>O mnie</li>
        <li>Produkty</li>
        <li>Kontakt</li>
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
    max-height: 180px;
    margin-top: -10px;
    margin-left: -20px;
  }

  &__nav {
    font-size: 1.1rem;
    ul {
      display: flex;

      li {
        padding: 0 48px;

        &:hover {
          cursor: pointer;
          color: $color-accent;
          text-shadow: $text-shadow;
        }
      }
      li:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
