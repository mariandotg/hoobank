export interface Stat {
  title: string
  value: string
  id: string
}

export interface StatFormatted extends Stat {
  uniqueId: string
}
