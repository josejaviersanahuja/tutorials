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
        }, tercero:{
            title:"Navegación con un parámetro",
            defBreve:"Ahora vamos a ver cómo navegar pasando algún parámetro a la siguiente actividad. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Este código está dentro de un RecyclerView, por eso el context en vez de el this
Intent intent = new Intent(context, BookActivity.class);
intent.putExtra("position", position);
context.startActivity(intent);`,
                    text:"Con el intent.putExtra podemos pasar una clave key-value que va a poder ser leída en la actividad a la que nos dirigimos. En este caso se trata de un entero con la posición del elemento dentro del arrayList. Veamos cómo acceder a dicha clave en nuestro BookActivity.class."
                },{
                    cod:` Intent intent = getIntent();
int position = intent.getIntExtra("position", 0);`,
                    text:"Definimos un intent pero no uno nuevo, sino el que nos trajo hasta esta actividad con getIntent. Luego extraemos el valor con getIntExtra y pasamos la clave, pero también un valor por defecto (Por si acaso no funciona). De esa manera, podemos rebuscar el libro dentro de nuestro arrayList en la posición position y podemos extraer los datos de ahí."
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
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
