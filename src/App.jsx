import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import MapView from './components/MapView/MapView';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import PlaneList from './components/PlaneList';
import FRTest from './components/FRTest';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="mapview-overlay-container">
                <MapView />
                <div className="planelist-overlay">
                    <PlaneList />
                </div>
            </div>

            <FRTest />

            <Footer />
        </div>
    );
}