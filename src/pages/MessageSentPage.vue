<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <main class="message-sent">
    <SectionTitle class="message-sent__heading">
      Twoja wiadomość została dostarczona! <br />
      Niebawem ją odczytam.</SectionTitle
    >
    <BaseButton class="message-sent__return-button" to="/">Wróć na stronę główną</BaseButton>
  </main>
</template>

<style lang="scss" scoped>
.message-sent {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px;
  height: 50vh;

  &__heading {
    text-align: center;
  }

  &__return-button {
    margin-top: 80px;
  }
}
</style>
