import { Asset } from './asset.model'
import { Entry } from './contentful.model'

export interface Feedback {
  name: string
  title: string
  content: string
  image: Entry<Asset>
  id: string
}
