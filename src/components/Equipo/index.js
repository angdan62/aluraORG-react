import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //DESESTRUCTURACIÓN -> TOMAR LOS DATOS DE UN PROPS Y SEPARARLO EN VARIABLES
    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColorEquipos, like } = props; 

    const colorFondo = { backgroundColor:hexToRgba(colorPrimario, 0.6) }
    const colorTitulo = { borderColor: colorPrimario }

    return <>
    {   colaboradores.length > 0 && 
        <section className="equipo" style={ colorFondo}>
            <input
                type='color'
                className="inputColor"
                value={ colorPrimario }
                onChange={(e) => { actualizarColorEquipos(e.target.value, id) }}
            />
            <h3 style={colorTitulo} >{titulo}</h3>
            <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like={like}
                />)
            }
            </div>
        </section>
    }</>
}

export default Equipo