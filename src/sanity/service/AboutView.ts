import { client } from '@/sanity/sanityClient'

export async function getFacts() {
  const facts = await client.fetch('*[_type == "fact"]')
  return facts
}

export async function getValues() {
  const values = await client.fetch('*[_type == "value"]')
  return values
}

export async function getAboutData() {
  const about = await client.fetch('*[_type == "about"]')
  return about[0]
}
