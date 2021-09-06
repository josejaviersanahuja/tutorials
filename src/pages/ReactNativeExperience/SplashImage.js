import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function SplashImage() {
    
    const detalles={
        primero:{
            title: "Splash Image con bootsplash",
            defBreve:"Para poder crear mi splash image, me apoyo en react-native-bootsplash. Es un paquete especializado en esto mismo. ¿Por qué uso este? porque tiene una documentación similar otros paquetes populares y además, encontré un vídeo paso a paso para crearlo. Dejo el Link más abajo.",
            arrayCodigo:[
                {
                    cod:`npm i react-native-bootsplash

npx react-native generate-bootsplash ./assets/logo.png --background-color=7CA546 

//RESULT OF GENERATE-BOOTSPLASH
android/app/src/main/res/drawable/bootsplash.xml
android/app/src/main/res/values/colors.xml (creation and edition)
android/app/src/main/res/mipmap-hdpi/bootsplash_logo.png
android/app/src/main/res/mipmap-mdpi/bootsplash_logo.png
android/app/src/main/res/mipmap-xhdpi/bootsplash_logo.png
android/app/src/main/res/mipmap-xxhdpi/bootsplash_logo.png
android/app/src/main/res/mipmap-xxxhdpi/bootsplash_logo.png
`,
                    text: "Esto va a instalar y a generar nuestras imagenes splash y las va a guardar en los mismos directorios que nuestros íconos."
                }
            ],
            url:"https://www.youtube.com/watch?v=PlubOKfi46o"           
        },
        segundo:{
            title:"Retocamos Archivos de configuración",
            defBreve:"Con solo generar nuestro splash, no es suficiente. Debemos decirle a nuestro proyecto que debe mostrar y donde encontrarlo. Aquí viene lo complicado, vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// abrimos el archivo ./android/app/src/main/java/com/colorpalette2/MainActivity.java
import android.os.Bundle; // <- add this necessary import

import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import

public class MainActivity extends ReactActivity {

    // … Dejamos lo que ya había pero añadimos lo siguiente
  
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity
    }
`,
                    text:"Añadimos nuevos import a ese archivo y añadimos un override para mostrar nuestro archivo xml donde se encuentra nuestro splash image."
                },
                {
                    cod:`//Edit the android/app/src/main/res/values/styles.xml 

<resources>

  <!-- ... Dejamos el resto como estaba y añadimos el siguiente style -->
 
  <style name="BootTheme" parent="AppTheme">
    <item name="android:background">@drawable/bootsplash</item>
  </style>

</resources>                    `,
                    text:"Haré una analogía mala, si en el .java de arriba dijimos donde encontrar el xml de nuestro splash, aquí estamos decimos con qué estilo mostrarlo. Similar al html, css de una página web. Queda el javascript (manifest-application-activity)"
                },{
                    cod:`//Edit the android/app/src/main/AndroidManifest.xml file:
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.colorspalette2">

  <!-- … -->

  <application
    android:name=".MainApplication"
    android:label="@string/app_name"
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:allowBackup="false"
    android:theme="@style/AppTheme">

    <activity
      android:name=".MainActivity"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
      android:label="@string/app_name"
      android:windowSoftInputMode="adjustResize"
      android:exported="true"
      android:launchMode="singleTask">

      <!--1 ⚠️ add 2 new lines  android:exported="true" and android:launchMode="singleTask" -->
      <!--2 remove the <intent-filter> from .MainActivity -->
    </activity>

    <!-- 3 add the following activity (usas el xml y el style que creamos antes) -->
    <activity
      android:name="com.zoontek.rnbootsplash.RNBootSplashActivity"
      android:theme="@style/BootTheme"
      android:launchMode="singleTask">
      <!-- 4 Add the block you removed on step 2 -->
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>

    <!-- … -->

  </application>

</manifest>`,
                    text:'Son 4 pasos, está bien explicado. 1 Añadimos 2 líneas android:exported="true" and android:launchMode="singleTask". 2 Cortamos el <intent-filter> por completo. 3. añadimos una nueva actividad, y pegamos el <intent-filter> que cortamos antes.'
                }
            ],
            url:"https://www.npmjs.com/package/react-native-bootsplash"
        },
        tercero:{
            title:"Implementar nuestro Splash en nuestro código",
            defBreve:"Ya tenemos nuestros assets, nuestra configuración, ahora hay que decirle a nuestra App donde y como mostrar/esconder nuestro splash. Básicamente, buscamos el primer componente que se renderiza en nuestra App y ahí retocamos lo siguiente:",
            arrayCodigo:[
                {
                    cod:`import RNBootSplash from "react-native-bootsplash";

//Buscas el punto en la lógica de tu App donde el componente esté listo para mostrarse. Normalmete al final del useEffect del primer componente.                    

RNBootSplash.hide(); // immediate
RNBootSplash.hide({ fade: true }); // fade`,
                    text:"Escoge la forma como quieras Esconder tu splash. los métodos show y hide son asíncronos. Aunque no sería lo típico, podemos decidir mostrar nuestro splashde vez en cuando. solo codificamos lo siguiente."
                },{
                    cod:`import RNBootSplash from "react-native-bootsplash";

RNBootSplash.show(); // immediate
RNBootSplash.show({ fade: true }); // fade`,
                    text:"Cuando queramos mostrarlo y o esconderlo en cualquier otro componente."
                },{
                    cod:`import React, { useEffect } from "react";
import { Text } from "react-native";
import RNBootSplash from "react-native-bootsplash";

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  return <Text>My awesome app</Text>;
}`,
                    text:"Y esto es un ejemplo completo de como podemos implementar la lógica que oculta nuestro splash."
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Prepara nuestro Splash Image"
                parrafo="Crear nuestro splash image sube nuestro nivel como desarrolladores, además debo añadir que es algo complicado y me apoyo en un programa para poder crearlo. Mostraré paso a paso como se hace para Android."
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
