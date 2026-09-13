import React from 'react'
import tanga from '../images/tanga.jpg'
import { Link } from 'react-router-dom'

const Servicee = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='header-container'>
                <h1 className='header-title'>TANGA VA OLMOS YIG'ISH NARXI</h1>
                <img className='header-img' src={tanga} alt="rasm" />
                <p className='header-text'>ASSALOMU ALAYKUM DLS26 ISHQIBOZIKECHA KELGAN LEGENDLAR PETIT, COLE, ESSIEN, BERBATOV Larni qanday olishni bilmayapsizmi? Unda buning yechimi oson. Yo'q menga bular kerak emas deyszimi? Unda atiga bir necha kunlardan keyin keladigan CULT HEROES GA nima deysiz? Tezda bizning tanga olmos xizmatimizdan foydalaning va akkauntingizni kuchaytiring.</p>
                <Link className='header-link' to="https://t.me/dream0884" target='blank'>Bizga bog'lanish</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Servicee