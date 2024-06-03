<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import ProductDisplay from '@/components/ProductDisplay.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { getCourses } from '@/sanity/service/HomePage'
import type { Product } from '@/types.ts'

function sortProductsByOrderNumber(products: Product[]): Product[] {
  return products?.slice().sort((a, b) => a.number - b.number)
}

const courses: Ref<Product[]> = ref([])

async function fetchBonuses() {
  try {
    courses.value = await getCourses()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const sortedCourses = computed(() => {
  return sortProductsByOrderNumber(courses.value)
})

onMounted(() => {
  fetchBonuses()
})
</script>

<template>
  <section class="courses" id="courses">
    <SectionTitle class="courses__heading">Czujesz głód wiedzy? Dołącz do kursu!</SectionTitle>
    <ProductDisplay
      v-for="course of sortedCourses"
      :key="course.number"
      :number="course.number"
      :total-bonuses="courses.length"
      :title="course.title"
      :learning-stage="course.learningStage"
      :button-label="course.buttonLabel"
      :image="course.image"
      :description="course.description"
      :product-url="course.productUrl"
    >
    </ProductDisplay>
  </section>
</template>

<style lang="scss" scoped>
.courses {
  margin-top: 80px;
  scroll-margin-top: 160px;

  &__heading {
    text-align: center;
  }
  img {
    max-width: 500px;
  }
}
</style>
