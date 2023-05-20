import React, { useState } from 'react'
import { Stack, Typography, Button, TextField } from '@mui/material'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import {v4 as uuid} from "uuid"

const Formulario = (props) => {
    // const equipoPredefinido = equipos[0] (Solo en caso se definiera un item predeterminado)

    const [ nombre, setNombre] = useState("")
    const [ nombreError, setNombreError] = useState(false)
    const [ puesto, setPuesto] = useState("")
    const [ puestoError, setPuestoError] = useState(false)
    const [ foto, setFoto] = useState("")
    const [ fotoError, setFotoError] = useState(false)
    const [ equipo, setEquipo] = useState("")
    const [ equipoError, setEquipoError] = useState(false)

    const [ titulo, setTitulo] = useState("")
    const [ tituloError, setTituloError] = useState(false)
    const [ color, setColor] = useState("")
    const [ colorError, setColorError] = useState(false)

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento)=> {
        evento.preventDefault()
        setNombreError(false)
        setPuestoError(false)
        setFotoError(false)
        setEquipoError(false)

        if (nombre === "") {
            setNombreError(true) 
        }
        if (puesto === "") {
            setPuestoError(true) 
        }
        if (foto === "") {
            setFotoError(true) 
        }
        if (equipo === "") {
            setEquipoError(true)
        }

        if (nombre && puesto && foto && equipo) { 
            const datosAEnviar = {
                nombre: nombre,
                puesto: puesto,
                foto: foto,
                equipo: equipo,
            }
            registrarColaborador(datosAEnviar)
        } else { 
            alert("Datos incompletos") 
        }
    }
    const manejarNuevoEquipo = (evento)=> {
        evento.preventDefault()
        setTituloError(false)
        setColorError(false)

        if (titulo === "") {
            setTituloError(true) 
        }
        if (color === "") {
            setColorError(true) 
        }

        if (titulo && color ) { 
            const datosAEnviar = {
                id: uuid(),
                titulo: titulo,
                colorPrimario: color,
            }
            crearEquipo(datosAEnviar)
        } else { 
            alert("Datos incompletos") 
        }
    }
    //Estilos
    const stackStyles = {
        display: "flex",
        flexWrap: "wrap",    
        margin: "25px",
        gap: "25px",
    }
    const formStyles = {
        marginTop: "50px",
        padding: "18px 30px",
        background: "#F6F6F6",
        maxWidth: "600px",
        minHeight: "500px",
        borderRadius: "20px",
        boxShadow: "7px 7px 15px #00000025",
    }
    const typographyStyles = {
        fontSize: "24px",
        textAlign: "center",
        fontFamily: 'Prata',
    }
    const buttonStyles = {
        marginTop: "25px",
        fontFamily: "Montserrat",
        fontSize: "20px",
        letterSpacing: "0",
        fontWeight: "Bold",
        textTransform: "capitalize",
    }
  return (
    <>
        <Stack direction="row" justifyContent= "space-evenly" alignItems="center"  sx={stackStyles}>
            <form  style={formStyles} >
                <Typography sx={typographyStyles}
                >   Rellena el formulario para crear el colaborador.
                </Typography>
                <Campo titulo="Nombre" placeholder="Ingresar nombre" valor={nombre} error={nombreError} setValor={setNombre} />
                <Campo titulo="Puesto" placeholder="Ingresar puesto" valor={puesto} error={puestoError} setValor={setPuesto}  />
                <Campo titulo="Foto" placeholder="Ingresar enlace de la foto" valor={foto} error={fotoError} setValor={setFoto} type="url" />
                <ListaOpciones titulo="Equipo" equipos={props.equipos} valor={equipo} error={equipoError} setEquipo={setEquipo} /> 
                <Button variant="contained" sx={buttonStyles} onClick={manejarEnvio} >
                    Crear
                </Button>
            </form>
            <form style={formStyles} >
                <Typography sx={typographyStyles}>Rellena el formulario para crear el colaborador.</Typography>
                <Campo titulo="Titulo" placeholder="Ingresar titulo" valor={titulo} error={tituloError} setValor={setTitulo} />
                <Campo titulo="Color" type="color" placeholder="Ingresar el color en Hex" valor={color} error={colorError} setValor={setColor} typeColor={true} />
                <Button variant="contained" sx={buttonStyles} onClick={manejarNuevoEquipo} >
                    Registrar equipo   
                </Button>
            </form>
        </Stack>
    </>
  )
}

export default Formulario