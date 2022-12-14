import {
  Client,
  Feature,
  Feedback,
  FooterLink,
  NavLink,
  SocialMedia,
  Stat,
} from './index'

export interface Data {
  [key: string]: any
  navLink: NavLink
  feature: Feature
  feedback: Feedback
  stat: Stat
  footerLink: FooterLink
  socialMedia: SocialMedia
  client: Client
}
