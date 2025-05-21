/* inaktiv for now

import { useEffect } from "react";
import L from "leaflet";
import "leaflet.locatecontrol";

export function useLocateControl(map) {
  useEffect(() => {
    if (!map) return;
    const locateControl = L.control.locate().addTo(map);
    return () => {
      locateControl.remove();
    };
  }, [map]);
}

*/