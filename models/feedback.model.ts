import { Asset, Image } from './asset.model'
import { Entry } from './contentful.model'

export interface Feedback {
  name: string
  title: string
  content: string
  image: Entry<Asset>
  id: string
}

export interface FeedbackFormatted extends Omit<Feedback, 'image'> {
  image: Image
  uniqueId: string
}
