import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function AllRegex() {
    
    const detalles={
        primero:{
            title: "Regex en 20 minutes.",
            defBreve:"Mejor conocidas como regular expresions, son cadenas de caracteres basadas en reglas sintácticas que permiten describir secuencias de caracteres. Así, forman parte de los lenguajes regulares, los cuales son un subgrupo de los lenguajes formales, de gran importancia para la tecnología de la información y, especialmente, para el desarrollo de software.",
            arrayCodigo:[
                {
                    cod:`// parte 1.
/algo/g // algo son los caracteres que se buscan en en el texto que estamos trabajando.
                    // g es un flag que representa busqueda global dentro del texto.
                    // Lo más común es que trabajemos con la bandera g por defecto
                    // la bandera i, significa case insensitive. Mayusculas y minusculas por igual


`,
                    text: "Dejo un link donde poder jugar con las regex, sirve de playground para comprobar ciertas funcionalidades de las regex. El gran verdadero poder de regex aparece cuando trabajamos con los selectores especiales +, ^, [], ? . Vamos a ello."
                },{
                    cod:`// selector +
/e+/g   // esto va a encontrar todas las e, pero si hay varias ee juntas, las machea en conjunto
            // por ejemplo hacemos "tree".replace("/e+/, a") 
            // el resultado no va a ser traa, 
            // el resultado será tra



`,
                    text:""
                }
            ],
            url:"https://regexr.com"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="16/11/2021"/>
            <Subtitle
                subtitle="Regex"
                parrafo="El motivo de este segmento se explica cuando en un problema de 4kyu de codewars, yo presento una solución de 30 o 40 líneas de código, y veo que la solución mejor valorada se escribía en una sola línea de código con regex."
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
