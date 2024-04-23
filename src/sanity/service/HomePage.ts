import { client } from '@/sanity/sanityClient'

export async function getHeroData() {
  const heroData = await client.fetch('*[_type == "hero"]')
  return heroData
}

export async function getBonuses() {
  const bonuses = await client.fetch('*[_type == "bonus"]')
  return bonuses
}
