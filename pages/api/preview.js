import { createClient } from 'contentful'

const preview = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY,
  })

  const project = await client.getEntry(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!project) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: project.id })
  res.end()
}

export default preview
