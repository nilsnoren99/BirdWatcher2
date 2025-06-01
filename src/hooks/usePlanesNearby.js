import { useEffect } from 'react';
import { isInsideCircle } from '../utils/DistanceCalculator';

export default function usePlanesNearby(planes, position, setPlanesNearby, radiusDegree) {
  useEffect(() => {
    if (!position || planes.length === 0) return;

    const userLatitude = position[0];
    const userLongitude = position[1];

    planes.forEach((plane) => {
      if (!plane.lat || !plane.lon) return;

      
      const inside = isInsideCircle(plane.lon, plane.lat, userLongitude, userLatitude, radiusDegree);
     
      if (inside) {
        setPlanesNearby((previousPlanes) => {
          const alreadyExists = previousPlanes.some(p => p.id === plane.id);
          if (alreadyExists) return previousPlanes;

          const updated = previousPlanes.slice();
          updated.unshift(plane);
          
          
          if (updated.length > 10) updated.pop();
          return updated;
        });
      }
    });
  }, [planes, position]);
}
