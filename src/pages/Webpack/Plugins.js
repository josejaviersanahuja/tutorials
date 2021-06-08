import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function Plugins() {
    
    const detalles={
        primero:{
            title: "Npx y Npm",
            defBreve:"Estos son los 2 primeros comando que aprederemos. Empecemos...",
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
