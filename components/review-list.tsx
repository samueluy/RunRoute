"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RouteList({ search }: { search: string }) {
  const [segments, setSegments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSegments() {
      try {
        const res = await fetch("/api/strava/segments");
        const data = await res.json();
        setSegments(data);
      } catch (error) {
        console.error("Failed to fetch segments:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSegments();
  }, []);

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
            No segments found.
          </CardContent>
        </Card>
      ) : (
        segments.map((segment: any) => (
          <Card key={segment.id}>
            <CardHeader>
              <CardTitle>{segment.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Distance: {segment.distance.toFixed(1)} km</p>
              <p>Elevation Gain: {segment.elevation_gain} m</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
