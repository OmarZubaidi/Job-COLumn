export interface item {
  index: number,
  latitude: number,
  longitude: number,
  name: string
}

export interface modifiers {
  active: boolean
  disabled: boolean
  matchesPredicate: boolean
}