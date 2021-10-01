import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function AppMenu() {
    
    const detalles={
        primero:{
            title: "XML Part.",
            defBreve:"Por aquí comienza la creación de nuestro menú. Pero no es tan básico como crees. Vamos al directorio app/res/ y ahí creamos una carpeta llamada menu. Es muy importante que tenga ese nombre.",
            arrayCodigo:[
                {
                    cod:`// click derecho sobre la carpeta menu, le damos a new y luego a menu resource file
// luego creamos el archivo main_menu.xml y lo abrimos.

<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">

</menu>
`,
                    text: "Ahora vamos a empezar a trabajar sobre este archivo y a añadir nuevos items. Veamos que podemos hacer."
                },{
                    cod:`   <item
        android:title="UI1"
        android:id="@+id/UI1"
        app:showAsAction="always" />
    <item
        android:title="UI2"
        android:id="@+id/UI2"
        app:showAsAction="always"/>
    <item
        android:title="UI3"
        android:id="@+id/UI3"
        app:showAsAction="always"/>
    <item
        android:title="UI4"
        android:id="@+id/UI4"
        app:showAsAction="always"/>`,
                    text:"Así podemos generar nuevos elementos para nuestro menú. Hay otro atributo que quisiera mostrar. android:icon='path to the icon' Para mostrar el ícono y no el title. Otro detalle es que showActions puede recibir never, always o ifRoom."
                }
            ],
            url:"https://developer.android.com/guide/topics/resources/menu-resource"
        }, segundo :{
            title:"Inflando el menu desde nuestro Java",
            defBreve:"Hemos creado un estático con los componentes UI de nuestro Menú, pero ahora debemos aprender a mostrarlos en nuestra App.",
            arrayCodigo:[
                {
                    cod:`// override 1. here we will inflate the menu items for this activity.
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_manu, menu);
        return true;
    }`,
                    text:"Este es un método al mismo nivel que el onCreate. Hacemos override y creamos nuestro objeto inflater, inflamos el objeto menu con los datos de nuestro archivo main_menu. Es sencillo pero con este paso no interactuamos con el menú solo lo mostramos por pantalla. Veamos cómo interactuar."
                }
            ]
        },tercero :{
            title:"Interactuamos con nuestro menu items",
            defBreve:"Hemos mostrado por pantalla los items de nuestro menú, pero ahora debemos aprender a interactuar con ellos.",
            arrayCodigo:[
                {
                    cod:`// override 2 we will receive the MenuItem when we click and act accordingly
    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch(item.getItemId()) {
            case R.id.UI1:
                Toast.makeText(this, "UI 1 selected", Toast.LENGTH_SHORT).show();
                return true;
            case R.id.UI2:
                Toast.makeText(this, "UI 2 selected", Toast.LENGTH_SHORT).show();
                return true;
            case R.id.UI3:
                Toast.makeText(this, "UI 3 selected", Toast.LENGTH_SHORT).show();
                return true;
            case R.id.UI4:
                Toast.makeText(this, "UI 4 selected", Toast.LENGTH_SHORT).show();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }`,
                    text:"Vamos a crear acciones similares y simples como un  Toast. Pero va a ser lo suficientemente descriptivo para entender cómo funciona este método, que al igual que onCreate y onCreateOptionsMenu, tiene la misma finalidad."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="01/10/2021"/>
            <Subtitle
                subtitle="Vamos a crear un Menú para nuestra aplicación."
                parrafo="No va a ser un proceso ni intuitivo, ni simple, pero ciertamente es un paso importantísimo para nuestro desarrollo personal. Vamos a ello."
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
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
