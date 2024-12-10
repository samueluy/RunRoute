"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { RouteList } from "@/components/route-list"
import { RouteMap } from "@/components/route-map"

export default function RoutesPage() {
  const [search, setSearch] = useState("")

  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Running Routes</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search routes..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-[350px,1fr] gap-6">
        <RouteList search={search} />
        <Card className="h-[calc(100vh-12rem)]">
          <RouteMap />
        </Card>
      </div>
    </div>
  )
}