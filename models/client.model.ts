import { Asset, Image } from './asset.model'
import { Entry } from './contentful.model'

export interface Client {
  id: string
  image: Entry<Asset>
}

export interface ClientFormatted extends Omit<Client, 'image'> {
  image: Image
  uniqueId: string
}
