import { client } from '@/sanity/sanityClient'

export async function getSocialLinks() {
  const socialLinks = await client.fetch('*[_type == "socialMedia"]')
  return socialLinks
}
