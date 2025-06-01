import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import MapView from './components/MapView/MapView';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import PlaneList from './components/PlaneList';

export default function App() {
    const [planesNearby, setPlanesNearby] = useState([]);
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="mapview-overlay-container">
                <MapView setPlanesNearby={setPlanesNearby} />
                <div className="planelist-overlay">
                    <PlaneList planes={planesNearby} />
                </div>
            </div>

            <Footer />
        </div>
    );
}