import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Miscelanious() {
    
    const detalles={
        primero:{
            title: "Importando paquetes y librerías externas a nuestra App.",
            defBreve:"Vamos e explicar cómo importar paquetes y librerías externas a nuestro proyecto en android studio. El siguiente ejemplo es de Glide, dejo el github más abajo.",
            arrayCodigo:[
                {
                    cod:`repositories {
  google()
  mavenCentral()
}

dependencies {
  implementation 'com.github.bumptech.glide:glide:4.12.0'
  annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'
}
`,
                    text: "Esto forma parte de la documentación de Glide. Ahora debemos implementar este paquete en nuestro proyecto, para eso copiamos lo que está dentro de dependencies y nos dirigimos al archivo build.gradle pero existen 2 archivos con ese nombre, uno es del proyecto, y el otro del módulo, vamos al del módulo."
                },{
                    cod:`dependencies {

    implementation 'androidx.appcompat:appcompat:1.3.1'
    implementation 'com.google.android.material:material:1.4.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.1'
    testImplementation 'junit:junit:4.+'
    androidTestImplementation 'androidx.test.ext:junit:1.1.3'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'
    implementation 'com.github.bumptech.glide:glide:4.12.0'
    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'
}`,
                    text:"Copiamos y pegamos en la parte de dependencies los paquetes que queremos agregar y le damos a un botón tipo link en la esquina superior derecha que dice Sync Now. Y listo, con eso queda añadido nuestras librerías importadas."
                }
            ],
            url:"https://github.com/bumptech/glide"
        }, segundo:{
            title:"CardView",
            defBreve:"Esto se trata de bajar un paquete que nos va a permitir crear un layout customizable para crear tarjetas con un buen diseño. El paquete en cuentión se puede conseguir en el link que dejo más abajo. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Cómo importar desde la documentación
dependencies {
    implementation "androidx.cardview:cardview:1.0.0"
}

// Cómo usar el paquete
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:card_view="http://schemas.android.com/apk/res-auto"
    ... >
    <!-- A CardView that contains a TextView -->
    <androidx.cardview.widget.CardView
        xmlns:card_view="http://schemas.android.com/apk/res-auto"
        android:id="@+id/card_view"
        android:layout_gravity="center"
        android:layout_width="200dp"
        android:layout_height="200dp"
        app:cardElevation="7dp"
        card_view:cardCornerRadius="4dp">

        <TextView
            android:id="@+id/info_text"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
    </androidx.cardview.widget.CardView>
</LinearLayout>`,
                    text:"Este paquete es muy útil, vamos a usarlo mucho."
                }
            ],
            url:"https://developer.android.com/guide/topics/ui/layout/cardview#groovy"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="06/10/2021"/>
            <Subtitle
                subtitle="Miscelanious"
                parrafo="Aquí podremos encontrar información variada y corta que no corresponde a ningún módulo completo pero que vale la pena estudiar y dejar registrado en esta guía. Vamos a ello."
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
        </div>
    )
}
