import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './MapView.css';
import 'leaflet/dist/leaflet.css';
import LoadingSpinner from '../LoadingSpinner';



export default function MapView() {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        let options = {
            enableHighAccuracy: true,
           
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(
            (posData) => {
                const coords = posData.coords;
                setPosition([coords.latitude, coords.longitude]);
            },
            (err) => {
                console.warn("Geolocation Error =", err.message);
                setPosition([51.604, 13.003]);
            },
            options
        );
    }, []);


 return (
  <div className="m-5" id="map">
     {!position ? (
        <LoadingSpinner />
      ) : (
      <MapContainer
        className="map-container"
        center={position}
        zoom={15}        
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>Här är du xddd</Popup>
        </Marker>
     
      </MapContainer>
    )}
  </div>
);

}