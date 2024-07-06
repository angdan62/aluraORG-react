import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const maenjarCambio = (e) =>{
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>EQUIPOS</label>
        <select value={props.valor} onChange={maenjarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {/* DOS MANERAS DE USAR EL MAP */}
            {/* { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)} */}
            { props.equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>

}
export default ListaOpciones