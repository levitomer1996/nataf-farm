import React from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  MarkerF,
} from "@react-google-maps/api";
import "./Map.css";
const GMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_SECRET_KEY,
  });
  if (!isLoaded) {
    return <div>Loading map</div>;
  }
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 31.979620093826995, lng: 34.95303082717532 }}
      mapContainerClassName={"map-container"}
    >
      <MarkerF position={{ lat: 31.979620093826995, lng: 34.95303082717532 }} />
    </GoogleMap>
  );
};

export default GMap;
