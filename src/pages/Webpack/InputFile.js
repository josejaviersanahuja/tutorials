import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function InputFile() {
    
    const detalles={
        primero:{
            title: "Punto de Entrada de la aplicación.",
            defBreve:"Trabajar con modulos hace que el trabajo del programador se lea y se entienda mejor. Sabrás a esta altura que el 80% del tiempo estaremos leyendo código, y si el código es largo, se complica la lectura. Mejor trabajar con módulos. Webpack, va a hacer el trabajo de entender los módulos. Lo único que necesita para comenzar es saber el punto de entrada de nuestra App y empezará a jalar del hilo.",
            arrayCodigo:[
                {
                    cod:"npx y npm es un gestor de paquetes que viene con nodejs",
                    text: "npx ejecuta, npm descarga. npx ejecuta la creación del proyecto. npm descarga paquetes como npm start. se ve en las herramientas de desarrollo"
                },
                {
                    cod:"yarn es lo mismo pero de facebook, no de Nodejs.",
                    text: "yarn es una alternativa"
                },
                {
                    cod:"pnpm es otra opcion...",
                    text: ""
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
        </div>
    )
}
