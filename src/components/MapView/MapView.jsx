import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import './MapView.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import airplaneIcon from '../../assets/Airplane.svg';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import useOpenSkyData from '../../hooks/useOpenSkyData';
import useUserLocation from '../../hooks/useUserLocation';
import { isInsideCircle } from '../../utils/DistanceCalculator';
import usePlanesNearby from '../../hooks/usePlanesNearby';

//Radie i kilometer
const radiusKm = 40;
// Konverterar km till grader och ska representera 20km på kartan: (Ska tydligen vara ungefär 111km per grad)
const radiusDegree = radiusKm / 111



//Komponent som visar den interaktiva kartan med live flygplan och användarens geolocation

export default function MapView({setPlanesNearby}) {
  const position = useUserLocation();
  const planes = useOpenSkyData();
  
  //Används för att upptäcka flygplanen inom radien och för att uppdatera listan
  usePlanesNearby(planes, position, setPlanesNearby, radiusDegree);

  //Laddar in spinner-komponenten tills en position är hämtad
  if (!position) return <LoadingSpinner />;


  //Stylig för radiecirkeln (se https://leafletjs.com/reference.html & https://leafletjs.com/reference.html#path-opacity)
  const fillRadiusOptions = { fillColor: 'purple',
    color: 'purple',
    opacity: 0.5,
    weight: 2,
    fillopacity: 1,
   };

  //Radie för att visa cirklen runt användaren på kartan (i meter)
  const radiusMeter = 17000

  return (
    <div className="w" id="map">
      <MapContainer className="map-container" center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle center={position} pathOptions={fillRadiusOptions} radius={radiusMeter} />

        
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
              icon={L.divIcon({
              html: `<img id="airplaneicon" src="${airplaneIcon}"style="transform: rotate(${plane.true_track - 50}deg);">,`,
              iconSize: [30, 30],
              iconAnchor: [15, 15],
              className: 'airplane-icon'
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
