import React from 'react'
import logo from "./Images/dls.png"

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header