import { Asset } from './asset.model'
import { Entry } from './contentful.model'

export interface SocialMedia {
  id: string
  image: Entry<Asset>
  link: string
}
