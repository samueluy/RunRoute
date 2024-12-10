"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingStarsProps {
  rating: number
  className?: string
  showValue?: boolean
}

export function RatingStars({ rating, className, showValue = true }: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Star className="h-4 w-4 fill-primary" />
      {showValue && <span className="text-sm">{rating.toFixed(1)}</span>}
    </div>
  )
}