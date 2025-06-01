import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import MapView from './components/MapView/MapView';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import PlaneList from './components/PlaneList';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';




export default function App() {
    
const [planesNearby, setPlanesNearby] = useLocalStorage();

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <div className="mapview-overlay-container">
                        <MapView setPlanesNearby={setPlanesNearby} />
                        <div className="planelist-overlay">
                            <PlaneList planes={planesNearby} />
                        </div>
                        </div>
                    </>
                } />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />

        </Router >
    );
}