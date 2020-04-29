import { createClient as createContentfulClient } from 'contentful'

export function createClient({ preview = false } = {}) {
  const client = createContentfulClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_API_KEY
      : process.env.CONTENTFUL_API_KEY,
    host: preview ? 'preview.contentful.com' : undefined,
  })

  return client
}
