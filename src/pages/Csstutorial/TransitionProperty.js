import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function TransitionProperty() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
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
            <div className="marco"><h4>Transition Functions</h4>
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
            <div className="marco"><h4>Animations</h4>
                <div><b>w/ keyframes</b>  </div>
                <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
                {open[2] ?
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
            <div className="marco"><h4>Lines</h4>
                <div> Con <b>grid-column</b> puedes elegir de que línea del grid empieza el elemento a que línea termina. <b>grid-row</b> Hace lo mismo de arriba a abajo</div>
                <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
                {open[3] ?
                    <div>
                        <ul>
                            <li> <b>grid-column:2/10</b> || establece de donde a donde va la caja dentro del grid </li>
                            <li> <b>grid-row: 3/5</b>  || establece de donde a donde va la caja dentro del grid</li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Grid-area</h4>
                <div>Une en un solo comando, ambas especificaciones de arriba. <b>grid-column</b> y <b>grid-row</b></div>
                <a href onClick={() => abrirCerrar(4)} ><h5>EJEMPLOS: </h5></a>
                {open[4] ?
                    <div>
                        <ul>
                            <li> <b>grid-area: 2/3 span 7/ span8;</b> || establece al contenedor que empieza desde el punto de la fila2 y la columna3, hasta la fila 7 y la columna 8 </li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
