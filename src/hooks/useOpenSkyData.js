import { useState, useEffect } from 'react';

export default function useOpenSkyData() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    let intervalId;

    async function getPlanes() {
      try {
        const response = await fetch('https://opensky-network.org/api/states/all?lamin=49.9&lamax=59.5&lomin=-8.6&lomax=2.1');
        const result = await response.json();

        if (!result.states) {
          setPlanes([]); // No data fallback
          return;
        }

        const planeData = result.states.map(plane => ({
          id: plane[0],
          callsign: plane[1].trim(),
          originCountry: plane[2],
          lat: plane[6],
          lon: plane[5],
          velocity: plane[9],
          altitude: plane[7],
        }));

        setPlanes(planeData);
        console.log("Fetched from API");
      } catch (error) {
        console.error("Error fetching plane data", error);
      }
    }

    // Initial fetch
    getPlanes();

    // Set interval to fetch every 10 seconds (10000 ms)
    intervalId = setInterval(() => {
      getPlanes();
    }, 10000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return planes;
}