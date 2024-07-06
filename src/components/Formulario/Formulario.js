import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{

    //DESTRUCTURACION DE PROPS 
    const {registrarColaborador, crearEquipo} = props;

    //CREACION DE ESTADOS PARA GUARDAR VALORES DE INPUTS
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    //CONTROLADOR DE ESTADO PARA ACTUALIZAR EQUIPOS DE TRABAJO NUEVOS
    const [titulo, actualizarTitulo] = useState ("");
    const [color, actualizarColor] = useState ("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnvioFormulario ={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnvioFormulario)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario:color })
    }

    return <section className="formulario">
        {/* FORMULARIO PARA LA CREACION DE COLABORADOR */}
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa el nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} /> 
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa el puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto} /> 
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto} /> 
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos={props.listaEquipos}
            />
            <Boton texto="Crear" />
        </form>

        {/* FORMULARIO PARA LA CREACION DE EQUIPOS DE TRABAJO */}

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa el titulo del equipo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            /> 
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en Hex" 
                required 
                valor={color} 
                actualizarValor={actualizarColor} 
                type ="color"
            />
            <Boton texto="Registrar Equipo" /> 
        </form>
    </section>
}

export default Formulario