import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function Grid() {
  
  const detalles={
    primero:{
        title: "Grids",
        defBreve:"display:grid Va a generar un campo de grids para manipular. Solo hay subgrids en Mozilla Firefox Beta a día de 06/05/2021",
        arrayCodigo:[
            {
                cod:"grid-template-rows y grid-template-columns",
                text: "Establecer el número de columnas y filas"
            },
            {
                cod:"grid-template-columns: repeat(11,1fr)",
                text: "establece 11 columnas iguales a 1/11vo de la pantalla"
            },
            {
                cod:"grid-template-rows: auto auto",
                text: "establece la altura de las filas de forma automática"
            }
        ]
    },
    segundo:{
      title: "Justify-content y align-content",
      defBreve:"Justify-content juega con los espacios de izquierda a derecha y align-content juega con los espacios de arriba a abajo ",
      arrayCodigo:[
          {
              cod:"justify-content: start center end",
              text: "Coloca las cajas contenidas de izquierda a derecha"
          },
          {
              cod:"justify-content: space-evenly space-between",
              text: "Establece las cajas separadas, con la misma separación y cubren todo el contenedor"
          },
          {
              cod:"align-content: start center end",
              text: "Coloca las cajas contenidas arriba al centro o abajo"
          },
          {
            cod:"align-content: space-evenly space-between",
            text: "Establece las cajas separadas, con la misma separación y cubren todo el contenedor"
        }
      ]
  },
  tercero:{
    title: "Gap",
    defBreve:"Especifica lo que era el margenen otros displays",
    arrayCodigo:[
        {
            cod:"gap: 1rem 0.5rem, 2rem, 1rem",
            text: "Establece el margen en 1rem por arriba, 0.5 rem por la derecha, 2rem por abajo, 1rem por la izquierda"
        }
    ]
  },
  cuarto:{
    title: "Lines",
    defBreve:"Con grid-column puedes elegir de que línea del grid empieza el elemento a que línea termina. grid-row Hace lo mismo de arriba a abajo",
    arrayCodigo:[
        {
            cod:"grid-column:2/10",
            text: "Establece de donde a donde va la caja dentro del grid."
        },
        {
          cod:"grid-row: 3/5",
          text: "Establece de donde a donde va la caja dentro del grid"
        }
    ]
  },
  quinto:{
    title: "Grid-area",
    defBreve:"Une en un solo comando, ambas especificaciones de arriba. grid-column y grid-row",
    arrayCodigo:[
        {
            cod:"grid-area: 2/3 span 7/ span8;",
            text: "Establece al contenedor que empieza desde el punto de la fila2 y la columna3, hasta la fila 7 y la columna 8"
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
      <DetallesSubtema 
                title={detalles.quinto.title} 
                defBreve={detalles.quinto.defBreve} 
                arrayCodigo={detalles.quinto.arrayCodigo}
      />
    </div>
  )
}
