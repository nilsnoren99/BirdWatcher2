import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './components/Navbar';
import MapView from './components/MapView/MapView';


export default function App() {
    return (
        <div>
            <Navbar />
            <MapView />
        </div>
    );
}
