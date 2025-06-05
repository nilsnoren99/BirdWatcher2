import React from 'react';
import logoImg from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './Navbar.css';

//Navbar-komponent: Till för att navigera sidan

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img id="bild1" src={logoImg} alt="BirdWatcher2 logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fort-title" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fort-title" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} // test test