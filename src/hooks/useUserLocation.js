import { useState, useEffect } from 'react';

export default function useUserLocation() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const options = {
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

  return position;
}
