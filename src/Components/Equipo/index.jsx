import { Grid, Typography } from '@mui/material'
import React from 'react'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor, agregarFav, fav } = props

  const gridEquipoContenedor = { 
    alignItems: "center", 
    gap: "25px",
    width: "100%",
    padding: "32px",
    justifyContent: "center",
    position: "relative"
  }
  const typographyTitulo = {
    fontSize: "24px",
    fontFamily: 'Prata',
    color: "#212121",
    borderBottom: "4px solid",
    display: 'inline-block',
  }
  const colorInput = {
    position: "absolute",
    top: "20px",
    right: "50px",
  }

  return (
    <>
      { 
        colaboradores.length > 0 && 
        <Grid container direction='column' wrap='wrap' style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}} sx={gridEquipoContenedor}>
          <input type='color' style={colorInput} value={colorPrimario} onChange={(e)=>actualizarColor(e.target.value, id)} />
          <Grid item>
            <Typography sx={typographyTitulo} style={{borderColor: colorPrimario,}}> {titulo} </Typography>  
          </Grid>
          <Grid container sx={{justifyContent: "space-evenly"}}>
            { 
              colaboradores.map((colaborador, index)=> <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} agregarFav={agregarFav} />) 
            }
          </Grid>
        </Grid>
      }
    </>
  )
}

export default Equipo