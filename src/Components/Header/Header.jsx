import React from 'react';
import { NavLink } from 'react-router-dom';
import dls from '../Images/dls.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <NavLink to="/" className="header__logo-link">
            <img className="header__img" src={dls} alt="Logo" />
          </NavLink>
          
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <NavLink className="header__link" to="/">Home</NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__link" to="/service">Service</NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__link" to="/akk">Akk</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;