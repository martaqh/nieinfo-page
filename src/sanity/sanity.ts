// sanity.js
import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: '7u0krvtz',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2022-03-07' // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq

export async function getHeroData() {
  const heroData = await client.fetch('*[_type == "hero"]')
  console.log(heroData)
  return heroData
}

export async function getBonuses() {
  const bonuses = await client.fetch('*[_type == "bonus"]')
  return bonuses
}
