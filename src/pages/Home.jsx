import React from 'react';
import Hero from '../components/Hero/Hero';
import MapView from '../components/MapView/MapView';
import PlaneList from '../components/PlaneList';

//Home.jsx, för att hämta endast delar för huvudsidan och inte about.jsx

export default function Home({ setPlanesNearby, planesNearby }) {
  return (
    <>
      <Hero />
      <div className="mapview-overlay-container">
        <MapView setPlanesNearby={setPlanesNearby} />
        <div className="planelist-overlay">
          <PlaneList planes={planesNearby} />
        </div>
      </div>
    </>
  );
}