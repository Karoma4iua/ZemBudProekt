import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

// Coordinates for Rivne, Ukraine (approximately)
const center = {
  lat: 50.6199,
  lng: 26.2516,
};

const GoogleMapComponent: React.FC = () => {
  // This is a placeholder for the map
  // In a real application, you would need a valid Google Maps API key
  return (
    <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center p-4">
        <h3 className="text-xl font-semibold mb-2">Карта Розташування</h3>
        <p className="text-gray-600">м. Рівне, вул. Сагайдачного 1</p>
        <p className="text-gray-500 text-sm mt-4">
          Для відображення карти потрібен дійсний ключ Google Maps API
        </p>
      </div>
    </div>
  );
  
  /* Uncomment this code when you have a valid Google Maps API key
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
  */
};

export default GoogleMapComponent;