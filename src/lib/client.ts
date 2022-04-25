import sanityClient        from '@sanity/client'
import imageUrlBuilder     from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

export const client = sanityClient({
  projectId: 'pbcu8gkb',
  dataset: 'production',
  apiVersion: '2022-04-25',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder: ImageUrlBuilder = imageUrlBuilder(client)

export const urlFor = (source: string) => builder.image(source)
