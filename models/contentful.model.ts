interface Sys {
  space: object
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environments: object
  revision: number
  contentType: object
  locale: string
}

export interface Entry<T> {
  fields: T
  metadata: object
  sys: Sys
}

export interface BaseEntry<T> {
  items: Entry<T>[]
}
