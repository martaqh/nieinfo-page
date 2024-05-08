<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BasePage from '@/pages/BasePage.vue'
import FactItem from '@/components/FactItem.vue'
import { getFacts, getHeadings } from '@/sanity/service/AboutPage'
import SocialLinks from '@/components/SocialLinks.vue'

interface Fact {
  orderNumber: number
  iconName: string
  text: string
}

const facts = ref<Fact[]>([])
const headings = ref()

async function fetchFacts() {
  try {
    facts.value = await getFacts()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

async function fetchHeadings() {
  try {
    headings.value = await getHeadings()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const sortedFacts = computed(() => {
  return facts.value?.slice().sort((a: Fact, b: Fact) => a.orderNumber - b.orderNumber)
})

onMounted(() => {
  fetchFacts()
  fetchHeadings()
})
</script>

<template>
  <BasePage>
    <section class="about-page__facts-list">
      <h2 class="about-page__facts-list__heading">
        {{ headings?.factsHeading }}
      </h2>

      <FactItem
        v-for="item in sortedFacts"
        :key="item.orderNumber"
        :text="item.text"
        :icon="item.iconName"
      >
        <SocialLinks v-if="item.iconName === 'groups'" />
      </FactItem>
    </section>
  </BasePage>
</template>

<style lang="scss" scoped>
.about-page {
  &__facts-list {
    margin: 80px;

    @include medium {
      margin: 64px 48px;
    }

    @include small {
      margin: 64px 24px;
    }

    &__heading {
      text-align: center;
      font-family: $font-title;
      margin-bottom: 48px;
      font-size: 3.5rem;
      font-weight: 800;
      background: $text-gradient;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      @include medium {
        font-size: 3rem;
      }

      @include small {
        font-size: 2rem;
      }
    }
    a {
      text-transform: uppercase;
      color: white;
    }
  }
}
</style>
