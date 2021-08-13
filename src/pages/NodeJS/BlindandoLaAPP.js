import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function BlindandoLaAPP() {
    
    const detalles={
        primero:{
            title: "Throwing Errors",
            defBreve:"La idea es lanzar errores en lugares claves para detectar posibles vulnerabilidades en nuestro código. Vamos a crear un ejemplo en un sitio clave de nuestra aplicación, los handlers, aquellos que se encargan de procesar las requests que llegan al servidor.",
            arrayCodigo:[
                {
                    cod:`//Lets throw an error on porpous to bulletproof our logic an avoid crashings due to a simple error
handler.testErrors = function(data, callback) {
  const err = new Error()
  throw err
}`,
                    text: "Creamos un end point especial para ver el comportamiento de nuestra API cuando estos errores ocurren. El resultado fue malo, la app se rompió. ¿Cómo lo arreglamos? Recuerda la función unifiedServer??? la preparamos para pasar cualquier request al handler y procesar cualquier response que devuelva el handler. Si no lo recuerda, dejo el link más abajo. Ahí vamos a atrapar ese error."
                },{
                    cod:`//we choose a handler and we use the route to do it
 let chosenHandler = server.router[trimmedPath] || server.router.notFound
 if(trimmedPath.includes('public')){
   chosenHandler = server.router.public
 }
      
// check entry data     console.log('recibimos estos datos: ', trimmedPath, buffer, method, headers);
    //Route the request to the handler specified

    try {
      chosenHandler(data, function(statusCode, payload, contentType = "json"){
        server.processHandlerResponse(res,method,trimmedPath,statusCode,payload,contentType)    
      })
    } catch (error) {
      debug('There was a crash on the response: ', error)
      server.processHandlerResponse(res, method,trimmedPath,500,{'Error':'An unkown error has occured'}, 'json')
    }
    
  });
} `,
                    text:"Justo debajo del choosen handler, hemos preparado un try/catch que va a envolver una función que hemos refactorizado y preparado para: seguir haciendo lo que ya hacía, Y sobre todo, para emitir una respuesta 500 con mensaje de unkown error. Mejor veamos la función, para que quede claro que no hemos modificado nada. "
                },{
                    cod:`// refactored to handle errors coming from the handlers
server.processHandlerResponse = (res, method, trimmedPath, statusCode, payload, contentType) => {
    //use status code callback by the handler or default 200
    statusCode= typeof(statusCode) == 'number' ? statusCode : 200

    // convert the payload to a string. Depending on contentType
    let payloadString = ''
    if (contentType === 'json') {
      //use the payload callback by the handler or create a default empty object      
      payload = typeof(payload) == 'object' ? payload : {}
      payloadString = JSON.stringify(payload)  
      res.setHeader('Content-Type', 'application/json')  
    }

    if (contentType === 'html') {
      res.setHeader('Content-Type', 'text/html')
      payloadString = typeof payload == 'string' ? payload :''
    }

    if (contentType === 'favicon') {
      res.setHeader('Content-Type', 'image/x-icon')
      payloadString = typeof payload !== undefined ? payload :''
    }
    if (contentType === 'plain') {
      res.setHeader('Content-Type', 'text/plain')
      payloadString = typeof payload !== undefined ? payload :''
    }
    if (contentType === 'png') {
      res.setHeader('Content-Type', 'image/png')
      payloadString = typeof payload !== undefined ? payload :''
    }
    if (contentType === 'jpg') {
      res.setHeader('Content-Type', 'image/jpg')
      payloadString = typeof payload !== undefined ? payload :''
    }
    if (contentType === 'css') {
      res.setHeader('Content-Type', 'text/css')
      payloadString = typeof payload !== undefined ? payload :''
    }
            
    //return the response    
    res.writeHead(statusCode)
    res.end(payloadString)
    if (statusCode === 200) {
      console.log('\x1b[32m%s\x1b[0m','returning response: ', statusCode);  
    } else {
      console.log('\x1b[31m%s\x1b[0m','returning response: ', statusCode, payloadString);
    }
}
`,
                    text:"Si lo comparas con el link que dejo abajo, es evidente que no hemos añadido ni quitado nada fuera del try/catch."
                }
            ],
            url:"https://tutorials-vert.vercel.app/NodeJS/How%20to%20serve%20statics"
        },
        segundo:{
            title: "Debuggers",
            defBreve:"De los métodos que aprendí en la master-class, existen 2 que me fascinaron. El primero es una forma de debuguear durante la construcción de la aplicación, como usamos mucho la consola, incluso construímos un CLI, no queríamos ver los mensajes rutinarios que sacaban por consola los workers o el mismo server o los logs. Pero son mensajes que ayudan mucho si aparece un error. Mensajes como, 'no se puso ejecutar el check' o 'no se pudo procesar la información' pueden aparecer. El segundo método es aún más fascinante. Vamos a ellos",
            arrayCodigo:[
                {
                    cod:`const util = require('util')
const debug = util.debuglog('workers')

//UNA VEZ DEFINIMOS ESA DEPENDENCIA PODEMOS HACER LO SIGUIENTE.

debug('El mensaje que deseamos mostrar por pantalla')

//Y esto será considerado exactamente como un console log
`,
                    text:"Ese mensaje dentro del debug, es lo mismo que un console log pero que solo va a aparecer por pantalla bajo la eecución por consola con la variable de entorno DEBUG seteade en worker. $env:NODE_DEBUG='performance'; node index.js  Ese es el comando específico para POWERSHELL, pero cada consolo tiene su forma de setear el valor de una variable de entorno. El hecho es que bajo esa condición, todos los mensajes dentro del file workers.js van a aparecer por consola."
                },{
                    cod:`debugger //dentro de toda la app o zonas especificas de la app
//Luego por consola escribimos
node inspect index.js`,
                    text:"El programa va a detener su ejecución en todos los puntos del programa donde exista la línea debugger. Pero aún más potente que eso, podemos usar el repl de node, para evaluar cada variable en ese momento."
                },{
                    cod:`cont, repl`,
                    text:"Esos son los 2 comandos que necesitamos. Existen más."
                }
            ]
        },
        tercero:{
            title: "Tests con assert I",
            defBreve:"Vamos a estudiar 3 partes para estos tests. 1, creamos la lógica para correr los tests que queramos, 2 creamos los llamados tests unitarios, y 3 creamos los tests de integración. Vamos a ello. ",
            arrayCodigo:[
                {
                    cod:`/**
 * TEST RUNNER
 *
 */

//OVERRIDE the enviroment into testing
process.env.NODE_ENV = 'testing'
const cli = require("../lib/cli");

// Application logic for the test runner
_app = {};

// Container for the tests
_app.tests = {};

_app.tests.unit = require('./units')
_app.tests.api = require('./api')


//Count all the tests
_app.countTests = function () {
  let counter = 0;
  for (const key in _app.tests) {
    if (Object.hasOwnProperty.call(_app.tests, key)) {
      const subTests = _app.tests[key];
      for (const testName in subTests) {
        if (Object.hasOwnProperty.call(subTests, testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

//This is the logic for  the test runner
_app.runTests = function () {
  let errors = [];
  let successes = 0;
  const limit = _app.countTests(); //TODO
  let counter = 0;
  
for (const key in _app.tests) {
    
    if (Object.hasOwnProperty.call(_app.tests, key)) {
      const subTest = _app.tests[key];
      for (const testName in subTest) {
        
        if (Object.hasOwnProperty.call(subTest, testName)) {
          (function () {
            
            const tmpTestName = testName;
            const testValue = subTest[testName];
            //Call the test
            try {
              testValue(function (params) {
                //if it calls back without throwing, then it succeded. log in green
                console.log("\x1b[32m%s\x1b[0m", testName);
                counter++;
                successes++;
                if (counter === limit) {
                  _app.produceTestReport(limit, successes, errors); 
                }
              });
            } catch (error) {
              //if it throws it failed
              errors.push({
                name: testName,
                error: error,
              });
              console.log(
                "\x1b[31m%s\x1b[0m", testName );
              counter++;
              if (counter === limit) {
                _app.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
}

//Produce a test outcome report
_app.produceTestReport = function (limit, successes, errors) {
  // datos para el titulo formateado en consola
  const testStatsObject = {
    "Total tests": limit,
    Pass: successes,
    Fail: errors.length,
  };
  cli.renderObjectStyle("BEGIN TEST REPORT", testStatsObject, 32);

  //if there are errors print them in red
  if (errors.length > 0) {
    const failedTestsObject = {};
    errors.forEach((e) => {
      failedTestsObject[e.name] = e.error;
      
    });
    cli.renderObjectStyle("BEGIN ERROR DETAILS", failedTestsObject, 31);
    
  }
// end the test
  cli.renderObjectStyle('END OF TESTS',{})
  //for integration tests, exit the app
  process.exit(0)
};

// RUN
_app.runTests()`,
                    text:"En solo 100 líneas de código hemos creado nuestra lógica para correr tests sin librerías. Vamos a entenderlo paso a paso"
                },{
                    cod:`//OVERRIDE the enviroment into testing
process.env.NODE_ENV = 'testing'
const cli = require("../lib/cli");

// Application logic for the test runner
_app = {};

// Container for the tests
_app.tests = {};

_app.tests.unit = require('./units')
_app.tests.api = require('./api')
`,
                    text:"Inicializamos la variable de entorno a 'testing', el config file fue ligeramente tocado para crear el enviroment en entorno de testing. importamos cli solo para aprovechar el formateo de los mensajes que mostraremos por consola, no tiene importancia en la lógica del testing. La _app es nuestro contenedor del módulo, _app.tests va a contener todos los tests, _app.tests.unit importamos todos los tests creados en ese archivo."
                },{
                    cod:`//Count all the tests
_app.countTests = function () {
  let counter = 0;
  for (const key in _app.tests) {
    if (Object.hasOwnProperty.call(_app.tests, key)) {
      const subTests = _app.tests[key];
      for (const testName in subTests) {
        if (Object.hasOwnProperty.call(subTests, testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

//Produce a test outcome report
_app.produceTestReport = function (limit, successes, errors) {
  // datos para el titulo formateado en consola
  const testStatsObject = {
    "Total tests": limit,
    Pass: successes,
    Fail: errors.length,
  };
  cli.renderObjectStyle("BEGIN TEST REPORT", testStatsObject, 32);

  //if there are errors print them in red
  if (errors.length > 0) {
    const failedTestsObject = {};
    errors.forEach((e) => {
      failedTestsObject[e.name] = e.error;
      
    });
    cli.renderObjectStyle("BEGIN ERROR DETAILS", failedTestsObject, 31);
    
  }
// end the test
  cli.renderObjectStyle('END OF TESTS',{})
  //for integration tests, exit the app
  process.exit(0)
};
`,
                    text:"Estas son funciones de apoyo donde conseguimos obtener el número de tests que debemos correr en total, y como debemos formatear los resultados del test, vamos a ver el nucleo de nuestro test runner."
                },{
                    cod:`//This is the logic for  the test runner
_app.runTests = function () {
  let errors = [];
  let successes = 0;
  const limit = _app.countTests(); 
  let counter = 0;
  
for (const key in _app.tests) {
    
    if (Object.hasOwnProperty.call(_app.tests, key)) {
      const subTest = _app.tests[key];
      for (const testName in subTest) {
        
        if (Object.hasOwnProperty.call(subTest, testName)) {
          (function () { // DETALLITO
            
            const tmpTestName = testName;
            const testValue = subTest[testName];
            //Call the test
            try {
              testValue(function (params) {
                //if it calls back without throwing, then it succeded. log in green
                console.log("\x1b[32m%s\x1b[0m", testName);
                counter++;
                successes++;
                if (counter === limit) {
                  _app.produceTestReport(limit, successes, errors); 
                }
              });
            } catch (error) {
              //if it throws it failed
              errors.push({
                name: testName,
                error: error,
              });
              console.log(
                "\x1b[31m%s\x1b[0m", testName );
              counter++;
              if (counter === limit) {
                _app.produceTestReport(limit, successes, errors);
              }
            }
          })(); // DETALLITO
        }
      }
    }
  }
}`,
                    text:"Errors, successes, limit, counter, son variables usadas el control del iterador que recorrerá todos los tests, y para pasar los resultados del test a la función que pintará por pantalla los resultados. Luego por cada test, obtenemos el nombre del test (testName) y la función que vamos a testear (testValue). Ejecutamos la función dentro de un try/catch y en base a si se ejecuto o si lanzó un error, el test ha pasado, o no. Y OJO CON LOS DETALLITOS son importantes."
                }
            ]
        },
        cuarto:{
            title: "Tests con assert II",
            defBreve:"Ahora veremos como crear test unitarios.",
            arrayCodigo:[
                {
                    cod:`/**
 * Unit tests
 *
 */

// Dependencies
const assert = require("assert");
const helpers = require("../lib/helpers");
const _data = require("../lib/data");
const _logs = require("../lib/logs");
const exampleDebuggerProblem = require("../lib/exampleDebuggingProblem");
const dotEnvReadeer = require("../lib/dotEnvReader");
const contractChecker = require("../lib/contractChecker");

//Holder
const unit = {};

//Assert the getNumber function is returning 2 SHOULD FAIL
unit["helpers.getANumber ERROR EXPECTED should be 0"] = function (done) {
  const val = helpers.getANumber();
  assert.strictEqual(val, 0);
  done();
};

//Assert the getNumber function is returning 1
unit["helpers.getANumber should return 1"] = function (done) {
  const val = helpers.getANumber();
  assert.strictEqual(val, 1);
  done();
};

/*******************************************
 *            LOGS
 * ************************************* */

// log list should work as expected
unit["logs.list should callback a false error and an array of logFileNames"] =
  function (done) {
    _logs.list(true, function (err, logFileNames) {
      assert.strictEqual(err, false);
      assert.ok(Array.isArray(logFileNames));
      assert.ok(logFileNames.length > 0);
      done();
    });
  };

// log truncate should not throw
unit["logs.truncate should not throw if the logId does not exist"] = function (
  done
) {
  assert.doesNotThrow(function () {
    _logs.truncate("no file with this name", function (err) {
      assert.ok(err);
      done();
    });
  }, TypeError);
};

module.exports = unit;
`,
                    text:"Voy a dejar plasmado 3 tests. El primero va a ser nuestro CHIVATO. Recuerda que los tests, debes asegurarte que fallan en casos evidentes, para estar seguros que el test funciona. El test que más me impresionó fue el tercero, donde un método que tenía una vulnerabilidad, fue detectado gracias a este test. Resulta que no pasó la prueba y tuve que corregirlo."
                }
            ]
        },
        quinto:{
            title: "Tests con assert III",
            defBreve:"Ahora veremos como crear test de integración. Para ello tuve que refactorizar el index.js y como mi dotEnv es creado por mi, me dificultó un poco las cosas.",
            arrayCodigo:[
                {
                    cod:`/**
 * Primary file for the API
 * 
 * 
 */
// Dependencies
const server = require('./server/server')
const workers = require('./lib/workers')
const {dotEnvReader} = require('./lib/dotEnvReader')
const cli = require('./lib/cli')

// app container
const app = {}

// Initializing an app starts by initializing the server
app.init = function(callback){
  server.init()
  workers.init()
  

  //cli must be shown after the initial messages
  setTimeout(function(){
    cli.init()
    
    callback()
  },50)
}
//envolvemos el app init en nuestro dotENV para que las variables de entorno carguen antes de iniciar la app
if (require.main===module) { //solo se ejecuta si la ejecucion se pide por CLI node index.js por ejemplo
  dotEnvReader(app.init, function(){})  
}
//CUANDO NO SE EJECUTA? cuando desde nuestro test/api.js llamamos a la app
module.exports = app
`,
                    text:"El cambio ocurre ya que al iniciar la app, debemos introducir un callback, que en modo desarrollo o productión, ese callback es una función vacía, pero que en modo testing nos permita llamar el callback done(). Como mi app inicia envuelta dentro de mi dotEnvReader, tuve que irme al código de esa función y donde llamo el callback referente al app.init, le introduje ese tercer callback que ejecuto debajo de cli.init. Que rollo. PERO FUNCIONÓ."
                },{
                    cod:`/**
 * Integrating the whole app to the test
 *
 */
// as the app doesnt run sincronously, we give time to up the server to run the tests
const timeOut= 50
//Dependencies
const app = require("../index");
const { dotEnvReader } = require("../lib/dotEnvReader");
const assert = require("assert");
const http = require("http");
const config = require("../config");

// HOLDER
const api = {};

//HELPERS
const helpers = {};

helpers.makeGetRequest = function (path, callback) {
  //Configure the request details
  const requestDetails = {
    protocol: "http:",
    hostname: "localhost",
    port: config.httpPort,
    method: "GET",
    path: path,
    headers: {
      "Content-Type": "application/json",
    },
  };
  debugger;
  //Send the request
  const req = http.request(requestDetails, function (res) {
    console.log(res.statusCode);
    debugger;
    callback(res);
    debugger;
  });
  debugger;
  req.on("error", function (err) {
    console.log(err);
    debugger;
  });
  req.on("finish", function () {
    debugger;
  });
  req.end();

  debugger;
};

api["app.init doesn´t throw on start"] = function (done) {
    assert.doesNotThrow(function () {
      dotEnvReader(app.init, function (err) {
        done();
      });
    }, TypeError);
};

api["/ping should respond to GET with 200"] = function (done) {
  setTimeout(() => {
    helpers.makeGetRequest("/ping", function (res) {
      debugger;
      assert.strictEqual(res.statusCode, 200);
      debugger;
      done();
    });
  }, timeOut);
};

api["/api/users should respond to GET with 400"] = function (done) {
  setTimeout(() => {
    helpers.makeGetRequest("/ping", function (res) {
      debugger;
      assert.strictEqual(res.statusCode, 200);
      debugger;
      done();
    });
  }, timeOut);
};

// request to random path?
api["A random path should respond to GET with 404"] = function (done) {
  setTimeout(() => {
    helpers.makeGetRequest("/this/path/shouldnt/exist", function (res) {
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  }, timeOut);
};

//EXPORT the tests to the runner
module.exports = api;
`,
                    text:"Este archivo se entiende en 3 partes. 1. helpers.makeTheRequest es la lógica para crear artificialmente una llamada a nuestra API. 2. El test app.init doesn´t throw on start, Está creado para levantar el servidor en modo testing, aquí el config file tiene relevancia. 3. ya podemos testear cada endpoint. Tuve problemas porque resultaba que los tests de los endpoints se ejecutaban antes del levantamiento del servidor, por eso tuve que implementar un setTimeout para que poder correr los endpoint tests."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="13/08/2021"/>
            <Subtitle 
                subtitle="Throwing Erros, Debuggers y Testing with assertions" 
                parrafo="NODE.JS es sumamente versatil, pero también muy fragil si lo comparamos con otras plataformas. Recuerda que solo corre un loopEvent y si se lanza un error que no es correctamente manejado, se cae toda la aplicación, que en nuestro caso es un servidor. Así que el paso de BOOLLETPROOFING es escencial."
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
        </div>
    )
}
