<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BasePage from '@/pages/BasePage.vue'
import FactItem from '@/components/FactItem.vue'
import { getFacts, getValues, getAboutData } from '@/sanity/service/AboutPage'
import SocialLinks from '@/components/SocialLinks.vue'
import BaseCard from '@/components/BaseCard.vue'

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
  <BasePage>
    <div class="about">
      <section class="about__facts-list">
        <h2 class="about__facts-list__heading">
          {{ about?.factsHeading }}
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
      <section class="about__knowledge-sharing">
        <h2 class="about__knowledge-sharing__heading">{{ about?.knowledgeSharingHeading }}</h2>
        <p>{{ about?.knowledgeSharingDescription }}</p>
      </section>
      <section class="about__values">
        <h2 class="about__values__heading">
          {{ about?.valuesHeading }}
        </h2>
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
  </BasePage>
</template>

<style lang="scss" scoped>
.about {
  //padding: 0 80px;

  h2 {
    font-family: $font-title;
    font-weight: 600;
    background: $text-gradient;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  section {
    margin-bottom: 160px;
  }

  &__facts-list {
    margin-top: 80px;

    @include medium {
      margin: 64px 48px;
    }

    @include small {
      margin: 64px 24px;
    }

    a {
      text-transform: uppercase;
      color: white;
    }

    &__heading {
      text-align: center;
      font-family: $font-title;
      margin-bottom: 48px;
      font-size: 3.5rem;

      @include medium {
        font-size: 3rem;
      }

      @include small {
        font-size: 2rem;
      }
    }
  }
  &__knowledge-sharing {
    font-size: 1.2rem;
    display: flex;
    gap: 180px;

    &__heading {
      width: min-content;
      font-size: 3rem;
    }
  }
  &__values {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 120px;

    &__heading {
      font-size: 3rem;
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 48px;
    }
  }
}
</style>
