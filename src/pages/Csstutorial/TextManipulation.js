import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function UnitTypes() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
            <div className="marco"><h4>Text Manipulation</h4>
                <div>Existen 2 tipos de manipulaciones a grandes rasgos. <b>Text</b> y Fonts</div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li> Link {"{"} <b>text-decoration: none;</b> {"}"}|| los links traen por default un text decoration de subrayado. ahora con none, no lo van a tener </li>
                            <li> Link {"{"} <b>text-decoration: underline;</b> {"}"}|| los links traen por default un text decoration de subrayado.</li>
                            <li> Link {"{"} <b>text-decoration: line-through;</b> {"}"}|| ahora veremos un link tachado </li>
                            <li> Body {"{"} <b>text-transform: uppercase;</b> {"}"} || transforma el texto en todas mayúsculas </li>
                            <li> Body {"{"} <b>text-transform: lowercase;</b> {"}"} || transforma el texto en todas minúsculas </li>
                            <li> Body {"{"} <b>text-transform: capitalize;</b> {"}"} || transforma el texto en palabras capitales, que empiezan en mayúsculas </li>
                            <li> Body {"{"} <b>text-align: center;</b> {"}"} || como en word, existen los alineados a la izquierda (left), a la derecha (right), centrado (center) y justify  </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Font Manipulation</h4>
                <div>Ahora veamos las <b>Font Manipulations</b> empecemos por los básicos</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div>

                        <ul>
                            <li>Body {"{"} <b>font-size: 1.15em ;</b> {"}"} || tamaño de la fuente aumenta en un 15% </li>
                            <li>Body {"{"} <b>font-weight: 700;</b> {"}"} || van de 0 a 900, donde 700 es el weight de una letra en <b>bold</b> </li>
                            <li>Body {"{"} <b>font-style: italic;</b> {"}"} || cambia la forma de la fuente, puede asumir valores italic, oblique, normal </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Font Manipulation Family</h4>
                <div>Ahora veamos las <b>Font Manipulations</b> más avanzados</div>
                <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
                {open[2] ?
                    <div>

                        <ul>
                            <li>Body {"{"} <b>font-family: sans-serif ;</b> {"}"} || más legible </li>
                            <li>Body {"{"} <b>font-family: serif;</b> {"}"} || agrega un muy tenue difuminado, que sobre el papel queda bien, pero sobre la pantalla se ve fatal </li>
                            <li>Body {"{"} <b>font-family: monospace;</b> {"}"} || como en las máquinas de escribir, toda fuente mantiene la misma separación. </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Font Manipulation Imports</h4>
                <div>Ahora veamos las <b>Importaciones</b></div>
                <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
                {open[3] ?
                    <div>

                        <ul>
                            <li>Body {"{"} <b>font-family: sans-serif ;</b> {"}"} || más legible </li>
                            <li>Body {"{"} <b>font-family: serif;</b> {"}"} || agrega un muy tenue difuminado, que sobre el papel queda bien, pero sobre la pantalla se ve fatal </li>
                            <li>Body {"{"} <b>font-family: monospace;</b> {"}"} || como en las máquinas de escribir, toda fuente mantiene la misma separación. </li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
