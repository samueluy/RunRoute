import { Rating, Review } from "@/types/route"

export function calculateAverageRating(reviews: Review[]): Rating {
  if (!reviews.length) {
    return { safety: 0, scenery: 0, quality: 0 }
  }

  const totals = reviews.reduce(
    (acc, review) => ({
      safety: acc.safety + review.safety,
      scenery: acc.scenery + review.scenery,
      quality: acc.quality + review.quality,
    }),
    { safety: 0, scenery: 0, quality: 0 }
  )

  return {
    safety: totals.safety / reviews.length,
    scenery: totals.scenery / reviews.length,
    quality: totals.quality / reviews.length,
  }
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}