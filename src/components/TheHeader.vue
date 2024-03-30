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
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  &__logo {
    max-width: 400px;
    margin-top: -55px;
  }

  &__nav {
    font-size: 1.1rem;
    ul {
      display: flex;
      padding: 56px 0;

      li {
        padding: 0 48px;

        &:hover {
          cursor: pointer;
          color: $color-accent;
          text-shadow: $text-shadow;
        }
      }
    }
  }
}
</style>
