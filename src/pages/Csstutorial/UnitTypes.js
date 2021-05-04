import React, { useState } from 'react'
import 'App.css'

export default function UnitTypes() {
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
        </div>
    )
}
