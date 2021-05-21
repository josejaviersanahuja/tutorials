import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function BasicTags() {
    
    const detalles={
        primero:{
            title: "Basic Tags, HEAD",
            defBreve:"Describamos el Head.",
            arrayCodigo:[
                {
                    cod:"<head> children </head>",
                    text: "Contiene las etiquetas meta, title y links"
                },
                {
                    cod:"<meta charset='UTF-8'>",
                    text: "Define información de nuestra página web."
                },
                {
                    cod:"<meta name='description' content='this is an awesome website'>",
                    text: " Define información de nuestra página web. La descripción es lo primero que busca los buscadores"
                },
                {
                    cod:"<meta name='author' content='jj'>",
                    text: "Información sobre el autor"
                },
                {
                    cod:"<meta name='keywords' content='html, tutorial, react, learning'>",
                    text: "Informacion sobre palabras claves"
                },
                {
                    cod:"<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
                    text: "Información sobre el ancho del viewport"
                },
                {
                    cod:"<title> jj website </title>",
                    text: "Se puede hacer un hook en react para cambiar el title a la página"
                },
                {
                    cod:"<link rel='stylesheet' href='http.//Api or service imported'>",
                    text: "A veces importamos fuentes, iconos o similares"
                }
            ]
        },
        segundo:{
            title: "Basic Tags. BODY",
            defBreve:"Describamos el BODY. Va a contener TODO el cuerpo de la página web. Veamos algunas tags que podemos usar.",
            arrayCodigo:[
                {
                    cod:"<h1> children </h1>",
                    text: "h1, h2, h3... señalan tipos de títulos de distintos tamaños o propiedades "
                },
                {
                    cod:"<p> children </p>",
                    text: "Genera un párrafo nuevo"
                },
                {
                    cod:"<b> children </b> <i></i> <big></big> <sub></sub> <sup></sup>",
                    text: "b, i, big, small,  Modifica o estiliza al contenido"
                },
                {
                    cod:"<br/> o <hr/>",
                    text: "Generan espacios en la página. br espacia en bloque, hr espacia marcando una linea horizontal"
                },
                {
                    cod:"<!-- Comments in HTML --",
                    text: "Comentar un código html"
                },
                {
                    cod:"<img src alt />",
                    text: "Para importar imágenes "
                },
                {
                    cod:"<header> <main> <footer> <div> <nav> <article> <section>",
                    text: "Segmentos que podemos crear"
                },
                {
                    cod:"<a href='http://yasabemos.com' target='_blank'>link</a>",
                    text: "Anchor para links. target='_blank' sirve para abrir en una nueva ventana"
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
        </div>
    )
}
