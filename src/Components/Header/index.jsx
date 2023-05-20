import React from 'react'
import BannerHeader from '../../../public/assets/HeaderHeader_total.png'

const Header = () => {
  const headerStyles = {
    background: "#6278F7",
    textAlign: "center",
  }
  const imgStyles = {
    maxWidth: "100%",
  }
  return (
    <header style={headerStyles}>
        <img style={imgStyles} src={BannerHeader} alt='Org'/>
    </header>
  )
}

export default Header