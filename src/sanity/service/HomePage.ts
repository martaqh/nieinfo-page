import { client } from '@/sanity/sanityClient'

export async function getHeroData() {
  const heroData = await client.fetch('*[_type == "hero"]')
  return heroData
}

export async function getBonuses() {
  const bonuses = await client.fetch('*[_type == "product" && category == "bonus"]')
  return bonuses
}

export async function getCourses() {
  const bonuses = await client.fetch('*[_type == "product" && category == "course"]')
  return bonuses
}
