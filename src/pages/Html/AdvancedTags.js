import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
import desierto from 'video/desierto.mp4'

export default function AdvancedTags() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
            <div className="marco"><h4>Videos</h4>
                <div> Como añadir un vídeo que tenemos guardado </div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li> <b>{"<video src='' controls width='' poster='imgsrc' (loop or autoplay)"}</b>|| puedes cargar el vídeo </li>
                            <li><video src={desierto} controls width="250">desierto</video></li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Tables</h4>
                <div> Todo lo que podemos usar</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div>

                        <ul>
                            <li> <b>{"<table> <caption> <th> <tr> <td> <thead> <tbody> <td colspan='2'>"}</b>|| tabla, título, header de cada columna, fila, contenido de cada elemento  </li>
                            
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Spans vs Divs</h4>
                <div>Ambos contenedores, pero uno es inline, el otro en bloque</div>
                <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
                {open[2] ?
                    <div>

                        <ul>
                            <li> <b>{"<span>"}</b>|| es inline</li>
                            <li> <b>{"<div>"}</b>|| es en bloque  </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Forms de muchas formas</h4>
                <div>inputs, checkbox y mas</div>
                <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
                {open[3] ?
                    <div>

                        <ul>
                            <li> <b>{"<input type=''> types='password, date, range'"}</b>|| si el type es password, sirve en log ins con password, type date es util para fechas, range puede poner una barra de rango</li>
                            <li> <b>{"<input type='' types='files, checkbox, radio'>"}</b>|| puedes introducir un archivo, o un checkbox, radio con el mismo nombre es un checkbox excluyente </li>
                            <li> Para más <b>{"<input types=''>"}</b> ve a la siguiente página|| <a href="https://www.w3schools.com/TagS/att_input_type.asp" target="_blank" rel="noreferrer">www.w3schools.com</a>  </li>
                            <li> <b>{"<textarea rows='5' cols='10'> {children} "}</b>|| es un bloque para introducir texto, el children pude aparecer  </li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>I Frames</h4>
                <div>imbuir otra website dentro de la mia</div>
                <a href onClick={() => abrirCerrar(4)} ><h5>EJEMPLOS: </h5></a>
                {open[4] ?
                    <div>

                        <ul>
                            <li> <b>{"<iframes src='http://localhost:3000' width='800' height='600' frameborder=''>{children}</iframe>"}</b>|| </li>
                            <li> <iframe title='unico' src='http://localhost:3000' width='1000' height='600' frameborder='0'> OOPS </iframe>  </li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
