import { useEffect, useState } from 'react';

//Hur ofta det fetchas ny flygdata (15 * 1000 = 15 sekunder)
const delay = 15;


export default function useOpenSkyData() {


  // sparar data för flygplanen
  const [planes, setPlanes] = useState([]);

  useEffect(() => {

    //"Sätter upp" intervallen som hämtar flygdata varje 15 sek
    let timer = setInterval(getPlanes, delay * 1000);

    // Denna funktion är för att hämta data från opensky
    async function getPlanes() {
      try {
        
          //Länken fetchar enbart flygdata från norden (lamin, lamax, lomin och lomax i url:en som väljer vilka geografiska värden flygdatan ska hämtas från)

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

        console.log('Flygdata hämtad: ', planeData);

        setPlanes(planeData);
      } catch (error) {
        console.log('Fel vid inhämtningen av flygdata: ', error);
      }
    }


  
    getPlanes();

    //Körs när man lämnar sidan, ClearInterval är det som stoppar timern från att fortsätta köras
    return () => {
    clearInterval(timer);
    };

  }, []);

  return planes;
}