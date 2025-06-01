import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import './MapView.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LoadingSpinner from '../LoadingSpinner';
import useOpenSkyData from '../../hooks/useOpenSkyData';

const radiusKm = 20;
const radiusDegree = radiusKm / 111 // Detta representerar ungefär 20km på kartan  |  dubbelkolla om detta strular

function isInsideCircle(x, y, cx, cy, radius) {
  const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
  return distance < radius;
}

export default function MapView({setPlanesNearby}) {
  const [position, setPosition] = useState(null);
  const planes = useOpenSkyData();
  
  useEffect(() => {
    let options = {
            enableHighAccuracy: true,
            maximumAge: 0,
        };

    navigator.geolocation.getCurrentPosition( // getCurrentPosition kan bytas ut till watchPosition. Beror lite på vad vi känner för. 
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

  useEffect(() => {
    if (!position || planes.length == 0) return;

    const userLatitude = position[0];
    const userLongitude = position[1];

    planes.forEach((plane) => {
      if (!plane.lat || !plane.lon) return;

      const inside = isInsideCircle(plane.lon, plane.lat, userLongitude, userLatitude, radiusDegree);

      if (inside) {
        setPlanesNearby((previousPlanes) => {
          const alreadyExists = previousPlanes.some(existingPlane => existingPlane.id == plane.id);
          if (alreadyExists) return previousPlanes;

          const updated = previousPlanes.slice();
          updated.unshift(plane);

          if (updated.length > 10) {
            updated.pop();
          }
          return updated;
        })
      }
    })
  }, [planes, position]);

  if (!position) return <LoadingSpinner />;

  const fillBlueOptions = { fillColor: 'blue' };
  const radiusMeter = 17000

  return (
    <div className="w" id="map">
      <MapContainer className="map-container" center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle center={position} pathOptions={fillBlueOptions} radius={radiusMeter} />

        <Marker position={position}
        icon={L.icon({
              iconUrl: "https://www.svgrepo.com/show/283135/maps-and-flags-pin.svg",
              iconSize: [35, 35],
            
            })}

        >
          <Popup>Din plats</Popup>
        </Marker>

        {planes.map((plane) => (
          <Marker
            key={plane.id}
            position={[plane.lat, plane.lon]}
            icon={L.icon({
              iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Airplane_silhouette_purple.svg/1024px-Airplane_silhouette_purple.svg.png",
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
