import contentfulAssetsAdapter from '../adapters/contentfulAssetsAdapter'
import contentfulDataAdapter from '../adapters/contentfulDataAdapter'

import keys from '../keys'

import { Asset, Content, DataFormatted, Entry } from '../models'

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
  const data: Partial<DataFormatted> = {}

  for (const key of keys) {
    const entry: Entry<Content>[] = await getEntries(key[0])
    const formattedEntry =
      key[0] === 'asset'
        ? contentfulAssetsAdapter(entry as Entry<Asset>[])
        : contentfulDataAdapter(entry)
    data[key[1]] = formattedEntry
  }
  return data as DataFormatted
}

const contentful = {
  getContentfulContent,
}

export default contentful
