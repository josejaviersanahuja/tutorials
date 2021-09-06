import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PublishingApp() {
    
    const detalles={
        primero:{
            title: "Google Play Console",
            defBreve:"Como dije antes, a pesar de ser abrumadora la experiencia de la primera vez, es intuitivo si lees y sigues las instrucciones. Habrá alguna forma, o botón para Crear aplicación. Vamos a ello. https://play.google.com/console/",
            arrayCodigo:[
                {
                    cod:`// Cuestionarios
`,
                    text: "Las primeras partes del proceso son cuestionarios. Preguntas sobre el contexto de la aplicación, a quién va dirigido, a qué público va dirigido etc etc. Las únicas preguntas técnicas o no triviales son del tipo, que permisos solicita tu App. O tu App tiene contenido violento o sexual o... algo que sea sensurable. Respuestas que involucren permisos de privacidad o de contenido censurable, conllevan a la obligatoriedad de incluir de forma explicita el consenso del usuario, política de privacidad o de uso o cosas similares. Si vuestra primera App es sencilla como la mía, no hará falta pasar por este tramo."
                },
                {
                    cod:`// Assets, fotos, logos`,
                    text:"Justo después de superar los cuestionarios, viene la parte donde subimos inforación descriptiva y gráfica de lo que hace nuestra App. Debemos preparar, logos 1024x1024, 512x512, 1080x500, y screenshots que con 1980x1080 van bien."
                },{
                    cod:`//subimos nuestro bundle`,
                    text:"Nuestro bundle se encuentra en la carpeta ./android/app/build/outputs/bundle/release de nuestro proyecto. Solo debemos hacer upload al archivo, y podemos crear nuestra primera APP. Sigue el link que dejo abajo para tener una guía tutorial en vídeo. "
                }
            ],
            url:"https://www.youtube.com/watch?v=vBHmJHp8Ldo"           
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Publicando la App"
                parrafo="Para publicar la App controlada por tí y no por Expo, debes hacerlo desde el Google Play Console. Para ello deberás pagar 25$. Luego el proceso tiene muchas variables y una consola muy densa para tu primera vez. Pero tranquilo. Con paciencia se hace sin problemas. Vamos a ello."
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
