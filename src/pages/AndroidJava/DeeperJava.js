import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function DeeperJava() {
    
    const detalles={
        primero:{
            title: "setOnClickListener.",
            defBreve:"Para un botón, no es necesario crear un listener especial, ¿pero si queremos crear interación con una imagen o un texto?. Vamos a ver 2 formas de crear este listener en particular. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.basicui2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private ImageView imgView;

    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imgView = findViewById(R.id.imageView);
        textView = findViewById(R.id.textView);

        // Aquí definimos el onClickListener

        imgView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String currentText = textView.getText().toString();
                if (currentText.equals("Ya hemos dado click a la imagen")){
                    textView.setText("");
                } else {
                    textView.setText("Ya hemos dado click a la imagen");
                }

            }
        });
    }
}`,
                    text: "Esta es la primera forma para crear un onClickListener en un elemento, en este caso, una imagen que por cada click que se haga sobre ella, cambia el contenido de texto de un textView."
                },{
                    cod:`package com.zitrojjdev.basicui2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    // Si lo implementamos de esta forma, podemos crear distintos listeners en un solo sitio aplicando un switch.
    // El único requisito es que debemos inicializar el setOnClickListener con setOnClickListener(this) en onCreate

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.imgView:
                String currentText = textView.getText().toString();
                if (currentText.equals("Ya hemos dado click a la imagen")){
                    textView.setText("");
                } else {
                    textView.setText("Ya hemos dado click a la imagen");
                }
                break;
            
            // y podemos definir más listeners aquí

            case R.id.anotherViewWithOnClickListener:
                //....
                break;
        }
    }

    // Y continuamos con el código...

    private ImageView imgView;

    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imgView = findViewById(R.id.imageView);
        textView = findViewById(R.id.textView);

        // Esta es la otra clave.

        imgView.setOnClickListener(this);
    }
}`,
                    text:"1. Implementamos la interfaz View.OnClickListener. 2. Definimos todos los onClick en un mismo sitio, y con un switch, podremos decir que código pertenece a qué View de nuestro código. 3. Iniciamos el listener con imgView.setOnClickListener(this); dentro del onCreate. "
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="01/10/2021"/>
            <Subtitle
                subtitle="Trucos para el MainActivity.java"
                parrafo="En esta página vamos a revisar algunas formas de crear el código Java que pueden considerarse especiales o distintas a la creación intuitiva de código. Aquí empezaremos a pensar como un verdadero desarrollador Java."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
