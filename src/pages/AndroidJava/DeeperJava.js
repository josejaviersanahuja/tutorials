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
        },
        segundo: {
            title:"Toast (Pop up message)",
            defBreve:"Aunque es un elemento del UI, es un elemento temporal que no vale la pena declarar en el activity_main.xml En cambio, vamos a crearlo en la parte de nuestro código en JAVA.",
            arrayCodigo:[
                {
                    cod:`Toast.makeText(this,"Hello", Toast.LENGTH_LONG).show();`,
                    text:"Cuando el método show se ejecuta en nuestro onCreate method, va a aparecer en pantalla, un mensaje pop up, en la parte de abajo de la pantalla diciendo hello. Si la duración del mensaje es Toast.LENGTH_LONG, el mensaje durará alrededor de 4 segundos. Pero si usamos Toast.LENGTH_SHORT durará 2 segundos."
                }
            ]
        }, tercero:{
            title:"Modal window or Alert message",
            defBreve:"En React Native aprendimos a usar Alerts, y vamos a aprender a usarlas en Android apps con java. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// alert modal screen

// 1. Definimos el builder
AlertDialog.Builder builder = new AlertDialog.Builder(BookActivity.this);

// 2. Seteamos el mensaje
builder.setMessage("You already added this book on this list");

// 3. (opcional) definimos una acción positiva en caso de querer continuar.
builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialogInterface, int i) {

    }
});

// 4. (opcional) definimos una acción negativa en caso de querer cancelar
builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialogInterface, int i) {

    }
});

// 5. Aquí definimos si la alerta puede ignorarse o no.
builder.setCancelable(false); // en false, no puede ignorarse y hay que decidir una acción

// 6. definimos el momento donde mostrar la alerta o la ventana modal.
builder.create().show();
`,
                    text:"De esta forma aprendemos como crear, mostrar y cómo definir una acción en base a la alerta que deseamos crear. Hay muchos más métodos. Dejo link para la documentación."
                }
            ],
            url:"https://developer.android.com/guide/topics/ui/dialogs?hl=es-419"
        },cuarto:{
            title:"Back Arrow",
            defBreve:"En android, el header es un elemento especial y por tanto se accede a él de forma especial también. Por eso ahora vamos a ver cómo mostrar el back arraow en el header y cómo hacer que funcione. vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// 1. dentro del onCreate method escribimos lo siguiente
getSupportActionBar().setDisplayHomeAsUpEnabled(true);

// 2. creamos otro método que sobreescribimos. onOptionsItemSelected
// ya lo vimos antes cuando creamos el menú principal.
@Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {

        switch (item.getItemId()){
            
            // 3. la clave de todo está en las siguientes 2 líneas
            case android.R.id.home:
                super.onBackPressed();
                break;
            default:
                break;
        }
        return super.onOptionsItemSelected(item);
    }`,
                    text:"El paso 1 es muy directo, el 2 ya lo hemos visto pero el 3 voy a explicar 2 cositas. android.R.id.home es el id de dicho backArrow. y super.onBackPressed() es un método que pertenece a android, y es exactamente el método que se ejecuta cuando le damos al triangulo de ir atrás. Por ese motivo se llama desde el construtor superior super. Incluso existe un método sobreescribible llamado onBackPressed para redefinir las acciones que ahí ocurren."
                }
            ]
        },quinto:{
            title:"onLongClickListener & notifyDataSetChanged()",
            defBreve:"En nuestro sampleApp1 hemos aprendido a definir un long press listener, vamos a ver su implementación y veremos que más aprendemos del recyclerView.",
            arrayCodigo:[
                {
                    cod:`// onLongClickListener
holder.bookCard.setOnLongClickListener(new View.OnLongClickListener() {
    @Override
    public boolean onLongClick(View view) {

        // obtenemos la position del objeto de nuestro recycler view y definimos el objeto
        final int index = holder.getAdapterPosition();
        Book book = listOfBooks.get(index);
        
        // alert modal screen
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setTitle("Options");
        builder.setMessage("Choose an action");
        builder.setPositiveButton("Remove", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                listOfBooks.remove(book);

                // con este método podemos hacer que el recyclerview se actualice ya que avizamos
                // que el data array que lo define, ha cambiado.
                notifyDataSetChanged();
            }
        });
        builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {

            }
        });
        builder.setCancelable(false);

        // en este switch definimos el tercer boton de nuestro alert
        // y lanzamos la alerta
        switch (util.getType()){
            case "WantToReadBooks":
                builder.setNeutralButton("Move to current reading books", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        util.addCurrentlyReadingBook(book);
                        listOfBooks.remove(book);
                        notifyDataSetChanged();
                    }
                });
                builder.create().show();
                break;
            case "AlreadyReadBooks":
                builder.setNeutralButton("Move to want to read books", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        util.addWantToReadBook(book);
                        listOfBooks.remove(book);
                        notifyDataSetChanged();
                    }
                });
                builder.create().show();
                break;
            case "CurrentlyReadingBooks":
                builder.setNeutralButton("Move to already read books", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        util.addAlreadyReadBook(book);
                        listOfBooks.remove(book);
                        notifyDataSetChanged();
                    }
                });
                builder.create().show();
                break;
            default: break;
        }

        return false;
    }`,
                    text:"Aunque la lógica es específica de nuestra aplicación, pudimos definir el método onLongClickListener y aprendimos a refrescar el recyclerview cuando este cambia."
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
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
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
            />
        </div>
    )
}
