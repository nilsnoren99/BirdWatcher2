import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import MapView from './components/MapView/MapView';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import PlaneList from './components/PlaneList';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    const [planesNearby, setPlanesNearby] = useState([]);
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <div className="mapview-overlay-container">
                        <MapView />
                        <div className="planelist-overlay">
                            <PlaneList />
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