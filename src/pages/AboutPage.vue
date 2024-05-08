<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BasePage from '@/pages/BasePage.vue'
import FactItem from '@/components/FactItem.vue'
import { getFacts, getHeadings } from '@/sanity/service/AboutPage'

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

const factsHeading = computed(() => {
  return headings.value?.factsHeading
})

onMounted(() => {
  fetchFacts()
  fetchHeadings()
})
</script>

<template>
  <BasePage>
    <section class="about-page__facts">
      <h2 class="about-page__facts__heading">
        {{ factsHeading }}
      </h2>
      <FactItem
        v-for="item in sortedFacts"
        :key="item.orderNumber"
        :text="item.text"
        :icon="item.iconName"
      />
    </section>
  </BasePage>
</template>

<style lang="scss" scoped>
.about-page {
  &__facts {
    margin: 80px;
    &__heading {
      text-align: center;
      font-family: $font-title;
      margin-bottom: 48px;
      font-size: 3rem;
      font-weight: 800;
      line-height: 120%;
      background: $text-gradient;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      span {
        font-size: 4rem;
      }
    }
  }
}
</style>
