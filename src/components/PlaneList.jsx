import React from 'react';

export default function PlaneList({planes}) {
  //Om inga flygplan finns så står det nedan text i listan
  if (planes.length == 0) {
    return <div className="p-2">Inga flygplan nära dig</div>;
  }

  //Rendrar listan med flygplan på hemsidan
  return (
    <ul className="list-group list-group-flush p-2 bg-dark">
      {planes.map((plane) => (
        <li key={plane.id} className="list-group-item bg-dark text-warning">
          {plane.callsign} - {plane.originCountry}
        </li>
      ))}
    </ul>
  )
}