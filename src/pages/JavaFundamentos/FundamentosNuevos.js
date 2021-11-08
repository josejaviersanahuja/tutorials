import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function FundamentosNuevos() {
    
    const detalles={
        primero:{
            title: "Programación Funcional con Java.",
            defBreve:"Vamos a empezar a aprender las bases y fundamentos para entender la programación funcional.",
            arrayCodigo:[
                {
                    cod:`// Functions

`,
                    text: "Hola, dejo el link abajo para que empiecen a aprender los fundamentos de Java de forma gratuita."
                }
            ],
            url:"https://amigoscode.com/p/java-functional-programming"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="08/11/2021"/>
            <Subtitle
                subtitle="Fundamentos Nuevos."
                parrafo="Aquí iré anotando todo contenido nuevo de Java que no haya visto previamente, principalmente estudiaré el paradigma de programación funcional con Java."
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
