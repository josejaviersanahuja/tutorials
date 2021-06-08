import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function IniciarProyecto() {

    const detalles = {
        primero: {
            title: "npx create-next-app twitterclone",
            defBreve: "Así creamos un proyecto de NextJS. Muy similar a React en muchos sentidos. Nos centraremos en las diferencias y en la integración con Typescript",
            arrayCodigo: [
                {
                    cod: "|1| Crear archivo tsconfig.json vacío en el root del proyecto. |2| hacer un 'npm run dev' en consola",
                    text: "Automáticamente Next detecta lo que deseamos hacer y nos sugiere importar ciertas librerías y dependencias de nuestro proyecto."
                },
                {
                    cod: "npm install --save-dev typescript @types/react",
                    text: "Este es el comando que nos sugiere Nextjs y así lo ejecutamos."
                },
                {
                    cod: "Creamos nuestro _app.tsx en 'root/pages'",
                    text: "Muchas veces Next crea el proyecto sin el _app.tsx que nos permitirá crear una SPA."
                },
                {
                    cod: "import { AppProps } from 'next/app'; function App({ Component, pageProps }: AppProps) { return <Component {...pageProps} /> }",
                    text: "Así debe inicializarse el archivo _app.tsx. Nota: Ya sabemos que aquí debemos indicar todos los componentes comunes a la SPA."
                }
            ],
            url:"https://nextjs.org/learn/excel/typescript/nextjs-types"
        },
        segundo: {
            title: "Estilos en NextJS",
            defBreve: "Los estilos con NextJS tienen muchísimo potencial, porque uno puede añadir varias a la carta. Mostremos la forma de crear los estilos y usarlos.",
            arrayCodigo: [
                {
                    cod: "function Style(){ return ( <style jsx={true}>{' main { width:100%; height:100vh; text-align:center; margin-top: -10vh; padding: 10vh 0; } '} </style> ) }",
                    text: "No se si es buena práctica o no, pero creo una función de estilos dentro del componente con las etiquetas <style jsx={true}>. Recuerda que debes usar backticks"
                },
                {
                    cod: "<Style/>",
                    text: "Añadimos Esta etiqueta al componente donde creamos la función. Otra gran propiedad de NextJS es que este estilo será único para ese componente. Next gestiona todos los className por ti."
                }
            ],
        },
        tercero: {
            title: "Links y Routes",
            defBreve: "No vamos a necesitar React-Router-Dom. Next aporta de su librería un buen servicio de Links y Routes",
            arrayCodigo: [
                {
                    cod: "import Link from 'next/link'",
                    text: "Así lo importamos y lo usamos. Recuerda que No hace falta el Route para cambios simples de páginas. Basta con crear una nueva carpeta en el path root/pages"
                },
                {
                    cod: "<Link><a>link</a></Link>",
                    text: "Debemos añadir la etiqueta <a> sin atributos."
                }
            ],
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
        </div>
    )
}
