import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function IniciosReact() {
    
    const detalles={
        primero:{
            title: "Npx y Npm",
            defBreve:"Estos son los 2 primeros comando que aprederemos. Empecemos...",
            arrayCodigo:[
                {
                    cod:"npx create-react-app name-app",
                    text: "npx ejecuta, npm descarga. npx ejecuta la creación del proyecto. npm descarga paquetes como npm start. se ve en las herramientas de desarrollo"
                },
                {
                    cod:"npx create-react-app name-app --template redux.",
                    text: "Esto va a crear un boilerplate para usar react con redux"
                },
                {
                    cod:"npx create-react-app name-app --template typescript",
                    text: "Esto va a crear un boilerplate para empezar a trabajar con typescript desde el principio."
                },
                {
                    cod:"npm start",
                    text: "Este es uno de los scripts que más usaremos, levanta un servidor en modo desarrollo que va a levantar nuestra APP."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="15/12/2020"/>
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
