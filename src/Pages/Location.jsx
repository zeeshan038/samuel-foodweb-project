import React from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Location = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  // Coordinates for Priestpopple, Hexham, Northumberland, NE46 1PH
  const center = {
    lat: 54.9710,
    lng: -2.1000, // Priestpopple, Hexham
  };

  // Add your Google Maps API key here
  const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Don't forget to replace this with your actual API key

  return (
    <div>
      {/* Google Map section */}
      <div>
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15} // Set zoom level for the location
          >
            {/* Marker to indicate the location */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Location;
