import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

const ListaOpciones = (props) => {

  const manejarCambio = (e)=> {
    props.setEquipo(e.target.value)
  }

  return (
    <Grid item xs={10} >
        <TextField 
            id="outlined-basic" select label={props.titulo} value={props.valor} error={props.error} onChange={manejarCambio} variant="outlined" margin='normal' sx={{
                width: "100%"
            }} 
        >
          { props.equipos.map((equipo, index) => {
              return <MenuItem key={index} value={equipo}>
              {equipo}
              </MenuItem>  
            }) }
        </TextField>
    </Grid>
  )
}

export default ListaOpciones