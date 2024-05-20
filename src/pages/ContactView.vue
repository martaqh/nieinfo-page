<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="contact-view" id="contact">
    <SectionTitle class="contact-view__title">Napisz do mnie</SectionTitle>

    <form action="https://formsubmit.co/2f9079899edc929c8215d823594a41e6" method="post">
      <label for="name">Imię:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Wiadomość:</label>
      <textarea id="message" name="message" rows="10" cols="50" required></textarea>

      <BaseButton type="submit"> Wyślij </BaseButton>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.contact-view {
  padding: 64px 0;
  display: grid;

  &__title {
    text-align: center;
    margin-bottom: 48px;
  }

  form {
    max-width: 400px;
    width: 100%;
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 12px;

    input,
    textarea {
      padding: 12px;
      margin-bottom: 32px;
      background: $color-background;
      border: 1px solid $color-accent;

      &:hover {
        outline: 2px solid $color-accent;
        box-shadow: $box-shadow;
        cursor: pointer;
      }
    }
  }
}
</style>
