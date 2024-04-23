import { client } from '@/sanity/sanityClient'

export async function getNavLinks() {
  const navLinks = await client.fetch('*[_type == "header"]')
  return navLinks
}
