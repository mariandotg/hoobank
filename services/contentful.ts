import contentfulDataAdapter from '../adapters/contentfulDataAdapter'

import { Data } from '../models'

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

const getContentfulContent = async () => {
  const keys = [
    'navLink',
    'feature',
    'feedback',
    'stat',
    'footerLink',
    'socialMedia',
    'client',
  ]

  const data: Partial<Data> = {}

  for (const key of keys) {
    const entry = await getEntries(key)
    const formattedEntry = contentfulDataAdapter(entry)
    data[key] = formattedEntry
  }

  return data
}

const contentful = {
  getContentfulContent,
}

export default contentful
