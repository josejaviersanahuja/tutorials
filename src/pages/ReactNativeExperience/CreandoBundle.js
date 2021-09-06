import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function CreandoBundle() {
    
    const detalles={
        primero:{
            title: "Uploading Key",
            defBreve:"El primer paso para crear nuestro bundle .aab, es crear un uploading key para nuestro proyecto. Esta clave encriptada es fundamental para hacer el seguimiento de mejoras y actualizaciones de nuestra aplicación. También me encontré con algunos problemas para crearlo, así que expongo paso a paso, como logré hacerlo.",
            arrayCodigo:[
                {
                    cod:`// Abrimos el powershell como administrador y nos movemos a la carpeta 
// C:/Program Files/Java/jdkx.x.x_x/bin

//Y ejecutamos el siguiente comando.

keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
`,
                    text: "Cambiamos my-upload-key por colors-palette-key y my-key-alias por colors-palette. Estos datos son importantes. Sigue el proceso de preguntas y respuestas hasta el final que se genera nuestro archivo en el directorio antes especificado. Luego copiamos el archivo y lo colocamos en ./android/app"
                }
            ],
            url:"https://reactnative.dev/docs/signed-apk-android"           
        },
        segundo:{
            title:"Configurando el nuevo Signed Key.",
            defBreve:"El archivo que generamos debe ser leído por nuestro proyecto, así que debemos configurarlo para que lo lea. Veamos como.",
            arrayCodigo:[
                {
                    cod:`// Abrimos el siguiente archivo android/gradle.properties
//... al final añadimos lo siguiente
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=***** //cambiamos los *** por nuestra contraseña
MYAPP_UPLOAD_KEY_PASSWORD=***** //cambiamos los *** por nuestra contraseña
                    `,
                    text:"Si, la contraseña será visible para todo el mundo. Así que si es un proyecto público, busca estrategias para proteger esa contraseña. El siguiente archivo a configurar será android/app/build.gradle, vamos a ellos"
                },
                {
                    cod:`// Abrimos el archivo android/app/build.gradle

...
android {
    ...
    defaultConfig { ... }
    
    //Añadimos el siguiente bloque, dentro de este objeto

    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    // Y además añadimos el signingConfig.release en el buildTypes realease.
    //reemplazamos el que había

    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...                    `,
                    text:"Con estas 2 configuraciones cambiadas, ya podemos crear nuestro bundle. Debo añadir algo. Cuendo creé mi proyecto, decidí usar una API http, y sin saber que Android bloquearía los fetch en producción. Tuve que reconfigurar y retocar algunos archivos de configuración para que se pudiesen enviar dichos fetch. Evita consumir APIS http."
                }
            ]
        },
        tercero:{
            title:"Crando el Bundle y primer testing",
            defBreve:"Ejecutamos el comando para crear el bundle y el primer comando para que dicho bundle se instale en nuestro AVD.",
            arrayCodigo:[
                {
                    cod:`cd android
./gradlew bundleRelease`,
                    text:"Nos movemos a la carpeta android y ejecutamos el segundo comando. Eso va a construir nuestro bundle."
                },
                {
                    cod:`npx react-native run-android --variant=release`,
                    text:"Ahora si todo va bien, podemos hacer el primer testing de nuestra App en production."
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Creando el bundle"
                parrafo="Crear el bundle es como ejecutar el npm run build, solo que es mucho más complejo porque el resultado final es el exportable que recibe Android Play Store para subir nuestra App. Es un proceso importante y hay que hacerlo bien."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
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
