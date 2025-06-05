import { useState, useEffect } from 'react';


//Hook som sparar och hämtar flygplan från browserns localStorage
//Detta är till för att listan med plan i närheten kvarstår när sidan laddas om

export default function useLocalStorage() {
  const [planesNearby, setPlanesNearby] = useState(() => {
    //Till för att hämta plan från localStorage när komponenten startar
    const savedPlanes = localStorage.getItem('planesNearby');

    //Om sparad data från localStorage finns, konvertera JSON-string till en array
    if (savedPlanes) {
      return JSON.parse(savedPlanes);
    } 
    else {
      //Om ingen data finns så starta fast med en tom array
      return [];
    }
  });

  useEffect(() => {
    //Sparar listan med flygplanen till localStorage varje gång den uppdateras
    localStorage.setItem('planesNearby', JSON.stringify(planesNearby));
  }, [planesNearby]);

  return [planesNearby, setPlanesNearby];
}