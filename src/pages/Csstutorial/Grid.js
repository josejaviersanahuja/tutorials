import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function Grid() {
  const { open, abrirCerrar } = useAbrirCerrar()

  return (
    <div className="cuerpo">
      <div className="marco"><h4>Grida</h4>
        <div><b>display:grid</b> Va a generar un campo de grids para manipular. No hay subgrids aún 06/05/2021</div>
      </div>
      <div className="marco"><h4>Establecer el número de columnas y filas</h4>
        <div>El número de rows <b>grid-template-rows</b>, y el número de columnas <b>grid-template-columns</b> </div>
        <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
        {open[0] ?
          <div>
            <ul>
              <li> <b>grid-template-columns: repeat(11,1fr)</b> || establece 11 columnas iguales a 1/11vo de la pantalla </li>
              <li> <b>grid-template-rows: auto auto</b>  || establece la altura de las filas de forma automática </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Justify-content y align-content</h4>
        <div>  <b>Justify-content</b> juega con los espacios de izquierda a derecha <b>align-content</b> juega con los espacios de arriba a abajo </div>
        <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
        {open[1] ?
          <div>
            <ul>
              <li> <b>justify-content: start center end</b> || coloca las cajas contenidas de izquierda a derecha  </li>
              <li> <b>justify-content: space-evenly space-between</b>  || establece las cajas separadas, con la misma separación y cubren todo el contenedor </li>
              <li> <b>align-content: start center end</b> || coloca las cajas contenidas arriba al centro o abajo </li>
              <li> <b>align-content: space-evenly space-between</b>  || establece las cajas separadas, con la misma separación y cubren todo el contenedor </li>
            </ul>
          </div> : null}
      </div>
      <div className="marco"><h4>Gap</h4>
        <div><b>gap</b> especifica lo que era el margenen otras especificaciones </div>
        <a href onClick={() => abrirCerrar(2)} ><h5>EJEMPLOS: </h5></a>
        {open[2] ?
          <div>
            <ul>
              <li> <b>gap: 1rem 0.5rem, 2rem, 1rem;</b> || establece el margen en 1rem por arriba, 0.5 rem por la derecha, 2rem por abajo, 1rem por la izquierda </li>
            </ul>
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
