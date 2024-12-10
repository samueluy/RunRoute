import { MapPin } from "lucide-react"

interface LocationBadgeProps {
  location: string
  className?: string
}

export function LocationBadge({ location, className }: LocationBadgeProps) {
  return (
    <div className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}>
      <MapPin className="h-4 w-4" />
      <span>{location}</span>
    </div>
  )
}