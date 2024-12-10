"use client"

import { Route } from "@/types/route"
import { Card, CardContent } from "@/components/ui/card"
import { RatingStars } from "@/components/ui/rating-stars"
import { LocationBadge } from "@/components/ui/location-badge"

export function LeaderboardList() {
  // This would normally fetch from an API
  const routes: Route[] = []

  return (
    <div className="space-y-4">
      {routes.length === 0 ? (
        <div className="text-center text-muted-foreground">
          No rated routes yet. Be the first to rate a route!
        </div>
      ) : (
        routes.map((route, index) => (
          <Card key={route.id}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{route.name}</h3>
                <LocationBadge location={route.location} />
              </div>
              <RatingStars rating={route.ratings.quality} />
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}