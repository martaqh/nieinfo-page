<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'

const inputTouched = ref(false)
const submitClicked = ref(false)
const userEmail = ref('')

const isEmailValid = (input: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  )
}

const invalidEmail = computed(() => {
  return inputTouched.value && !isEmailValid(userEmail.value)
})

const messageSent = computed(() => {
  return isEmailValid(userEmail.value) && submitClicked.value
})

const handleSubmit = () => {
  submitClicked.value = true
  !isEmailValid(userEmail.value) ? (submitClicked.value = false) : null
}
</script>

<template>
  <section class="contact-view" id="contact">
    <SectionTitle class="contact-view__title">Napisz do mnie</SectionTitle>

    <form
      class="contact-view__form"
      action="https://formsubmit.co/2f9079899edc929c8215d823594a41e6"
      method="post"
      novalidate
      @submit.prevent="handleSubmit"
      v-if="!messageSent"
    >
      <div class="contact-view__form-item">
        <label for="name">Imię:</label>
        <input type="text" id="name" name="name" placeholder="Wpisz swoje imię" />
      </div>
      <div class="contact-view__form-item">
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Wpisz swój adres e-mail"
          v-model="userEmail"
          @blur="inputTouched = true"
          :class="{ invalid: invalidEmail }"
          required
        />
        <p v-if="invalidEmail">Podany adres e-mail jest niepoprawny. Wpisz właściwy adres.</p>
      </div>

      <div class="contact-view__form-item">
        <label for="message">Wiadomość:</label>
        <textarea
          id="message"
          name="message"
          rows="10"
          cols="50"
          placeholder="Tu napisz swoją wiadomość..."
        ></textarea>
      </div>

      <BaseButton
        type="submit"
        context="form"
        @click="handleSubmit()"
        :disabled="!inputTouched || invalidEmail"
      >
        Wyślij
      </BaseButton>
    </form>
    <h6 v-if="messageSent">Dzięki za wiadomość! Niebawem ją odczytam.</h6>
  </section>
</template>

<style lang="scss" scoped>
.contact-view {
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;

  &__title {
    justify-self: center;
    margin-bottom: 48px;
  }

  &__form {
    max-width: 400px;
    width: 100%;
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 48px;

    &-item {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 12px;
      }

      input,
      textarea {
        padding: 12px;
        background: $color-background;
        border: 1px solid $color-accent;
        border-radius: $border-radius;

        &:hover {
          outline: 2px solid $color-accent;
          box-shadow: $box-shadow;
          cursor: pointer;
        }
        &:focus-visible {
          outline: 2px solid $color-accent;
          border: 1px solid $color-accent;
        }
        &.invalid {
          outline: 3px solid $color-error;
          border: 1px solid $color-error;
          box-shadow: none;
        }
      }

      p {
        color: $color-error;
        font-size: 0.8rem;
        font-weight: 400;
        margin-top: 8px;
      }
    }
  }
}
</style>
