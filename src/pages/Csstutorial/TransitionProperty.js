import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
import PublishDay from 'components/PublishDay'
export default function TransitionProperty() {
    const { open, abrirCerrar } = useAbrirCerrar()
    
    return (
        <div className="cuerpo">
            <PublishDay date="15/11/2020"/>
            <div className="marco"><h4>Transition</h4>
                <div>Con <b>transition:</b> Podemos pasar una propiedad de un estado a otro en cuestión de tiempo. </div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div> Digamos que hacemos la transición de un botón a través de un hover que modifica el background.
                        <ul>
                            <li> <b>hover {"{background: lightblue}"}</b> || <button className="boton"> Background Blue </button> </li>
                            <li> <b>transition:background 2s (ease, linear, ease-in-out) 1s (delay)</b>  || establece la altura de las filas de forma automática </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Transform Functions</h4>
            <div>Con <b>transform:translate()</b> Podemos pasar 2 valores e intercambiar las posiciones de dos estados diferentes. </div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div> Digamos que hacemos la transición de un botón a través de un hover que modifica el background.
                        <ul>
                            <li> <b>hover {"{transform:translate(50px,0)}"}</b> || <button className="boton2"> Background Blue </button> </li>
                            <li> <b>hover {"{transform:scale(2.5)}"}</b> || aumenta el tamaño de todo en el objeto. Nota: margin, padding, dejan de aplicarse bien </li>
                            <li> <b>hover {"{transform:rotate(-45deg)}"}</b> || <button className="boton2" style={{transform:'rotate(-45deg)'}}> 45º </button> </li>
                            <li> <b>hover {"{transform:skewX(-45deg)}"}</b> || <button className="boton2" style={{transform:'skewX(-45deg)'}}> 45º </button> </li>
                            <li> <b>hover {"{transform:skewY(-45deg)}"}</b> || <button className="boton2" style={{transform:'skewY(-45deg)'}}> 45º </button> </li>
                            <li> <b>hover {"{transform:matrix(1,0.45,0.45,1, 100, 50)}"}</b> || parametros del matrxi(scale x, skewX, skewY, scale y, translate x, translate y)
                            <button className="boton2" style={{transform:'matrix(1,0.45,0.45,1, 100, 10)'}}> 45º </button> </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Transition Functions</h4>
            <div>Con <b>transition: property delay duration timing function </b> Podemos pasar valores para causar un efecto visual en las transformaciones. </div>
                <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
                {open[2] ?
                    <div> Digamos que hacemos la transición de un botón a través de un hover que modifica el background.
                        <ul>
                            <li> <b>hover {"{transform:translate(50px,0)}"}</b> || <button className="boton2"> Background Blue </button> </li>
                            <li> <b>hover {"{transform:scale(2.5)}"}</b> || aumenta el tamaño de todo en el objeto. Nota: margin, padding, dejan de aplicarse bien </li>
                            <li> <b>hover {"{transform:rotate(-45deg)}"}</b> || <button className="boton2" style={{transform:'rotate(-45deg)'}}> 45º </button> </li>
                            <li> <b>hover {"{transform:skewX(-45deg)}"}</b> || <button className="boton2" style={{transform:'skewX(-45deg)'}}> 45º </button> </li>
                            <li> <b>hover {"{transform:skewY(-45deg)}"}</b> || <button className="boton2" style={{transform:'skewY(-45deg)'}}> 45º </button> </li>
                            <li> <b>hover {"{transform:matrix(1,0.45,0.45,1, 100, 50)}"}</b> || parametros del matrxi(scale x, skewX, skewY, scale y, translate x, translate y)
                            <button className="boton2" style={{transform:'matrix(1,0.45,0.45,1, 100, 10)'}}> 45º </button> </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Animations</h4>
                <div>Con <b>w/ keyframes</b> podemos crear animaciones y con el comando <b>animation: name duration timing-function delay iteration-count direction fill-mode;</b> podemos generar efectos diferentes a cada animación.</div>
                <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
                {open[3] ?
                    <div className="animacion">
                        <div className="animationcode"> 
                        <p>{"@keyframes animationBackGround {"}</p>
                        <p>{"0% {    background: blue;    transform: translate(0px,0px);  } "} </p>
                        <p>{"25% {    background: green;    transform: translate(-50px,-50px);  } "}</p>  
                        <p>{"50%{    background: yellow;    transform: translate(0px,-100px);  } "}</p>  
                        <p>{"75%{    background: orange;    transform: translate(50px,-50px);  } "}</p> 
                        <p>{"100%{    background: blue;    transform: translate(50px,-50px);  }}"}</p>
                        </div>
                        <div className="animationbox" ><button id="movimiento"> animacion</button></div>
                    </div> : null}
            </div>
           
        </div>
    )
}
