import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const accessToken = searchParams.get("accessToken");

  if (!accessToken) {
    return NextResponse.json({ error: "Access token is missing" }, { status: 400 });
  }

  const bounds = "14.2990,120.8969,14.8892,121.2108"; // Example bounds for Metro Manila
  const activityType = "running"; // You can change to "cycling" if needed

  try {
    // Fetch segments from Strava API using the access token
    const response = await fetch(
      `https://www.strava.com/api/v3/segments/explore?bounds=${bounds}&activity_type=${activityType}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Strava segments");
    }

    const { segments } = await response.json();

    // Return the fetched segments as JSON
    return NextResponse.json(segments);
  } catch (error) {
    console.error("Error fetching Strava segments:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
