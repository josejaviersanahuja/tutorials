import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
export default function Layouts() {
  
  const detalles = {
    primero: {
      title: "Layouts",
      defBreve: "En teoría css se mueve en Cajas que se tocan las unas a las otras. Y existen 3 fronteras importantes. Padding, border y margin",
      arrayCodigo: [
        {
          cod: "Padding",
          text: "Es la frontera que se encarga de separar el contenido del border."
        },
        {
          cod: "Border",
          text: "Es la frontera que se encarga de separar el padding del margin."
        },
        {
          cod: "Margin",
          text: "Es la frontera que se encarga de separar el borde de otras cajas"
        }
      ]
    },
    segundo: {
      title: "Establecer el tamaño de los boxes",
      defBreve: "El tamaño height es normalmente absoluto <b>px, o vh</b>, y el width debería ser 'responsive' es decir relativo vw o %",
      arrayCodigo: [
        {
          cod: "height:300 px o 30vh",
          text: "Establece la atura en 300px o aproximadamente el 30% de la altura de la pantalla"
        },
        {
          cod: "width al 70% o 70vw",
          text: "Establece el ancho de forma relativa al ancho de pantalla del dispositivo"
        },
        {
          cod: "Margin",
          text: "Es la frontera que se encarga de separar el borde de otras cajas"
        }
      ]
    },
    tercero: {
      title: "Bordes",
      defBreve: "Tienen 3 parámetros, tamaño , puede ser px, estilo, hay 4 solid, dotted, dashed, double y color",
      arrayCodigo: [
        {
          cod: "border: 1rem solid red",
          text: "Establece una linea de borde y un ancho de 1rem"
        },
        {
          cod: "border: 1rem double blue",
          text: "Establece una doble linea de borde y un ancho de 1rem"
        }
      ]
    },
    cuarto: {
      title: "Margin and Padding",
      defBreve: "Son 2 atributos escenciales para el posicionamiento del contenido respecto a sus cajas contenedoras",
      arrayCodigo: [
        {
          cod: "padding:20px;",
          text: "Establece un espacion por los 4 lados, de 20 px, entre el borde y el contenido de la caja."
        },
        {
          cod: "margin: 30px;",
          text: "Establece un espacio por los 4 lados, de 30 px, entre el borde, y las cajas contiguas"
        }
      ]
    },
    quinto: {
      title: "Float and Display",
      defBreve: "El display modifica el comportamiento de cada caja. existen 2 tipos. Comportamiento por bloques y el comportamiento inline. El comportamiento por bloques, es el default cuando no existen estilos. Cada elemento ocupa un solo bloque de izquierda a derecha. El comportamiento inline, es cuando dos cajas (por ejemplo '<h1>titulo</h1> <p>parrafo<p/>' ) se verían uno al lado del otro",
      arrayCodigo: [
        {
          cod: "float: left or right",
          text: "Establece la caja de forma inline y modifica el ancho de las otras cajas que queden inline, con este elemento."
        },
        {
          cod: "display: inline-block",
          text: "Establece la caja de forma inline, con su elemento o caja contigua anterior. Nota: display:inline; puede afectar el elemento o caja que estamos moviendo. mejor usar inline-block"
        }
      ]
    },
    sexto: {
      title: "Display: Flex",
      defBreve: "Cajas flexible. Se componen del elemento padre que es el contenedor, y los elementos hijos los (items)",
      arrayCodigo: [
        {
          cod: "display: flex;",
          text: "Establece al contenedor como un flexbox."
        },
        {
          cod: "flex-direction:row;",
          text: "Es row por defecto, pero puede ser column o row/column - reverse."
        },
        {
          cod: "flex-wrap:wrap o nowrap;",
          text: "Decide si ajustar el contenido o dejar que haga que desborde"
        }
      ]
    },
    septimo: {
      title: "Justify-cont y Align-items",
      defBreve: "Alineación vertical align-items y alineación horizontal justify-content",
      arrayCodigo: [
        {
          cod: "justify-content: center;",
          text: "flex-start, center o flex-end. Como con el texto, mueve a la izquierda, centra o mueve a la derecha las cosas."
        },
        {
          cod: "justify-content: space-around",
          text: "Distribuye los espacios para que las cajas contenido ocupen todo el contenedor. Incluyendo los bordes."
        },
        {
          cod: "justify-content:space-between;",
          text: "Distribuye los espacios para que las cajas contenido ocupen todo el contenedor. No incluye los bordes"
        },
        {
          cod: "align-items: center;",
          text: "flex-start, center o flex-end. Mueve arriba, al centro o mueve abajo las cosas. Cuidado con el height de los hijos, puede cambiar."
        },
        {
          cod: "align-items: baseline",
          text: "Si hay cajas de distintas altura (height), las alinea en una misma línea imaginaria donde la primera línea coincidan."
        },
        {
          cod: "align-items: stretch",
          text: "Está por default, Hace que el height ocupe todo el height del padre o contenedor."
        }
      ]
    },
    octavo: {
      title: "Modificadores del contenido en Flexbox",
      defBreve: "Ordenar elementos order: n, que los contenidos respondan a la pantalla con flexBasis, flexShrink y flexGrow",
      arrayCodigo: [
        {
          cod: "style={{order:n}}",
          text: "Esta propiedad order, ordena los elementos del flexbox con el parámetro que le pasemos. Nota: 0 es el default, empezar en 1."
        },
        {
          cod: "flex-grow: 1 //proporcion",
          text: "La proporcion no es de tamaño, sino de espacio vacío del que se apropia al. Nota: establecer todos los contenidos al menos en 1."
        },
        {
          cod: "flex-shrink:n;",
          text: "Nota: establecer todos los contenidos al menos en 1, ya que en 0, no se encoje"
        },
        {
          cod: "flex-basis:100px;",
          text: "Es la base de las 2 propiedades (shrink y grow) y establece cierta base de proporciones. pqc."
        },
        {
          cod: "flex: 1 1 100px 'grow shrink and basis'",
          text: "Hace todo lo que arriba hacen los otros 3, pero por defecto."
        },
        {
          cod: "align-self: ",
          text: "Está por default en parent, reescribe el align-item del objeto,  que estaba escrito en el contenedor."
        }
      ]
    }
  }

  return (
    <div className="cuerpo">
      <PublishDay date="15/11/2020"/>
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
      <DetallesSubtema
        title={detalles.sexto.title}
        defBreve={detalles.sexto.defBreve}
        arrayCodigo={detalles.sexto.arrayCodigo}
      />
      <DetallesSubtema
        title={detalles.septimo.title}
        defBreve={detalles.septimo.defBreve}
        arrayCodigo={detalles.septimo.arrayCodigo}
      />
      <DetallesSubtema
        title={detalles.octavo.title}
        defBreve={detalles.octavo.defBreve}
        arrayCodigo={detalles.octavo.arrayCodigo}
      />

      <div className="marco">
        Ejemplo de margin, padding, border
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
      </div>
      <div className="marco">
        ???
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
      </div>
      <div className="marco">
        Ejemplos de posicionamiento dentro del flexbox
              <div id="flexboxcontainer">
          <div id="box1" style={{ height: "10vh" }}>
            box1
                </div>
          <div id="box1" style={{ height: "20vh" }}>
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
      </div>
      <div className="marco">
        Ejemplo de modificadores del flexbox
              <div id="flexboxcontainer">
          <div id="box1" style={{ height: "10vh", order: 2, flexGrow: 3, flexShrink: 3 }}>
            box1
                </div>
          <div id="box1" style={{ height: "20vh", order: 1, flexGrow: 6, flexShrink: 1 }}>
            box2
                </div>
          <div id="box1" style={{ order: 3, alignSelf: 'flex-start' }}>
            box3
                </div>
          <div id="box1" style={{ order: 6 }}>
            box4
                </div>
          <div id="box1" style={{ order: 8 }}>
            box5
                </div>
          <div id="box1" style={{ order: 7 }}>
            box6
                </div>
          <div id="box1" style={{ order: 4, alignSelf: 'flex-end' }}>
            box7
                </div>
          <div id="box1" style={{ order: 5, alignSelf: 'flex-start' }}>
            box8
                </div>
        </div>
      </div>
    </div>
  )
}
