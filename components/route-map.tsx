"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { MANILA_VIEW } from "@/lib/constants"

export function RouteMap() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <MapContainer
      center={MANILA_VIEW.center}
      zoom={MANILA_VIEW.zoom}
      className="h-full w-full rounded-lg"
      maxBounds={[
        [4.566667, 116.931557], // Southwest coordinates
        [21.120611, 126.604393], // Northeast coordinates
      ]}
      minZoom={6}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}