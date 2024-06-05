<script setup lang="ts">
import BaseDivider from '@/components/BaseDivider.vue'
import NavLink from '@/components/NavLink.vue'
import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
  <footer class="footer">
    <BaseDivider />
    <div class="footer__content">
      <span>kontakt@nieinformatyk.pl</span>
      <SocialLinks />
      <NavLink href="https://nieinformatyk.pl/regulamin" blank>Regulamin</NavLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 1.1rem;

  &__content {
    padding: 64px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include small {
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
