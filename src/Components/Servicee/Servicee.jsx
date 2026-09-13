import React from 'react';
import './Servicee.css';
import tanga from '../images/tanga.jpg';
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';

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

        <div className="service-btn-group">
          <Link 
            className="service-btn" 
            to="https://t.me/dream0884" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="btn-icon" /> Bizga bog'lanish
          </Link>

          <Link 
            className="service-btn channel-btn" 
            to="https://t.me/udaclanschannel" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="btn-icon" /> Bizning kanal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Servicee;