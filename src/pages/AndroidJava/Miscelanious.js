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
        },tercero:{
            title: "WebView (Iframes).",
            defBreve:"Aquí podremos trabajar con Iframes dentro de nuestra App. Puede ser un complemento espectacular para nuestras aplicaciones nativas. Vamos a ellos",
            arrayCodigo:[
                {
                    cod:` <!-- Lo primero es el XML, donde definimos un webview que acupa toda la pantalla -->
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".WebViewActvity">

    <WebView
        android:id="@+id/webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>

</androidx.constraintlayout.widget.ConstraintLayout>`,
                    text: "Así definimos el webview que ocupa toda la pantalla."
                },{
                    cod:`// buena práctica pasar la url en el intent para que el webView sea reutilizable
public void onClick(View view) {
    Intent intent = new Intent(About.this, WebViewActvity.class);
    intent.putExtra("url", "https://tutorials-vert.vercel.app/");
    startActivity(intent);
}`,
                    text:"Así definimos el intent que va a navegar al webView."
                },{
                    cod:`package com.zitrojjdev.sampleapp1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewActvity extends AppCompatActivity {
    private static final String TAG = "onWebViewActivity";
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view_actvity);

        // receiving the url from previous intent
        Intent intent = getIntent();
        String url ="";
        try {
            url= intent.getStringExtra("url");
        } catch (NullPointerException e){
            Log.d(TAG, "onCreate: No url from intent");
        }

        // initWidget
        webView = findViewById(R.id.webView);

        // para evitar que se abra con el navegador
        webView.setWebViewClient(new WebViewClient());

        // open javascripts for websites to work
        webView.getSettings().setJavaScriptEnabled(true);

        // load url
        webView.loadUrl(url);
    }

    // Como navegamos dentro de nuestra app, el boton de go back de android puede navegar atrás dentro del webView
    // o puede navegar atrás en nuestra APP y sacarnos del webView. Por eso sobreescribimos el método
    @Override
    public void onBackPressed() {
        // si podemos navegar atrás dentro del webView,
        if (webView.canGoBack()){
            webView.goBack();
        } else {
            // Si no podemos ir atras en el webView, vamos atras en la APP
            super.onBackPressed();
        }
    }
}`,
                    text:"Aquí usamos varios métodos del webView como setWebViewClient o getSettings o loadUrl. Dejo link para documentar mejor que más se puede hacer."
                }
            ],
            url:"https://developer.android.com/reference/android/webkit/WebView"
        },cuarto:{
            title:"Navegación con animación",
            defBreve:"Vamos a aprender a crear animaciones simples para que la navegación entre actividades sea agradable. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// 1. Debemos crear un directorio anim en app/src/main/res
                    
// 2. creamos 4 archivos, 2 para la navegación push, y 2 para goBack
// Les llamaremos in, out, close_in, close_out

// IN
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="-100%p"
    android:toXDelta="0%p"
    android:duration="500">

</translate>

// OUT
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="0%p"
    android:toXDelta="100%p"
    android:duration="400">

</translate>

// close_in
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="100%p"
    android:toXDelta="0%p"
    android:duration="500">

</translate>

// close_out
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="0%p"
    android:toXDelta="-100%p"
    android:duration="400">

</translate>
`,
                    text:"Aquí hemos definido una transformación por traslación en una sola dirección. Ahora queda ver como hacer la navegación con el push y con el goBack"
                },{
                    cod:`// Java part para el push
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_currently_reading_books);

    getSupportActionBar().setDisplayHomeAsUpEnabled(true);

    // Esta es la parte que interesa
    overridePendingTransition(R.anim.in, R.anim.out);
    
    ...`,
                    text:"Este método overridePendingTransition recibe los archivos xml que creamos más arriba. Es el mismo método que se usa para el goBack, pero en ese caso se coloca en otro método. Vamos a ello."
                },{
                    cod:`// java part para el goBack
@Override
public void finish() {
    super.finish();
    overridePendingTransition(R.anim.close_in, R.anim.close_out);
}`,
                    text:"Y de esta forma queda terminada la animación entre cada navegación. Hay que definirlo en todas las actividades."
                }
            ],
            url:"https://developer.android.com/training/animation/overview?hl=es"
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
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                url={detalles.tercero.url}
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
                url={detalles.cuarto.url}
            />
        </div>
    )
}
