import { Asset } from './asset.model'
import { Entry } from './contentful.model'

export interface SocialMedia {
  id: string
  icon: Entry<Asset>
  link: string
}
