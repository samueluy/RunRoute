import { ReviewList } from "@/components/review-list"

export default function ReviewsPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Latest Reviews</h1>
      <ReviewList />
    </div>
  )
}