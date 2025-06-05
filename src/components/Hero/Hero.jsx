import React from 'react';
import airplaneImg from '../../assets/birdy.png';
import logoImg from '../../assets/logo.png';
import './Hero.css'

//Hero/Header-sektionen på sidan

export default function Hero() {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <img src={airplaneImg} alt="Airplane" className="hero-airplane-img" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-2 fw-bold fort-title">
              It's a bird, it's a plane, no it's... <span class="" id="spanText" >BirdWatcher2</span>
            </h1>
            <p className="lead py-4">
            <strong>
            Upptäck flygplan runt dig med BirdWatcher2. En smidig och rolig webbapp som visar vilka plan som passerar över dig i realtid. Allt du behöver göra är att gå ner till kartan så ser du direkt flyg inom 20 km Ett nytt sätt att utforska himlen och följa flyg precis där du är.
            </strong>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

// test test