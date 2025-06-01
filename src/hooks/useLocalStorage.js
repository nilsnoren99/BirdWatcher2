import { useState, useEffect } from 'react';

export default function useLocalStorage() {
  const [planesNearby, setPlanesNearby] = useState(() => {
    const savedPlanes = localStorage.getItem('planesNearby');

    if (savedPlanes) {
      return JSON.parse(savedPlanes);
    } 
    else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('planesNearby', JSON.stringify(planesNearby));
  }, [planesNearby]);

  return [planesNearby, setPlanesNearby];
}