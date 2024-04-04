<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseDivider from '@/components/BaseDivider.vue'

const links = {
  twitter: {
    path: 'http://x.com/nieinformatyk',
    icon: 'src/assets/social-media/x-twitter.svg'
  },
  facebook: {
    path: 'http://facebook.com/nieinformatyk',
    icon: 'src/assets/social-media/facebook.svg'
  },
  youtube: {
    path: 'http://youtube.com/nieinformatyk',
    icon: 'src/assets/social-media/youtube.svg'
  },
  linkedin: {
    path: 'http://linkedin.com/nieinformatyk',
    icon: 'src/assets/social-media/linkedin.svg'
  },
  instagram: {
    path: 'http://instagram.com/nieinformatyk',
    icon: 'src/assets/social-media/instagram.svg'
  }
}
</script>

<template>
  <footer class="footer">
    <BaseDivider reverse />
    <div class="footer__content">
      <span>kontakt@nieinformatyk.pl</span>
      <nav>
        <BaseButton v-for="link in links" :key="link.path" :href="link.path" social
          ><img :src="link.icon" />
        </BaseButton>
      </nav>
      <a href="https://nieinformatyk.pl/regulamin">Regulamin</a>
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
    padding: 64px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
}
</style>
