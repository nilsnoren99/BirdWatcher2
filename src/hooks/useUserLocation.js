import { useState, useEffect } from 'react';

export default function useUserLocation() {

  //Sparar användarens position (lat, lon) eller null
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    //Används för att få användarens position från browsern
    navigator.geolocation.getCurrentPosition(
      (posData) => {
        const coords = posData.coords;
        setPosition([coords.latitude, coords.longitude]);
      },
      (err) => {
        //Körs vid fel vid inhämtning av användares geolocation. 
        //Kordinater för Borås satt som fallback
        console.log("Geo error", err.message);
        setPosition([57.7210, 12.9398]);
      },
      options
    );
  }, []);

  return position;
}
