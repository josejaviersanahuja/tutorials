import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function VariablesFunciones() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
            <div className="marco"><h4>Variables y Funciones en Sass</h4>
                <div> Empecemos </div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li> <b>{"$font-weights:('regular':400,'medium':500,'bold':700);$background-homecolor: black; $background-PVPcolor: grey;"}</b>|| con el $ se declaran las variables </li>
                            <li><b>{"_archivo.sass"}</b> || Un archivo que empieza por "_" underscore, no se transpila a menos que se importe al main.sass</li>
                            <li><b>{"@import './archivo';"}</b> || Se importa sin el underscore, sin la extensión y se añade ; siempre.</li>
                            <li><b>{"@function f_weight($name) {  @return map-get($font-weights, $name)};"}</b> || Así se declara una función</li>
                            <li><b>{"& , #{&}"}</b> || Permiten simplificar ciertas anidaciones de códigos. con {"&"} podemos llamar al nombre de la clase padre y con {"#{&}"} llamamos a toda la clase padre </li>
                            <li><b>{"@mixin dispFlexCenter{display:flex, align-items:center, justify-content:center};"}</b> || Estas líneas de código se puede reutilizar cuando se quira.</li>
                            <li><b>{"@include dispFlexCenter;"}</b> || Se importa a cualquier elemento que queramos. Nota, el @mixin puede recibir argumentos como en una funcion.</li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Basic Tags. BODY</h4>
                <div> describamos el BODY. Va a contener TODO el cuerpo de la página web. Veamos algunas tags que podemos usar</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div>

                        <ul>
                            <li> <b>{"<h1> children </h1>"}</b>|| h1, h2, h3... señalan tipos de títulos de distintos tamaños o propiedades </li>
                            <li><b>{"<p> children </p>"}</b> || Genera un párrafo nuevo</li>
                            <li><b>{"<b> children </b> <i></i> <big></big> <sub></sub> <sup></sup>"}</b> || b, i, big, small,  Modifica o estiliza al contenido</li>
                            <li><b>{"<br/> o <hr/>"}</b> || Generan espacios en la página. br espacia en bloque, hr espacia marcando una linea horizontal</li>
                            <li><b>{"<!-- Comments in HTML --"}</b> || Comentar un código html</li>
                            <li><b>{"<img src alt />"}</b> || para importar imágenes </li>
                            <li><b>{"<header> <main> <footer> <div> <nav> <article> <section>"}</b>|| segmentos que podemos crear</li>
                            <li><b>{"<a href='http://yasabemos.com' target='_blank'>link</a>"}</b>|| anchor para links. target='_blank' sirve para abrir en una nueva ventana</li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
