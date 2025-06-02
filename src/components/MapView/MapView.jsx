import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import './MapView.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import useOpenSkyData from '../../hooks/useOpenSkyData';
import useUserLocation from '../../hooks/useUserLocation';
import { isInsideCircle } from '../../utils/DistanceCalculator';
import usePlanesNearby from '../../hooks/usePlanesNearby';

const radiusKm = 40;
const radiusDegree = radiusKm / 111 // Detta representerar ungefär 20km på kartan  |  dubbelkolla om detta strular



export default function MapView({setPlanesNearby}) {
  const position = useUserLocation();
  const planes = useOpenSkyData();
  

  usePlanesNearby(planes, position, setPlanesNearby, radiusDegree);

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
