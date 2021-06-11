import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function UnitTypes() {
    
    const detalles = {
        primero: {
            title: "Text Manipulation",
            defBreve: "Existen 2 tipos de manipulaciones a grandes rasgos. Text y Fonts. Ahora veremos las manipulaciones de texto",
            arrayCodigo: [
                {
                    cod: "Link {text-decoration: none;} ",
                    text: "Los links traen por default un text decoration de subrayado. ahora con none, no lo van a tener"
                },
                {
                    cod: "Link { text-decoration: underline;}",
                    text: "Los links traen por default un text decoration de subrayado."
                },
                {
                    cod: "Link {text-decoration: line-through;}",
                    text: "Ahora veremos un link tachado"
                },
                {
                    cod: "Body {text-transform: uppercase; }",
                    text: "Transforma el texto en todas mayúsculas ."
                },
                {
                    cod: "Body {text-transform: lowercase;} ",
                    text: "Transforma el texto en todas minúsculas"
                },
                {
                    cod: "Body {text-transform: capitalize;}",
                    text: "Transforma el texto en palabras capitales, que empiezan en mayúsculas."
                },
                {
                    cod: "Body {text-align: center;}  ",
                    text: "Como en word, existen los alineados a la izquierda (left), a la derecha (right), centrado (center) y justify"
                }
            ]
        },
        segundo: {
            title: "Font Manipulation",
            defBreve: "Ahora veamos las Font Manipulations. Empecemos por los básicos",
            arrayCodigo: [
                {
                    cod: "Body {font-size: 1.15em ;} ",
                    text: "Tamaño de la fuente aumenta en un 15%."
                },
                {
                    cod: "Body {font-weight: 700;} ",
                    text: "Van de 0 a 900, donde 700 es el weight de una letra en bold."
                },
                {
                    cod: "Body {font-style: italic;}",
                    text: "Cambia la forma de la fuente, puede asumir valores italic, oblique, normal."
                }
            ]
        },
        tercero: {
            title: "Font Manipulation Family",
            defBreve: "Ahora veamos las Font Manipulations más avanzados.",
            arrayCodigo: [
                {
                    cod: "Body {font-family: sans-serif ;} ",
                    text: "Las san-serif son más legibles en pantallas."
                },
                {
                    cod: "Body {font-family: serif;} ",
                    text: "Agrega un muy tenue difuminado, que sobre el papel queda bien, pero sobre la pantalla, genera stress."
                },
                {
                    cod: "Body {font-family: monospace;} ",
                    text: "Como en las máquinas de escribir, toda fuente mantiene la misma separación."
                }
            ]
        },
        cuarto: {
            title: "Font Manipulation Imports",
            defBreve: "Ahora veamos las importaciones de fuentes. Dejo el link al final para google fonts",
            arrayCodigo: [
                {
                    cod: "En google fonts buscamos la fuente que más nos guste y seleccionamos el botón más",
                    text: "Aparecen, a mano derecha, los códigos o scripts para descargarlo o importarlo."
                },
                {
                    cod: "Lo más fácil es copiar el <link> y pegarlo en el head de nuestro html ",
                    text: "Procura que quede por encima del link de nuestro stylesheet"
                },
                {
                    cod: "En la misma página de googlefonts donde conseguimos copiar el link, copia el llamado en css",
                    text: "Pegalo en donde quieras usar esa fuente, y ya está"
                }
            ],
            url: "https://fonts.google.com/specimen/Pattaya#pairings"
        }
    }
    return (
        <div className="cuerpo">
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                language="css"
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="css"
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="css"
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
        </div>
    )
}
