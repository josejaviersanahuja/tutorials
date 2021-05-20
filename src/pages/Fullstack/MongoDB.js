import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function MongoDB() {
    
    const detalles={
        primero:{
            title: "MongoDB",
            defBreve:"Entramos a mongodb.com y nos conectamos con nuestra cuenta gmail. Configuración inicial para un servicio gratuito y Además bajamos Robo 3T.",
            arrayCodigo:[
                {
                    cod:"Recomiendo guardar bien usuario, contraseñas, y el driver code que te da mongoDB",
                    text: "Como además soy novato, guardo también la IP que me asignó mongoDB"
                },
                {
                    cod:"En network acces incluimos la ip 0.0.0.0/0",
                    text: "Esto nos permitirá dar acceso a todas las IP's. Luego vemos como dar seguridad"
                },
                {
                    cod:"npm install mongoose",
                    text: "Instalará esta dependencia de producción. Recuerda quitar el caret ^"
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
