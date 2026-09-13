import React from 'react';
import './Akkk.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import asosiy1 from '../Akkrasm/asosiy1.jpg';
import asosiy2 from '../Akkrasm/asosiy2.jpg';
import asosiy3 from '../Akkrasm/asosiy3.jpg';
import asosiy4 from '../Akkrasm/asosiy4.jpg';
import asosiy5 from '../Akkrasm/asosiy5.jpg';
import asosiy6 from '../Akkrasm/asosiy6.jpg';
import asosiy7 from '../Akkrasm/asosiy7.jpg';
import asosiy8 from '../Akkrasm/asosiy8.jpg';
import asosiy9 from '../Akkrasm/asosiy9.jpg';
import asosiy10 from '../Akkrasm/asosiy10.jpg';

import { Link } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa";

const Akkk = () => {
  const images = [
    asosiy1, asosiy2, asosiy3, asosiy4, asosiy5,
    asosiy6, asosiy7, asosiy8, asosiy9, asosiy10
  ];

  return (
    <section className="akk-page">
      <div className="akk-container">
        <h1 className="akk-title">AKKAUNT SAVDOSI</h1>

        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="akk-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="slide-img-box">
                  <img src={img} alt={`DLS Akkaunt Rasm ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="akk-details">
          <div className="badge-tag">DLS 2021 MAVSUMIDAN</div>
          
          <div className="price-box">
            <span className="price-label">Narxi:</span>
            <span className="price-value">1 000 000 so’m</span>
          </div>

          <ul className="info-list">
            <li><strong>To'lov turi:</strong> Kartaga (Uzcard/Humo)</li>
            <li><strong>Tafsilot:</strong> DLS21 dan o'ynab kelingan va to'liq kuchaytirilgan afsonaviy tarkib</li>
          </ul>

          <div className="guarantee-box">
            <p>✅ Eng foydali va xavfsiz tanlov bu Admin orqali savdo qilishdir!</p>
            <p className="admin-contact">Admin: <strong>@Dream0884</strong></p>
            <span className="warning">Adminsiz savdoga javob berilmaydi ❌</span>
          </div>
        </div>

        <Link 
          className="akk-btn" 
          to="https://t.me/dream0884" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className="btn-icon" /> Murojaat uchun
        </Link>
      </div>
    </section>
  );
};

export default Akkk;