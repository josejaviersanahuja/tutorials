import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'

export default function Selector() {
    const {open, abrirCerrar} = useAbrirCerrar()
    const detalles={
        primero:{
            title: "Selectores de elementos",
            defBreve:"Son modificadores de todos los elementos sin clases ni id's",
            arrayCodigo:[
                {
                    cod:" body {}",
                    text: "Se usa para estilizar la etiqueta body."
                },
                {
                    cod:"a {} ... div {}  || se usa para...",
                    text: "Se usa para estilizar los elementos que están dentro de la etiqueta a, los div"
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
             
            <div className="marco"><h4>Clases e ID's</h4>
                <div>Son modificadores de...</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1]? 
                <div>
                    <ul>
                        <li><b>.nombre_clase {"{}"}</b> || Se usa para... </li>
                        <li><b>#nombre_id {"{}"}</b> || se usa para...</li>
                    </ul>
                Es importantisimo entender el orden de especificidad. #id es más específico que las .clases y este más específico que los selectores básicos
            </div>:null }
            </div>
            <div className="marco"><h4>Psedo selectores</h4>
                <div>Son modificadores de...</div>
                <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
                {open[2]? 
                <div>
                    <ul> 
                        <li><b>:hover</b> || Se usa para... </li>
                        <li><b>:first-child</b> || se usa para...</li>
                        <li> <b>:last-child</b> || se usa para...</li>
                        <li><b>:nth-child(2)</b> || se usa para ...</li>
                        <li><b>:only-child</b> ||| se usa para...</li>
                        <li> <b>:link</b> || se usa para...</li>
                        <li> <b>:visited</b> || se usa para ...</li>
                    </ul>
                </div> :null}
                </div>
            <div className="marco"><h4>Advanced selectores</h4>
                <div>Son modificadores de...</div>
                <a href onClick={() => abrirCerrar(3)}><h5>EJEMPLOS: </h5></a>
                {open[3]? 
                <div>
                    <ul>
                        <li><b>input + button{"{}"}</b> a button immediately after an input, could be from different sections</li>
                        <li><b>input ~ button {"{}"}</b> a button inmediatly after an input BUT inside the same section</li>
                        <li><b>ul {">"} li {"{}"}</b> all direct childs of ul</li>
                        <li><b>ul li - {"{}"}</b> all li childs of an ul, direct or indirect</li>
                    </ul>
                </div>: null}
                </div>
            <div className="marco">
                <h4>ATRIBUTE selectores</h4>
                <div>Son modificadores de...</div>
                <a href onClick={() => abrirCerrar(4)}><h5>EJEMPLOS: </h5></a>
                {open[4]? 
                <div>
                    <ul>
                        <li><b>h2[className=marco] {"{}"}</b> y no hará casi nada pero veamos otro ejemplo</li>
                        <li><b>img[src^="/rootpath"] {"{}"}</b> va a cambiar todas las imagenes que empiezan por esa ruta</li>
                        <li><b>img[src$="/rootpath"] {"{}"}</b> va a cambiar todas las imagenes que terminan por esa ruta</li>
                        <li><b>img[src*="/rootpath"] {"{}"}</b> va a cambiar todas las imagenes que pasan por esa ruta</li>
                        <li><b>h2[className~= segunda_palabra] {"{}"} </b> va a cambiar todos los h2 que tengan un espacio y una segunda_palabra</li>
                        <li><b>h2[className|= primera_palabra] {"{}"}</b> va a cambiar todos los h2 que tengan un espacio y una primera_palabra</li>
                    </ul>
                </div> :null}
            </div>
        </div>
    )
}
