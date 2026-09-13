import React from 'react';
import './Servicee.css';
import tanga from '../images/tanga.jpg';
import { Link } from 'react-router-dom';

const Servicee = () => {
  return (
    <section className="service-page">
      <div className="service-container">
        <h1 className="service-title">TANGA VA OLMOS YIG'ISH NARXI</h1>

        <div className="service-img-wrapper">
          <img className="service-img" src={tanga} alt="DLS Tanga va Olmos xizmati" />
        </div>

        <p className="service-text">
          <strong>ASSALOMU ALAYKUM DLS26 ISHQIBOZI!</strong> Kecha kelgan legendlar Petit, Cole, Essien, 
          Berbatovlarni qanday olishni bilmayapsizmi? Unda buning yechimi oson. Yo'q menga bular kerak emas deysizmi? 
          Unda atiga bir necha kunlardan keyin keladigan <strong>CULT HEROES</strong> ga nima deysiz? 
          Tezda bizning tanga va olmos xizmatimizdan foydalaning va akkauntingizni kuchaytiring.
        </p>

        <Link 
          className="service-btn" 
          to="https://t.me/dream0884" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Bizga bog'lanish
        </Link>
      </div>
    </section>
  );
};

export default Servicee;