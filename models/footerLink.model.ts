import { Entry } from './contentful.model'

export interface ILink {
  name: string
  link: string
}

export interface FooterLink {
  title: string
  links: Entry<ILink>[]
}

export interface FooterLinkFormatted extends Omit<FooterLink, 'links'> {
  links: ILink[]
  uniqueId: string
}
