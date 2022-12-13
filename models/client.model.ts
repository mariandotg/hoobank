import { Asset } from './asset.model'
import { Entry } from './contentful.model'

export interface Client {
  id: string
  logo: Entry<Asset>
}
