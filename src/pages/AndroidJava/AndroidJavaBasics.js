import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function AndroidJavaBasics() {
    
    const detalles={
        primero:{
            title: "Android Studio.",
            defBreve:"Cuando estudiamos React Native, aprendimos a configurar el entorno de desarrollo con andoird studio, esa misma configuración nos va a servir en los proyectos que vamos a crear con Java. Creamos un Hello World.",
            arrayCodigo:[
                {
                    cod:`Damos click en new project, empty activity y luego aparecen un cuadro de información
                     
Name: Hello World // nombre de la app
Package Name: com.hostname.AppName // por convencion es hostname al revés + el nombre de la App org.organization.HelloWorld
Save location: C:/MyProjects/HelloWorld // La localización en disco que prefieras
Language: Java // puede ser kotlin pero aquí veremos JAVA
Minimum SDK: API 21 // se trata de la versión más antigua de android que deseas soportar`,
                    text: `Una vez creado el proyecto Vamos a encontrar 2 archivos que son el núcleo de nuestra App. /app/src/main/java/com/zitrojjdev/HelloWorld/MainActivity.java  que es el análogo al javascript de una página web. Ahí daremos vida a los componentes UI que crearemos con nuestro segundo archivo. /app/src/main/res/layout/activity_main.xml que es el análogo al html en una página web.`
                }
            ]
        },
        segundo:{
            title:"activity_main.xml",
            defBreve:"Como dije antes, es el análogo al HTML. Aquí definimos los componentes UI que vamos a mostrar e interactuar en nuestra App.",
            arrayCodigo:[
                {
                    cod:`// HelloWorld
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/centralText"
        android:layout_width="260dp"
        android:layout_height="165dp"
        android:layout_marginTop="32dp"
        android:textSize="24sp"
        android:textStyle="bold"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.496"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/button"
        app:layout_constraintVertical_bias="0.074" />

    <Button
        android:id="@+id/button"
        android:layout_width="260dp"
        android:layout_height="89dp"
        android:layout_marginStart="60dp"
        android:layout_marginEnd="61dp"
        android:layout_marginBottom="223dp"
        android:onClick="handleClick"
        android:text="Button"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputEmail"
        app:layout_constraintVertical_bias="0.197" />

    <EditText
        android:id="@+id/inputName"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="100dp"
        android:layout_marginTop="70dp"
        android:layout_marginEnd="101dp"
        android:layout_marginBottom="616dp"
        android:ems="10"
        android:inputType="textPersonName"
        android:text="Name"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <EditText
        android:id="@+id/inputLastname"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"
        android:ems="10"
        android:inputType="textPersonName"
        android:text="Lastname"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputName" />

    <EditText
        android:id="@+id/inputEmail"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"
        android:ems="10"
        android:inputType="textEmailAddress"
        android:text="Email"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputLastname" />

</androidx.constraintlayout.widget.ConstraintLayout>`,
                    text:"En la línea uno, vemos algún metadata ligero. En la línea 2, vemos y definimos el layout principal de toda la página. ConstraintLayout es el layout actual, y consiste en que podemos fijar la posición de los componentes UI de forma relativa a alguna referencia, como puede ser, el lateral izquierdo, el tope, la parte baja, el lateral izquierdo u otro componente UI, en el código xml podemos ver que la forma de definir las posiciones es con parámetros como layout_constraintEnd_toEndOf. EditText es el análogo a un input, TextView es el análogo a un div, o p. Veamos otros layouts."
                },{
                    cod:`// BasicUI
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="20dp"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/inputName"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Name"
        android:inputType="text" />

    <CheckBox
        android:id="@+id/nameCheckBox"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/inputName"
        android:layout_marginTop="10dp"
        android:checked="false"
        android:text="Discount" />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/nameCheckBox"
        android:text="Click"
        android:id="@+id/submitButton"
        android:onClick="handleClick"
        />
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="output"
        android:layout_below="@+id/radioGroup"
        android:layout_marginTop="20dp"
        android:textSize="20sp"
        android:id="@+id/outputText"/>

    <RadioGroup
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/submitButton"
        android:layout_alignStart="@+id/outputText"
        android:layout_alignEnd="@+id/outputText"
        android:layout_marginStart="0dp"
        android:layout_marginEnd="0dp"
        android:orientation="horizontal"
        android:id="@+id/radioGroup">

        <RadioButton
            android:id="@+id/femaleBtn"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:checked="false"
            android:text="Female"
            android:layout_marginRight="20dp"/>

        <RadioButton
            android:id="@+id/maleBtn"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:checked="false"
            android:text="Male"
            android:layout_marginRight="20dp"/>

        <RadioButton
            android:id="@+id/undefinedBtn"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:checked="true"
            android:text="Undefined"
            android:layout_marginRight="20dp"/>

    </RadioGroup>

    <ProgressBar
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/outputText"
        style="@style/Widget.AppCompat.ProgressBar.Horizontal"
        android:layout_marginTop="20dp"
        android:progress="0"
        android:max="100"
        android:id="@+id/progressBar"/>

</RelativeLayout>`,
                    text:"Aquí vemos un relative layout, y la primera gran diferencia es que la posición de nuestros elementos se definen con propiedades como android:layout_below='@+id/outputText'. En este archivo podemos ver muchos tipos distintos de componentes UI como checkboxes y radio buttons."
                }
            ]
        },
        tercero: {
            title:"MainActivity.java",
            defBreve:"Aquí vamos a dar funcionalidad a todos nuestros componentes. Vamos con el Java del HelloWorld y luego con el Java de BasicUI",
            arrayCodigo:[
                {
                    cod:`// Hello World
package com.zitrojjdev.helloworld;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    // if we declare the centralText up here, we have access to it everywhere in this file
    TextView centralText;
    EditText inputName;
    EditText inputLastname;
    EditText inputEmail;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // here we define listeners or elements with onClick functions like buttons
    }

    // handleClick will toggle the input value
    public void handleClick(View view){
        //we get the text
        centralText = findViewById(R.id.centralText);
        inputName = findViewById(R.id.inputName);
        inputLastname = findViewById(R.id.inputLastname);
        inputEmail = findViewById(R.id.inputEmail);
        // reading the text
        String texto = inputName.getText().toString() +" " + inputLastname.getText().toString() +"\n"+ inputEmail.getText().toString();

        // setting the new value
        centralText.setText(texto);
    }
}
`,
                    text:"Nótese que todo lo que ocurre dentro de onCreate se ejecuta cuando se monta el componente. Es similar a un componentDidMount en React. Este código se puede mejorar con buenas prácticas poniendo private a todos los elementos de nuestra clase. Dentro de onCreate debemos también definir los elementos con listeners como onClick y cosas similares. El handleClick recibe por parámetro un View, pero este es abstracto y se define por detrás de nuestro código, pero está asociado al elemento donde definimos la funcion onClick: 'handleClick'"
                },{
                    cod:`// basic UI
package com.zitrojjdev.basicui;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText inputName;
    private CheckBox nameCheckBox;
    private TextView outputText;
    private Button submitButton;
    private RadioGroup radioGroup;
    private ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        nameCheckBox = findViewById(R.id.nameCheckBox);
        radioGroup = findViewById(R.id.radioGroup);
        progressBar = findViewById(R.id.progressBar);
        submitButton = findViewById(R.id.submitButton);

        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    progressBar.setProgress(i);
                    try {
                        Thread.sleep(100);
                    } catch (Exception e) {
                        System.out.println("ERROR ");
                        e.printStackTrace();
                    }

                }
            }
        });
        thread.start();
    }

     public void handleClick (View view){
        outputText = findViewById(R.id.outputText);
        nameCheckBox = findViewById(R.id.nameCheckBox);
        int checkedRadioBtnId = radioGroup.getCheckedRadioButtonId();
        RadioButton checkedBtn = findViewById(checkedRadioBtnId);
        //String name = inputName.getText().toString();
        if(nameCheckBox.isChecked()){
            outputText.setText("Checkbox was checked and the gender value is "+checkedBtn.getText().toString() );
            System.out.println("It is checked");
            nameCheckBox.setChecked(false);
        } else {
            outputText.setText("Checkbox was not checked and the gender value is "+checkedBtn.getText().toString() );
            System.out.println("Not checked");
            nameCheckBox.setChecked(true);
        }
         System.out.println(checkedBtn.getText().toString());

     }
}

`,
                    text:"Con este código mostramos como implementar un handleClick, y como abrir trabajar con un progressbar horizontal. Para lo segundo abrimos un nuevo thread."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="29/09/2021"/>
            <Subtitle
                subtitle="Vamos a empezar una nueva carrera, esta vez por aprender a usar Java."
                parrafo="Lo mejor de todo es que aprenderemos mucho más que solo Java. Voy a ser sincero, he hecho varios cursos que comprenden los fundamentos de Java, es decir, alguna base ya tengo sobre como escribir en ese lenguaje, sin embargo, nunca había podido escribir Apps más allá de un System.out.print(), que es el equivalente a un console.log. Ahora vamos a poder crear Apps completas para Android. A mi me parece muy emocionante."
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
                language="xml"
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
