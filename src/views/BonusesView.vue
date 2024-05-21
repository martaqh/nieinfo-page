<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BonusDisplay from '@/components/BonusDisplay.vue'
import { getBonuses } from '@/sanity/service/HomePage'

const bonuses = ref()

async function fetchBonuses() {
  try {
    bonuses.value = await getBonuses()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(() => {
  fetchBonuses()
})
</script>

<template>
  <section class="home__bonuses" id="bonuses">
    <BonusDisplay
      v-for="bonus of bonuses"
      :key="bonus.number"
      :number="bonus.number"
      :total-bonuses="bonuses.length"
      :title="bonus.title"
      :learning-stage="bonus.learningStage"
      :button-label="bonus.buttonLabel"
      :image-url="bonus.image"
      :description="bonus.description"
      :bonus-url="bonus.bonusUrl"
    >
    </BonusDisplay>
  </section>
</template>
