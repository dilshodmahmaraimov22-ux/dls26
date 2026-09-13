import React from 'react'
import dls from '../images/dls.png';

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <img src={dls} alt="rasm" />
                <ul className=''></ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header