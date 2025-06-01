import React from 'react';
import airplaneImg from '../../assets/plane-fire.png';
import logoImg from '../../assets/logo.png';
import './Hero.css'


export default function Hero() {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <img src={airplaneImg} alt="Airplane" className="hero-airplane-img" />
          </div>
          <div className="col-lg-6">
            <img src={logoImg} alt="Logo" className="hero-logo-img" />
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi, et eos saepe, ipsam aspernatur expedita a rerum consequuntur harum doloremque molestias dolore, distinctio dolorem esse accusamus dignissimos modi sunt.
            </p>
            <button type="button"  className="btn btn-success btn-lg px-4 md-2 rounded-pill">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}