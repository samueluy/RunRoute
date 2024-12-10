export interface Route {
  id: string
  name: string
  description: string
  distance: number
  elevationGain: number
  popularity: number
  coordinates: [number, number][]
  ratings: {
    safety: number
    scenery: number
    quality: number
  }
  reviews: Review[]
  location: string
  tags: string[]
}

export interface Review {
  id: string
  userId: string
  routeId: string
  safety: number
  scenery: number
  quality: number
  comment?: string
  createdAt: string
}

export interface Rating {
  safety: number
  scenery: number
  quality: number
}