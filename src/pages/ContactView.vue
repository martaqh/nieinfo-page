<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
</script>

<template>
  <div class="contact-view">
    <SectionTitle class="contact-view__title">Napisz do mnie</SectionTitle>
    <span>kontakt@nieinformatyk.pl</span>
    <form action="https://formsubmit.co/2f9079899edc929c8215d823594a41e6" method="post">
      <label for="name">Imię:</label><br />
      <input type="text" id="name" name="name" required /><br />

      <label for="email">E-mail:</label><br />
      <input type="email" id="email" name="email" required /><br />

      <label for="message">Wiadomość:</label><br />
      <textarea id="message" name="message" rows="4" cols="50" required></textarea><br />

      <input type="submit" value="Wyślij" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact-view {
  &__title {
    text-align: center;
  }
}
</style>
