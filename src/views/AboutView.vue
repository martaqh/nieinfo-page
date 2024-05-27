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

interface LifeValue {
  orderNumber: number
  name: string
  description: string
  iconName: string
}

const facts = ref<Fact[]>([])
const lifeValues = ref<LifeValue[]>([])

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
    lifeValues.value = await getValues()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

async function fetchAboutData() {
  try {
    about.value = await getAboutData()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const sortedFacts = computed(() => {
  return facts.value?.slice().sort((a: Fact, b: Fact) => a.orderNumber - b.orderNumber)
})

const sortedValues = computed(() => {
  return lifeValues.value
    ?.slice()
    .sort((a: LifeValue, b: LifeValue) => a.orderNumber - b.orderNumber)
})

onMounted(() => {
  fetchFacts()
  fetchValues()
  fetchAboutData()
})
</script>

<template>
  <div class="about" id="about">
    <section class="about__facts-list">
      <SectionTitle class="about__facts-list__heading">
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
      <SectionTitle class="about__knowledge-sharing__heading">{{
        about?.knowledgeSharingHeading
      }}</SectionTitle>
      <div class="about__knowledge-sharing__content">
        <img class="about__knowledge-sharing__content--picture" src="@/assets/sgh4.jpg" />
        <p class="about__knowledge-sharing__content--text">
          {{ about?.knowledgeSharingDescription }}
        </p>
      </div>
    </section>
    <section class="about__values">
      <SectionTitle class="about__values__heading">
        {{ about?.valuesHeading }}
      </SectionTitle>
      <div class="about__values__cards-list">
        <BaseCard
          v-for="value of sortedValues"
          :key="value.orderNumber"
          :title="value.name"
          :text="value.description"
          :icon-name="value.iconName"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 0 48px;
  scroll-margin-top: 160px;

  @include medium {
    padding: 0;
  }

  @include small {
    padding: 0;
  }
  section {
    margin-bottom: 200px;

    @include medium {
      margin-bottom: 120px;
    }

    @include small {
      margin-bottom: 120px;
    }
  }

  &__facts-list {
    margin-top: 80px;
    @include medium {
      font-size: 1rem;
    }

    @include small {
      margin-top: 64px;
    }

    a {
      text-transform: uppercase;
      color: white;
    }

    &__heading {
      margin-bottom: 48px;
      text-align: end;
    }
  }
  &__knowledge-sharing {
    font-size: 1.2rem;
    display: flex;
    gap: 80px;

    @include medium {
      gap: 64px;
    }

    @include small {
      gap: 64px;
      flex-direction: column;
    }

    &__content {
      &--text {
        @include medium {
          font-size: 1rem;
        }

        @include small {
          font-size: 0.9rem;
        }
      }
      &--picture {
        max-width: 300px;
        overflow: hidden;
        float: left;
        margin: 8px 16px 8px 0;
        filter: sepia(1) saturate(5) hue-rotate(160deg) brightness(0.9);
        border-radius: $border-radius;
      }

      @include small {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    }
  }
  &__values {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 120px;

    @include small {
      gap: 80px;
      font-size: 0.9rem;
    }

    &__heading {
      text-align: center;

      @include small {
        text-align: start;
      }
    }

    &__cards-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 64px;

      @include small {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
