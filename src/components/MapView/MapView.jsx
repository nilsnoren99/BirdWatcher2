import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

import './MapView.css';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LoadingSpinner from '../LoadingSpinner';
import useOpenSkyData from '../../hooks/useOpenSkyData';

export default function MapView() {
  const [position, setPosition] = useState(null);
  const planes = useOpenSkyData();

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
        console.log("Geo error", err.message);
        setPosition([60.1282, 18.6435]);
      },
      options
      

    );
  }, []);

  if (!position) return <LoadingSpinner />;


  const fillBlueOptions = { fillColor: 'blue' }

  return (
    <div className="w" id="map">
      <MapContainer className="map-container" center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        // Ändra så cirkeln är currentposition också!!!
        <Circle center={[55.6050, 13.0038]} pathOptions={fillBlueOptions} radius={20000} />

        <Marker 
          position={position}
          >
          <Popup>
            Din plats
          </Popup>
        </Marker>


        {planes.map((plane) => (
          <Marker
            key={plane.id}
            position={[plane.lat, plane.lon]}
            icon={L.icon({
              iconUrl: "https://www.svgrepo.com/show/150998/airplane-outline.svg",
              iconSize: [30, 30],
          
            })}
          >
            <Popup>
              {plane.callsign}
              Land: {plane.originCountry}
              Höjd: {plane.altitude}m
              Hastighet: {plane.velocity * 3.6 }km/h
            </Popup>
          </Marker>
        ))}


      </MapContainer>
    </div>
  );
}
