import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PrepararIconos() {
    
    const detalles={
        primero:{
            title: "Title o Nombre de la App",
            defBreve:"A veces iniciamosel proyecto en una carpeta con nombre MyApp y cuando queremos publicarlo, debemos cambiar el nombre. Veamos como hacerlo.",
            arrayCodigo:[
                {
                    cod:`//En el Package.json
{
  "name": "colors_palette",
  ...
}
`,
                    text: "Modificamos el nombre del proyecto en el package.json."
                },{
                    cod:`// abrimos el archivo ./android/app/src/main/res/values/strings.xml
<string name="app_name">Colors Palette</string>`,
                    text:"Cambiamos el nombre de la APP en ese archivo."
                }
            ]            
        },
        segundo:{
            title:"Creando nuestros propios íconos Parte I",
            defBreve:"Como mencioné antes, el Play Store de Android nos va a pedir íconos de muchas formas y tamaños. Yo solo mostraré un pequeño truco y luego, para mal o para bien, la creación de los otros íconos las hice a mano con GIMP. Existen herramientas que automatizan el proceso, pero las que recomendaron en los tutoriales, o ya estaban deprecadas, o era muy complicado. Me pareció, más sencillo, aunque más largo, hacerlas yo mismo.",
            arrayCodigo:[
                {
                    cod:`// Todos los iconos en ./android/app/src/main/res/mipmap-xxxx`,
                    text:"En el link de abajo, podemos crear un pequeño atajo. Lo más normal es que si trabajamos en un proyecto serio, tengamos un logo. Con un Logo 1024pxx1024px podemos crear todos los íconos cuadrados que necesitamos. Solo que necesitaremos otros tipos de íconos también."
                },{
                    cod:`//Hay que dominar Android studio`,
                    text:"En una clase, vi a alguien que tenía su proyecto de react native dentro de un proyecto de Android Studio, y android studio provee un método de creación de íconos más sencillo, con un proceso similar al anterior, se generan TODOS los íconos. Lamento no poder explicar como lo hizo porque no pude reproducirlo. Cuando lo sepa, creo otra sección @TODO."
                }
            ],
            url:"https://appicon.co/"
        },
        tercero:{
            title:"Creando nuestros propios íconos Parte II",
            defBreve:"Ahora toca ir a Gimp y crear nuestra magia de diseño. Podemos tomar como modelo el icono del androide, y editarlo para sobreescribir nuestro ícono cuadrado. Ahora solo queda el Splash.",
            arrayCodigo:[{
                cod:`//El Splash es algo más complicado y lo explico en su propia sección`,
                text:"El splash es esa imagen que aparece cuando está cargando (inicializando) la app. Es algo complejo configurarlo y lo explico en su propia sección, solo adelanto que necesitaremos crear la imagen que queremos mostrar. Yo la hice 1980x1024px."
            }]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Preparaciones previas al deploy"
                parrafo="Google App Store es más estricto al momento de aceptar y recibir assets tales como íconos, splash images, dimensiones, ya que debe poder renderizar distintas opciones en tablets 10.1, tablets 7', móviles pequeños, moviles grandes, Android Note Books. La preparación previa es muy ardua si a comparamos con crear un favicon o modificar un title y una descripción. Así que vamos a ello."
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
                url={detalles.segundo.url}
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
