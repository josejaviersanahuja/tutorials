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
/e+/g   // matches as many e's as you can, pero si hay varias ee juntas, las machea en conjunto
            // por ejemplo hacemos "tree".replace("/e+/, a") 
            // el resultado no va a ser traa, 
            // el resultado será tra

// selector ?, optional selector
/ea?/g // machea todas las e's solas, y las ea

// selector *
/ea*/g // es como una combinación del + y el ?
        // ya que machea desde 0 a's hasta todas las a's que hayan después de la e
        // ejemplo heeaaaaaaa, matchea una e, y también la eaaaaaaa

// selector .
/.ea/g // matchea cualquier character que haya, EXCEPTO una nueva línea.
        // ejemplo 'brea lea' matchea rea y lea.


// selector \, sirve para seleccionar characteres que son selectores
/\./g // Esto machea todos los puntos en el texto.

// selector \d, digits
/\d/g // selecciona todos los dígitos del texto

// selector \w \W, selecciona palabras
/\w/g // esto matchea todas las letras de las palabras sin signos de puntuación.
/\W/g // esto matchea todo lo que no son letras
        // signos de puntuación y espacios en blanco

// selector \s \S, selecciona todos los spaces
/\s/g // todos los espacios en blanco son seleccionados.
/\S/g // todas las letras y puntuaciones son seleccionados.

// Advanced selector \w{4,5}
/\w{4}/g // machea palabras con 4 letras seguidas 
            // ejemplo 'esto es unaprueba' 
            // machea esto unap rueb

/\w{4,}/g // machea palabras de 4 letras o más
            // machea esto unaprueba

/\w{4,5}/g // machea palabras de 4 o 5 letras
            // machea esto unapr ueba

// selector []
/[ab]ed/g // machea aed y bed en el texto
/[a-z]ed/g // machea todas las opciones que empiecen con minuscula y terminen en ed
            // ejemplo 'pedestal medalla Cede'
            // machea ped med

// selector (), groups
/(t|T)he/g // Esto va a matchear the y The 
/(t|T){4,}he/g // esto va a machear 4 o más t ó T seguidas 

// selector ^
/^T/g // machea solo si la primera letra del párrafo es T
/^I/gm // el flag m significa multiline
        // suponiendo que una segunda o tercera línea empiece con I, esa será macheada

// selector $
/$z/g // machea solo el final del texto
/$z/gm // machea solo el el final de la línea si termina en z

`,
                    text:"Esto representa el 90 % de los selectores que usaremos en los regex. Pero vamos a estudiar también algunos selectores más complejos también."
                },{
                    cod:`// LookBehind
/(?<=[tT]he)./g // ejemplo 'the theater'
                // machea ' ' y a
                // básicamente decimos machea todo lo que esté precedido por the o The
                // o todo lo que venga después de the o The

/(?<![tT]he)./g // machea todos los chars que no tenga the o The antes

// LookForward
/.(?=at)/g // machea todo char que esté antes de at
/.(?!at)/g // machea todo char que no esté antes de at

// small example
/(\d{3})[ -]?(\d{3})[ -]?(\d{4})/g

// esto va a agrupar o machear las siguientes 3 lineas de igual forma
// 1234567890
// 123-456-7890
// 123 456 7890
// Si además hacemos replace
$1$2$3 // esto va a juntar los 3 grupos

// demosle nombres a los grupos
/(?<tagName1>\d{3})[ -]?(\d{3})[ -]?(\d{4})/g

$tagName1$2$3 // así quedaría el replace
`,
                    text:"Ahora ya podemos entender bien las regex. Solo queda ver formas ingeniosas de cómo usarlas."
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
