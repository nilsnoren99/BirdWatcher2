import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './components/Navbar';
import MapView from './components/MapView/MapView';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <MapView />
            <Footer />
        </div>
    );
}
