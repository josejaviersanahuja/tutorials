import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function VariablesFunciones() {
   
    const detalles={
        primero:{
            title: "Variables y Funciones en Sass",
            defBreve:"Parece claro, empecemos.",
            arrayCodigo:[
                {
                    cod:`$font-weights:('regular':400,'medium':500,'bold':700);
$background-homecolor: black; $background-PVPcolor: grey;` ,
                    text: "con el $ se declaran las variables"
                },
                {
                    cod:"_archivo.sass",
                    text: "Un archivo que empieza por '_' underscore, no se transpila a menos que se importe al main.sass"
                },
                {
                    cod:"@import './archivo';",
                    text: "Se importa sin el underscore, sin la extensión y se añade ; siempre."
                },
                {
                    cod:`@function f_weight($name) { 
    @return map-get($font-weights, $name)
};`,
                    text: "Así se declara una función"
                },
                {
                    cod:"& , #{&}",
                    text: "Permiten simplificar ciertas anidaciones de códigos. con {'&'} podemos llamar al nombre de la clase padre y con {'#{&}'} llamamos a toda la clase padre"
                },
                {
                    cod:`@mixin dispFlexCenter {
    display:flex, 
    align-items:center, 
    justify-content:center
};`,
                    text: "Estas líneas de código se puede reutilizar cuando se quiera."
                },
                {
                    cod:"@include dispFlexCenter;",
                    text: "Se importa a cualquier elemento que queramos. Nota, el @mixin puede recibir argumentos como en una funcion."
                }
            ]
        },
        segundo:{
            title: "Media Queries",
            defBreve:"Veamos un ejemplo donde observamos el ancho de la pantalla en px. util para cambiar a mobile style",
            arrayCodigo:[
                {
                    cod:`@mixin mobile{ 
    @media (max-width:$mobile_width){
        @content ;
    }
};`,
                    text: "Primera parte, se crea la funcion mixin donde se lanza la media query @media (max-width:800px) y modifica el content"
                },
                {
                    cod:`@include mobile {
    display:flex; 
    flex-direction:column;
}` ,
                    text: "Esto es lo que se modifica en el content"
                }
            ],
            url:"http://sass-lang.com"
        },
        tercero:{
            title: "Extensiones",
            defBreve:"Otra forma de ahorrar lineas de código es hacer extensiones. usaremos #{'{&}'}",
            arrayCodigo:[
                {
                    cod:`#{&}__paragraph2{
    @extend .main__paragraph; 
    width: fit-content; 
};`,
                    text: "Hará que .main__paragraph2 sea igual a .main__paragraph y ademas se le añaden más cosas al segundo "
                }
            ]
        },
        cuarto:{
            title: "Iteraciones",
            defBreve:"Otra forma de ahorrar lineas de código es hacer Iteraciones y son poderosas.",
            arrayCodigo:[
                {
                    cod:`@for $i from 1to5 {
    item:nth-child(#{$i}){
        transition-delay:$i*0.1s
    }
}`,
                    text: "esta iteración dará delays distintos a los distintos "
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
                language="scss"
            />
            <DetallesSubtema 
                title={detalles.segundo.title} 
                defBreve={detalles.segundo.defBreve} 
                arrayCodigo={detalles.segundo.arrayCodigo}
                url={detalles.segundo.url}
                language="scss"
            />
            <DetallesSubtema 
                title={detalles.tercero.title} 
                defBreve={detalles.tercero.defBreve} 
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="scss"
            />
            <DetallesSubtema 
                title={detalles.cuarto.title} 
                defBreve={detalles.cuarto.defBreve} 
                arrayCodigo={detalles.cuarto.arrayCodigo}
                language="scss"
            />
        </div>
    )
}
