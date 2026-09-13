import React from 'react'
import dls from '../images/dls.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <img src={dls} alt="rasm" />
                <ul className='header__list'>
                    <li className='header__item'><Link to="/">Home</Link></li>
                    <li className='header__item'><Link to="/service">Service</Link></li>
                    <li className='header-item'><Link to="/akk">Akk</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header