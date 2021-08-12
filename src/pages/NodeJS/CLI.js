import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function CLI() {
    
    const detalles={
        primero:{
            title: "LET's BUILD A COMMAND LINE INTERFACE. EMITTING EVENTS",
            defBreve:"El proyecto que construimos en la master-class, facilmente admite la existencia de un superadmin. Si no conoces el proyecto, puedo adelantarte que está pensado para correr en un servidor local y no en la nube. Por tanto, que el superAdmin tenga acceso a la consola del servidor tiene sentido y además, tiene sentido no añadir una lógica de un usuario superAdmin, sino que el que maneje la consola solo pueda ser el superAdmin. No más rollos, vamos a saco.",
            arrayCodigo:[
                {
                    cod:`//DEPENDENCIES
const readLine = require("readline");
const util = require("util");
const debug = util.debuglog("cli");
const events = require("events");
class _events extends events {}
const os = require('os')
const v8 = require('v8')

const _data = require('./data')
const _logs = require('./logs')
const helpers = require('./helpers')`,
                    text: "Lista de denpendencias. Las más claves son, readLine, y events."
                },{
                    cod:`//codify the unique questions allowed
const e = new _events();

//INITIALIZING MODULE OBJ
const cli = {};

// initializing
cli.init = function () {
  //Start the message
  console.log("\x1b[35m%s\x1b[0m", "CLI is running");

  //input symbol - start the interface
  const _interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">",
  });

  //Create an initial propmt
  _interface.prompt();

  //Handle each line of the input separately
  _interface.on("line", function (str) {
    //Send to the input processor
    cli.processInput(str)

    //Reinitialize the prompt afterwards
    _interface.prompt();
  });

  // if the user stops the CLI, kill all associated process
  _interface.on("close", function () {
    process.exit(0);
  });
};
//EXPORTING THE OBJECT
module.exports = cli;
`,
                    text:"Esta es la primera parte del grueso de la lógica del CLI. Básicamente, I. Iniciamos la interface con el readLine, y definimos que procesos son los encargados del input, el output y como definimos ese primer caracter que aparece cuando la consola espera que tipiemos algo. II. el método prompt() es para decir que esperamos una entrada por consola. III. Handle each line. ¿Alguna vez te ha pasado que pegas varias lineas y la consola te da respuestas por cada línea por separado? Bueno, eso es porque seguramente se han definido exactamente como nosotros lo hemos definido. cada línea introducida, se procesa y se reabre la espera a otra nueva entrada de texto. IV. También debemos definir como salir de nuestra línea de comandos. En nuestro caso, matamos todo el servidor. no se si sea la mejor idea. Y dentro de esta inicialización, se encuentra la pista para saber como sigue nuestro CLI. El procesador de entradas (cli.processInput) "
                },{
                    cod:`//Input Processor
cli.processInput = function (strLine) {
  strLine = contractChecker.notEmptyString(strLine.trim());
  const uniqueInputs = [
    "man",
    "help",
    "exit",
    "stats",
    "list users",
    "more user info",
    "list checks",
    "more check info",
    "list logs",
    "more log info",
  ];
  //only continue if there was an input
  if (strLine) {

    // Go through possible inputs, emmit an event when a match is found
    let match = false
    let counter = 0 // @TODO
    uniqueInputs.some(function(input){
        if (strLine.toLowerCase().includes(input)) {
            match=true
            //Emit an event matching the unique input, and include the strLine
            e.emit(input, strLine)
            return true
        }
    })

    //If no match was found
    if (!match) {
        console.log('   I don´t recognize that command. Sorry, try again with "help"');
    }
  }
};`,
                    text:"Esta es la segunda parte de la lógica del CLI. Expliquemos a grandes rasgos. Recibe por parámetro la línea que tipeamos por consola, la comparamos con las opciones válidas que vamos a construir y emitimos un evento en base a dicha entrada. Ahora expliquemos en detalle. I uniqueInputs es la lista de comandos válidos de nuestra app, es importante empezar por aquí. II. Luego en vez de recorrer el array 1 a 1,  usamos el método some( dejo link para que lo revisen ), que nos va a decir si algún elemento del Array uniqueInputs, cumple con cierta condición, y dicha condición es que la línea que entra por comandos, contenga exactamente algún comando dentro de unique command, en ese caso SE EMITE UN EVENTO con el comando aceptado y la línea que entró por consola. III. rescatamos el resultado del método some en la variable match, y si no existe un match, desplegamos un mensaje donde ofrecemos ayuda si tipean el comando man, o help. La variable e, es del tipo evento, crea un evento con un nombre dentro de nuestro uniqueInputs. En el próximo Cuadro seguimos."
                }
            ],
            url:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
        },
        segundo:{
            title: "YA VIMOS COMO EMITIR EVENTOS. VAMOS A ATAJARLOS Y A CREAR LA LÓGICA DE QUE HACER CON ELLOS",
            defBreve:"El resto de la lógica ya debe ser más intuitiva a estas alturas, ya que hemos trabajado con eventos en el pasado, pero no habíamos emitido eventos diseñados por nosotros.",
            arrayCodigo:[
                {
                    cod:`/*****************************
 *      INPUT HANDLERS
 *******************************/
// for help
e.on('man', function(strLine){
  cli.responders.help()
})
e.on('help', function(strLine){
  cli.responders.help()
})
// for exit
e.on('exit', function(strLine){
  cli.responders.exit()
})
//for stats
e.on('stats', function(strLine){
  cli.responders.stats()
})
//for LIST users
e.on('list users', function(strLine){
  cli.responders.listUsers()
})
//for more info of one user
e.on('more user info', function(strLine){
  //this method requires to check the inputline
  cli.responders.moreUserInfo(strLine)
})
//for list of checks
e.on('list checks', function(strLine){
  //this method requires to check the inputline
  cli.responders.listChecks(strLine)
})
//for more check info
e.on('more check info', function(strLine){
  //this method requires to check the inputline
  cli.responders.moreCheckInfo(strLine)
})
//for list logs
e.on('list logs', function(strLine){
  //this method requires to check the inputline
  cli.responders.listLogs(strLine)
})
//for more log info
e.on('more log info', function(strLine){
  //this method requires to check the inputline
  cli.responders.moreLogInfo(strLine)
})
 

/**********************************
 *      / INPUT HANDLERS
 ***********************************/

 `,
                    text: "Simple y sencillo, e.on nos sirve para atajar el evento, recuerda que pasamos el nombre del evento y el input por línea de comandos (strLine). Ahora definimos una función que se va a ejecutar durante el evento justamente con strLine como parámetro. Solo vamos a definir una de esas funciones para que mostrar su implementación."
                },{
                    cod:`/**********************************
 *       RESPONDERS
 ***********************************/

//HELP && MAN
cli.responders.help = function(){
  const commands = {
    "help":"Alias of the man command",
    "man":"Show this help page",
    "exit":"Kill the CLI (and the rest of the APP including the server)",
    "stats":"Get statistics on the onderlying operating system and resource utilization",
    "list users":"All registered undeleted users in the system",
    "more user info --{userId}":"Show details of specific user",
    "list checks --up --down":"Show a list of all the active checks in the system, including their state. --up or --down are optional",
    "more check info --{checkId}":"Show details of specified check",
    "list logs": "Show a list of all the log files available to be read (compressed only)",
    "more log info --{fileName}":"Show details of specified log file"
  };
  
  cli.renderObjectStyle('CLI MANUAL', commands)
  
  cli.verticalSpace(1)

  //End with another horizontal line
  cli.horizontalLine()
}`,
                    text:"Aunque el evento no lo hemos cerramos, en nuestro CLI, no hace falta porque nuestro cli.init se asegura que después de procesar la línea de entrada, y el evento que esta línea crea, se vuelve a abrir otro prompt, que espera otro comando. hasta que implementemos el comando de salida que también voy a mostrar."
                },{
                    cod:`//EXIT
cli.responders.exit = function(){
  process.exit(0)
}`,
                    text:"Pudimos implementarlo dentro del handler porque es una sola línea de código. process.exit(0) mata el proceso que generó el CLI."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="30/07/2021"/>
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
        </div>
    )
}
