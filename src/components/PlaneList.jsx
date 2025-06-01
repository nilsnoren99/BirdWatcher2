import React from 'react';

export default function PlaneList({planes}) {
  if (planes.length == 0) {
    return <div className="p-2">Inga flygplan nära dig</div>;
  }
  return (
    <ul className="list-group list-group-flush p-2">
      {planes.map((plane) => (
        <li key={plane.id} className="list-group-item">
          {plane.callsign} - {plane.originCountry}
        </li>
      ))}
    </ul>
  )
}