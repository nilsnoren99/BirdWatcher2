import { useEffect, useState } from 'react';

export default function useOpenSkyData() {
  // sparar data för flygplanen
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    // Denna funktion är för att hämta data från opensky
    async function getPlanes() {
      try {
        const response = await fetch('https://opensky-network.org/api/states/all?lamin=54.3&lamax=72&lomin=5&lomax=32');
        const result = await response.json();
        
        // Hämtar den information som vi vill ha från varje plan
        const planeData = result.states.map(index => ({
        id: index[0],
        callsign: index[1],
        originCountry: index[2],
        lat: index[6],
        lon: index[5],
        velocity: index[9],
        altitude: index[7],
      }));

        console.log('bueno data (GOOOD)', planeData);

        setPlanes(planeData);
      } catch (error) {
        console.log('Data finito (BAAAAD)', error);
      }
    }

    getPlanes();
  }, []);

  return planes;
}