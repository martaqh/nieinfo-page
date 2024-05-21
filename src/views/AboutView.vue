<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import FactItem from '@/components/FactItem.vue'
import { getFacts, getValues, getAboutData } from '@/sanity/service/AboutView'
import SocialLinks from '@/components/SocialLinks.vue'
import BaseCard from '@/components/BaseCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

interface Fact {
  orderNumber: number
  iconName: string
  text: string
}

interface Value {
  orderNumber: number
  name: string
  description: string
}

const facts = ref<Fact[]>([])
const values = ref<Value[]>([])

const about = ref()

async function fetchFacts() {
  try {
    facts.value = await getFacts()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

async function fetchValues() {
  try {
    values.value = await getValues()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

async function fetchAboutData() {
  try {
    about.value = await getAboutData()
    console.log(about.value)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const sortedFacts = computed(() => {
  return facts.value?.slice().sort((a: Fact, b: Fact) => a.orderNumber - b.orderNumber)
})

const sortedValues = computed(() => {
  return values.value?.slice().sort((a: Value, b: Value) => a.orderNumber - b.orderNumber)
})

onMounted(() => {
  fetchFacts()
  fetchValues()
  fetchAboutData()
})
</script>

<template>
  <div class="about">
    <section class="about__facts-list">
      <SectionTitle id="about" class="about__facts-list__heading">
        {{ about?.factsHeading }}
      </SectionTitle>

      <FactItem
        v-for="item in sortedFacts"
        :key="item.orderNumber"
        :text="item.text"
        :icon="item.iconName"
      >
        <SocialLinks v-if="item.iconName === 'groups'" />
      </FactItem>
    </section>
    <section class="about__knowledge-sharing">
      <SectionTitle class="about__knowledge-sharing__title">{{
        about?.knowledgeSharingHeading
      }}</SectionTitle>
      <p class="about__knowledge-sharing__text">{{ about?.knowledgeSharingDescription }}</p>
    </section>
    <section class="about__values">
      <SectionTitle>
        {{ about?.valuesHeading }}
      </SectionTitle>
      <div class="about__values__cards">
        <BaseCard
          v-for="value of sortedValues"
          :key="value.orderNumber"
          :title="value.name"
          :text="value.description"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  section {
    margin-bottom: 200px;
  }

  &__facts-list {
    margin-top: 80px;
    @include medium {
      font-size: 1rem;
    }

    a {
      text-transform: uppercase;
      color: white;
    }

    &__heading {
      text-align: end;
      margin-bottom: 48px;
    }
  }
  &__knowledge-sharing {
    font-size: 1.2rem;
    display: flex;
    gap: 180px;

    @include medium {
      flex-direction: column;
      gap: 80px;
    }

    @include small {
      flex-direction: column;
      gap: 64px;
    }

    &__text {
      @include medium {
        font-size: 1rem;
      }

      @include small {
        font-size: 0.9rem;
      }
    }
  }
  &__values {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 120px;

    &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 48px;
    }
  }
}
</style>
