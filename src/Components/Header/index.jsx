import React from 'react'
import BannerHeader from '../../assets/HeaderHeader_total.png'
import "./Header.css"

const Header = () => {
  return (
    <header className='HeaderStyles'>
        <img className='ImgStyles'  src={BannerHeader} alt='Org'/>
    </header>
  )
}

export default Header