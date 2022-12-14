import { Asset } from './asset.model'
import { Entry } from './contentful.model'

export interface Feature {
  title: string
  content: string
  image: Entry<Asset>
  id: string
}
