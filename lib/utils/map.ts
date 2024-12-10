import { Route } from "@/types/route"
import { LatLngTuple } from "leaflet"

export function calculateRouteBounds(coordinates: LatLngTuple[]): {
  north: number
  south: number
  east: number
  west: number
} {
  if (!coordinates.length) return { north: 0, south: 0, east: 0, west: 0 }

  return coordinates.reduce(
    (bounds, [lat, lng]) => ({
      north: Math.max(bounds.north, lat),
      south: Math.min(bounds.south, lat),
      east: Math.max(bounds.east, lng),
      west: Math.min(bounds.west, lng),
    }),
    {
      north: coordinates[0][0],
      south: coordinates[0][0],
      east: coordinates[0][1],
      west: coordinates[0][1],
    }
  )
}

export function calculateRouteCenter(coordinates: LatLngTuple[]): LatLngTuple {
  if (!coordinates.length) return [0, 0]

  const bounds = calculateRouteBounds(coordinates)
  return [
    (bounds.north + bounds.south) / 2,
    (bounds.east + bounds.west) / 2,
  ]
}