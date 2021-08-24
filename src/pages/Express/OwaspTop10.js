import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function OwaspTop10() {
    
    const detalles={
        primero:{
            title: "1. DATA INJECTION. A) Server Side JS Injection, B) SQL and NoSQL Injection, C) Log Injection",
            defBreve:"De acuerdo a  OWASP, el ataque número 1 a servidores de NODE es JS injection. Para solucionar ese problema, basta con verificar los tipos de entrada del formulario. Es una buena práctica que ya utilizamos. Veamos los snappets de OWASP. DEJO LA URL DEL ARTÍCULO DE OWASP.",
            arrayCodigo:[
                {
                    cod:`/*A Server Side JS Injection
                    To prevent server-side js injection attacks:
Validate user inputs on server side before processing
Do not use eval()function to parse user inputs. Avoid using other commands with similar effect, such as setTimeOut(), setInterval(), and Function().
For parsing JSON input, instead of using eval(), use a safer alternative such as JSON.parse(). For type conversions use type related parseXXX()methods.
Include "use strict"at the beginning of a function, which enables strict mode within the enclosing function scope.*/
`,
                    text: "Se entiende muy claramente, mejor evaluar las entradas con typeof req.body.email == 'string'? do this : do that. Y rechazar las entradas que no cumplan eso."
                },{
                    cod:`/* B SQL and NoSQL Injection
Aquí hay algunas medidas para prevenir ataques de inyección SQL / NoSQL, o minimizar el impacto si ocurre:

Declaraciones preparadas: para las llamadas SQL, utilice declaraciones preparadas en lugar de crear consultas dinámicas mediante la concatenación de cadenas.

Validación de entrada: valide las entradas para detectar valores maliciosos. 

Para las bases de datos NoSQL, también valide los tipos de entrada con los tipos esperados

Privilegio mínimo: para minimizar el daño potencial de un ataque de inyección exitoso, no asigne derechos de acceso de tipo administrador o DBA a sus cuentas de aplicación.

De manera similar, minimice los privilegios de la cuenta del sistema operativo con la que se ejecuta el proceso de la base de datos.*/
`,
                    text: "Con la validación de entrada que hacemos, también podemos prevenir este tipo de ataques."
                },{
                    cod:`/* C Log Injection
Como siempre cuando se trata de la entrada del usuario:

No permita la entrada del usuario en los registros

Codifique en el contexto adecuado o desinfecte la entrada del usuario.*/
`,
                    text: "Con la validación de entrada que hacemos, también podemos prevenir este tipo de ataques."
                }
            ],
            url:"https://nodegoat.herokuapp.com/tutorial"
        },
        segundo:{
            title: "2 Broken Authentication and Session Management",
            defBreve:"La gestión de sesiones es una pieza fundamental de la seguridad de las aplicaciones. Es un riesgo más amplio y requiere que los desarrolladores se encarguen de proteger la identificación de la sesión, el almacenamiento seguro de las credenciales de usuario, la duración de la sesión y la protección de los datos críticos de la sesión en tránsito.",
            arrayCodigo:[
                {
                    cod:`/*1. Protecting user credentials*/
// Generate password hash
var salt = bcrypt.genSaltSync();
var passwordHash = bcrypt.hashSync(password, salt);

// Create user document
var user = {
    userName: userName,
    firstName: firstName,
    lastName: lastName,
    password: passwordHash
};

if (bcrypt.compareSync(password, user.password)) {
    callback(null, user);
} else {
    callback(invalidPasswordError, null);
}`,
                    text:"Persistir el hashedpassword y no el password original, y poder comparar el password sin necesidad de descifrar el hashed password."
                },{
                    cod:`/*2. Session timeout and protecting cookies in transit
A. Utilice tiempos de espera basados ​​en la sesión, finalice la sesión cuando se cierre el navegador.

B. Además, establece el encabezado HTTPOnlyHTTP que evita que los scripts accedan a las cookies. La aplicación utilizó conexiones seguras HTTPS y las cookies están configuradas para enviarse solo en conexiones HTTPS seguras configurando Secureflag.

app.use(express.session({
    secret: "s3Cur3",
    cookie: {
        httpOnly: true,
        secure: true
    }
}));

C. When user clicks logout, destroy the session and session cookie

req.session.destroy(function() {
    res.redirect("/");
});  
*/`,
                    text:"En el A, hacemos la mitad bien, porque los tokens expiran, pero como cerramos sessión cuando cierra el navegador? será con un sessionStorage??. En el B hay un dato interesante, las cookies puden asegurarse. El localstorage supongo que no. El C si lo cumplimos al 100%."
                },{
                    cod:`/*3. Session hijacking
La aplicación de demostración insegura no genera una nueva identificación de sesión cuando el usuario inicia sesión, por lo que genera una vulnerabilidad de secuestro de sesión si un atacante puede de alguna manera robar la cookie con la identificación de sesión y usarla.

Al iniciar sesión, una de las mejores prácticas de seguridad con respecto a la administración de sesiones de cookies sería volver a generar la identificación de la sesión de modo que si ya se creó una identificación para un usuario en un medio inseguro (es decir, un sitio web que no sea HTTPS o de otro modo), o si un atacante pudo tener en sus manos la identificación de la cookie antes de que el usuario iniciara sesión, entonces la identificación de sesión anterior se volverá inútil ya que el usuario que inició sesión con nuevos privilegios tiene una nueva identificación de sesión ahora.

Para asegurar la aplicación:

1. Vuelva a generar una nueva identificación de sesión al iniciar sesión (y la mejor práctica es seguir volviéndola a generar en las solicitudes o al menos en acciones confidenciales como el restablecimiento de la contraseña de un usuario. Vuelva a generar una identificación de sesión de la siguiente manera: ajustando el siguiente código como un función de devolución de llamada para el método req.session.regenerate ()         
                    
                    */`,
                    text:"Con que cada login se genere un token nuevo, parece ser suficiente, pero si hay un cambio de contraseña, también podría generarse un token nuevo. Pero aún hay cosas que no entiendo."
                },{
                    cod:`/*A2 - 2 Password Guessing Attacks
La implementación de un criterio de contraseña mínimo sólido (longitud y complejidad mínimas) puede dificultar que el atacante adivine la contraseña.

A. crear criterios de password seguros como tamaño mínimo, uso de caracteres especiales, y cosas similares.

B. Evitar que el Login se pueda ejecutar indiscriminadamente, ya sea invalidando la cuenta por log in attempts durante un tiempo o cosas similares.

C. Alentar el cambio de contraseñas.

Tome precauciones contra la fuerza bruta
La fuerza bruta es una amenaza común para todas las aplicaciones web. 
Los atacantes pueden utilizar la fuerza bruta como un ataque de adivinación de contraseñas para obtener las contraseñas de las cuentas. 
Por lo tanto, los desarrolladores de aplicaciones deben tomar precauciones contra los ataques de fuerza bruta, especialmente en las páginas de inicio de sesión. 
Node.js tiene varios módulos disponibles para este propósito. 
Express-bouncer, express-brute y rate-limiter son solo algunos ejemplos. 
Según sus necesidades y requisitos, debe elegir uno o más de estos módulos y utilizarlos en consecuencia. 
Los módulos express-bouncer y express-brute funcionan de manera muy similar y ambos aumentan el retraso con cada solicitud fallida. 
Ambos se pueden organizar para una ruta específica. Estos módulos se pueden utilizar de la siguiente manera:
*/

/*Snapped 1*/
const bouncer = require('express-bouncer');
bouncer.whitelist.push('127.0.0.1'); // allow an IP address
// give a custom error message
bouncer.blocked = function (req, res, next, remaining) {
    res.send(429, "Too many requests have been made. Please wait " + remaining/1000 + " seconds.");
};
// route to protect
app.post("/login", bouncer.block, function(req, res) {
    if (LoginFailed){  }
    else {
        bouncer.reset( req );
    }
});

/*Snapped 2*/
const ExpressBrute = require('express-brute');

const store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
const bruteforce = new ExpressBrute(store);

app.post('/auth',
    bruteforce.prevent, // error 429 if we hit this route too often
    function (req, res, next) {
        res.send('Success!');
    }
);

/*Snapped 3*/
const limiter = new RateLimiter();
limiter.addLimit('/login', 'GET', 5, 500); // login page can be requested 5 times at max within 500 seconds`,
                    text:"Esta parte es muy útil para evitar los ataques de fuerza bruta."
                }
            ]            
        },
        tercero:{
            title: "A3-Cross-Site Scripting (XSS)",
            defBreve:"Es cuando los scripts pueden inyectarse directo en nuestras páginas web.",
            arrayCodigo:[
                {
                    cod:`/*Al igual que en el 1, esto se evita con buenas prácticas y chequeando las entradas*/`,
                    text:"Ya cumplimos estos criterios."
                }
            ]            
        },
        cuarto:{
            title: "A4-Insecure Direct Object References",
            defBreve:"Una referencia directa a un objeto se produce cuando un desarrollador expone una referencia a un objeto de implementación interno, como un archivo, directorio o clave de base de datos. Sin una verificación de control de acceso u otra protección, los atacantes pueden manipular estas referencias para acceder a datos no autorizados.",
            arrayCodigo:[
                {
                    cod:`/*Verificar el acceso: Cada uso de una referencia de objeto directo de una fuente no confiable debe incluir una verificación de control de acceso para garantizar que el usuario esté autorizado para el objeto solicitado.
Utilice referencias indirectas a objetos por usuario o sesión: en lugar de exponer las claves reales de la base de datos como parte de los enlaces de acceso, utilice una referencia indirecta temporal por usuario. 

Por ejemplo, en lugar de usar la clave de la base de datos del recurso, una lista desplegable de seis recursos autorizados para el usuario actual podría usar los números del 1 al 6 o números aleatorios únicos para indicar qué valor seleccionó el usuario. 

La aplicación tiene que asignar la referencia indirecta por usuario a la clave de base de datos real en el servidor.

Pruebas y análisis de código: los probadores pueden manipular fácilmente los valores de los parámetros para detectar tales fallas. 
Además, el análisis de código puede mostrar rápidamente si la autorización se verifica correctamente.*/`,
                    text:"Me parece que hablan de evitar pasar keys innecesarias que puedan ser importantes para el desarrollador o hacker, pero que no tengan valor para el cliente. El ejemplo que muestran habla de evitar pasar keys as queryStrings."
                }
            ]            
        },
        quinto:{
            title:"A5-Security Misconfiguration",
            defBreve:"Esta vulnerabilidad permite que un atacante acceda a cuentas predeterminadas, páginas no utilizadas, fallas sin parches, archivos y directorios desprotegidos, etc. para obtener acceso no autorizado o conocimiento del sistema. La configuración incorrecta de la seguridad puede ocurrir en cualquier nivel de una pila de aplicaciones, incluida la plataforma, el servidor web, el servidor de aplicaciones, la base de datos, el marco y el código personalizado. Los desarrolladores y los administradores del sistema deben trabajar juntos para garantizar que toda la pila esté configurada correctamente.",
            arrayCodigo:[
                {
                    cod:`/*Aquí hay algunos node.js y expresan medidas de configuración específicas:

Utilice la última versión estable de node.js y express (u otro marco web que esté utilizando). 
Esté atento a las vulnerabilidades publicadas de estos. 

No ejecute aplicaciones con privilegios de root. 
Puede parecer necesario ejecutar como usuario root para acceder a puertos privilegiados como 80. 
Sin embargo, esto se puede lograr iniciando el servidor como root y luego degradando al usuario sin privilegios después de que se establezca la escucha en el puerto 80, o usando un proxy separado, o usando mapeo de puertos.

Revise el valor predeterminado en los encabezados de respuesta HTTP para evitar la divulgación de la implementación interna.

Utilice nombres de cookies de sesión genéricos

Limite el tamaño del cuerpo de la solicitud HTTP estableciendo límites de tamaño razonables en cada tipo de contenido middleware específico (urlencoded, json, multipart) en lugar de utilizar limitmiddleware agregado. Incluya solo el middleware necesario. Por ejemplo, si la aplicación no necesita admitir la carga de archivos, no incluya middleware de varias partes.

Si usa middleware de varias partes, tenga una estrategia para limpiar los archivos temporales generados por él. Estos archivos no se recolectan como basura de manera predeterminada, y un atacante puede llenar el disco con dichos archivos temporales.

Paquetes de vet npm utilizados por la aplicación

Bloquee las versiones de todos los paquetes npm utilizados, por ejemplo, usando shrinkwarp, para tener un control total sobre cuándo instalar una nueva versión del paquete.

Establecer encabezados HTTP específicos de seguridad*/`,
                    text:"..."
                }
            ]
        },
        sexto:{
            title:"A6-Sensitive Data Exposure",
            defBreve:"Esta vulnerabilidad permite que un atacante acceda a datos confidenciales como tarjetas de crédito, identificaciones fiscales, credenciales de autenticación, etc. para realizar fraudes con tarjetas de crédito, robo de identidad u otros delitos. La pérdida de estos datos puede causar un impacto comercial severo y dañar la reputación. Los datos confidenciales merecen una protección adicional, como el cifrado en reposo o en tránsito, así como precauciones especiales cuando se intercambian con el navegador.",
            arrayCodigo:[
                {
                    cod:`Utilice el protocolo de red Secure HTTPS
Cifre todos los datos confidenciales en reposo y en tránsito
No almacene datos confidenciales innecesariamente. Deséchelo lo antes posible.
Asegúrese de que se utilicen algoritmos estándar sólidos y claves sólidas, y que se haya implementado una administración de claves adecuada.
Deshabilite el autocompletado en formularios que recopilan datos confidenciales y deshabilite el almacenamiento en caché para las páginas que contienen datos confidenciales.`,
                    text:"...   "
                }
            ]
        },
        septimo:{
            title:"A7-Missing Function Level Access Control",
            defBreve:"La mayoría de las aplicaciones web verifican los derechos de acceso a nivel de función antes de hacer visible esa funcionalidad en la interfaz de usuario. Sin embargo, las aplicaciones deben realizar las mismas comprobaciones de control de acceso en el servidor cuando se accede a cada función.",
            arrayCodigo:[
                {
                    cod:`// No solo aplicar la restricciones en el Front sino también en el backend`,
                    text:"Most web applications don’t display links and buttons to unauthorized functions, but this “presentation layer access control” doesn't actually provide protection. You must also implement checks in the controller or business logic."
                }
            ]
        },
        octavo:{
            title:"A8-Cross-Site Request Forgery (CSRF)",
            defBreve:"Un ataque CSRF obliga al navegador de la víctima que ha iniciado sesión a enviar una solicitud HTTP falsificada, incluida la cookie de sesión de la víctima y cualquier otra información de autenticación incluida automáticamente, a una aplicación web vulnerable. Esto permite al atacante obligar al navegador de la víctima a generar solicitudes que la aplicación vulnerable procesa como solicitudes legítimas de la víctima.",
            arrayCodigo:[
                {
                    cod:`/*El middleware Express csrf proporciona una forma muy eficaz de lidiar con el ataque csrf. 
De forma predeterminada, este middleware genera un token llamado "_csrf" que debe agregarse a las solicitudes que mutan el estado (PUT, POST, DELETE), dentro de un campo de formulario oculto, cadena de consulta o campos de encabezado.

Si utiliza middleware de anulación de método, es muy importante que se utilice antes que cualquier middleware que necesite conocer el método de la solicitud, incluido el middleware CSRF. 
De lo contrario, un atacante puede usar métodos de mutación sin estado (como GET) para omitir las comprobaciones de middleware CSRF y usar el encabezado de anulación de método para convertir la solicitud en el método deseado.

Cuando se envía el formulario, el middleware verifica la existencia del token y lo valida al hacer coincidir el token generado para el par respuesta-solicitud. Si los tokens no coinciden, rechaza la solicitud. Por lo tanto, es muy difícil para un atacante explotar CSRF.*/

//Enable Express csrf protection
app.use(express.csrf());

app.use(function(req, res, next) { 
    res.locals.csrftoken = req.csrfToken(); 
    next(); 
}); `,
                    text:"Investigar express csrf."
                }
            ]
        },
        noveno:{
            title:"A9-Using Components with Known Vulnerabilities",
            defBreve:"Tiene que ver con los modulos y packages que no reciben soporte en el tiempo después de que se actualizan las dependencias de otros programas o paquetes de los que dependen.",
            arrayCodigo:[
                {
                    cod:`/*Estas son algunas de las medidas que podemos tomar para protegernos contra paquetes npm maliciosos
No ejecute aplicaciones con privilegios de root
Prefiera paquetes que incluyan análisis de código estático. Verifique JSHint / JSLint la configuración para saber qué reglas cumple el código
Prefiera paquetes que contengan pruebas unitarias completas y pruebas de revisión para las funciones que utiliza nuestra aplicación
Revise el código para cualquier archivo inesperado o acceso a la base de datos
Investiga qué tan popular es el paquete, qué otros paquetes lo usan, si el autor ha escrito otros paquetes, etc.
Bloquear la versión de los paquetes utilizados
Mire los repositorios de Github para ver las notificaciones. Esto nos informará si se descubre alguna vulnerabilidad en el paquete en el futuro.*/`,
                    text:"..."
                }
            ]
        },
        decimo:{
            title:"A10-Unvalidated Redirects and Forwards",
            defBreve:"Las aplicaciones web suelen redirigir y reenviar a los usuarios a otras páginas y sitios web, y utilizan datos que no son de confianza para determinar las páginas de destino. Sin la validación adecuada, los atacantes pueden redirigir a las víctimas a sitios de phishing o malware, o utilizar reenvíos para acceder a páginas no autorizadas.",
            arrayCodigo:[
                {
                    cod:`El uso seguro de redirecciones y reenvíos se puede realizar de varias formas:

Simplemente evite el uso de redireccionamientos y reenvíos.
Si se usa, no involucre los parámetros del usuario en el cálculo del destino. Por lo general, esto se puede hacer.
Si no se pueden evitar los parámetros de destino, asegúrese de que el valor proporcionado sea válido y esté autorizado para el usuario.
Se recomienda que dichos parámetros de destino sean un valor de asignación, en lugar de la URL real o parte de la URL, y que el código del lado del servidor traduzca esta asignación a la URL de destino.`,
                    text:"..."
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="24/08/2021"/>
            <Subtitle
                subtitle="OWASP TOP10"
                parrafo="¿Qué es OWASP? • Open Web Application Security Project. – Sin fines de lucro, organización de voluntarios. • Todos los miembros son voluntarios. Crean informes con los ataques cibernéticos más comunes y típicos y generan estrategias de defensa contra esos ataques. De aquí saldrán las mejores recomendaciones para mantener nuestro servidor seguro. Las conclusiones implican bajas programas como express-slow-down, Express Rate Limit o CSRF"
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
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
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
            <DetallesSubtema
                title={detalles.decimo.title}
                defBreve={detalles.decimo.defBreve}
                arrayCodigo={detalles.decimo.arrayCodigo}
            />
        </div>
    )
}
