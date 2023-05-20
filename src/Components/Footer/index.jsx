import React from 'react'
import Logo from "../../assets/Logo.png"
import Fb from "../../assets/facebook.png"
import Tw from "../../assets/twitter.png"
import Ig from "../../assets/instagram.png"
import FooterBg from "../../assets/footer.png"

const Footer = () => {

    const footerStyles = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "5%",  
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        justifyContent: "space-between", 
        color: "#fff",
        fontFamily: 'Montserrat',
        fontSize: "20px",
        backgroundImage: "url(/src/assets/footer.png)",
        }
    const imagStyles = { 
        padding: "0px 15px",
    }

  return (
    <footer style={footerStyles} >
        <div>
            <a href='https://www.aluracursos.com/'> 
                <img src={Fb} alt="Facebook" style={imagStyles} />
            </a>
            <a href='https://www.aluracursos.com/'> 
                <img src={Tw} alt="twitter" style={imagStyles} />
            </a>
            <a href='https://www.aluracursos.com/'> 
                <img src={Ig} alt="instagram" style={imagStyles} />
            </a>
        </div>
        <img src={Logo} alt='org' /> 
        <strong>Desarrollado por Alura</strong>
    </footer>
  )
}

export default Footer