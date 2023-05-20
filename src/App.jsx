import './App.css'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import MiOrg from './Components/MiOrg'
import { useState } from 'react'
import Equipo from './Components/Equipo'
import Footer from './Components/Footer'
import {v4 as uuid} from "uuid"

function App() {

  const [ mostrarForm, setMostrarForm ] = useState(true)
  //Ternario --> condicion ? seMuestra : seMuestraEstoOtro
  // condicion && seMuestra
  const [ colaboradores, setColaboradores ] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    }
  ])
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9", 
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF", 
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2", 
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8", 
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5", 
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9", 
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF", 
    },
  ])

  const cambiarMostrar = ()=>{
    setMostrarForm(!mostrarForm)
  }

  const registrarColaborador = (colaborador)=> {
    console.log("Registro completado", colaborador)
    //Spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id)=> {
    console.log("Eliminado", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id)=> {
    const equiposActualizados = equipos.map((equipo)=> {
      (equipo.id === id) && (equipo.colorPrimario = color)
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo)=> {
    console.log("Equipo creado", nuevoEquipo)
    setEquipos([...equipos, nuevoEquipo])
  }

  const agregarFav = (id)=> {
    const colaboradoresActualizados = colaboradores.map((colaborador)=> {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <>
      <Header/>
      {/* { mostrarForm ? <Formulario/> : <></> } */}
      { mostrarForm && <Formulario equipos={equipos.map((equipo)=> equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      { 
        equipos.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} agregarFav={agregarFav} />)
      }
      <Footer/>
    </>
  )
}

export default App
