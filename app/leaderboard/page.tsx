import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { LeaderboardList } from "@/components/leaderboard-list"

export default function LeaderboardPage() {
  return (
    <div className="container py-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Top Rated Routes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LeaderboardList />
        </CardContent>
      </Card>
    </div>
  )
}