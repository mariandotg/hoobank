import {
  Asset,
  Client,
  Feature,
  Feedback,
  FooterLink,
  NavLink,
  SocialMedia,
  Stat,
  Entry,
  AssetsFormatted,
  ClientFormatted,
  FeatureFormatted,
  FeedbackFormatted,
  FooterLinkFormatted,
  NavLinkFormatted,
  SocialMediaFormatted,
  StatFormatted,
} from './index'

export type Content =
  | Asset
  | NavLink
  | Feature
  | Feedback
  | Stat
  | FooterLink
  | SocialMedia
  | Client

export type ContentFormatted =
  | AssetsFormatted
  | NavLinkFormatted
  | FeatureFormatted
  | FeedbackFormatted
  | StatFormatted
  | FooterLinkFormatted
  | SocialMediaFormatted
  | ClientFormatted

export interface RawData {
  [key: string]: any
  assets: Entry<Asset>[]
  navLinks: Entry<NavLink>[]
  features: Entry<Feature>[]
  feedback: Entry<Feedback>[]
  stats: Entry<Stat>[]
  footerLinks: Entry<FooterLink>[]
  socialMedia: Entry<SocialMedia>[]
  clients: Entry<Client>[]
}

export interface DataFormatted {
  [key: string]: any
  assets: AssetsFormatted
  navLinks: NavLinkFormatted[]
  features: FeatureFormatted[]
  feedback: FeedbackFormatted[]
  stats: StatFormatted[]
  footerLinks: FooterLinkFormatted[]
  socialMedia: SocialMediaFormatted[]
  clients: ClientFormatted[]
}
