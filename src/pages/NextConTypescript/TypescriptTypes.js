import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function TypescriptTypes() {

    const detalles = {
        primero: {
            title: "Como declarar tipos en TypeScript",
            defBreve: "Typescript es un lenguaje muy útil, con todas las bondades de JS y es mucho más legible y documentable. Los JS normales, son relativamente fáciles de transpilar mentalmente a Typescript, pero los jsx, adaptarse a los strict modes del tsx lleva práctica y tiempo. ",
            arrayCodigo: [
                {
                    cod: "children: React.ReactNode || Un componente es un React.Element || una función handleClick es un MouseEventHandler",
                    text: "."
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
            
        </div>
    )
}
