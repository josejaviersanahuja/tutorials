import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function VariablesFunciones() {
   
    const detalles={
        primero:{
            title: "STOP WITH LIVE SASS WATCHER EXTENSION",
            defBreve:"Sass sigue evolucionando y hay muchas funcionalidades nuevas que han dejado deprecadas los import con los que aprendí a usar sass. Es poco conocido, tanto así que yo aprendí a usar sass de la forma antigua cuando ya esta forma que estoy mostrando existía. Empecemos",
            arrayCodigo:[
                {
                    cod:`npm install sass -D` ,
                    text: "Es lo primero que necesitamos, aprender a compilar sass sin ningua extension de VSCODE. Creamos nuestra primera línea de scss un background: red para ver si funciona en la siguiente prueba"
                },
                {
                    cod:`npx --watch src/scss:src/css` ,
                    text: "Ya con estas 2 líneas de comando hacemos exactamente lo mismo que con la extensión de VSCODE. src/scss es donde yo suelo guardar mis archivos sass, src/css es donde suelo colocar la transpilación. suelo usar index.scss e index.css. Esto es a gusto del consumidor. Una vez compilado, dejamos la terminal observando y abrimos otra para levantar el servidor. PD recuerda linkear o importar el index.css a tu APP"
                }
            ]
        },
        segundo:{
            title: "@use instead of @import",
            defBreve:"Solo debido a que import ya no le darán soporte, recomiendan usar use. En primera instancia no me gusta. Pero seamos flexibles. demosle una oportunidad y veamos que bondades trae. Usaré mi propio file system donde tengo 1 index.scss y 1 _variables.scss.",
            arrayCodigo:[
                {
                    cod:`@use './variables';

body {
    background: variables.$primeColor;
}                    
` ,
                    text: "Esta vez tenemos que añadir al antiguo sistema el prefijo del archivo, en este caso variables. para usar la variable $primeColor. La razón para este cambio que no parece mejorar nada en principio, es la escalabilidad en proyectos grandes y en equipo. cuando muchos declaran sus propias variables, existían clashes entre variables del mismo nombre. De esta forma modular, 10 personas con sus 10 variables $color, podrán usarlas de forma que nunca colisionen. Eso es con variables, y ¿qué sucede con los estilos?"
                },
                {
                    cod:`@use './variables';
@use './component;` ,
                    text: "Anteriormente las variables eran globales a todos los componentes que se importaban por debajo. Ahora ya no. Ahora debemos importar las variables en todos los archivos que vayamos a necesitar. ¿Pero qué es esto? ¿dónde están las ventajas? Les adelanto que ahora viene una ligera ayuda para aguantar un poco estas 'mejoras'"
                },
                {
                    cod:`@use './variables as v';
body {
    background: v.$primeColor;
}`   ,
                    text: "Podemos renombrar el archivo para así trabajar con variables más sencillas. Incluso, si colocamos * en vez de v, podemos trabajar de la forma antigua, sin prefijos."
                }
            ]
        },
        tercero:{
            title: "@forward",
            defBreve:"Vamos a escalar nuestras buenas prácticas a un proyecto ENORME. Cambiemos un poco el file system para entender cuán valioso es esta funcionalidad @forward. En nuestra carpeta scss vamos a crear otra llamada abstract donde irán los archivos _colors.scss, _fonts.scss, _mixins.scss, _animations.scss, _functions.scss Y tengamos todas estas funcionalidades a parte de nuestros estilos. @forward ayudará a que este sistema sea más fácil de usar. veamos como.",
            arrayCodigo:[
                {
                    cod:`/*Creamos un archivo dentro de abstract llamado _index.scss*/
@forward './colors';
@forward './fonts';
@forward './mixins';
@forward './animations';
@forward './functions';
` ,
                    text: "@forward lo que va a hacer es un cuello de botella donde importando el _index.scss podamos tener acceso a todos los archivos en abstract. ¿Y cómo cambia esto las cosas? veamoslo a continuación" 
                },
                {
                    cod:`/*volvamos a nuestro index.scss dentro de scss folder*/
@use './abstract as *';
body {
    background: $primeColor;
}
` ,
                    text: "Como dentro de abstract existe un archivo _index, importando solo la carpeta, leemos directamente el index por defecto. Ahí tendremos todas las variables sin renombrar desde un comienzo. TANTO ROLLO PARA VOLVER A EMPEZAR. Pero esta es la forma correcta de hacerlo." 
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="16/07/2021"/>
            <DetallesSubtema 
                title={detalles.primero.title} 
                defBreve={detalles.primero.defBreve} 
                arrayCodigo={detalles.primero.arrayCodigo}
                language="scss"
            />
            <DetallesSubtema 
                title={detalles.segundo.title} 
                defBreve={detalles.segundo.defBreve} 
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="scss"
            />
            <DetallesSubtema 
                title={detalles.tercero.title} 
                defBreve={detalles.tercero.defBreve} 
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="scss"
            />
        </div>
    )
}
