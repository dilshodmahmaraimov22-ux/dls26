import React from 'react';
import './Homee.css';
import english from '../images/english.jpg'
import english from '../images/english.jpg'

const Homee = () => {
  return (
    <div className="home-page">
      {/* 1-PAGE: HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">DLS 2026 YANGILANISHI</span>
            <h1 className="hero-title">
              DREAM LEAGUE SOCCER <span>2026</span>
            </h1>
            <p className="hero-desc">
              Yangi mavsumda mutlaqo yangi o'yinchi kartalari, Motion-Capture grafikasi 
              va litsenziyalangan 4,000+ futbolchilar bilan haqiqiy futbol muhitini his eting!
            </p>
          </div>

          <div className="hero-preview">
            <div className="preview-card main-card">
              <div className="card-badge">LIVE MATCH</div>
              <div className="match-score">
                <span>DLS FC</span>
                <span className="score">3 - 1</span>
                <span>RIVAL GS</span>
              </div>
              <p className="match-status">Division 1 • 88' Mins</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2-PAGE: YANGI KARTALAR BO'LIMI (CARDS SHOWCASE) */}
      <section className="cards-section">
        <div className="container">
          <h2 className="section-title">
            YANGI <span>KARTALAR VA STATISTIKALAR</span>
          </h2>
          <p className="section-subtitle">
            DLS 2026 yangilanishida taqdim etilgan o'yinchilarning yangi dizayndagi kartalari
          </p>

          <div className="cards-grid">
            {/* Legendary Card */}
            <div className="player-card legendary">
              <div className="card-top">
                <span className="rating">85+</span>
                <span className="position">FW</span>
              </div>
              <div className="card-img-placeholder">
                <img className='cards-img' src={english} alt="rasm" />
              </div>
              <div className="card-info">
                <h3>LEGENDARY CARD</h3>
                <p className="card-desc">
                  Oltin hoshiyali karta. Dunyoning eng top futbolchilari uchun mo'ljallangan, 
                  yuqori tezlik va zarba kuchiga ega.
                </p>
              </div>
            </div>

            {/* Secret Player Card */}
            <div className="player-card secret">
              <div className="card-top">
                <span className="rating">???</span>
                <span className="position">SHD</span>
              </div>
              <div className="card-img-placeholder">
                <img className='card-img' src={new} alt="" />
              </div>
              <div className="card-info">
                <h3>SECRET PLAYER</h3>
                <p className="card-desc">
                  Transfer bozoridagi maxfiy o'yinchilar. Sotib olmaguningizcha 
                  kimligi va aniq statistikasi oshkor etilmaydi.
                </p>
              </div>
            </div>

            {/* Form Boost / Breakthrough Card */}
            <div className="player-card boosted">
              <div className="card-top">
                <span className="rating">+5 BOOST</span>
                <span className="position">MID</span>
              </div>
              <div className="card-img-placeholder">
                <p>O'yinchi Rasmi</p>
              </div>
              <div className="card-info">
                <h3>BREAKTHROUGH CARD</h3>
                <p className="card-desc">
                  Maxsus mashg'ulotlar orqali formasi va maksimal imkoniyatlari (Breakthrough) 
                  oshirilgan maxsus kartalar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-PAGE: GAMEPLAY IMKONIYATLARI */}
      <section className="gameplay-section">
        <div className="container">
          <h2 className="section-title">
            O'YINNING <span>ASOSIY IMKONIYATLARI</span>
          </h2>

          <div className="gameplay-grid">
            <div className="gameplay-card">
              <div className="icon-box">⚽</div>
              <h3>Realist Fizika va Motion-Capture</h3>
              <p>
                O'yinchilarning to'psiz yugurishi va zarba berish texnikasi 
                Motion-Capture texnologiyasi orqali to'liq 3D formatida qayta ishlandi.
              </p>
            </div>

            <div className="gameplay-card">
              <div className="icon-box">🏛️</div>
              <h3>Infratuzilma va Stadion</h3>
              <p>
                Stadioningiz, tibbiy markaz hamda mashg'ulot maydonlaringizni 
                xalqaro darajagacha rivojlantiring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homee;