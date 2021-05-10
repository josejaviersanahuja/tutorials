import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function Layouts() {
  const { open, abrirCerrar } = useAbrirCerrar()

  return (
    <div className="cuerpo">
      <div className="marco"><h4>Layouts</h4>
        <div>En teoría css se mueve en <b>Cajas</b> que se tocan las unas a las otras. Y existen 3 fronteras importantes. <b>Padding, border y margin</b></div>
        <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
        {open[0] ?
          <div>
            <ul>
              <li> <b>Padding</b> || es la frontera que se encarga de separar el <b>contenido</b> del <b>border</b> </li>
              <li> <b>Border</b>  || es la frontera que se encarga de separar el <b>padding</b> del <b>margin</b>  </li>
              <li> <b>Margin</b>  || es la frontera que se encarga de separar el <b>borde</b> de otras <b>cajas</b>  </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Establecer el tamaño de los boxes</h4>
        <div>El tamaño height es normalmente absoluto <b>px, o vh</b>, y el width debería ser "responsive" es decir relativo <b>vw o %</b> </div>
        <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
        {open[1] ?
          <div>
            <ul>
              <li> <b>height:300 px o 30vh</b> || establece la atura en 300px o aproximadamente el 30% de la altura de la pantalla </li>
              <li> <b>width al 70% o 70vw</b>  || establece el ancho de forma relativa al ancho de pantalla del dispositivo </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Bordes</h4>
        <div> Tienen 3 parámetros, tamaño , puede ser <b>px</b>, estilo, hay 4 <b>solid, dotted, dashed, double</b> y color</div>
        <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
        {open[2] ?
          <div>
            <ul>
              <li> <b>border: 1rem solid red</b> || establece una linea de borde y un ancho de 1rem  </li>
              <li> <b>border: 1rem double blue</b>  || establece una doble linea de borde y un ancho de 1rem </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Margin and Padding</h4>
        <div><b>Margin</b> and <b>Padding</b> </div>
        <a href onClick={() => abrirCerrar(3)} ><h5>EJEMPLOS: </h5></a>
        {open[3] ?
          <div>
            <ul>
              <li> <b>padding:20px;</b> || establece un espacion por los 4 lados, de 20 px, entre el borde y el contenido de la <b>caja</b> </li>
              <li> <b>margin: 30px;</b>  || establece un espacio por los 4 lados, de 30 px, entre el borde, y las <b>cajas</b> contiguas </li>
              <div id="boxmarginborderpadding">
                <div id="marginborderpadding">
                  padding 20px
                  <div id="content">caja 1</div>
                  padding 20px
                </div>
                <div id="marginborderpadding">
                  padding 20px
                  <div id="content">caja 2</div>
                  padding 20px
                </div>
              </div>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Float and Display</h4>
        <div>
          <p>El display modifica el comportamiento de cada caja. existen 2 tipos. Comportamiento por bloques y el comportamiento inline </p>
          <p>El comportamiento por bloques, es el default cuando no existen estilos. Cada elemento ocupa un solo bloque de izquierda a derecha</p>
          <p>El comportamiento inline, es cuando dos cajas (elementos, por ejemplo <b>{"<h1>titulo</h1> <p>parrafo<p/>"}</b> ) se verían uno al lado del otro</p>
        </div>
        <a href onClick={() => abrirCerrar(4)} ><h5>EJEMPLOS: </h5></a>
        {open[4] ?
          <div>
            <ul>
              <li> <b>float: left or right</b> || establece la caja de forma inline y modifica el ancho de las otras cajas que queden inline, con este elemento </li>
              <li> <b>display: inline-block</b>  || establece la caja de forma inline, con su elemento o caja contigua anterior
              <p>Nota: <b>display:inline;</b> puede afectar el elemento o caja que estamos moviendo. mejor usar inline-block</p>
              </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Display: Flex</h4>
        <div>Cajas flexible. Se componen del elemento padre que es el contenedor, y los elementos hijos los (items) </div>
        <a href onClick={() => abrirCerrar(5)} ><h5>EJEMPLOS: </h5></a>
        {open[5] ?
          <div>
            <ul>
              <li> <b>display: flex;</b> || establece al contenedor como un flexbox </li>
              <li> <b>flex-direction:row;</b>  || es row por defecto, pero puede ser column o row/column - reverse.</li>
              <li> <b>flex-wrap: nowrap;</b> || wrap or nowrap </li>
              <li>
              <div id="flexboxcontainer">
                <div id="box1">
                  box1
                </div>
                <div id="box1">
                  box2
                </div>
                <div id="box1">
                  box3
                </div>
                <div id="box1">
                  box4
                </div>
                <div id="box1">
                  box5
                </div>
                <div id="box1">
                  box6
                </div>
                <div id="box1">
                  box7
                </div>
                <div id="box1">
                  box8
                </div>
              </div>
              </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Justify-cont y Align-items</h4>
        <div>Alineación vertical <b>align-items</b> y alineación horizontal <b>justify-content</b></div>
        <a href onClick={() => abrirCerrar(6)} ><h5>EJEMPLOS: </h5></a>
        {open[6] ?
          <div>
            <ul>
              <li> <b>justify-content: center;</b> || flex-start, center o flex-end. Como con el texto, mueve a la izquierda, centra o mueve a la derecha las cosas </li>
              <li> <b>justify-content: space-around</b>  || distribuye los espacios para que las cajas contenido ocupen todo el contenedor. Incluyendo los bordes </li>
              <li> <b>justify-content:space-between;</b> || distribuye los espacios para que las cajas contenido ocupen todo el contenedor. No incluye los bordes  </li>
              <li> <b>align-items: center;</b> || flex-start, center o flex-end. Mueve arriba, al centro o mueve abajo las cosas. Cuidado con el height de los hijos, puede cambiar </li>
              <li> <b>align-items: baseline</b>  || Si hay cajas de distintas altura (height), las alinea en una misma línea imaginaria donde la primera línea coincidan. </li>
              <li> <b>align-items: stretch</b>  || Está por default, Hace que el height ocupe todo el height del padre o contenedor. </li>
              <li>
              <div id="flexboxcontainer">
                <div id="box1" style={{height:"10vh"}}>
                  box1
                </div>
                <div id="box1" style={{height:"20vh"}}>
                  box2
                </div>
                <div id="box1">
                  box3
                </div>
                <div id="box1">
                  box4
                </div>
                <div id="box1">
                  box5
                </div>
                <div id="box1">
                  box6
                </div>
                <div id="box1">
                  box7
                </div>
                <div id="box1">
                  box8
                </div>
              </div>
              </li>
            </ul>
          </div> : null}
      </div>  
      <div className="marco"><h4>Modificadores del contenido en Flexbox</h4>
        <div>Ordenar elementos <b>order: n</b>, que los contenidos respondan a la pantalla con <b>flexBasis, flexShrink y flexGrow</b></div>
        <a href onClick={() => abrirCerrar(7)} ><h5>EJEMPLOS: </h5></a>
        {open[7] ?
          <div>
            <ul>
              <li> <b>style={"{{order:n}}"}</b> || Esta propiedad order, ordena los elementos del flexbox con el parámetro que le pasemos. Nota: 0 es el default, empezar en 1 </li>
              <li> <b>flex-grow: proporcion</b>  || la proporcion no es de tamaño, sino de espacio vacío del que se apropia al. Nota: establecer todos los contenidos al menos en 1 </li>
              <li> <b>flex-shrink:;</b> || Nota: establecer todos los contenidos al menos en 1, ya que en 0, no se encoje</li>
              <li> <b>flex-basis:100px;</b> || es la base de las 2 de arriba y establece cierta base de proporciones. pqc</li>
              <li> <b>flex: 1 1 100px "grow shrink and basis"</b>  || hace todo lo que arriba hacen los otros 3, pero por defecto</li>
              <li> <b>align-self: </b>  || Está por default en parent, reescribe el align-item del objeto,  que estaba escrito en el contenedor</li>
              <li>
              <div id="flexboxcontainer">
                <div id="box1" style={{height:"10vh", order:2, flexGrow:3, flexShrink:3}}>
                  box1
                </div>
                <div id="box1" style={{height:"20vh", order:1, flexGrow:6, flexShrink:1}}>
                  box2
                </div>
                <div id="box1" style={{order:3, alignSelf:'flex-start'}}>
                  box3
                </div>
                <div id="box1" style={{order:6}}>
                  box4
                </div>
                <div id="box1" style={{order:8}}>
                  box5
                </div>
                <div id="box1" style={{order:7}}>
                  box6
                </div>
                <div id="box1" style={{order:4, alignSelf:'flex-end'}}>
                  box7
                </div>
                <div id="box1" style={{order:5, alignSelf:'flex-start'}}>
                  box8
                </div>
              </div>
              </li>
            </ul>
          </div> : null}
      </div>
    </div>
  )
}
