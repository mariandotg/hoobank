import { Entry } from './contentful.model'

export type ImageDetails = {
  width: number
  height: number
}

export type FileDetails = {
  image: ImageDetails
  size: number
}

export type File = {
  contentType: string
  details: FileDetails
  filename: string
  url: string
}

export type Image = {
  title: string
  description: string
  file: File
}

export type Asset = {
  title: string
  image: Entry<Image>
}
