import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Navigation() {
    
    const detalles={
        primero:{
            title: "Creando Nuevas Actividades.",
            defBreve:"Para crear nuevas actividades hay que crear un archivo xml, uno java y modificar el AndroidManifest.xml. Pero Android studio se encarga de todo eso por nosotros, así que veamos como hacerlo.",
            arrayCodigo:[
                {
                    cod:`// En el directorio app/java/com.zitrojjdev.nameApp le damos al click derecho
// Y le damos a new, y luego activity, y luego a empty activity`,
                    text: "De esa forma se definen el archivo xml, el java ya asociado a dicho archivo y también se modifica el AndroidManifest.xml y ya estamos listos para crear nuestra segunda página de nuestra app. Pero aún queda ver cómo navegar a dicha página."
                }
            ]
        }, segundo:{
            title:"Navegación simple",
            defBreve:"Esta es una navegación directa al estilo de  (Navigation.push) que ya solíamos hacer en React.",
            arrayCodigo:[
                {
                    cod:`Intent intentAbout = new Intent(MainActivity.this, About.class);
startActivity(intentAbout);`,
                    text:"Este es el código que se le puede pasar a un botón que se encuentre en MainActivity y te redirija a la página About de tu App. De esta forma también, podemos volver atrás con el botón principal de atrás de Andoird. Esto significa que es similar a un navigation.push."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="04/10/2021"/>
            <Subtitle
                subtitle="Navegación entre actividades"
                parrafo="Les recuerdo que cada página de una aplicación construída en android studio se llama Activity. Aquí aprenderemos como crear una nueva actividad y luego como crear una navegación directa a dicha página. Vamos a ello."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
            />
        </div>
    )
}
