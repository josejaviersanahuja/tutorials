import React, { useState } from 'react'
import 'App.css'

export default function Selector() {
    const [open, setOpen] = useState([false, false, false, false, false])
    
    const abrirCerrar = (n) => {
        let temp = open.map(e=>e)
        temp[n] = !temp[n]
        setOpen(temp)
    }
   
    return (
        <div className="cuerpo">
            <div className="marco"><h4>Selectores de elementos</h4>
                <div>Son modificadores de todos los elementos sin clases ni id's</div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0]? 
                <div>
                
                    <ul>
                        <li>body {"{}"} || Se usa para... </li>
                        <li>a {"{}"} || se usa para...</li>
                        <li>div {"{}"}  || se usa para...</li>
                    </ul>  
                </div> : null}
            </div>
            <div className="marco"><h4>Clases e ID's</h4>
                <div>Son modificadores de...</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1]? 
                <div>
                    <ul>
                        <li>.nombre_clase {"{}"} || Se usa para... </li>
                        <li>#nombre_id {"{}"} || se usa para...</li>
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
                        <li>:hover || Se usa para... </li>
                        <li>:first-child || se usa para...</li>
                        <li> :last-child || se usa para...</li>
                        <li>:nth-child(2) || se usa para ...</li>
                        <li>:only-child ||| se usa para...</li>
                        <li> :link || se usa para...</li>
                        <li> :visited || se usa para ...</li>
                    </ul>
                </div> :null}
                </div>
            <div className="marco"><h4>Advanced selectores</h4>
                <div>Son modificadores de...</div>
                <a href onClick={() => abrirCerrar(3)}><h5>EJEMPLOS: </h5></a>
                {open[3]? 
                <div>
                    <ul>
                        <li>input + button{"{}"} a button immediately after an input, could be from different sections</li>
                        <li>input ~ button {"{}"} a button inmediatly after an input BUT inside the same section</li>
                        <li>ul {">"} li {"{}"} all direct childs of ul</li>
                        <li>ul li - {"{}"}all li childs of an ul, direct or indirect</li>
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
                        <li>h2[className=marco] {"{}"} y no hará casi nada pero veamos otro ejemplo</li>
                        <li>img[src^="/rootpath"] {"{}"} va a cambiar todas las imagenes que empiezan por esa ruta</li>
                        <li>img[src$="/rootpath"] {"{}"} va a cambiar todas las imagenes que terminan por esa ruta</li>
                        <li>img[src*="/rootpath"] {"{}"} va a cambiar todas las imagenes que pasan por esa ruta</li>
                        <li>h2[className~= segunda_palabra] {"{}"} va a cambiar todos los h2 que tengan un espacio y una segunda_palabra</li>
                        <li>h2[className|= primera_palabra] {"{}"} va a cambiar todos los h2 que tengan un espacio y una primera_palabra</li>
                    </ul>
                </div> :null}
            </div>
        </div>
    )
}
