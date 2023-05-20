import { Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Colaborador = (props) => {

    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, agregarFav } = props

    //Estilos
    const cardContenedor = {
        width: "280px",
        marginBottom: "24px",
        textAlign: "center",
        position: "relative",
        height: "300px",
    }
    const boxContenedor = {
        backgroundColor: colorPrimario,
        borderRadius: "10px 10px 0 0",
        height: "34%",
    }
    const imagen = {
        width: "100px",
        borderRadius: "50%",
        position: "relative",
        bottom: "-50px",
    }
    const info = {
        background: "#FFFFFF",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.08)",
        borderRadius: "0 0 10px 10px",
        paddingTop: "90px",
        paddingBottom: "40px",
        minHeight: "100px",
        fontFamily: "Monserrat",
        height: "66%",
    }
    const typographyNombre = {
        color: "#6278F7",
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "bold",
        marginBottom: "8px",
    }
    const typographyPuesto = {
        color: "#212121",
        fontSize: "16px",
        padding: "0 24px",
        lineHeight: "22px",
        fontWeight: "400",
        margin: "0",
    }
    const eliminarIcon = {
        position: "absolute",
        top: "7px",
        right: "12px"
    }
  return (
    <div style={cardContenedor}>
        <ClearIcon onClick={()=> eliminarColaborador(id)} style={eliminarIcon}  ></ClearIcon>
        <div style={boxContenedor}  >
            <img src={foto} alt={nombre} style={imagen} />
        </div>
        <div style={info}>
            <Typography sx={typographyNombre} >{nombre}</Typography>
            <Typography sx={typographyPuesto} >{puesto}</Typography>
            { fav ?<FavoriteIcon sx={{color: "#EA3131"}} onClick={()=> agregarFav(id)} /> : <FavoriteBorderIcon onClick={()=> agregarFav(id)} /> }
        </div>
    </div>
  )
}

export default Colaborador