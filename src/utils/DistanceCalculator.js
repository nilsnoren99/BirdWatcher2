//Använder pythagoras sats för att beräkna avstånd
//Till för att räkna ut om en punkt ligger innanför en cirkel

//x = punkten för longituden på flygplan
//y = punkten för latituden för fygplan
//cx = circkelns centrum (användarens longitud)
//cy = circkelns centrum (användarens latitud)
//radius = cirkelns radie (i grader)

export function isInsideCircle(x, y, cx, cy, radius) {
  const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

  //Returnerar True om avständet är mindre än radien
  return distance < radius;
}