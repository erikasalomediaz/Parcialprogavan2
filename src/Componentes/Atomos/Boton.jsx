import React from "react"

export default function Boton (nombre, funcion){

    return(
        <div>
            <button className = "btn btn-primary btn-sm" >{nombre?.nombre}</button>
        
        </div>
    )
}