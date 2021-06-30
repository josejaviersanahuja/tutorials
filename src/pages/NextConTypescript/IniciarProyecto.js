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
                    cod: "|1| Crear archivo tsconfig.json vacío en el root del proyecto. |2| npm run dev en consola",
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
                    cod: `import { AppProps } from 'next/app'; 
function App({ Component, pageProps }: AppProps) { 
    return <Component {...pageProps} /> 
}`,
                    text: "Así debe inicializarse el archivo _app.tsx. Nota: Ya sabemos que aquí debemos indicar todos los componentes comunes a la SPA."
                }
            ],
            url:"https://nextjs.org/learn/excel/typescript/nextjs-types"
        },
        segundo: {
            title: "Estilos en NextJS",
            defBreve: "Los estilos con NextJS tienen muchísimo potencial, porque uno puede añadir varias a la carta. Mostremos la forma de crear los estilos y usarlos. Para ello hay que importar css de styled-jsx/css.",
            arrayCodigo: [
                {
                    cod: `import css from 'styled-jsx/css'

const componentStyle = css' 
    main { 
    width:100%; 
    height:100vh; 
    text-align:center; 
    margin-top: -10vh; 
    padding: 10vh 0; 
    } 
`,
                    text: "Esta es una buena forma de separar el estilo del cuerpo del componente. PERO no permite introducir las variables JS para darle potencia al estilo jsx."
                },
                {
                    cod: `<style jsx>{componentStyle}</style>
<style jsx>{'main {
    background: $ {aqui si puede ir una variable JS en el cuerpo}
}'}</style>`,
                    text: "Añadimos esta etiqueta al componente donde creamos nuestro objeto componentStyle. Otra gran propiedad de NextJS es que este estilo será único para ese componente. Next gestiona todos los className por ti. y la segunda etiqueta, con estilos la uso para introducir los estilos dependientes de variables JS"
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
                },
                {
                    cod: `import {useRouter} from 'next/router'
    const router = useRouter()`,
                    text: "Así lo importamos y lo usamos. Ahora podemos usar el hook"
                },
                {
                    cod: "router.replace('path') || router.push('path')",
                    text: "Debemos escoger correctamente el método adecuado según lo que necesitemos."
                },
                {
                    cod: `Como el sistema de rutas es por carpetas, una carpeta con ruta dinámica se declara de 2 formas posibles.
    // 1
    status/[id]/index.tsx
    // 2
    status/[id].tsx`,
                    text: "Cualquier forma es válida para la fecha Octubre 2020."
                },
                {
                    cod: `<Link href="status/[id]" as="status/$ {id}"><a>link</a></Link>
    route.push('status/[id]', ''status/$ {id})`,
                    text: "En rutas dinamicas debemos añadir los atributos as tanto al Link como al Hook router para que se comporte como un SPA."
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
