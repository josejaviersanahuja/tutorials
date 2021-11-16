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
/algo/g

`,
                    text: "Dejo un link donde poder jugar con las regex, sirve de playground para comprobar ciertas funcionalidades de las regex."
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
