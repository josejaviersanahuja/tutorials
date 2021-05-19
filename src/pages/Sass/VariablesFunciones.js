import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
/*

            <DetallesSubtema 
                title={detalles.segundo.title} 
                defBreve={detalles.segundo.defBreve} 
                arrayCodigo={detalles.segundo.arrayCodigo}
            />
            <DetallesSubtema 
                title={detalles.tercero.title} 
                defBreve={detalles.tercero.defBreve} 
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
<DetallesSubtema 
                title={detalles.cuarto.title} 
                defBreve={detalles.cuarto.defBreve} 
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
*/
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function VariablesFunciones() {
    const { open, abrirCerrar } = useAbrirCerrar()
    const detalles={
        primero:{
            title: "Variables y Funciones en Sass",
            defBreve:"Parece claro, empecemos.",
            arrayCodigo:[
                {
                    cod:"$font-weights:('regular':400,'medium':500,'bold':700);$background-homecolor: black; $background-PVPcolor: grey;",
                    text: "con el $ se declaran las variables"
                },
                {
                    cod:"_archivo.sass",
                    text: "Un archivo que empieza por '_' underscore, no se transpila a menos que se importe al main.sass"
                },
                {
                    cod:"@import './archivo';",
                    text: "Se importa sin el underscore, sin la extensión y se añade ; siempre."
                },
                {
                    cod:"@function f_weight($name) {  @return map-get($font-weights, $name)};",
                    text: "Así se declara una función"
                },
                {
                    cod:"& , #{&}",
                    text: "Permiten simplificar ciertas anidaciones de códigos. con {'&'} podemos llamar al nombre de la clase padre y con {'#{&}'} llamamos a toda la clase padre"
                },
                {
                    cod:"@mixin dispFlexCenter{display:flex, align-items:center, justify-content:center};",
                    text: "Estas líneas de código se puede reutilizar cuando se quiera."
                },
                {
                    cod:"@include dispFlexCenter;",
                    text: "Se importa a cualquier elemento que queramos. Nota, el @mixin puede recibir argumentos como en una funcion."
                }
            ]
        },
        segundo:{
            title: "Modulos e importar modulos",
            defBreve:"Vamos a crear un middleware llamado logger, en un archivo a parte del proyecto, y vamos a importarlo",
            arrayCodigo:[
                {
                    cod:"module.exports=logger",
                    text: "Declaramos la función como constante, y la exportamos desde nuestro otro archivo."
                },
                {
                    cod:"const logger = require('./middlewares/logger')",
                    text: "Así lo importamos"
                }
            ]
        },
        tercero:{
            title: "CORS",
            defBreve:"Es un protocolo de comunicación del servidor. Con esto se establece con quienes puede comunicarse el servidor. Es complejo, solo veremos el caso de cómo dejar abierto nuestro servidor, y usaremos un middleware de EXPRESS para hacerlo",
            arrayCodigo:[
                {
                    cod:"npm install cors -E",
                    text: "OJO. Es una dependencia de producción. Nota: el -E es para evitar el ^ en las dependencias"
                },
                {
                    cod:"const cors = require('cors')",
                    text: "Así lo importamos"
                },
                {
                    cod:"app.use(cors())",
                    text: "Así lo seteamos por defecto, abierto para el mundo"
                }
            ]
        },
        cuarto:{
            title: "CORS",
            defBreve:"Es un protocolo de comunicación del servidor. Con esto se establece con quienes puede comunicarse el servidor. Es complejo, solo veremos el caso de cómo dejar abierto nuestro servidor, y usaremos un middleware de EXPRESS para hacerlo",
            arrayCodigo:[
                {
                    cod:"npm install cors -E",
                    text: "OJO. Es una dependencia de producción. Nota: el -E es para evitar el ^ en las dependencias"
                },
                {
                    cod:"const cors = require('cors')",
                    text: "Así lo importamos"
                },
                {
                    cod:"app.use(cors())",
                    text: "Así lo seteamos por defecto, abierto para el mundo"
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <DetallesSubtema 
                title={detalles.primero.title} 
                defBreve={detalles.primero.defBreve} 
                arrayCodigo={detalles.primero.arrayCodigo}
            />
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
                <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
                {open[2] ?
                    <div>
                         <ul>
                            <li> <b>{"#{&}__paragraph2{@extend .main__paragraph; width: fit-content; };"}</b>|| Hará que .main__paragraph2 sea igual a .main__paragraph y ademas se le añaden más cosas al segundo </li>
                            <li><b>{"@include mobile {display:flex; flex-direction:column;}"}</b> || Esto es lo que se modifica en el content </li>
                            <li><a href="http://sass-lang.com" target="_blank" rel="noreferrer"><b>sass-lang.com</b></a></li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>iteraciones</h4>
                <div>Otra forma de ahorrar lineas de código es hacer Iteraciones y son poderosas.</div>
                <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
                {open[3] ?
                    <div>
                         <ul>
                            <li> <b>{"@for $i from 1to5 {.tem:nth-child(#{$i}){transition-delay:$i*0.1s}}"}</b>|| esta iteración dará delays distintos a los distintos elementos de la lista </li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
