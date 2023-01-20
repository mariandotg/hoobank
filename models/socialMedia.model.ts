import { Asset, Image } from './asset.model'
import { Entry } from './contentful.model'

export interface SocialMedia {
  id: string
  image: Entry<Asset>
  link: string
}

export interface SocialMediaFormatted extends Omit<SocialMedia, 'image'> {
  image: Image
  uniqueId: string
}
