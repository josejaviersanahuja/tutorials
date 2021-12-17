/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PostgresCommands() {
    
    const detalles={
        primero:{
            title: "Comandos para Tablas.",
            defBreve:"Vamos a ver los comandos para crear tablas y columnas t tipos de datos para postgres.",
            arrayCodigo:[
                {
                    cod:`# paso 1. Una vez conectados a la base de datos que queremos proseguimos con:
// CREATE TABLE table_name (
//     Column name + data type + constraints if any
// )

CREATE TABLE person (
    id int,
    first_name VARCHAR(50),
    LAST_NAME varchar(50),
    gender VARCHAR(6),
    date_of_birth TIMESTAMP,
)
`,
                    text: "Abajo pongo un link para ver la documentación de los data types que tiene postgres. Recomiendo que nos familiaricemos con estos data types."
                }
            ],
            url:"https://www.postgresql.org/docs/14/datatype.html"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="17/12/2021"/>
            <Subtitle
                subtitle="Comandos para crear tablas y datos."
                parrafo="Ahora vamos a interactuar con postgres para empezar a crear datos y tablas relevantes."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
            />
            {/* <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            /> */}
        </div>
    )
}
