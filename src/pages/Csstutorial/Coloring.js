import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import useAbrirCerrar from 'hooks/useAbrirCerrar'

export default function Selector() {
  const {open, abrirCerrar} = useAbrirCerrar()
  const detalles={
    primero:{
        title: "Tipos de Colores",
        defBreve:"Color by name, Hex code, Decimal code RGB. Al final de los apuntes, hay un link muy bueno para ver la tabla de colores ",
        arrayCodigo:[
            {
                cod:"color:yellow;",
                text: "Color text by name"
            },
            {
                cod:"{color: #00BFFF}",
                text: "Color text with Hexcode"
            },
            {
                cod:"{color: rgb(0,159,255)}",
                text: "color text with Decimal RGB code"
            }
        ],
        url:"https://www.rapidtables.com/web/css/css-color.html"
    },
    segundo:{
      title: "Background colors",
      defBreve:"Background se puede añadir al body { background: aqua;}",
      arrayCodigo:[
          {
              cod:"body {background: aqua;}",
              text: "Colorea el background de toda la página"
          },
          {
              cod:".clase {background-color: aqua;}",
              text: "Colorea el background de los segmentos con la clase='clase'"
          },
          {
              cod:"{color: rgb(0,159,255)}",
              text: "color text with Decimal RGB code"
          }
      ]
  },
  tercero:{
    title: "Background con imagenes",
    defBreve:"Una imagen background se puede añadir con una url",
    arrayCodigo:[
        {
            cod:"background:url('https://th.bing.com/th/id/OIP.Hlx_5IVMuFs2PWRqnI_C8gHaHX?w=184&h=184&c=7&o=5&pid=1.7');",
            text: "Esto pintará el background con la imagen de esa url"
        },
        {
            cod:"background-image:url('../imagenes/logo.jpg');",
            text: "Esto pintará el background con la foto de la url local"
        },
        {
            cod:"#id {background: no-repeat;}",
            text: "pone la imagen sin repetir en la izquina superior izquierda"
        },
        {
            cod:".clase {background-size: 1rem 2rem;}",
            text: " Colorea la imagen del background en la dimension 1rem x 2rem con o sin repeat "
        },
        {
            cod:".clase {background-size: cover;}",
            text: "Colorea la imagen para que cubra todo el background"
        },
        {
            cod:".clase {background-size: contain;}",
            text: " Colorea la imagen para que cubra todo el background sin fastidiar las dimensiones"
        }
    ]
  },
  cuarto:{
    title:"Transparencia u opacidad de Colores",
    defBreve:"Al Decimal code RGB puede añadirse un campo más. rgbA",
    arrayCodigo:[
      {
        cod:"{color: rgba(0,159,255,0)}",
        text:"El dígito 0, representa al color totalmente transparente, sin color"
      },
      {
        cod:"{color: rgba(0,159,255,1)}",
        text:"El dígito 1, representa al color totalmente opaco, igual al '{color: rgb(0,159,255)}'"
      },
      {
        cod:"{color: rgb(0,159,255,0.5)}",
        text:"0.5 representa transparencia al 50%"
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
          url={detalles.primero.url}
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
