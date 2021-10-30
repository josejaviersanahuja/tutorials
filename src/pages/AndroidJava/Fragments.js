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
        }, tercero:{
            title:"Pasando datos del Fragment al MainActivity.",
            defBreve:"Muchas veces los Fragments crean interacciones con el usuario y dichas interacciones deben ser conocidas fuera del Fragment en el MainActivity o la actividad que contenga el Fragment. Para eso hay que saber como pasar datos del Fragment a la actividad que lo contenga. La respuesta es CALLBACKS. Aprenderemos cómo se pasan callbacks en JAVA. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.logssaveinstanceandfragments.Fragments;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.zitrojjdev.logssaveinstanceandfragments.R;

import java.util.ArrayList;

public class FirstFragment extends Fragment {

    private static final String TAG = "FirstFragment";

    private Spinner countrySpinner;

// 1. this is the callback definition
    public interface GetCountry {
            void onGetCountryResult(String country);
    }
// 2. And here we create the callback
    private GetCountry getCountry;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        Log.d(TAG, "onCreateView: zitrojj start");
        View view = inflater.inflate(R.layout.fragment_first, container, false);
        // more code
        countrySpinner = view.findViewById(R.id.countriesSpinner);
        final ArrayList<String> countries = new ArrayList<>();
        countries.add("Germany");
        countries.add("Spain");
        countries.add("USA");
        countries.add("England");

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_spinner_dropdown_item, countries);

        countrySpinner.setAdapter(adapter);

// 3. here we initialize it, because it is coming from the mainActivity
        try {
            getCountry = (GetCountry) getActivity();
        } catch (ClassCastException e){
            e.printStackTrace();
            Log.d(TAG, "onCreateView: zitrojj a problem with the callback onGetCountryResult");
        }

        countrySpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
// 4. Ponemos exactamente el lugar donde queremos ejecutar nuestro callback
                getCountry.onGetCountryResult(countries.get(i)); // pasamos el country
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
        return view;
    }

    @Override
    public void onAttach(@NonNull Context context) {
        Bundle bundle = getArguments();
        if (bundle != null){
            Log.d(TAG, "onAttach: zitrojj start " + bundle.getString("name"));

        }
        super.onAttach(context);
    }

    @Override
    public void onDetach() {
        Log.d(TAG, "onDetach: zitrojj start");
        super.onDetach();
    }
}
`,
                    text:"En 4 pasos podemos definir la interface, crear nuestra variable interface, inicializarla dentro de un try/catch y ejecutarla en el lugar del Fragment que más nos interese. Ahora veamos cómo se define en nuestro MainActivity."
                },{
                    cod:`package com.zitrojjdev.logssaveinstanceandfragments;

        // ... IMPORTS

// 1. implementamos la interface que creamos

import com.zitrojjdev.logssaveinstanceandfragments.Fragments.FirstFragment;
public class MainActivity extends AppCompatActivity implements FirstFragment.GetCountry {

    private static final String TAG = "MainActivity";
    ...
    
    // 2. Definir el callback dentro del activity. (abrv. ctrl +i)
    @Override
    public void onGetCountryResult(String country) {

        // lógica que deseamos ejecutar en el mainactivity. El country vendrá definido en el callback

        Log.d(TAG, "onGetCountryResult: zitrojj entró al callback");
        Toast.makeText(this, "the country selected is "+country, Toast.LENGTH_LONG).show();
        finalText = "Country selected is " + country;
        hasBeenClicked =true;
        textView.setText(finalText);
    }`,
                    text:"Y en 2 pasos definimos nuestro callback dentro de nuestra Actividad."
                }
            ]
        }, cuarto:{
            title:"Custom Alert Dialog con Fragments",
            defBreve:"Ya en el pasado vimos que los Alert Dialogs siguen cierto patrón, como un positiveBtn, negativeBtn y neutralBtn. La realidad es que ahora que ya sabemos usar Fragments, podemos crear un Alert Dialog perfectamente customizado a nuestras necesidades. Construyamos uno bastante simple. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Lo primero es el layout XML
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/dialogTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Tittle of this dialog"
        android:layout_centerHorizontal="true"
        android:textSize="20sp"
        android:layout_marginVertical="10dp"
        android:textStyle="bold"/>
    <TextView
        android:id="@+id/urlTextView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="https://tutorials-vert.vercel.app"
        android:layout_centerHorizontal="true"
        android:textSize="20sp"
        android:layout_marginVertical="10dp"
        android:layout_below="@+id/dialogTitle"/>
    <Button
        android:id="@+id/dismissBtn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Visit website"
        android:layout_below="@+id/urlTextView"
        android:layout_centerHorizontal="true"
        />

</RelativeLayout>`,
                    text:"Exactamente igual que cualquier otro layout que desiemos crear."
                },{
                    cod:`// Java part creamos nuestra clase
package com.zitrojjdev.logssaveinstanceandfragments.Fragments;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;

import com.zitrojjdev.logssaveinstanceandfragments.R;

// 1. extendemos de DialogFragments
public class AboutDialog extends DialogFragment {
    private static final String TAG = "AboutDialog";

// 2. Iniciamos nuestros Views
    private TextView dialogTitle, urlTextView;
    private Button btnDismiss;

// 3. sobreescribimos el método onCreateDialog (este paso es clave)
    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {

// 4. obtenemos el contexto con el método getActivity() y accedemos al
// getLayoutInflator e inflamos nuestro view, que al final será nuestro alert
        View view = getActivity().getLayoutInflater().inflate(R.layout.dialog_about, null);
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setTitle("Dialog about");
        builder.setView(view);

        initWidgets(view); // aquí inicializamos los widgets

// 5. Creamos nuestro bundle para leer los argumentos que hemos pasado a este fragment
        Bundle bundle = getArguments();
        if (bundle != null){
            String details = bundle.getString("details", "");
            String url = bundle.getString("website", "");
            urlTextView.setText(url);
            dialogTitle.setText(details);

            urlTextView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Log.d(TAG, "onClick: zitrojj clicking on the url "+ url);
                }
            });
        } else {
            Log.d(TAG, "onCreateDialog: zitrojj no hay bundle o argumentos entrantes en about dialog");
        }

// 6. hacemos builder.create para crear nuestro alert dialog
        return builder.create();
    }

    private void initWidgets(View v){
        dialogTitle = v.findViewById(R.id.dialogTitle);
        urlTextView = v.findViewById(R.id.urlTextView);
        btnDismiss = v.findViewById(R.id.dismissBtn);

        btnDismiss.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d(TAG, "onClick: zitrojj clicking to btn to dismiss alert ");
                dismiss();
            }
        });
    }

// método opcional para cerrar el alert
    @Override
    public void onDismiss(@NonNull DialogInterface dialog) {
        Log.d(TAG, "onDismiss: zitrojj dismissing...");
        super.onDismiss(dialog);
    }
}
`,
                    text:"El grueso de la lógica se encuentra entre los pasos 3 y 6. Lo demás se entiende con solo leerlo. Ahora debemos ver la implementación de este fragment en nuestra actividad."
                },{
                    cod:`AboutDialog dialog = new AboutDialog();
Bundle bundle = new Bundle();
bundle.putString("details", "Check all my notes inside the next url");
bundle.putString("website", "https://tutorials-vert.vercel.app");
dialog.setArguments(bundle);
dialog.show(getSupportFragmentManager(), "about dialog");`,
                    text:"De esta forma creamos el dialogo, pasamos los argumentos, y lo mostramos por pantalla."
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
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
        </div>
    )
}
