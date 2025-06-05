import { useEffect } from 'react';
import { isInsideCircle } from '../utils/DistanceCalculator';


//Hook som "upptäcker" plan inom en viss radie utifrån användarens position och sparar dem i listan.

export default function usePlanesNearby(planes, position, setPlanesNearby, radiusDegree) {
  useEffect(() => {

    //När vi har både position och flygplan
    if (!position || planes.length === 0) return;

    const userLatitude = position[0];
    const userLongitude = position[1];

    //Checkar varje flygplan om det är inom radien
    planes.forEach((plane) => {
      //Skippar plan utan koordinater
      if (!plane.lat || !plane.lon) return; 

      //Kolla om planet är inom användarens radie (Cirkel)
      const inside = isInsideCircle(plane.lon, plane.lat, userLongitude, userLatitude, radiusDegree);
     
      if (inside) {
        setPlanesNearby((previousPlanes) => {
          //Lägger inte till planet om det redan är med i listan
          const alreadyExists = previousPlanes.some(p => p.id === plane.id);
          if (alreadyExists) return previousPlanes;
          
          //Nya plan som läggs till hamnar först i listan
          const updated = previousPlanes.slice();
          updated.unshift(plane);
          
          //Listan får max innehålla 10 plan
          if (updated.length > 10) updated.pop();
          return updated;
        });
      }
    });
    //Körs när flygplan eller position uppdateras
  }, [planes, position]);
}
