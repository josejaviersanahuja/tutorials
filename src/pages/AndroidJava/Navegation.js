import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Navigation() {
    
    const detalles={
        primero:{
            title: "Creando Nuevas Actividades.",
            defBreve:"Para crear nuevas actividades hay que crear un archivo xml, uno java y modificar el AndroidManifest.xml. Pero Android studio se encarga de todo eso por nosotros, así que veamos como hacerlo.",
            arrayCodigo:[
                {
                    cod:`// En el directorio app/java/com.zitrojjdev.nameApp le damos al click derecho
// Y le damos a new, y luego activity, y luego a empty activity`,
                    text: "De esa forma se definen el archivo xml, el java ya asociado a dicho archivo y también se modifica el AndroidManifest.xml y ya estamos listos para crear nuestra segunda página de nuestra app. Pero aún queda ver cómo navegar a dicha página."
                }
            ]
        }, segundo:{
            title:"Navegación simple",
            defBreve:"Esta es una navegación directa al estilo de  (Navigation.push) que ya solíamos hacer en React.",
            arrayCodigo:[
                {
                    cod:`Intent intentAbout = new Intent(MainActivity.this, About.class);
startActivity(intentAbout);`,
                    text:"Este es el código que se le puede pasar a un botón que se encuentre en MainActivity y te redirija a la página About de tu App. De esta forma también, podemos volver atrás con el botón principal de atrás de Andoird. Esto significa que es similar a un navigation.push."
                }
            ]
        }, tercero:{
            title:"Navegación con un parámetro",
            defBreve:"Ahora vamos a ver cómo navegar pasando algún parámetro a la siguiente actividad. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Este código está dentro de un RecyclerView, por eso el context en vez de el this
Intent intent = new Intent(context, BookActivity.class);
intent.putExtra("position", position);
context.startActivity(intent);`,
                    text:"Con el intent.putExtra podemos pasar una clave key-value que va a poder ser leída en la actividad a la que nos dirigimos. En este caso se trata de un entero con la posición del elemento dentro del arrayList. Veamos cómo acceder a dicha clave en nuestro BookActivity.class."
                },{
                    cod:` Intent intent = getIntent();
int position = intent.getIntExtra("position", 0);`,
                    text:"Definimos un intent pero no uno nuevo, sino el que nos trajo hasta esta actividad con getIntent. Luego extraemos el valor con getIntExtra y pasamos la clave, pero también un valor por defecto (Por si acaso no funciona). De esa manera, podemos rebuscar el libro dentro de nuestro arrayList en la posición position y podemos extraer los datos de ahí."
                }
            ]
        }, cuarto:{
            title:"Navegación con muchos parámetros y Objetos complejos",
            defBreve:"Ahora vamos a poder pasar todo tipo de datos entre actividades sin problemas. Puede llegar a ser algo avanzado, pero por su puesto android ya ha creado métodos que simplifican el trabajo complicado. Lo menciono porque por detrás del código que vamos a implementar, se requiere que una clase propia que hayamos creado, pueda ser serializada. Si recuerdo bien, la serialización es un proceso que transforma los datos de una clase Java en un buffer de datos encriptado que Java puede enviar para ser persistido, y luego cuando se vuelva a leer puede volver a ser transformado en un objeto o una clase de Java nuevamente. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// creating an arrayList to pass in the intent
ArrayList<String> array = new ArrayList<>();
array.add("jose javier");
array.add("ariannys");

// creating a book to pass
Book newBook = new Book(
        "passing objects",
        "zitrojj",
        "https://media2.giphy.com/media/3kQqYPyzGSQ6I/giphy.gif?cid=7028f486h2d362eiipaxprq2nam6suzselgmzr6365m1x8q7&rid=giphy.gif&ct=s",
        "It is is like this",
        100
);

// parte 1 Ya lo hemos visto
Intent intentAbout = new Intent(MainActivity.this, About.class);

// parte 2. forma normal de pasar datos, ya lo hemos visto
intentAbout.putExtra(getString(R.string.names), array);

// parte 3. Esta parte es la clave para pasar clases u objetos java
Bundle bundle = new Bundle();
bundle.putParcelable(getString(R.string.book), newBook);

// parte 4. passing the bundle to the intent
intentAbout.putExtra("bundle", bundle);

startActivity(intentAbout);`,
                    text:"Ok, no me voy a centrar en la parte 1 ni en la 2. Veamos directamente la parte 3. Para pasar un objeto Java debemos convertirlo en Parcelable. Esa es la parte más complicada, pero que detallo en el tercer punto de este tema. Recapitulando, la parte 3 consiste en crear un bundle en el que pondremos nuestro Objeto o clase Java empaquetado (parceled) en el bundle que vamos a pasar al intente en la parte 4. Nótese que bundle.putParcelable es similar al intent.PutExtra en el sentido de que ambos requieren un par clave-valor y que getString se usa cómo buena práctica aquí, para evitar errores de tipeado. Similar a los objetos renombrados en javascript."
                },{
                    cod:`String content = "Names inside the array list. \n ";
// part 1
Intent prevIntent = getIntent();

// retriving the arrayList and the Book
ArrayList<String> names = new ArrayList<>();
Bundle bundle;
Book newBook;

// part 2 try catch to avoid nullpointer exceptions
try {
    // part 3, forma normal de obtener los datos pasados a esta actividad
    names = prevIntent.getStringArrayListExtra(getString(R.string.names));

    //parte 4. forma avanzada de pasar una clase u objeto java
    bundle = prevIntent.getBundleExtra("bundle");
    newBook = bundle.getParcelable(getString(R.string.book));
    
    // el resto es solo para completar la aplicación.
    for (String s:
            names ) {
        content += s +"\n";
    }
    
    content += newBook.getName() + " " + newBook.getAuthor() + " " + newBook.getPages();
} catch (NullPointerException e){
    e.getStackTrace();
}

contentAbout.setText(content);

            `,
                    text:"Aquí vemos cómo recuperar los datos de intent. La parte 12 y 3 ya las hemos visto antes, pero la parte 4 muestra cómo obtener el bundle y cómo se desempaqueta el objeto o clase de Java que contiene dentro. El proceso interno se define en el siguiente punto. Vamos a ello."
                },{
                    cod:`package com.zitrojjdev.sampleapp1;

import android.os.Parcel;
import android.os.Parcelable;

// clave 1. implements Parcelable

public class Book implements Parcelable {
    private String name, author, imageURL, description;
    private int pages;

    public Book(String name, String author, String imageURL, String description, int pages) {
        this.name = name;
        this.author = author;
        this.imageURL = imageURL;
        this.description = description;
        this.pages = pages;
    }

    // clave 2. ctrl+i o generate and implement crear describeContents y writeToParcel
    // created when implementing parcelable
    @Override
    public int describeContents() {
        return 0;
    }
    // created when implementing parcelable
    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeString(name);
        parcel.writeString(author);
        parcel.writeString(imageURL);
        parcel.writeString(description);
        parcel.writeInt(pages);
    }

    // clave 3. sobre Book hay que implementar algo
    // Add Parcelable implementation.
    // created when implementing parcelable
    protected Book(Parcel in) {
        name = in.readString();
        author = in.readString();
        imageURL = in.readString();
        description = in.readString();
        pages = in.readInt();
    }
    // created when implementing parcelable
    public static final Creator<Book> CREATOR = new Creator<Book>() {
        @Override
        public Book createFromParcel(Parcel in) {
            return new Book(in);
        }

        @Override
        public Book[] newArray(int size) {
            return new Book[size];
        }
    };

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + ''' +
                ", author='" + author + ''' +
                ", imageURL='" + imageURL + ''' +
                ", description='" + description + ''' +
                ", pages=" + pages +
                '}';
    }
    
}
`,
                    text:"Como mencioné más arriba, la serialización del objeto Java o la clase Book que hemos creado ocurre en una caja negra llamada Parcelable (clave 1). Donde debemos implementar 2 métodos de dicha interfaz (clave 2) y luego debemos implementar el reconstructor de del objeto en la clave 3. Todo eso puede implementarse con los shortcuts que ofrece android studio. Ahora pudiesemos pasarlo como putExtra al intent pero la mejor práctica es pasarlo como un Bundle que ya vismos más arriba."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="04/10/2021"/>
            <Subtitle
                subtitle="Navegación entre actividades"
                parrafo="Les recuerdo que cada página de una aplicación construída en android studio se llama Activity. Aquí aprenderemos como crear una nueva actividad y luego como crear una navegación directa a dicha página. Vamos a ello."
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
