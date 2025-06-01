import React from 'react';
import logoImg from '../../assets/logo.png';

import './About.css'; // kanske ta bort denna importen om den inte behövs

export default function About() {
    return (
        <div className="text-dark py-5 bg-dark">
            <div className="container text-light">
                <div className="row flex-lg-row-reverse align-items-center g-2 py-5 px-5">
                    <div className="mx-auto"></div>
                    <h1 className="text-center mb-4 fort-title">Om BirdWatcher2</h1>
                    <h2 className="fort-title">Bakgrund</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, incidunt magnam numquam laudantium eveniet optio voluptatum dolores suscipit beatae aliquid consectetur assumenda nihil sed sequi, doloremque, maiores ducimus eum similique!</p>
                    <h2 className="fort-title">Ramverk och Bibliotek med länkar</h2>
                    <ul>
                        <li><a href="https://reactjs.org/" target="_blank">React</a></li>
                        <li><a href="https://leafletjs.com/" target="_blank">Leaflet</a></li>
                        <li><a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a></li>
                        <li><a href="https://opensky-network.org/apidoc/index.html" target="_blank">OpenSky API</a></li>
                    </ul>
                    <h2 className="fort-title">APIer</h2>
                    <p><a href="https://opensky-network.org/apidoc/index.html" target="_blank">OpenSky API</a></p>
                    <h2 className="fort-title">Varför vi har valt dessa?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas debitis ipsum harum natus enim repudiandae accusamus corporis, iusto dicta maiores illo hic illum dolorem! Iure magnam quia magni at!</p>
                    <h2 className="fort-title">Reflektion</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, ipsum reprehenderit? Odit autem voluptatem officiis blanditiis dolorem, veniam rerum ipsam neque, animi maiores perspiciatis, obcaecati ex saepe alias illo in!</p>
                    <h2 className="fort-title">Vi som har utvecklat sidan:</h2>
                    <ul>
                        <li>Pils Norén</li>
                        <li>Samuel Sjöholm</li>
                        <li>Grand Marshal Wilmer Nordblad Lundin</li>
                    </ul>
                    <h2 className="fort-title">GitHub</h2>
                    <p>Du kan hitta koden för BirdWatcher2 på vår <a href="https://github.com/nilsnoren99/BirdWatcher2" target="_blank">GitHub-sida</a>.</p>
                </div>
            </div>
        </div>
    );
}