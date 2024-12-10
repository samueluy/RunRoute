// components/MapComponent.tsx
"use client";

import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  route: any; // The selected route data
}

export default function MapComponent({ route }: MapComponentProps) {
  if (!route || !route.latlng) return <div>Select a route to view on the map</div>;

  const routeCoordinates = route.latlng; // Assumed to be an array of [lat, lng]

  return (
    <MapContainer
      center={[14.5995, 120.9842]} // Default center of the map (can adjust as needed)
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Polyline positions={routeCoordinates} color="blue" weight={5} />
    </MapContainer>
  );
}
