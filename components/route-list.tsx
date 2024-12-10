"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "next-auth/react";

export function RouteList({ search }: { search: string }) {
  const { data: session } = useSession();
  const [segments, setSegments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSegments() {
      if (!session?.accessToken) return; // Ensure the user is logged in

      try {
        const res = await fetch(`/api/strava/routes?accessToken=${session.accessToken}`);
        if (!res.ok) throw new Error("Failed to fetch segments");
        const data = await res.json();
        console.log("Fetched segments:", data); // Debugging log
        setSegments(data);
      } catch (error) {
        console.error("Error fetching segments:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSegments();
  }, [session]);

  return (
    <div className="space-y-4">
      {loading ? (
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            Loading segments...
          </CardContent>
        </Card>
      ) : segments.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            No segments found in the Philippines.
          </CardContent>
        </Card>
      ) : (
        segments.map((segment: any) => (
          <Card key={segment.id} className="cursor-pointer hover:bg-accent">
            <CardHeader>
              <CardTitle className="text-lg">{segment.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Distance: {(segment.distance / 1000).toFixed(1)} km</p>
              <p>Elevation Gain: {segment.elevation_gain} m</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
