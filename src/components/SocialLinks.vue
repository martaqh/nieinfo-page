<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { getSocialLinks } from '@/sanity/service/SocialLinks'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/sanityClient'

interface SocialLink {
  name: string
  url: string
  image: string
  orderNumber: number
}

const socialLinks = ref()

async function fetchSocialLinks() {
  try {
    socialLinks.value = await getSocialLinks()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const builder = imageUrlBuilder(client)

function urlFor(source: string) {
  return builder.image(source)
}

const sortedSocialLinks = computed(() => {
  return socialLinks.value
    ?.slice()
    .sort((a: SocialLink, b: SocialLink) => a.orderNumber - b.orderNumber)
})

onMounted(() => {
  fetchSocialLinks()
})
</script>

<template>
  <nav v-if="socialLinks">
    <BaseButton v-for="link in sortedSocialLinks" :key="link.name" :href="link.url" social>
      <img :src="urlFor(link.icon).url()" :alt="link.name" />
    </BaseButton>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 24px;
    height: 24px;

    @include medium {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
