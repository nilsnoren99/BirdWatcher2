import React from 'react';
import logoImg from '../../assets/logo.png';

import './About.css'; // kanske ta bort denna importen om den inte behövs

export default function About() {
    return (
        <div className="text-dark py-5">
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-2 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 mx-auto"></div>
                    <h1 className="text-center mb-4">Om BirdWatcher2</h1>
                    <h2>Bakgrund</h2>
                    <p>BirdWatcher2 är en webbapplikation som syftar till att ge användare möjlighet att spåra och övervaka flygplan i realtid. Applikationen använder moderna webbramverk och bibliotek för att skapa en interaktiv och användarvänlig upplevelse.</p>
                    <h2>Ramverk och Bibliotek med länkar</h2>
                    <ul>
                        <li><a href="https://reactjs.org/" target="_blank">React</a></li>
                        <li><a href="https://leafletjs.com/" target="_blank">Leaflet</a></li>
                        <li><a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a></li>
                        <li><a href="https://opensky-network.org/apidoc/index.html" target="_blank">OpenSky API</a></li>
                    </ul>
                    <h2>APIer</h2>
                    <p><a href="https://opensky-network.org/apidoc/index.html" target="_blank">OpenSky API</a></p>
                    <h2>Varför vi har valt dessa?</h2>
                    <p>Vi har valt dessa ramverk och bibliotek för att de erbjuder kraftfulla verktyg för att bygga interaktiva och responsiva webbapplikationer. React möjliggör komponentbaserad utveckling, vilket gör det enkelt att hantera tillstånd och återanvända kod. Leaflet och OpenStreetMap ger oss möjlighet att integrera kartor och geografisk information på ett effektivt sätt, medan OpenSky API:et ger oss realtidsdata om flygplan.</p>
                    <h2>Reflektion</h2>
                    <p>Under utvecklingen av BirdWatcher2 har vi lärt oss mycket om hur moderna webbapplikationer byggs och integreras med externa API:er. Vi har fått en djupare förståelse för Reacts komponentbaserade struktur och hur man hanterar tillstånd på ett effektivt sätt. Arbetet med Leaflet och OpenStreetMap har gett oss insikt i hur karttjänster kan integreras och anpassas för olika behov. Dessutom har vi stött på och löst utmaningar kring asynkrona anrop och hantering av realtidsdata från OpenSky API:et. Sammantaget har projektet gett oss värdefull erfarenhet av samarbete, problemlösning och modern webbutveckling.</p>
                    <h2>Vi som har utvecklat sidan:</h2>
                    <ul>
                        <li>Pils Norén</li>
                        <li>Samuel Sjöholm</li>
                        <li>Grand Marshal Wilmer Nordblad Lundin</li>
                    </ul>
                    <h2>GitHub</h2>
                    <p>Du kan hitta källkoden för BirdWatcher2 på vår <a href="https://github.com/erikjohansson/birdwatcher2" target="_blank">GitHub-sida</a>.</p>
                </div>
            </div>
        </div>
    );
}