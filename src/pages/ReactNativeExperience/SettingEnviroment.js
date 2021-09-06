import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function SettingEnviroments() {
    
    const detalles={
        primero:{
            title: "Expo",
            defBreve:"Si no deseas enredarte con la configuración de las herramientas para trabajar con react native, Expo es la solución perfecta. Es tan ideal, que la documentación oficial de react native recomienda usar Expo y dice como usarlo. Expo sigue el mismo patrón de configuración que React, Instalas su paquete, escribes el código y Expo se encarga de la transpilación, de cachear tu código y de mostrarte una interfaz que permite conectar tu móvil o cualquier emulador con tu proyecto sin previa configuración.",
            arrayCodigo:[
                {
                    cod:`//No todo es lo fácil es bueno
`,
                    text: "Expo es realmente bueno, incluso puedes aprender gratis con Expo, pero a la hora de publicar tus proyectos, pasan 2 cosas. Expo se encarga de todo por ti, y te sale gratis el primer mes, pero luego hay que pagar si deseas seguir usando Expo como control de versiones de tus aplicaciones."
                },{
                    cod:`//Servicio de lujo por 30$ al mes.`,
                    text:"Tanto la facilidad para comenzar, como para lanzar tu proyecto a la App store de android, y/o de Apple, tiene un coste. De hecho, si lo piensas bien, Google te cobra 25$ (pago único) para poder desarrollar aplicaciones para android. Apple también cobran y es otro proceso distinto que aún no he aprendido, que Expo cobre, no solo no debe extrañarnos, sino que lo considero un servicio muy bueno, y hasta de lujo. Pero como no tengo demasiado dinero, He optado por el aprendizaje duro. Sin embargo dejo el Link con la documentación a Expo."
                }
            ],
            url:"https://docs.expo.dev/"            
        },
        segundo:{
            title:"React Native CLI (Windows) Parte I",
            defBreve:"Trabajar con React Native Cli es como trabajar con create-react-app, solo que para que podamos desarrollar viendo lo que estamos creando debemos intalar, Node (Previamente instalado), Java SDK, Android Studio, y asegurarnos que todas esas herramientas puedan comunicarse corretamente. Si seguimos fielmente la documentación, podremos hacerlo fácilmente. Si te pones a lanzar flechas como yo lo hice, perderás mucho tiempo y la frustración crecerá. Así que vamos a ello.",
            arrayCodigo:[
                {
                    cod:`npx react-native init MyApp
// OR
npx react-native init MyApp --template react-native-template-typescript`,
                    text:"Es probable que debas instalar primero npx react-native -g. Pero crear la carpeta del proyecto, es exactamente igual a como se crean con React. Ahora pasemos a la segunda parte, JAVA SDK"
                },{
                    cod:`//Chocolatey`,
                    text:"Ya se que dije que instalasemos JAVA SDK, pero la realidad es que yo tenía varias versiones de Java instaladas en mi ordenador, y con ninguna sirvió la configuración. Por ese motivo, en esta guía vamos a seguir paso a paso toda la documentación que presenta React Native docs, dejo el link justo ahora. "
                }
            ],
            url:"https://reactnative.dev/docs/environment-setup"
        },
        tercero:{
            title:"React Native CLI Parte II. Chocolatey, Node y Java SDK",
            defBreve:"Chocolatey es un sistema de instalación de paquetes por CLI, del mismo modo que npm. El único motivo por el cual lo señalo, es porque la documentación de React Native lo recomienda. Para instalarlo abrimos un powershell en modo administrado. Dejaré el link más abajo",
            arrayCodigo:[
                {
                    cod:`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`,
                    text:"Ejecutamos ese comando para instalar Chocolatey como sistema de descarga de paquetería "
                },{
                    cod:`//Para quien no tenga Nodejs
choco install -y nodejs.install openjdk8

//Para quien ya tiene Nodejs
choco install -y openjdk8`,
                    text:"Lo dicho, Ahora tenemos la oportunidad de bajar el paquete de JAVA SDK y de forma automática quedarán seteadas como variables de entorno local y de nuestra máquina, los parámetros correctos para que JAVA haga el trabajo de conectar con Android Studio y con React Native."
                }
            ],
            url:"https://chocolatey.org/install"
        },
        cuarto:{
            title:"React Native CLI Parte III. Android development environment",
            defBreve:"Prácticamente, se trata de descargar Android Studio y saber setear algunas variables de entorno en nuestra máquina. Si sabemos los pasos correctos, es muy sencillo y no perderemos tiempo. Así que vamos a ello.",
            arrayCodigo:[
                {
                    cod:`//Decargamos e instalamos Android Studio`,
                    text:"Dejaré el link más abajo. Pero quedemosno con la siguiente idea. Necesitamos 3 o 4 cosas de Android Studio. Android SDK, Android SDK Platform, Android Virtual Device (AVD), Intel ® HAXM (solo si tu máquina es Intel y es compatible con Haxm)"
                },{
                    cod:`//The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.`,
                    text:"Una vez abierto, debemos buscar la pestaña o ícono de SDK Manager (dentro de More Actions). Una vez abierto, buscamos Appearance & behavior, buscamos la opción System Settings y en esa ventana debemos hacer 3 cosas. 1. apuntar la dirección local de donde se encuentra la SDK. Normalmente es C:/Users/Usuario/AppData/Local/Android/Sdk. 2. Ver que versión del SDK Platform tenemos instalado. A día de 17/08/2021 React Native Docs soporta mejor la plataforma 10.0 (Q) ó plataforma 29, así que la seleccionamos y la descargamos. 3. Le damos a la pestaña  SDK Tools y nos aseguramos de tener 3 o 4 cosas ahí. Android SDK Build-Tools, Android Emulator, Android SDK Platform-tools, intel x86 Emulator accelerator (HAXM installer). Una vez tengamos todo eso instalado, (OJO, es normal que todo eso venga instalado por defecto, excepto quizás el SDK Platform 10.0 (Q) porque por defecto viene instalada la 11.0) "
                },
                {
                    cod:`//Seleccionemos el Virtual Device AVD`,
                    text:"Otra vez volvemos a la pestaña donde encontramos el SDK Manager, así mismo encontramos el AVD Manager. Le damos a create virtual device, y seleccionamos que tipo de dispostivo virtual debemos instalar. Solo asegurate que instales la version de android 10.0 (Q). El dispositivo es lo de menos. Ahora vayamos a las variables de entorno. Si existe algún error, puede estar relacionado con el HAXM. revisa un poco más abajo la posible solución."
                },{
                    cod:`//caso opcional HAXM`,
                    text:"El acelerador de maquinas virtuales de intel, es algo que vamos a necesitar si trabajamos con una máquina intel. La configuración es automática de forma general PERO... EXISTE UNA PEGA EN ALGUNOS CASOS. Existen BIOS que por defecto, no aceptan máquinas virtuales en nuestro windows. En ese caso, debemos entrar en la BIOS y activar manualmente que acepte que se corran emuladores en nuestro ordenador. Este paso fue un dolor de cabeza que tuve mientras configuraba estas herramientas en la máquina de mis padres. Incluso puede que este paso sea previo y requisito a la creación de nuestro AVD. Tenlo en mente. Ahora es momento de probar si todo está bien configurado"
                }
            ],
            url:"https://developer.android.com/studio/index.html"
        },
        quinto:{
            title:"React Native CLI Parte IV, Variables de entorno del sistema",
            defBreve:"Esta es una parte sencilla, pero muy importante y también muy delicada. Sin esto, nada va a servir, así que vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// En el buscador de windows, busca "Editar variables de entorno del sistema"`,
                    text:"Haz click al boton de variables de entorno. En las variables de entorno vas a buscar, ya sea de forma local (en tu usuario) o en el propio sistema lo siguiente. (OJO, proceso muy delicado. No borres nada de esta área. Puede dañar todo tu sistema operativo.) Buscamos las variables ANDROID_HOME, ANDROID_SDK_ROOT, JAVA_HOME. También hay que ingresar en el Path pero del usuario local la siguiente dirección C:/Users/Usuario/AppData/Local/Android/Sdk/platform-tools. Si aparecen estas 3 o 4 variables, todo apunta por buen camino. Si no aparecen, no pasa nada, podemos escribirlas a mano. Sigamos con fé y esperanza."
                },{
                    cod:`// Todas las variables de entorno que debemos escribir a mano
Path=...,C:/Users/Usuario/AppData/Local/Android/Sdk/build-tools, ...
ANDROID_HOME=C:/Users/Usuario/AppData/Local/Android/Sdk        
ANDROID_SDK_ROOT=C:/Users/Usuario/AppData/Local/Android/Sdk        
JAVA_HOME=C:/Program Files/OpenJDK/openjdk-8u302-b08
`,
                    text:"Ahora podemos correr npm run android en nuestro proyecto creado y todo debe ir como la seda."
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Configurando el ambiente de trabajo"
                parrafo=" Si bien dije antes que trabajar con React Native es muy similar a trabajar con React, también es cierto que el trabajo previo, y la configuración de las herramientas de trabajo puede llegar a ser un proceso desmoralizador si no sabemos a qué nos enfrentamos. No es demasiado complicado, pero debes saber que no es intalar editor, node, npx create-react-app y listo... Crear las herramientas de trabajo y que se coordinen bien, fue un proceso duro en mi experiencia porque pensé, equivocadamente, que sería similar a trabajar con React. Así que sin más dilación, vamos a ello."
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
                url={detalles.segundo.url}
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
                url={detalles.cuarto.url}
            />
            <DetallesSubtema
                title={detalles.quinto.title}
                defBreve={detalles.quinto.defBreve}
                arrayCodigo={detalles.quinto.arrayCodigo}
            />
        </div>
    )
}
