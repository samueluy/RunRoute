import { PHILIPPINES_BOUNDS } from '@/lib/constants'

export async function getPhilippinesActivities(accessToken: string) {
  const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Strava activities')
  }

  const activities = await response.json()

  // Filter activities within Philippines bounds
  return activities.filter((activity: any) => {
    if (!activity.start_latlng) return false
    
    const [lat, lng] = activity.start_latlng
    return lat >= PHILIPPINES_BOUNDS.south &&
           lat <= PHILIPPINES_BOUNDS.north &&
           lng >= PHILIPPINES_BOUNDS.west &&
           lng <= PHILIPPINES_BOUNDS.east
  })
}