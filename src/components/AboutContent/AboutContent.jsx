import React from 'react';
import logoImg from '../../assets/logo.png';
import './AboutContent.css';


//Komponenten för att visa texten om vårt projekt på sidan "About"

export default function AboutContent() {
    return (
        <div className="text-dark py-5 bg-dark">
            <div className="container text-light">
                <div className="row flex-lg-row-reverse align-items-center g-2 py-5 px-5">
                    <div className="mx-auto"></div>
                    <h1 className="text-center mb-4 fort-title">Om BirdWatcher2</h1>
                    <h2 className="fort-title">Bakgrund</h2>
                    <p>Så när man inte har något bättre för sig händer det att man ibland hamnar och kollar runt på Flightradar. Man kollar ofta runt bland de mest sedda planen men tillslut hamnar man oftast runt där man befinner sig för att se vilka flygplan som passerar ovanför en. Tanken med vårt projekt var att vi skulle använda oss av just flightradars API i kombination med andra ramverk och bibliotek för att lyckas skapa en webbapplikation som känner av när ett flygplan kommer innanför en distans, där man som människa kan se det. Tanken var att det skulle vara lite som ett modernt sätt till att fågelskåda, och där av namnet "BirdWatcher2" som vi nu döpt projektet till. 2an står ju för att det är en annan typ av fågelskådning, där man kan se vanlig fågelskådning som 1.</p>

                    <p>Så det med hjälp av ett webb-API får vi information om plan i världen. Vi har dock valt att avgränsa planen till Norden eftersom vi ändå inte kommer kunna se plan som befinner sig i andra delar av världen. Vi har använt oss av Leaflet för att få fram en karta, geolocation för att få fram användarens plats och sedan har vi skapat en cirkel runt användarens plats som sträcker sig 20km.</p>

                    <p>När ett plan kommer innanför cirkeln så sparas den automatiskt till en lista som håller koll på vilka plan som har kommit förbi.</p>

                    <h2 className="fort-title">Ramverk & Bibliotek med länkar</h2>
                    <ul>
                        <li><a href="https://reactjs.org/" target="_blank">React</a></li>
                        <li><a href="https://leafletjs.com/" target="_blank">Leaflet</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                        <li><a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a></li>
                       
                    </ul>
                    <h2 className="fort-title">API</h2>
                    <p><a href="https://opensky-network.org/apidoc/index.html" target="_blank">OpenSky API</a></p>
                    <h2 className="fort-title">Varför React? (& inte Vue eller Angular, t.ex?)</h2>
                    <p>Vi valde React ganska tidigt i projektet, främst för att det är ett ramverk som vi alla tre redan har erfarenhet av. Det gjorde att vi snabbt kunde komma igång och fokusera på att börja jobba direkt snarare än att först behöva lära oss ett nytt verktyg.</p>
                    <p>Eftersom vi är bekväma med Reacts struktur, kändes det naturligt att bygga gränssnittet med de komponenter vi behövde. Vi uppskattar även användningen av JSX, där vi kan skriva både HTML & JavaScript-kod i samma fil. För oss gör det koden mer smidig att arbeta med. Vue erbjuder en liknande struktur, men Reacts sätt att tänka passar oss bättre rent praktiskt. En annan stor fördel är React Hooks, där vi enkelt kunde samla vår logik i separata och återanvändbara funktioner, t.ex vid hantering av flygdatan eller API-anrop.</p>
                    <p>React har också en stor och aktiv community. Detta gör det enkelt att hitta hjälp och lösningar i dokumentation, olika forum & YouTube-videos. Det är dessutom ett av de mest använda frontend-ramverken i arbetslivet idag, vilket gör det extra relevant att ha erfarenhet av.</p>
                    <p>Vi är medvetna om att Vue hade kunnat fungera minst lika bra för ett mindre projekt som vårt, särskilt eftersom Vue också är nybörjarvänligt. I efterhand hade det kanske varit intressant att testa det. Varför vi uteslöt Angular direkt från början var genom en snabb googling då ingen av oss hade tidigare arbetat med det. Vi fick då snabbt reda på att Angular till mestadels är till för lite större och mer skalbara projekt. Enligt vår uppfattning hade det varit ett bättre alternativ för “företagsprojekt”, alltså inte passande för oss. Utöver detta använder Angular TypeScript som standard, och detta gjorde det ännu mer uppenbart att det inte var något som passade för vårt projekt.</p>
                    <p>I slutändan blev valet React tack vare våra tidigare erfarenheter, bra tillgång till resurser och dess relevans på arbetsmarknaden.</p>
                    
                    <h2 className="fort-title">Vi som har utvecklat sidan:</h2>
                    <ul>
                        <li>Nils Norén</li>
                        <li>Simnon Sjöholm</li>
                        <li>Wilmer Nordblad Lundin</li>
                    </ul>
                    <h2 className="fort-title">GitHub</h2>
                    <p>Du kan hitta koden för BirdWatcher2 på vår <a href="https://github.com/nilsnoren99/BirdWatcher2" target="_blank">GitHub-sida</a>.</p>
                </div>
            </div>
        </div>
    );
}

// test test