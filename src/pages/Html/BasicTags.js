import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function BasicTags() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
            <div className="marco"><h4>Basic Tags, HEAD</h4>
                <div> describamos el Head </div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li> <b>{"<head> children </head>"}</b>|| Contiene las etiquetas meta, title y links </li>
                            <li><b>{"<meta charset='UTF-8'>"}</b> || Define información de nuestra página web. </li>
                            <li><b>{"<meta name='description' content='this is an awesome website'>"}</b> || Define información de nuestra página web. La descripción es lo primero que busca los buscadores</li>
                            <li><b>{"<meta name='author' content='jj'>"}</b> || informacion sobre el autor</li>
                            <li><b>{"<meta name='keywords' content='html, tutorial, react, learning'>"}</b> || informacion sobre palabras claves</li>
                            <li><b>{"<meta name='viewport' content='width=device-width, initial-scale=1.0'>"}</b> || informacion sobre palabras claves</li>
                            <li><b>{"<title> jj website </title>"}</b> || evidente </li>
                            <li><b>{"<link rel='stylesheet' href='http.//Api or service imported'>"}</b>|| A veces importamos fuentes, iconos o similares</li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>Basic Tags. BODY</h4>
                <div> describamos el BODY. Va a contener TODO el cuerpo de la página web. Veamos algunas tags que podemos usar</div>
                <a href onClick={() => abrirCerrar(1)} ><h5>EJEMPLOS: </h5></a>
                {open[1] ?
                    <div>

                        <ul>
                            <li> <b>{"<h1> children </h1>"}</b>|| h1, h2, h3... señalan tipos de títulos de distintos tamaños o propiedades </li>
                            <li><b>{"<p> children </p>"}</b> || Genera un párrafo nuevo</li>
                            <li><b>{"<b> children </b> <i></i> <big></big> <sub></sub> <sup></sup>"}</b> || b, i, big, small,  Modifica o estiliza al contenido</li>
                            <li><b>{"<br/> o <hr/>"}</b> || Generan espacios en la página. br espacia en bloque, hr espacia marcando una linea horizontal</li>
                            <li><b>{"<!-- Comments in HTML --"}</b> || Comentar un código html</li>
                            <li><b>{"<img src alt />"}</b> || para importar imágenes </li>
                            <li><b>{"<header> <main> <footer> <div> <nav> <article> <section>"}</b>|| segmentos que podemos crear</li>
                            <li><b>{"<a href='http://yasabemos.com' target='_blank'>link</a>"}</b>|| anchor para links. target='_blank' sirve para abrir en una nueva ventana</li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
