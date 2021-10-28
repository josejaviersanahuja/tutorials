import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function DebugAndTesting() {
    
    const detalles={
        primero:{
            title: "Fragments, the basics.",
            defBreve:"Aquí solo vamos a empezar a mostrar como crear un fragment y a implementarlo, luego le daremos más y más complejidad al tema.",
            arrayCodigo:[
                {
                    cod:`// XML part Layout nuevo para el fragment (fragment_first.xml)
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <TextView
        android:id="@+id/textViewInFragment"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Forma parte del fragment"/>

</RelativeLayout>
`,
                    text: `Lo primero es crear el layout para el fragment, aunque en lecciones más avanzadas podremos crear el layout sin un XML.`
                },{
                    cod:`// Java part
package com.zitrojjdev.logssaveinstanceandfragments.Fragments;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.zitrojjdev.logssaveinstanceandfragments.R;

// 1. ver que extendemos de Fragment (android x)
public class FirstFragment extends Fragment {

    private static final String TAG = "FirstFragment";

// 2. creamos el método onCreateView e inflamos con el layout que creamos arriba
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        Log.d(TAG, "onCreateView: zitrojj start");
        View view = inflater.inflate(R.layout.fragment_first, container, false);
        // more code
        return view;
    }
}
`,
                    text:"Creamos una clase Java para que este componente pueda ser manipulado"
                },{
                    cod:`// xml part en main_activity.xml
<fragment
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:name="com.zitrojjdev.logssaveinstanceandfragments.Fragments.FirstFragment"
    />`,
                    text:"Con este código podemos introducir nuestro fragment a la actividad que queramos. Pero existe otra forma de introducir fragments desde nuestro código en Java."
                },{
                    cod:`// 1 XML PART
<FrameLayout
        android:id="@+id/fragmentContainer"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@color/teal_700">

    </FrameLayout>

// 2. Java part create the fragment
    FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
    FirstFragment firstFragment = new FirstFragment();
    fragmentTransaction.replace(R.id.fragmentContainer, firstFragment);
    fragmentTransaction.commit();
`,
                    text:"1. Para introducir fragments desde nuestro Java, debemos primero crear un FrameLayout en nuestro XML con un id para introducir dentro nuestro fragment. 2. Creamos un fragtion transaction y nuestro first fragment y luego usamos el método replace pasando el contenedor que definimos en 1, y el fragment, luego ejecutamos el fragment con el commit."
                }
            ]
        }, segundo:{
            title:"Pasando argumentos a los Fragments",
            defBreve:"En React, un componente puede recibir argumentos de una forma muy elgante. Con las actividades en android hemos visto que no es tan elegante el pasar argumentos, pero los fragments funcionan igual que las actividades, solo hace falta conocer 2 de los ciclos de vida de los fragments onAttach y onDetach. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// create the fragment and the transaction
FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
FirstFragment firstFragment = new FirstFragment();

// creamos el bundle (el argumento que pasaremos)
Bundle bundle = new Bundle();
bundle.putString("name", "Zitrojj");

// pasamos el argumento
firstFragment.setArguments(bundle);

// incorporamos el fragment al FrameLayout y lo ejecutamos
fragmentTransaction.replace(R.id.fragmentContainer, firstFragment);
fragmentTransaction.commit();`,
                    text:"Solo se trata de pasar el argumento de esta manera, ahora queda ver cómo y donde leer dicho parámetro."
                },{
                    cod:`@Override
    public void onAttach(@NonNull Context context) {
        Bundle bundle = getArguments();
        if (bundle != null){
            Log.d(TAG, "onAttach: zitrojj start " + bundle.getString("name"));

        }
        super.onAttach(context);
    }`,
                    text:"Dentro del ciclo de vida del fragment existe el método onAttach, ahí es donde podemos obtener los datos del bundle que hemos pasado."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="28/10/2021"/>
            <Subtitle
                subtitle="Fragments."
                parrafo="Los fragments serán elementos muy importantes en nuestras aplicaciones. Parece que se usan mucho para definir el comportamiento de nuestras aplicaciones en diferentes configuraciones, pero tienen muchos más usos. Otro uso muy común es el de componentes reutilizables. Vamos a ello"
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
        </div>
    )
}
