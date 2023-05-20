import React from 'react'
import { Grid, TextField, } from '@mui/material'

const Campo = (props) => {
  const { error  } = props.error
  const manejarCambio = (e)=>{
    const inputValor = e.target.value
    props.setValor(inputValor)
  }
  const textFieldStyles = {
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: "18px",
  }

  const { type = "text" } = props
  
  return (
    <Grid item xs={10}  >
        { error 
        ? <TextField 
            id="outlined-basic" 
            helperText="Incompleto" required 
            label={props.titulo} 
            placeholder={props.placeholder} 
            variant="outlined" 
            value={props.valor} 
            error={props.error} 
            onChange={manejarCambio} 
            margin='normal' 
            sx={textFieldStyles} 
            type={type}
          /> 
        : <TextField 
            id="outlined-basic" required 
            label={props.titulo} 
            placeholder={props.placeholder} 
            variant="outlined" 
            value={props.valor} 
            error={props.error} 
            onChange={manejarCambio} 
            margin='normal' 
            sx={textFieldStyles}
            type={type}
          /> }
    </Grid>
  )
}

export default Campo