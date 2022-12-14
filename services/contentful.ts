const contentfulSDK = require('contentful')

const client = contentfulSDK.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const getEntries = async (contentType: string) => {
  const entries = await client.getEntries({
    content_type: contentType,
    include: 1,
  })

  return entries.items
}

const contentful = {
  getEntries,
}

export default contentful
