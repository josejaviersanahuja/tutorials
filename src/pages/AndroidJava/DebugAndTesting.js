import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function DebugAndTesting() {
    
    const detalles={
        primero:{
            title: "Logs & Life Cycle.",
            defBreve:"Si conoces muy bien el ciclo de vida de los componentes, con establecer unos logs en lugares precisos, podemos encontrar el 80% de los errores de nuestro código. Así que empecemos por ahí.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.logssaveinstanceandfragments;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
// 1. LOGS en android requieren un TAG. (abrv logt)
    private static final String TAG = "MainActivity";

    // widgets
    private TextView textView;
    private Button btn;

    // to control save instance
    private String finalText = "We have already clicked";
    private boolean hasBeenClicked = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

// 2. Para mostrar un log usamos la abrv logd. Recomiendo usar una palabra clave en mi caso zitrojj
        Log.d(TAG, "onCreate: zitrojj start");
        
        initWidgets();

        // Por si hay un save instance
        if (savedInstanceState != null){
            hasBeenClicked = savedInstanceState.getBoolean("hasBeenClicked");
        }
        // apply changes from savedInstance
        if (hasBeenClicked){
            textView.setText(finalText);
        }
    }

    private void initWidgets(){
        textView = findViewById(R.id.textView);
        btn = findViewById(R.id.btn);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textView.setText(finalText);
                hasBeenClicked = true;
            }
        });
    }

// 3. de aquí para abajo, todo lo que veremos son ciclos de vida del componente y sus respectivos logs
    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        Log.d(TAG, "onSaveInstanceState: zitrojj start");
        outState.putBoolean("hasBeenClicked", hasBeenClicked);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onDestroy() {
        Log.d(TAG, "onDestroy: zitrojj start");
        super.onDestroy();
    }

    @Override
    protected void onPause() {
        Log.d(TAG, "onPause: zitrojj start");
        super.onPause();
    }

    @Override
    protected void onResume() {
        Log.d(TAG, "onResume: zitrojj start");
        super.onResume();
    }

    @Override
    protected void onStop() {
        Log.d(TAG, "onStop: zitrojj start");
        super.onStop();
    }

    @Override
    protected void onStart() {
        Log.d(TAG, "onStart: zitrojj start");
        super.onStart();
    }
}

// LOGS GENERADOS AL GIRAR EL DISPOSITIVO
// ... D/MainActivity: onPause: zitrojj start
// ... D/MainActivity: onStop: zitrojj start
// ... D/MainActivity: onSaveInstanceState: zitrojj start
// ... D/MainActivity: onDestroy: zitrojj start
// ... D/MainActivity: onCreate: zitrojj start
// ... D/MainActivity: onStart: zitrojj start
// ... D/MainActivity: onResume: zitrojj start

`,
                    text: `El paso 1 y 2 son extremadamente simples. El paso 3, solo tendrá valor cuando corramos la aplicación y veamos el logcat. Truco, para ver bien el logcat vamos a filtrar la búsqueda con la palabra clave que hemos puesto, de lo contrario, será un dolor de cabeza. Aprovecho la clase donde nos enseñan el onSaveInstance y muestran que al girar el dispositivo, los cambios se pierden. Y al ver el log del life cycle, podemos entender por qué pasa esto. Cuando se cambia la configuración de nuestro móvil, el componente se pausa, se detiene, pasa por el save instance, se destruye, y se vuelve a crear. Sin embargo este no parece ser el método final para gestionar los save instances ya que se menciona algo llamado MVVM.`
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="28/10/2021"/>
            <Subtitle
                subtitle="Debug & Testing."
                parrafo="En este apartado vamos a aprender técnicas y teorías que nos van a servir mucho para corregir errores en el código y para testear nuestra App cuando ya esté hecha."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
