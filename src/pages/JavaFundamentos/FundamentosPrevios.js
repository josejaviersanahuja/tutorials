import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function FundamentosPrevios() {
    
    const detalles={
        primero:{
            title: "Conceptos Previos.",
            defBreve:"Estos conceptos incluyen, clases, interfaz, extensión de clases, fyle system, bucles, condicionales, try/catch, excepciones y mucho más.",
            arrayCodigo:[
                {
                    cod:`// Revisar la página de amigoscode.com
`,
                    text: "Hola, dejo el link abajo para que empiecen a aprender los fundamentos de Java de forma gratuita."
                }
            ],
            url:"https://amigoscode.com/p/java"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="08/11/2021"/>
            <Subtitle
                subtitle="Fundamentos previos."
                parrafo="Para bien o para mal, tanto en la universidad, (hace 15 años), como en un curso de fundamentos de Java que hice en Marzo 2021, tengo esta sección solo en mi cabeza, y no tengo apuntes hechos, sin embargo dejo esto por aquí con algún link donde conseguir la información de forma gratuita.."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
            />
            
        </div>
    )
}
