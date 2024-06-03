<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import ProductDisplay from '@/components/ProductDisplay.vue'
import { getBonuses } from '@/sanity/service/HomePage'
import type { Product } from '@/types.ts'

function sortProductsByOrderNumber(products: Product[]): Product[] {
  return products?.slice().sort((a, b) => a.number - b.number)
}

const bonuses = ref()

async function fetchBonuses() {
  try {
    bonuses.value = await getBonuses()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const sortedBonuses = computed(() => {
  return sortProductsByOrderNumber(bonuses.value)
})

onMounted(() => {
  fetchBonuses()
  console.log(sortedBonuses.value)
})
</script>

<template>
  <section class="home__bonuses" id="bonuses">
    <ProductDisplay
      v-for="bonus of sortedBonuses"
      :key="bonus.number"
      :orderNumber="bonus.number"
      :total-bonuses="bonuses.length"
      :title="bonus.title"
      :learning-stage="bonus.learningStage"
      :button-label="bonus.buttonLabel"
      :image-url="bonus.image"
      :description="bonus.description"
      :product-url="bonus.productUrl"
    >
    </ProductDisplay>
  </section>
</template>
