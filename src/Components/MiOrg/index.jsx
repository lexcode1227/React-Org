import {React, useState} from 'react'
import { Stack, Typography } from '@mui/material'
import addIcon from "../../assets/Btn-add.png"

const MiOrg = (props) => {
    const [ mostrar, setMostrar] = useState(true)

    const stackStyles = {
        width: "100%",
        display: "flex",
        margin: "75px 0",
    }
    const typographyStyles = {
        fontSize: "24px",
        textAlign: "center",
        fontFamily: 'Prata',
        color: "#6278F7",
        borderBottom: "4px solid #6278F7",
        display: 'inline-block'
    }
    const imgStyles = {
        position: "absolute",
        right: "3%",
        cursor: "pointer"
    }
  return (
    <Stack flexDirection="row" justifyContent="center" alignItems="center" sx={stackStyles}>
        <Typography style={typographyStyles}>Mi Organización</Typography>
        <img src={addIcon} alt="Add button" height="75px" onClick={props.cambiarMostrar} style={imgStyles} />
    </Stack>
  )
}

export default MiOrg