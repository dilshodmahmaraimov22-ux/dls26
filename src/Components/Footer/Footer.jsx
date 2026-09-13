import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaShieldAlt, FaCoins, FaUserCheck } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* 1. Brend va Loyiha haqida xulosa */}
        <div className="footer-brand">
          <h2 className="footer-logo">DLS <span>2026</span></h2>
          <p className="footer-desc">
            Dream League Soccer 2026 muxlislari uchun eng ishonchli platforma. 
            Afsonaviy o'yinchilar kartalari, tanga va olmos xizmatlari hamda kafolatlangan akkauntlar savdosi.
          </p>
          <div className="footer-socials">
            <Link to="https://t.me/udaclanschannel" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTelegramPlane /> Kanalimiz
            </Link>
            <Link to="https://t.me/dream0884" target="_blank" rel="noopener noreferrer" className="social-link admin-link">
              <FaTelegramPlane /> Admin
            </Link>
          </div>
        </div>

        {/* 2. Tezkor Navigatsiya (Bo'limlar) */}
        <div className="footer-links">
          <h3 className="footer-title">Bo'limlar</h3>
          <ul>
            <li><Link to="/">Home (Asosiy)</Link></li>
            <li><Link to="/service">Service (Tanga & Olmos)</Link></li>
            <li><Link to="/akk">Akk (Akkaunt Savdo)</Link></li>
          </ul>
        </div>

        {/* 3. Xizmatlarimiz va Kafolatlar */}
        <div className="footer-features">
          <h3 className="footer-title">Xizmatlarimiz</h3>
          <ul>
            <li><FaCoins className="feature-icon" /> Tanga va Olmos Yig'ish</li>
            <li><FaUserCheck className="feature-icon" /> Tayyor DLS Akkauntlar</li>
            <li><FaShieldAlt className="feature-icon" /> Admin orqali 100% Xavfsiz Savdo</li>
          </ul>
        </div>
      </div>

      {/* Mualliflik huquqi */}
      <div className="footer-bottom">
        <p>© 2026 DLS FC Fan Platformasi. Barcha huquqlar hamjamiyat tomonidan himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;