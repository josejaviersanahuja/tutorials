import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function Form() {

    const detalles={
        primero:{
            title: "Select",
            defBreve:"Describamos el select en el form debe tener atributos ... ver link al final de los apuntes",
            arrayCodigo:[
                {
                    cod:"<select form='buscar_pokemon' name='filtrodebusqueda'>",
                    text: "Ayuda mucho para cumplimentar un formulario de busqueda con autocompletar"
                },
                {
                    cod:"En network acces incluimos la ip 0.0.0.0/0",
                    text: "Esto nos permitirá dar acceso a todas las IP's. Luego vemos como dar seguridad"
                },
                {
                    cod:"npm install mongoose",
                    text: "Instalará esta dependencia de producción. Recuerda quitar el caret ^"
                }
            ],
            url:"https://www.htmlquick.com/es/reference/tags/select.html"
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
