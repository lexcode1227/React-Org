import React from 'react'
import Logo from "../../../public/assets/Logo.png"
import Fb from "../../../public/assets/facebook.png"
import Tw from "../../../public/assets/twitter.png"
import Ig from "../../../public/assets/instagram.png"

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
        backgroundImage: "url(/assets/footer.png)",
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