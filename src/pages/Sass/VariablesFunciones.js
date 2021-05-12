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
            <div className="marco"><h4>Media Queries</h4>
                <div>Veamos un ejemplo donde observamos el ancho de la pantalla en px. util para cambiar a mobile style </div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div>
                         <ul>
                            <li> <b>{"@mixin mobile{ @media (max-width:$mobile_width){@content ;}};"}</b>|| Primera parte, se crea la funcion mixin donde se lanza la media query @media (max-width:800px) y modifica el content </li>
                            <li><b>{"@include mobile {display:flex; flex-direction:column;}"}</b> || Esto es lo que se modifica en el content </li>

                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Extensiones</h4>
                <div>Otra forma de ahorrar lineas de código es hacer extensiones. usaremos #{"{&}"}</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div>
                         <ul>
                            <li> <b>{"#{&}__paragraph2{@extend .main__paragraph; width: fit-content; };"}</b>|| Hará que .main__paragraph2 sea igual a .main__paragraph y ademas se le añaden más cosas al segundo </li>
                            <li><b>{"@include mobile {display:flex; flex-direction:column;}"}</b> || Esto es lo que se modifica en el content </li>
                            <li><a href="http://sass-lang.com" target="_blank" rel="noreferrer"><b>sass-lang.com</b></a></li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
