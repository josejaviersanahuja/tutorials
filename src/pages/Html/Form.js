import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function Form() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
            <div className="marco"><h4>Select</h4>
                <div> describamos el select en el form debe tener atributos ... ver página <a rel="noreferrer" href="https://www.htmlquick.com/es/reference/tags/select.html" target="_blank">aqui</a> </div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li> <b>{"<select form='buscar_pokemon' name='filtrodebusqueda'>"}</b>|| Contiene las etiquetas meta, title y links </li>
                            </ul>
                    </div> : null}
            </div>
         </div>
    )
}
