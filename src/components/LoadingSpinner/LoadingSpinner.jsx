import React from 'react';
import './LoadingSpinner.css';

export default function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="spinner-border text-info big-spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}