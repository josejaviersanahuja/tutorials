import React, { useState } from 'react'
import 'App.css'

export default function Selector() {

  const [open, setOpen] = useState([false, false, false, false, false])

  const abrirCerrar = (n) => {
    let temp = open.map(e => e)
    temp[n] = !temp[n]
    setOpen(temp)
  }

  return (
    <div className="cuerpo">
      <div className="marco"><h4>Tipos de Colores</h4>
        <div>Color by name, Hex code, Decimal code RGB </div>
        <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
        {open[0] ?
          <div>
            <a href="https://www.rapidtables.com/web/css/css-color.html">tablas de colores</a>
            <ul>
              <li>{"{color:yellow;}"} || Color text by name </li>
              <li>a {"{color: #00BFFF}"} || Color text with Hexcode</li>
              <li>div {"{color: rgb(0,159,255)}"}  || color text with Decimal RGB code</li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Background colors</h4>
        <div>Background se puede añadir al <b>{"body {background: aqua;}"}</b></div>
        <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
        {open[1] ?
          <div>
            <a href="https://www.rapidtables.com/web/css/css-color.html">tablas de colores</a>
            <ul>
              <li>{"body {background: aqua;}"} || Colorea el background de toda la página</li>
              <li>{".clase {background-color: aqua;}"} || Colorea el background de los segmentos con la clase="clase"</li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Background con imagenes</h4>
        <div>Una imagen background se puede añadir así: <b>{"background:url('https://th.bing.com/th/id/OIP.Hlx_5IVMuFs2PWRqnI_C8gHaHX?w=184&h=184&c=7&o=5&pid=1.7');"}</b></div>
        <div>La URL se puede añadir así: <b>{"background-image:url('../imagenes/logo.jpg');"}</b></div>
      </div>
      <div className="marco"><h4>More Background properties. Size and repeat</h4>
        <div>Una vez establecido el background con imagen podemos hacer otras cosas como <b>{"body {background: url('root/img.jpg'); background:no-repeat;bckground-color:red;}"}</b></div>
        <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
        {open[2] ?
          <div>
            <ul>
              <li>{"#id {background: no-repeat;}"} || pone la imagen sin repetir en la izquina superior izquierda</li>
              <li>{".clase {background-size: 1rem 2rem;}"} || Colorea la imagen del background en la dimension 1rem x 2rem con o sin repeat </li>
              <li>{".clase {background-size: cover;}"} || Colorea la imagen para que cubra todo el background</li>
              <li>{".clase {background-size: contain;}"} || Colorea la imagen para que cubra todo el background sin fastidiar las dimensiones</li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Transparencia u opacidad de Colores</h4>
        <div>Al Decimal code RGB puede añadirse un campo más. rgb<b>a</b></div>
        <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
        {open[3] ?
          <div>
            <a href="https://www.rapidtables.com/web/css/css-color.html">tablas de colores</a>
            <ul>
              <li>{"{color: rgba(0,159,255,0)}"} || El dígito 0, representa al color totalmente transparente, sin color </li>
              <li>a {"{color: rgba(0,159,255,1)}"} || El dígito 1, representa al color totalmente opaco, igual al {"{color: rgb(0,159,255)}"}</li>
              <li>div {"{color: rgb(0,159,255,0.5)}"}  || 0.5 representa transparencia al 50%e</li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Gradiants de Colores</h4>
        <div>Es una degradación de colores <b>{"background:linear-gradient(to right, red, blue, yellow)"}</b></div>
        <a href onClick={() => abrirCerrar(4)} ><h5>EJEMPLOS: </h5></a>
        {open[4] ?
          <><div id="gradient">
            Normal gradient <b>{"background:linear-gradient(to right, red, blue, yellow)"}</b>
          </div>
          <div id="gradient2">
            Transparent diagonal gradient <b>{"#gradient2 {background: linear-gradient(to bottom right, rgb(255,0,0),rgba(255,0,0,0) ); height: 2rem;}"}</b>
          </div>
          <div id="gradient3">
            Transparent gradient -60 grados de dirección <b>{"#gradient3 {background: linear-gradient(-60deg, rgb(0,0,255),rgba(0,0,255,0) ); height: 2rem;}"}</b>
          </div>
          <div id="gradient4">
            Transparent radial gradient de adentro hacia afuera y elipse por defecto <b>{"#gradient4 { background: radial-gradient(circle, rgba(0,255,0,0) 30%, rgb(0,255,0), rgb(0,150,255));  height: 5rem;}"}</b>
          </div></> : null}
      </div>
    </div>
  )
}
