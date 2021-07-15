import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
export default function Trucos() {
 
   const trucos={
        primero:{
            title: "Truco 1.",
            defBreve:"Vamos a cubrir un div.contenerdor, con una capa superior transparente al hacer hover sobre él",
            arrayCodigo:[
                {
                    cod:`.contenerdor { 
    position: relative; 
    overflow: hidden;
}`,
                    text: "Es importante la posición relativa del contenedor porque lo vamos a curbrir con un el div.contenedor::after. El overflow es también importante porque el truco proviene de que el after, no pueda verse en overflow"
                },
                {
                    cod:`.contenedor::after { 
    position: absolute; 
    top: 100%; 
    left: 0; 
    content: ''; 
    background: rgba($color: $third-color, $alpha: 0.9); 
    width:100%; 
    height: 100%; 
    transition: all 0.5s linear;
}`,
                    text: "position absolute, va a permitir que el ::after se posicione respecto al div contenedor. top:100% va a cultarlo hacia abajo. sin content, el after no existe, usa el colo que mas quieras. opacidad al 0.9 recomendado. width y height 100% respecto al contenedor. haz un transition para que se vea genial."
                },
                {
                    cod:".contnedor:hover::after{ top:0;}",
                    text: "Esto va a hacer que el cobertor vuelva a la posición 0 al hacer hover. con la transicion de arriba, se puede ver el efecto de movimiento de abajo hacia arriba"
                }
            ]
        },
        segundo:{
            title: "Truco 2. Extensión del 1.",
            defBreve:"Ya vimos como cubrir un div contenedor. Dicho contenedor queda aislado por la capa que lo cubre. Veamos como colocar elementos que si permitan interactuar con el div.contenedor, por ejemplo un <nav> con links <a>. Usaremos el z-index",
            arrayCodigo:[
                {
                    cod:`.contenerdor nav{ 
    position: absolute;
    top:0; 
    width:100%; 
    height:100%; 
    z-index:1; 
    transtion: all 0.5s easy;
}`,
                    text: "Igual que con el truco 1, position absolute, top 0 width y height, permiten que nuestro nav, ocupe todo el espacio del div.contenedor. Con z-index 1, haremos que se vea, a pesar del covertor "
                },
                {
                    cod:`.contenedor nav a {
    color: transparent;
    cursor pointer;
    padding margin
}`,
                    text: "Aquí, está la magia de este truco. Aunque este nav esta por encima del div.contenedor, procuremos que sea invisible (transparente)."
                },
                {
                    cod:`.contnedor nav:hover a { 
    color: $primary-color;
}`,
                    text: "Esto va a hacer que los links dentro del nav, dejen de ser invisibles. y podremos ver e interactuar con los elementos"
                }
            ]
        },
        tercero:{
            title: "Botones con estilo.",
            defBreve:"Les presento una página web que muestra varios botones con estilos comunes de donde poder sacar ideas.",
            arrayCodigo:[
                {
                    cod:`boton:hover {
    box-shadow: 0 6px 2px -4px rgba(0, 0, 0, 0.2),
        0 4px 4px 0 rgba(0, 0, 0, 0.14),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
}`,
                    text: "Este efecto de botón elevado que es típico de google, se puede usar en varios sitios. Hay más que ver y aprender en el link de abajo."
                }
            ],
            url:"https://entrellaves.com/css/botones-css-elegantes-y-accesibles/"
        },
        cuarto:{
            title: "Efecto blur.",
            defBreve:"Cuando en un overflow scroll se pasa por detrás de un componente header con transparencia, podemos hacer que se vea con un efecto blur.",
            arrayCodigo:[
                {
                    cod:`header {
    position: fixed,
    top:0;
    height:2rem;
    width:100vw;
    background:rgba(0,0,0,0.5);
    backdrop-filter:blur(5px);
    z-index:1;
}`,
                    text: "Los elementos que pasen detrás del header se verán con un efecto difuminado."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="15/11/2020"/>
            <DetallesSubtema 
                title={trucos.primero.title} 
                defBreve={trucos.primero.defBreve} 
                arrayCodigo={trucos.primero.arrayCodigo}
                language="css"
            />
            <DetallesSubtema 
                title={trucos.segundo.title} 
                defBreve={trucos.segundo.defBreve} 
                arrayCodigo={trucos.segundo.arrayCodigo}
                language="css"
            />
            <DetallesSubtema 
                title={trucos.tercero.title} 
                defBreve={trucos.tercero.defBreve} 
                arrayCodigo={trucos.tercero.arrayCodigo}
                language="css"
                url={trucos.tercero.url}
            />
        </div>
    )
}
