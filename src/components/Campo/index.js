import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
    //DESTRUCTURACION DE PROPS
    const {titulo, required, valor, placeholder, type = "text" } = props

    //Guardar los datos de los inputs mediante estados
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const placeholderModificado = `${placeholder}...`;

    return <div className={ `campo campo-${type}` }>
        <label>{titulo.toUpperCase()}</label>
        <input 
            placeholder={placeholderModificado} 
            required={required} 
            value={valor} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo