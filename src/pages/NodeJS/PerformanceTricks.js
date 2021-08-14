import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PerformanceTricks() {
    
    const detalles={
        primero:{
            title: "Refactoring for Performance",
            defBreve:"Pongamos un ejemplo de un fallo de performance en nuestra APP. No hemos limitado el número de peticiones por minuto. un bot spammer podría usar tantos recurso de nuestro servidor como él pueda procesar, dejando en evidencia nuestro rendimiento ante otro usuarios. Vamos a implementar un método ejemplo para mejorar el performance.",
            arrayCodigo:[
                {
                    cod:`//BEFORE BLIDINGLY CREATE A CHECK ON A URL THAT MAY NOT EXIST, LETS CHECK IT WITH DNS entries
    const parsedURL = new URL({ toString: () => protocol+'://'+url });
    const hostname = typeof(parsedURL.hostname)=='string' && parsedURL.hostname.length >0 ? parsedURL.hostname: false

    dns.resolve(hostname, function(err, adressList) {
    if (!err && adressList) {
            // Create the check object and include the users phone
        const checkObject = {
        id: checkId,
        protocol: protocol,
        userPhone: userPhone,
        url: url,
        method: method,
        successCodes: successCodes,
        timeoutSeconds: timeoutSeconds,
        };

        // Save this object
        _data.create("checks", checkId, checkObject, function (err) {
        if (!err) {
            // Add the check ID to the users object
            userData.checks = userChecks;
            userData.checks.push(checkId);

            // persist new user check
            _data.update("users", userPhone, userData, function (err) {
            if (!err) {
                callback(200, checkObject);
            } else {
                callback(500, {
                Error: "Could not update the user new check",
                });
            }
            });
        } else {
            callback(500, { Error: "Could not create the new check" });
        }
        });
    } else {
        callback(400, {Error: 'The URL that you entered didn´t resolve to any DNS entries'})
    }
    })
`,
                    text: "Imagina que un usuario tipea mal (a propósito o no) la url que desea chequear, nuestra app está diseñada para que cada 2 minutos se ejecuten procesos que incluyen abrir archivos, escribir, leer... son datos, memoria y recursos que se van a desperdiciar por siempre. Podríamos hacer mantenimiento activo, PERO podemos evitar esa situación. Incluimos un paso intermedio en handler checks.post para verificar si la url que nos da el usuario, tiene entradas al dns."
                }
            ]
        },
        segundo:{
            title: "Performance Hooks en NODE.JS",
            defBreve:"Vamos a aprender una forma de evaluar el rendimiento de nuestras funciones en tiempo real. Me encantó cuando lo aprendí, espero que sea útil.",
            arrayCodigo:[
                {
                    cod:`const { performance, PerformanceObserver } = require('perf_hooks');
const util = require('util');
const debug = util.debuglog('performance')

//DEFINE THE PERFORMANCE OBSERVER
const obs = new PerformanceObserver((perfObserverList, observer) => {
    //Del perfObserverList queremos mostrar por consola los datos del tiempo de ejecución.
    // llamamos al forEach y usamos debug en vez de console log.
      perfObserverList.getEntriesByType('measure').forEach(measure => {
        debug('\x1b[33m%s\x1b[0m', measure.name+' '+measure.duration)
      })
  
  observer.disconnect();
});
obs.observe({ type: 'measure' });
`,
                    text:"Esta es la primera parte de cómo usar performance. Aquí importamos 2 métodos del módulo perf_hooks, usamos la herramienta util.debuglog('performance') Que ya estudiamos cuando blindamos la APP. Luego definimos un observer que va a ir registrando datos en una variable perfObserverList. Inmediatamente después ejecutamos el observer buscando el performance con el type measure. En el paso 3 quedará todo mejor explicado. Es por si solo no va a hacer nada, necesita que introduzcamos los datos de donde a donde va a medir. En el ejemplo de abajo vamos a medir el rendimiento del método token post (login de nuestros usuarios)"
                },{
                    cod:`// tokens-post
//Required data: phone, password
//Optional data: none
handler._tokens.post = function (data, callback) {
  //Check that all required fields are filled out
  //PERFORMANCE MARK1
  performance.mark('entered post token function')
  const phone =
    typeof data.payload.phone == "string" &&
    data.payload.phone.trim().length === 11 // check this line to integrate a universal use of phone numbers
      ? data.payload.phone.trim()
      : false;
  const password =
    typeof data.payload.password == "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;
    //PERFORMANCE MARK2
  performance.mark('begining user lookup post token')
  if (password && phone) {
    //Make sure that the user doesnt already exist
    _data.read("users", phone, function (err, userData) {
        //PERFORMANCE MARK3
      performance.mark('user lookup complete')
      if (!err && userData) {
        // Hash the password
        //PERFORMANCE MARK4
        performance.mark('begining password hashing')
        const hashedPasswor = helpers.hash(password);
        //PERFORMANCE MARK5
        performance.mark('password hashing complete')
        if (hashedPasswor === userData.hashedPassword) {
            // create a new token with a random name and an expiration of 1 hour
            //PERFORMANCE MARK6
          performance.mark('building the data for the token')
          const tokenID = helpers.createRandomString(20);
          const expires = Date.now() + 1000 * 60 * 60;

          const tokenObject = {
            phone: phone,
            id: tokenID,
            expires: expires,
          };
          //PERFORMANCE MARK7
          performance.mark('begining storing token')
          //Store the token
          _data.create("tokens", tokenID, tokenObject, function (err) {
            //PERFORMANCE MARK8
            performance.mark('storing token  complete')

            //GATHER all the performance
            performance.measure('Begining to end', 'entered post token function','storing token  complete')
            performance.measure('Validating user input', 'entered post token function', 'begining user lookup post token')
            performance.measure('user lookup', 'begining user lookup post token','user lookup complete' )
            performance.measure('password hashing', 'begining password hashing','password hashing complete' )
            performance.measure('token data creation', 'building the data for the token','begining storing token' )
            performance.measure('token storing', 'begining storing token','storing token  complete' )

            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { Error: "Could not create the token" });
            }
          });
        } else {
          callback(400, {
            Error: "Password did not match specified user password",
          });
        }
      } else {
        callback(400, { Error: "Could not find specified user" });
      }
    });
  } else {
    callback(400, { Error: "Missing required fields" });
  }
};`,
                    text:"Usamo performance.mark y performance.measure para poder crear los puntos de registro y tomar los datos del registro del performance. El objeto que genera performance.measure es interesante, contiene el nombre que definimos en las performance.mark y valores de tiempo y más cosas. A nosotros nos interesaba el valor de la duración. Y cómo vemos los resultado? levantando el servidor con la variable de entorno DEBUG seteada en 'performance' y usando el método donde definimos los performance (haciendo login)"
                },{
                    cod:`$env:NODE_DEBUG="performance"; node index.js
// Y el resultado es:
PERFORMANCE 15420: Begining to end 2.8167999982833862
PERFORMANCE 15420: Validating user input 0.21770000457763672
PERFORMANCE 15420: user lookup 0.8255000114440918
PERFORMANCE 15420: password hashing 0.42980000376701355
PERFORMANCE 15420: token data creation 0.10780000686645508
PERFORMANCE 15420: token storing 1.2060999870300293            
`,
                    text:"De principio a fin dura menos de 3 milisegundos. Y el método que más tiempo consume es el de escritura del token en el .log file system. Es evidente que si un método es notoriamente menos eficiente que el resto, podemos dedicar nuestros esfuerzos en mejorarlo o buscar opciones externas para solucionarlo."
                }
            ]
        },
        tercero:{
            title: "Clusters en NODE.JS",
            defBreve:"Podemos mejorar el rendimiento de nuestra APP toqueteando partes del OS para que nuestros procesadores multinúcleos dediquen varios núcleos a nuestros procesos. ADVERTENCIA: Esto puede trastocar TODO el funcionamiento del ordenador (servidor) y puede ser una MUY BUENA SOLUCIÓN, o una TERRIBLE IDEA. Todo depende de la APP, del OS y del Hardware",
            arrayCodigo:[
                {
                    cod:`/**
 * index-cluster.js es nuestra mutación del index.js original para
 * usar los varios procesadores de nuestro PC
 *
 */
// Dependencies
const server = require("./server/server");
const workers = require("./lib/workers");
const { dotEnvReader } = require("./lib/dotEnvReader");
const cli = require("./lib/cli");
// CLUSTER DEPENDENCIES
const cluster = require("cluster");
const os = require("os");

// app container
const app = {};

// Initializing an app starts by initializing the server
app.init = function (callback) {
  //1IF cluster is master lets run the programs that dont need multiple cpu. just 1
  if (cluster.isMaster) {
    // workers
    workers.init();

    //cli must be shown after the initial messages
    setTimeout(function () {
      cli.init();

      callback();
    }, 50);

    //3 NOW WE MUST FORK THE PROCESS SO WE CAN REACH THE SERVER.INIT
    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork()
    }
  } else {
//2IF WE ARE NOT ON THE MASTER THREAD, start the server
  //lets run it in as many cpu as possible
  server.init();
  }
};

//envolvemos el app init en nuestro dotENV para que las variables de entorno carguen antes de iniciar la app
if (require.main === module) {
  //solo se ejecuta si la ejecucion se pide por CLI node index.js por ejemplo
  dotEnvReader(app.init, function () {});
}
//CUANDO NO SE EJECUTA? cuando desde nuestro test/api.js llamamos a la app

module.exports = app;
`,
                    text:"Nuestro index.js lo modificamos en una copia que llamamos index-cluster.js. 2 nuevas dependencias os, y cluster, y luego modificamos el app.init y solo el app.init. 3 pasos. 1. if (cluster.isMaster) Esto significa que si la ejecución es la estandar, seguimos ejecutando workers y el CLI bajo el main Cluster, no modificaremos esas ejecuciones porque no tiene sentido invertir en ellas más capacidad de procesamiento. PERO un servidor exitoso, con muchas visitas y peticiones, pueden saturar de requests el procesamiento del servidor, entonces dentro del master cluster llamamos el método cluster.fork tantos número de veces como núcleos tenga nuestro procesador, y dichos nucleos cada uno por separado correra nuevamente el index-cluster (en nuestro caso el app.init) PERO esta vez cluster.isMaster = false por tanto entraran en el else, donde movimos el server.init. Mira los resultados de esta implementación."
                },{
                    cod:`node index-cluster.js
Background workers are running
CLI is running
>Server up and listening on port: 3002 in staging mode
Server up and listening on port: 3002 in staging mode
Server up and listening on port: 3002 in staging mode
Server up and listening on port: 3001 in staging mode
Server up and listening on port: 3001 in staging mode
Server up and listening on port: 3001 in staging mode
Server up and listening on port: 3002 in staging mode
Server up and listening on port: 3001 in staging mode
>`,
                    text:"El servidor se levanta 4 veces, y no va a haber problemas con qué núcleo asume que trabajo porque de eso se encarga NODEjs por detrás. Repito la ADVERTENCIA, esto puede cambiar por completo la forma como trabaja el ordenador y dependiendo del OS y del hardware y del número de requests que entran, puede ser una gran idea, o una muy mala."
                }
            ]
        },
        cuarto:{
            title: "Child Process",
            defBreve:"Esta funcionalidad puede ser extremadamente poderosa. Aquí daremos un ejemplo que no va a afectar mucho nuestra implementación. Pero quedate con la idea: se trata de ejecutar un programa ajeno a node, e implementarlo dentro de nuestro código para que se encargue de algo. Nuestro ejemplo se basa en el comando del CLI list logs. Ese método usa el file system de NODE para leer todos los archivos dentro de la carpeta .logs. Ahora vamos a usar un programa externo de nuestro systema operativo (ls). Cuando usas el comando ls por consola, te va a mostrar el listado de archivos dentro de la carpeta donde ejecutas ese método. Veamos nuestro ejemplo.",
            arrayCodigo:[
                {
                    cod:`const childProcess = require('child_process')
//LIST LOGS
cli.responders.listLogs = function(){
  //CREAMOS la llamada al programa externo
  const ls = childProcess.spawn('ls', ['./.logs/'])
  //Atrapamos el evento on data
  ls.stdout.on('data', function(dataObject){
      //El buffer que recibimos lo traducimos a string
    const dataStr = dataObject.toString()
    // Convertimos el string en un array, ya aqui todo elemento del array corresponde a un archivo
    const logFileNames = dataStr.split('\n')
    if (logFileNames) {
      cli.verticalSpace()
      logFileNames.forEach(logFileName => {
        
        //get the logs that are compressed
        if (typeof(logFileName) == 'string' && logFileName.includes('-')){
          console.log(logFileName.trim().split('.')[0]);
          cli.verticalSpace()
        }
      })
    } else {
      debug('Error getting the list of logs. line 245 cli.js')
    }
  })
}`,
                    text:"Parece sencillo, pero solo la experiencia dirá cómo trabajar con cada programa. Este método puede ser sumamente poderoso."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="14/08/2021"/>            
            <Subtitle 
                subtitle="Tricks to add or improve performance"
                parrafo="NODE ofrece varios módulos que nos permiten mejorar el rendimiento de nuestra aplicación. Son módulos avanzados pero vamos a toquetear algunos para mostrar que podemos hacer."
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
