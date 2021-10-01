import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function DeeperXML() {
    
    const detalles={
        primero:{
            title: "Selección de idiomas.",
            defBreve:"Podemos crear Apps disponibles en distintos idiomas con la creación de ciertos archivos xml. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Paso 1 vamos al directorio app/res/values/

// Paso 2 Damos click derecho en la carpeta values o la carpeta strings dependiendo si es el primero file que añadimos o no.

// Paso 3 Seleccionamos new, y luego values resource files

// Paso 4 definimos el filename como strings.xml No te preocupes porque el nombre se repita

// Paso 5 en available qualifiers seleccionamos Locale y le damos click al botón >>

// Paso 6 Añadimos el Language y la región específica. Y le damos click en OK`,
                    text: "Esto va a crear una carpeta donde van a ir todos los strings.xml que vayamos a crear. Cada uno para distintos idiomas. Veamos el contenido de estos archivos."
                },{
                    cod:`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">HolaMundo</string>

    <string name="buttonText">Presiona Aquí</string>
</resources>`,
                    text:"Es importante que todos los archivos sean iguales Excepto por el valor de dentro de las etiquetas. El archivo en inglés debe tener la línea <string name='app_name'>HelloWorld</string>. Ahora veamos como acceder a estos archivos."
                },{
                    cod:`button = findViewById(R.id.button);
button.setText(getString(R.string.buttonText));`,
                    text:"De esta forma seteamos el texto del botón en base al idioma de la configuración del móvil del usuario. Un movil en inglés dirá Press here, y uno en español dirá Presione Aquí"
                }
            ]
        }, segundo:{
            title:"Selección de colores",
            defBreve:"Esta es otra forma de trabajar con archivos XML. En otro archivo xml vamos a definir los colores del proyecto. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Paso 1 vamos al directorio app/res/values/colors.xml y abrimos
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="purple_200">#FFBB86FC</color>
    <color name="purple_500">#FF6200EE</color>
    <color name="purple_700">#FF3700B3</color>
    <color name="teal_200">#FF03DAC5</color>
    <color name="teal_700">#FF018786</color>
    <color name="black">#FF000000</color>
    <color name="white">#FFFFFFFF</color>
</resources>`,
                    text:"Aquí se pueden leer los colores que tenemos por defecto en nuestro proyecto. Ahora veamos como acceder a dichos colores."
                },{
                    cod:`// Desde nuestro activity_main.xml
// Vamos al componente y buscamos un atributo que pueda colorear algo. un textColor o textColorHighlight

android:textColorHighlight="@color/teal_700"
`,
                    text:"Dentro del atributo android:textColorHighlight podemos seleccionar nuestras variables de color con el dato @color/elColorDeclarado"
                }
            ]
        },tercero:{
            title:"Styles",
            defBreve:"Aquí podemos definir themes y variables y/o mixins. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Paso 1 vamos al directorio app/res/values/themes.xml o styles.xml y abrimos
<?xml version="1.0" encoding="utf-8"?>
<resources  xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Theme.BasicUI" parent="Theme.MaterialComponents.DayNight.DarkActionBar">
        <!-- Primary brand color. -->
        <item name="colorPrimary">@color/purple_500</item>
        <item name="colorPrimaryVariant">@color/purple_700</item>
        <item name="colorOnPrimary">@color/white</item>
        <!-- Secondary brand color. -->
        <item name="colorSecondary">@color/teal_200</item>
        <item name="colorSecondaryVariant">@color/teal_700</item>
        <item name="colorOnSecondary">@color/black</item>
        <!-- Status bar color. -->
        <item name="android:statusBarColor" tools:targetApi="l">?attr/colorPrimaryVariant</item>
        <!-- Customize your theme here. -->
    </style>
</resources>
`,
                    text:"Aquí se pueden leer estilos que trae nuestro proyecto por defecto. shortcut dde colores, status bar etc."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="01/10/2021"/>
            <Subtitle
                subtitle="Todo sobre XML files"
                parrafo="Aquí veremos todas las funcionalidades de los archivos XML a parte de las funciones básicas donde definimos los componentes UI. Vamos a ello."
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
