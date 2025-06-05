import React from 'react';
import './LoadingSpinner.css';

//Spinner som används för att snurra på sidan (Visas istället för kartan innan användarens geolocation är hämtad)

export default function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="spinner-border text-info big-spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

