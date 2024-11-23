<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'

const emailTouched = ref(false)
const textareaTouched = ref(false)

const userEmail = ref('')
const userMessage = ref('')

const isSubmitted = ref(false)

const isEmailValid = (input: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  )
}

const invalidEmail = computed(() => {
  return emailTouched.value && !isEmailValid(userEmail.value)
})

const missingMessage = computed(() => {
  return userMessage.value.length === 0 && textareaTouched.value
})

const isFormValid = computed(() => {
  return !invalidEmail.value && !missingMessage.value
})

const isButtonDisabled = computed(() => {
  return userMessage.value.length === 0 || !userEmail.value
})

const messageSentPageUrl = computed(() => {
  return window.location.href + 'message-sent'
})

console.log(messageSentPageUrl.value)

const handleSubmit = (event: Event) => {
  if (isFormValid.value) {
    isSubmitted.value = true
    return true
  } else {
    event.preventDefault()
    return false
  }
}

onMounted(() => {
  isSubmitted.value = false
})
</script>

<template>
  <section class="contact-view" id="contact">
    <SectionTitle class="contact-view__title">
      <span v-show="!isSubmitted"> Napisz do mnie </span>
      <span class="contact-view__sending-message" v-show="isSubmitted">
        Wiadomość w trakcie wysyłania...
      </span>
    </SectionTitle>

    <form
      class="contact-view__form"
      action="https://formsubmit.co/b93e9e71c73f7d9ac5d69e8e0f033eb0"
      method="post"
      novalidate
      @submit="handleSubmit"
      v-show="!isSubmitted"
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
          @blur="emailTouched = true"
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
          v-model="userMessage"
          placeholder="Tu napisz swoją wiadomość..."
          @blur="textareaTouched = true"
          :class="{ invalid: missingMessage }"
          required
        ></textarea>
        <p v-if="missingMessage">Napisz choć kilka słów ;)</p>
      </div>

      <BaseButton type="submit" context="form" :disabled="isButtonDisabled"> Wyślij </BaseButton>

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="messageSentPageUrl" />
    </form>
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
        font-family: $font-main;
        font-weight: 400;

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
