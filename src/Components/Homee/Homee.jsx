import React from 'react';
import './Homee.css';
import english from '../images/english.jpg';
import old from '../images/old.jpg';

const Homee = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
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
        </div>
      </section>

      {/* YANGI KARTALAR BO'LIMI */}
      <section className="cards-section">
        <div className="container">
          <h2 className="section-title">
            YANGI <span>KARTALAR VA STATISTIKALAR</span>
          </h2>
          <p className="section-subtitle">
            DLS 2026 yangilanishida taqdim etilgan afsonaviy o'yinchilar hamda maxsus to'plamlar
          </p>

          <div className="cards-grid">
            {/* England League Classics Card */}
            <div className="player-card legendary">
              <div className="card-top">
                <span className="rating">84 OVR</span>
                <span className="position">ENGLAND CLASSICS</span>
              </div>
              <div className="card-img-wrapper">
                <img className="cards-img" src={english} alt="England League Classics" />
              </div>
              <div className="card-info">
                <h3>ENGLAND LEAGUE CLASSICS</h3>
                <p className="card-desc">
                  Essien, Petit, Berbatov va Cole kabi Premier League afsonalari. 
                  Dream Point Boosts (+50%, +75%, +150%) bilan jamoangiz reytingini oshiring.
                </p>
              </div>
            </div>

            {/* Special Retro Cards */}
            <div className="player-card secret">
              <div className="card-top">
                <span className="rating">83 - 85 OVR</span>
                <span className="position">SPECIAL CARDS</span>
              </div>
              <div className="card-img-wrapper">
                <img className="cards-img" src={old} alt="DLS Special Players" />
              </div>
              <div className="card-info">
                <h3>RETRO & SPECIAL CARDS</h3>
                <p className="card-desc">
                  De Gea (85), Dybala (85), Aubameyang (85), Isco (84), Insigne (84) va boshqa top 
                  futbolchilarning eng pik mavsumlariga bag'ishlangan oltin hoshiyali kartalar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMEPLAY IMKONIYATLARI */}
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