import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoomLevel?: number;
  enableScrollWheelZoom?: boolean;
}

const SetMapView: React.FC<{
  latitude: number;
  longitude: number;
  zoomLevel: number;
}> = ({ latitude, longitude, zoomLevel }) => {
  const map = useMap();
  map.setView([latitude, longitude], zoomLevel);
  return null;
};

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  zoomLevel = 13,
  enableScrollWheelZoom = false,
}) => {
  return (
    <MapContainer
      style={{ height: "300px", width: "100%" }}
      scrollWheelZoom={enableScrollWheelZoom}
    >
      <SetMapView
        latitude={latitude}
        longitude={longitude}
        zoomLevel={zoomLevel}
      />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Location: {latitude}, {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
