import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Selector() {
    const detalles = {
        primero: {
            title: "Selectores de elementos",
            defBreve: "Son modificadores de todos los elementos sin clases ni id's",
            arrayCodigo: [
                {
                    cod: " body {}",
                    text: "Se usa para estilizar la etiqueta body."
                },
                {
                    cod: "a {} ... div {}",
                    text: "Se usa para estilizar los elementos que están dentro de la etiqueta a, los div"
                },
                {
                    cod: ".nombre_clase {}",
                    text: "Estiliza a las etiquetas con className='nombre_clase'"
                },
                {
                    cod: "#nombre_id {}",
                    text: "Estiliza a las etiquetas con id='nombre_id'"
                },
                {
                    cod: "Es importantisimo entender el orden de especificidad. #id es más específico que las .clases y este más específico que los selectores básicos",
                    text: ""
                }
            ]
        },
        segundo: {
            title: "Psedo selectores",
            defBreve: "Son selectores de elementos, cuando cumplen una condición",
            arrayCodigo: [
                {
                    cod: ":hover",
                    text: "Se usa para estilizar cuando el mouse está sobre el elemento."
                },
                {
                    cod: ":first-child",
                    text: "Se usa para estilizar a los primeros elementos de una consecución de elementos. Por ejemplo, el primer li de un ol o un ul."
                },
                {
                    cod: ":last-child",
                    text: "Se usa para estilizar a los últimos elementos de una consecución de elementos. Por ejemplo, el último li de un ol o un ul."
                },
                {
                    cod: "ol:nth-child(3)",
                    text: "Se usa para estilizar al elemento n de una consecución de elementos. En este ejemplo, el tercer li de un ol"
                },
                {
                    cod: ":only-child",
                    text: "Se usa para estilizar al único elemento de una consecución de elementos. Por ejemplo, si un ol, tiene un único li."
                },
                {
                    cod: ":link",
                    text: "Se usa para estilizar los links"
                },
                {
                    cod: ":visited",
                    text: "Se usa para estilizar algún link que ya haya sido visitado."
                }
            ]
        },
        tercero: {
            title: "Advanced selectores",
            defBreve: "Son modificadores de las etiquetas que cumplan cierta condición en cuando al orden de aparición dentro del código html",
            arrayCodigo: [
                {
                    cod: " input + button{}",
                    text: "Se usa para estilizar a los botones que están inmediatamente después de un input. Nota: no importa que el botón esté fuera de la sección del input"
                },
                {
                    cod: "input ~ button {}",
                    text: "Se usa para estilizar a los botones, inmediatamente después de un input PERO, deben estar dentro de la misma sección, por ejemplo, que su contenedor padre sea el mismo form"
                },
                {
                    cod: "ul > li {}",
                    text: "Estiliza a las etiquetas li, pero solo a la que son hijas directas del ul"
                },
                {
                    cod: "ul li {}",
                    text: "Estiliza a las etiquetas li dentro de ul. Sean li hijas directas o indirectas"
                }
            ]
        },
        cuarto: {
            title: "ATRIBUTE selectores",
            defBreve: "Son modificadores de todos los elementos sin clases ni id's",
            arrayCodigo: [
                {
                    cod: "img[src^='/rootpath'] {}",
                    text: "va a cambiar todas las imagenes que empiezan por esa ruta '/rootpath'"
                },
                {
                    cod: "img[src$='/rootpath'] {}",
                    text: " va a cambiar todas las imagenes que terminan por esa ruta"
                },
                {
                    cod: "img[src*='/rootpath'] {}",
                    text: " va a cambiar todas las imagenes que pasan por esa ruta"
                },
                {
                    cod: "h2[className~= segunda_palabra] {}",
                    text: " va a cambiar todos los h2 que tengan un espacio y una segunda_palabra"
                },
                {
                    cod: "h2[className|= primera_palabra] {} va a cambiar todos los h2 que tengan un espacio y una primera_palabra",
                    text: " va a cambiar todos los h2 que tengan un espacio y una primera_palabra"
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
        </div>
    )
}
