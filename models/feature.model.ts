import { Asset, Image } from './asset.model'
import { Entry } from './contentful.model'

export interface Feature {
  title: string
  content: string
  image: Entry<Asset>
  id: string
}

export interface FeatureFormatted extends Omit<Feature, 'image'> {
  image: Image
  uniqueId: string
}
