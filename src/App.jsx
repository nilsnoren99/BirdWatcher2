import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, {useState, useEffect} from 'react';
import Navbar from './layouts/NavBar/Navbar';
import MapView from './components/MapView/MapView';
import Footer from './layouts/Footer';
import Hero from './components/Hero/Hero';
import PlaneList from './components/PlaneList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';


import Home from './pages/Home';
import About from './pages/About';

export default function App() {
    const [planesNearby, setPlanesNearby] = useLocalStorage();

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Home setPlanesNearby={setPlanesNearby} planesNearby={planesNearby} />
                } />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}