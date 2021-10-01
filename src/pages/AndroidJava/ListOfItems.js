import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ListOfItems() {
    
    const detalles={
        primero:{
            title: "Creamos el elemento en el xml.",
            defBreve:"Crear este elemento no es para nada dificil, la mayor parte del trabajo se genera en el MainActivity.java. Así que no perdamos más tiempo y veamos como se crea..",
            arrayCodigo:[
                {
                    cod:`<ListView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/listView" /> `,
                    text: "No necesitamos más de momento, solo quiero dejar claro que este elemento UI, es scroleable."
                }
            ]
        },
        segundo:{
            title:"Creamos los detalles de este elemento en nuestro MainActivity.java",
            defBreve:"Esta parte es más compleja, así que iremos por partes. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.listofitems;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    // como de costumbre, inicializamos
    private ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // seteamos el listView
        listView = findViewById(R.id.listView);

        // Ahora necesitamos un ArrayList<String> para aportar información
        final ArrayList<String> names = new ArrayList<>(); // el final se explica más abajo

        // hardcodeamos 6 nuevos nombres
        names.add("José Javier");
        names.add("José Manuel");
        names.add("Javier Ángel");
        names.add("Nany");
        names.add("Mirla");
        names.add("Pedro");

        // necesitamos un adapter. veamos de qué se trata
        ArrayAdapter<String> adapter= new ArrayAdapter<String>(
                this, // context
                android.R.layout.simple_list_item_1, // layout
                names // the data array
        );

        // seteamos el adaptor
        listView.setAdapter(adapter);

    }
}`,
                    text:"Aquí mostramos como generar la lista, 1. la inicialización evidente y básica, 2. Generamos el data array, en este caso names, 3. Creamos un adapter con un contexto, un layout y el data array. 4. seteamos el adapter a nuestro listView."
                }
            ]
        },
        tercero:{
            title:"Añadimos funcionalidad a nuestro list of items",
            defBreve:"Vamos a querer añadir funciones a nuestro listado, desde onItemClickistener, onItemLongClickListener, onItemSlectedListener y cosas más complicadas.",
            arrayCodigo:[
                {
                    cod:` // añadimos funciones a cada item
    listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
        @Override
        public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {

            // vamos a crear una acción sencilla. un Toast
            // NOTA: el context esta vez no es this porque estamos dentro de la clase adapterView
            // Y necesitamos el Toast dentro de la clase MainActivity

            Toast.makeText(MainActivity.this, names.get(i), Toast.LENGTH_SHORT).show();
        }
    });

    // buenas prácticas. Nótese como names es llamado dentro de otra clase (AdapterView)
    // en java, cuando un elemento de una clase, es llamado en otra, debería ser una constante.
    // Por eso debemos añadir final a nuestra constante ArrayList names`,
                    text:"Hemos creado un onItemClickListener y en medio del proceso hemos aprendido 2 cosas sobre JAVA. Como el contexto cambia si estamos dentro una clase u otra, y un buen ejemplo de cuando es correcto crear una constante. LOL. MEISAM dice que este UI no lo vamos a usar mucho porque existe otro más eficiente llamado RecyclerView que es más complicado también."
                }
            ]
        },cuarto:{
            title: "Creamos el elemento en el xml.",
            defBreve:"Crear este elemento no es para nada dificil, la mayor parte del trabajo se genera en el MainActivity.java. Así que no perdamos más tiempo y veamos como se crea..",
            arrayCodigo:[
                {
                    cod:`<Spinner
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/spinner" /> `,
                    text: "No necesitamos más de momento, solo quiero dejar claro que este elemento UI, no es el spinner típico que vemos en React. Se trata de un drop down menu. Como un select en HTML."
                }
            ]
        },
        quinto:{
            title:"Creamos los detalles de este elemento en nuestro MainActivity.java",
            defBreve:"Esta parte es más compleja, así que iremos por partes. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.listofitems;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    // como de costumbre, inicializamos
    private Spinner spinner;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // seteamos el listView
        spinner = findViewById(R.id.spinner);

        // Ahora necesitamos un ArrayList<String> para aportar información
        final ArrayList<String> names = new ArrayList<>(); // el final se explica más abajo

        // hardcodeamos 6 nuevos nombres
        names.add("José Javier");
        names.add("José Manuel");
        names.add("Javier Ángel");
        names.add("Nany");
        names.add("Mirla");
        names.add("Pedro");

        // necesitamos un adapter. veamos de qué se trata
        ArrayAdapter<String> adapter= new ArrayAdapter<String>(
                this, // context
                android.R.layout.simple_spinner_dropdown_item, // layout
                names // the data array
        );

        // seteamos el adaptor
        spinner.setAdapter(adapter);

    }
}`,
                    text:"Aquí mostramos como generar nuestro select, 1. la inicialización evidente y básica, 2. Generamos el data array, en este caso names, 3. Creamos un adapter con un contexto, un layout y el data array. 4. seteamos el adapter a nuestro spinner."
                }
            ]
        },
        sexto:{
            title:"Añadimos funcionalidad a nuestro list of items",
            defBreve:"Vamos a querer añadir funciones a nuestro spinner (select), desde onItemSlectedListener y cosas más complicadas.",
            arrayCodigo:[
                {
                    cod:` // añadimos funciones a cada item
    // añadimos funciones a cada item
        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {

                // acción sencilla
                Toast.makeText(MainActivity.this, names.get(i), Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

    `,
                    text:"Hemos creado un onItemSelectedListener."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="01/10/2021"/>
            <Subtitle
                subtitle="List of Items (Basics) & Spinners (Select)."
                parrafo="Estos son elementos muy poderoso dentro de la construcción de aplicaciones. En React se pueden crear con un simple array.map y en React native también se pueden crear con un ListView y este último tendría grandes beneficios gracias al gran trabajo de facebook. Sin embargo, no estamos en esos casos, ahora debemos crear nosotros mismos estos elemento tan importantes. Quiero adelantar que el ListView que vamos a crear, no es el que más vamos a usar en el futuro, pero por ser más básico y sencillo, es el mejor para empezar. Vamos a ello."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                language="xml"
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
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
                language="xml"
            />
            <DetallesSubtema
                title={detalles.quinto.title}
                defBreve={detalles.quinto.defBreve}
                arrayCodigo={detalles.quinto.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.sexto.title}
                defBreve={detalles.sexto.defBreve}
                arrayCodigo={detalles.sexto.arrayCodigo}
            />
        </div>
    )
}
