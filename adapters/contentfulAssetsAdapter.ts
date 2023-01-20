import { Asset, AssetsFormatted, Entry } from '../models'

const contentfulAssetsAdapter = (entry: Entry<Asset>[]) => {
  const formattedAssets = entry.reduce<AssetsFormatted>(
    (prev: AssetsFormatted, acc: Entry<Asset>) => {
      return { ...prev, [acc.fields.title]: acc.fields.image.fields }
    },
    {}
  )
  return formattedAssets
}

export default contentfulAssetsAdapter
