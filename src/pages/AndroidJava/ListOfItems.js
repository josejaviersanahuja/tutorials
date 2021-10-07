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
            title: "Ahora veamos otro tipo de listado el SPINNER (select). XML part",
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
            title:"Creamos los detalles del SPINNER en nuestro MainActivity.java",
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
            title:"Añadimos funcionalidad al SPINNER",
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
        }, septimo:{
            title: "Ahora veamos otro tipo de listado RecylerView. XML part",
            defBreve:"Este elemento es similar al ListView pero eficiente, ya que solo se carga cuando está por entrar en la pantalla. Es como si tuviera un LazyLoad incorporado.",
            arrayCodigo:[
                {
                    cod:`<androidx.recyclerview.widget.RecyclerView
    android:id="@+id/allBooks"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_below="@+id/titleSeeAllBooks"/>`,
                    text: "Necesitaremos definir un custom layout así que vamos a ello. En el directorio res/layout creamos un nuevo leyout resource file y luego definimos los siguientes componentes UI"
                },{
                    cod:`<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:id="@+id/imgBook"
        android:layout_width="match_parent"
        android:layout_height="120dp"
        android:layout_marginHorizontal="20dp"
        android:layout_marginVertical="10dp"
        android:background="@color/big_stone"/>
    <TextView
        android:id="@+id/titleBook"
        android:layout_below="@+id/imgBook"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerHorizontal="true"
        android:textStyle="bold"
        android:hint="Title"
        android:textSize="20sp"/>        
        
</RelativeLayout>`,
                    text:"Ahora este es el custom layout que va a tomar cada elemento de nuestro RecyclerView. Pasemos a la parte de JAVA"
                }
            ]
        },
        octavo:{
            title:"Creamos los detalles del RecyclerView.",
            defBreve:"Esta parte es más compleja, porque a diferencia del ListView que ya tenemos el ArrayAdapter en nuestra librería, con el RecyclerView debemos crear nuestro propio custom Adapter antes de poder definir nuestro RecyclerView en nuestro MainActivity.java. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.sampleapp1;

import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

// Step 2, extend our custom adapter with the ViewHolder we defined in step 1

public class AllBooksRecyclerViewAdapter extends RecyclerView.Adapter<AllBooksRecyclerViewAdapter.ViewHolder>{
    private static final String TAG = "AllBooksRecyclerViewAdapter";

    // Step 3. must include 3 methods to implement because we extended our custom adapter in step 2.

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 0;
    }


    //Step 1. create and extend this View Holder

    public class ViewHolder extends RecyclerView.ViewHolder {

        private ImageView bookImage;
        private TextView bookName;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            bookImage = itemView.findViewById(R.id.imgBook);
            bookName = itemView.findViewById(R.id.titleBook);

        }
    }
}
`,
                    text:"Se que parece caotico, pero lo primero es crear una clase de Java con el nombre que haga referencia a RecyclerViewAdapter, en este caso es para el listado de libros, así que se llama AllBooksRecyclerViewAdapater. Luego definimos una clase interna llamada ViewHolder que debemos extender en el step1 puedes ver el código. Luego añadimos el siguiente código extends RecyclerView.Adapter<AllBooksRecyclerViewAdapter.ViewHolder> a nuestra clase principal del custom adapter, y luego al hacer esta extensión debemos implementar los métodos de la clase que recién extendimos en el step3. ctrl+i es el shortcut. Esto aún no ha terminado, así que sigamos paso a paso."
                },
                {
                    cod:`package com.zitrojjdev.sampleapp1;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class AllBooksRecyclerViewAdapter extends RecyclerView.Adapter<AllBooksRecyclerViewAdapter.ViewHolder>{
    private static final String TAG = "AllBooksRecViewAdapter";

    // fields of this class
    private ArrayList<Book> listOfBooks = new ArrayList<>();
    private Context context;

    // Un constructor para el context. 
    // Si recuerdas el ListViewAdapter requiere pasar un contexto (this ó MainActivity.this)
    public AllBooksRecyclerViewAdapter(Context context) {
        this.context = context;
    }

    //this method will inflate or populate the data array with the layout we prepared before.
    // It won´t provide anything else
    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    
        // 99% of the times, this will be the code needed.
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.all_books_recycler_view, null);
        ViewHolder holder = new ViewHolder(view);
        return holder;
    }

    // this method will provide the extra logic to our layout to get live interactions
    // or extra logic to add data after the first inflation
    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Log.d(TAG, "onBindViewHolder: called");

        holder.bookName.setText(listOfBooks.get(position).getName());
        holder.bookName.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                final int index = holder.getAdapterPosition();
                Toast.makeText(context, listOfBooks.get(index).toString(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    // just passing the size of the data array
    @Override
    public int getItemCount() {
        return listOfBooks.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private ImageView bookImage;
        private TextView bookName;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            bookImage = itemView.findViewById(R.id.imgBook);
            bookName = itemView.findViewById(R.id.titleBook);

        }
    }

    // setter of the list of books
    public void setListOfBooks(ArrayList<Book> listOfBooks) {
        this.listOfBooks = listOfBooks;
        // next line is like a listener that will trigger the update the view of the RecyclerView
        notifyDataSetChanged();
    }
}
`,
                    text:"Aquí añadimos más elementos imprescindibles a nuestro adapter. Definimos el contexto, y el ArrayList<Book>, previamente definimos la clase Book, Creamos un constructor del context, Implementamos el ViewHolder que es la hidratación del layout para cada elemento del recyclerview, solo se hidrata el layout, cualquier lógica adicional debe implementarse en onBindViewHolder, que también implementamos para hidratar el textview que ya creamos, con los datos del objeto del RecyclerView (Book). Aprovechamos también de añadir en ese mismo método el onClickListener para hacer un Toast con los datos del objeto, implementamos el getItemCount y creamos un setter para poder pasar un listado de libros que queramos. Para el siguiente paso vamos a usar una librería externa llamada glide, donde podremos añadir la urlImage a nuestro RecyclerView."
                },{
                    cod:`package com.zitrojjdev.sampleapp1;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

public class AllBooksRecyclerViewAdapter extends RecyclerView.Adapter<AllBooksRecyclerViewAdapter.ViewHolder>{
    private static final String TAG = "AllBooksRecViewAdapter";

    private ArrayList<Book> listOfBooks = new ArrayList<>();
    private Context context;

    public AllBooksRecyclerViewAdapter(Context context) {
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.all_books_recycler_view, null);
        ViewHolder holder = new ViewHolder(view);
        return holder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Log.d(TAG, "onBindViewHolder: called");

        holder.bookName.setText(listOfBooks.get(position).getName());
        holder.bookName.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                final int index = holder.getAdapterPosition();
                Toast.makeText(context, listOfBooks.get(index).toString(), Toast.LENGTH_SHORT).show();
            }
        });

        // Aquí añadimos la url Image usando una librería externa con Glide
        Glide.with(context)
                .asBitmap()
                .load(listOfBooks.get(position).getImageURL())
                .into(holder.bookImage);
    }

    @Override
    public int getItemCount() {
        return listOfBooks.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private ImageView bookImage;
        private TextView bookName;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            bookImage = itemView.findViewById(R.id.imgBook);
            bookName = itemView.findViewById(R.id.titleBook);

        }
    }

    public void setListOfBooks(ArrayList<Book> listOfBooks) {
        this.listOfBooks = listOfBooks;
        notifyDataSetChanged();
    }
}
`,
                    text:"Para saber como añadir una librería externa ve a submenu de miscelanious de android app with java. De ahí sólo añadimos estas 4 líneas y damos permiso al AndroidManifest para conectar con internet y ya tenemos implementada la imagen. Para ver como queda el manifest mira lo siguiente"
                },{
                    cod:`<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.zitrojjdev.sampleapp1">

    <!-- Aquí damos el permiso a la app de poder conectarse a internet -->
    <uses-permission android:name="android.permission.INTERNET"/>

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.SampleApp1">
        <activity
            android:name=".About"
            android:exported="true" />
        <activity
            android:name=".AlreadyReadBooks"
            android:exported="true" />
        <activity
            android:name=".WantToReadBooks"
            android:exported="true" />
        <activity
            android:name=".CurrentlyReadingBooks"
            android:exported="true" />
        <activity
            android:name=".SeeAllBooks"
            android:exported="true" />
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>`,
                    text:"Genial, ya sabemos hasta cómo dar permisos a nuestra App de usar recursos de andoird. Luego quedaría usar otra librería para mejorar los estilos de nuestro RecyclerView. CardView changes es lo próximo que veremos."
                },{
                    cod:`// cambio en el custom adapter
    View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.all_books_recycler_view,null);
    
    // ó de esta otra forma de construirlo
    View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.all_books_recycler_view, parent, false);

//Cambios en el MainActivity.java
// we are setting something important here regarding the layout. could be linear or grid
    booksRecView.setLayoutManager(new GridLayoutManager(this, 2));

//Cambios en el xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <!-- Añadimos el card view -->
    <androidx.cardview.widget.CardView
        android:layout_width="150dp"
        android:layout_height="150dp"
        app:cardCornerRadius="10dp"
        app:cardElevation="7dp"
        android:layout_marginVertical="15dp"
        android:layout_centerHorizontal="true">
        <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            xmlns:app="http://schemas.android.com/apk/res-auto">

        <ImageView
            android:id="@+id/imgBook"
            android:layout_width="match_parent"
            android:layout_height="100dp"
            android:layout_marginHorizontal="20dp"
            android:layout_marginVertical="10dp"
            android:background="@color/big_stone"/>
        <TextView
            android:id="@+id/titleBook"
            android:layout_below="@+id/imgBook"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_centerHorizontal="true"
            android:textStyle="bold"
            android:hint="Title"
            android:textSize="20sp"/>
        </RelativeLayout>
    </androidx.cardview.widget.CardView>

</RelativeLayout>
`,
                    text:""
                }
            ]
        },
        noveno:{
            title:"Implementamos el RecyclerView en nuestra actividad",
            defBreve:"Vamos a tener que implementar nuestro adapter en nuestra actividad.",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.sampleapp1;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;

public class SeeAllBooks extends AppCompatActivity {

    // 1. definimos el recycler view
    private RecyclerView booksRecView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_see_all_books);

        // 2. initializing
        booksRecView = findViewById(R.id.allBooks);

        // 3. data array
        ArrayList<Book> books = new ArrayList<>();

        // 4. adding books (Constructor creado en la clase Book)
        books.add(new Book("1Q84","Haruki Murakami", "https://images.gr-assets.com/bokks/14831033311/10357575.jpg","A work of maddeling brilliance",1350 ));
        books.add(new Book("Iliad","Homer", "https://images-na.ssl-images-amazon.com/images/I/AlsXo113HML.jpg","Greek heroes and tragedies",1000 ));
        books.add(new Book("Beyond Good and Evil","Nietzsche", "https://pressbooks.com/app/uploads/sites/27444/2014/03/beyondgoogandevill.jpg","The philosofo",350 ));

        // 5. Definimos el adapter y lo pasamos el recyclerView
        AllBooksRecyclerViewAdapter adapter = new AllBooksRecyclerViewAdapter(this);
        booksRecView.setAdapter(adapter);

        // 6. we are setting something important here regarding the layout. could be linear or grid
        // Este paso seguro tiene que ver con el layout del listado en su conjunto, puesto que el layout creado 
        // ... en el xml era un layout individual
        booksRecView.setLayoutManager(new LinearLayoutManager(this));

        // 7. we set the array of books
        adapter.setListOfBooks(books);
    }
}

    `,
                    text:"En 7 pasos hemos definido nuestro RecyclerView."
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
            <DetallesSubtema
                title={detalles.septimo.title}
                defBreve={detalles.septimo.defBreve}
                arrayCodigo={detalles.septimo.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.octavo.title}
                defBreve={detalles.octavo.defBreve}
                arrayCodigo={detalles.octavo.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.noveno.title}
                defBreve={detalles.noveno.defBreve}
                arrayCodigo={detalles.noveno.arrayCodigo}
            />
        </div>
    )
}
