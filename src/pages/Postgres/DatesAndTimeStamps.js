/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function DatesAndTimeStamps() {
    
    const detalles={
        primero:{
            title: "NOW function",
            defBreve:"Vamos a empezar por la función now, que sirve para crear timestamps.",
            arrayCodigo:[
                {
                    cod:`SELECT NOW();
//             now              
// -------------------------------
// 2022-01-17 00:52:29.571321+00
// (1 fila)
      
# Vemos cómo crear un timestamp inmediato, pero vamos a aprender a filtrar algo de información.

SELECT NOW()::DATE;
//     now     
// ------------
//  2022-01-17

SELECT NOW()::TIME;
//        now       
// -----------------
//  01:19:04.620429
// (1 fila)


`,
                    text: "Con esto solo comenzamos a conocer estas funciones tan importantes."
                }
            ],
            url:"https://www.postgresql.org/docs/14/datatype-datetime.html"
        }, segundo:{
            title:"EXTRACT function",
            defBreve:"Vamos a seguir aprendiendo funciones muy útiles para el manejo de fechas con POSTGRES. Como de momento el único timestamp que tenemos a la mano es NOW() es lo que vamos a mostrar, pero en una base de datos vamos a tener muchos timestamp en las tablas. Vamos a ello.",
            arrayCodigo:[
                {
                        cod:`SELECT EXTRACT(YEAR FROM NOW());
// extract 
// ---------
//     2022
// (1 fila)

# Voy a copiar varias funciones más cómo DOW para ir viendo más cosas.
learningtest=# SELECT EXTRACT(YEAR FROM NOW());
 extract 
---------
    2022
(1 fila)

learningtest=# SELECT EXTRACT(MONTH FROM NOW());
 extract 
---------
       1
(1 fila)

learningtest=# SELECT EXTRACT(DAY FROM NOW());
 extract 
---------
      17
(1 fila)

learningtest=# SELECT EXTRACT(DOW FROM NOW());
 extract 
---------
       1 // Lunes
(1 fila)

learningtest=# SELECT EXTRACT(CENTURY FROM NOW());
 extract 
---------
      21
(1 fila)

learningtest=# SELECT EXTRACT(SECONDS FROM NOW());
  extract  
-----------
 11.234008
(1 fila)

learningtest=# SELECT EXTRACT(HOUR FROM NOW());
 extract 
---------
       1
(1 fila)

learningtest=# SELECT EXTRACT(MINUTE FROM NOW());
 extract 
---------
      34
(1 fila)

`,
                        text:"Aquí vemos cómo podemos extraer casi cualquier cosa del timestamp desde el siglo hasta los segundos."
                }
            ]
        },
        tercero:{
            title:"AGE function",
            defBreve:"Esta función va a ayudarnos a transformar fechas y timestamps en edades.",
            arrayCodigo:[
                {
                    cod:`SELECT *, AGE(NOW(), date_of_birth) FROM person;
// id | first_name  | last_name | gender | date_of_birth |       email       |               age               
// ----+-------------+-----------+--------+---------------+-------------------+---------------------------------
//     1 | Anne        | Smith     | FEMALE | 1988-01-09    |                   | 34 years 8 days 01:40:08.256117

`,
                    text:"Nótese que AGE recibe 2 parámetros, 1 la fecha cuando se quiere mirar la edad, y 2 la fecha de nacimiento."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="17/01/2022"/>
            <Subtitle
                subtitle="Dates and Timestamps."
                parrafo="Aunque esta sección sea corta, es tan pero tan relevante que vamos a dedicar esta página de forma exclusiva a estas funciones."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
                language="sql"
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="sql"
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="sql"
            />
        </div>
    )
}
