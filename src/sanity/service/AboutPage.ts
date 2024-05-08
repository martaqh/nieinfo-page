import { client } from '@/sanity/sanityClient'

export async function getHeadings() {
  const headings = await client.fetch(
    '*[_type == "about"] {factsHeading, knowledgeSharingHeading, valuesHeading}'
  )
  return headings[0]
}

export async function getFacts() {
  const facts = await client.fetch('*[_type == "fact"]')
  return facts
}
