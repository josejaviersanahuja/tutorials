/* eslint-disable no-useless-escape */
import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function BuildServer() {
    
    const detalles={
        primero:{
            title: "Servidores HTTP Y HTTPS",
            defBreve:"Vamos a construir servidores http y https, un enrutador incorporado y daremos un ejemplo de como definir las acciones que se disparan bajo una petición.",
            arrayCodigo:[
                {
                    cod:`// DEPENDENCIES
const http = require("http");
const https = require('https')
const config = require('../config')
const fs = require('fs')
const path = require('path')
const handler = require('./handlers')
const {URL} = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const helpers = require('../lib/helpers');

//------------------------------------------------------------------------------------------------------------
                            // defining the module object server
//------------------------------------------------------------------------------------------------------------
const server = {}
/*************************************************
 *        HTTP & HTTPS
 * ********************************************** */
// The server should respond to all requests with a string
    server.httpServer = http.createServer(function(req, res){
    server.unifiedServer(req, res)
    });
    
// The HTTPS
    const httpsServerOptions = {
    'key': fs.readFileSync(path.join(__dirname, '../https/key.pem')),
    'cert': fs.readFileSync(path.join(__dirname, '../https/cert.pem'))
    }

    server.httpsServer = https.createServer(httpsServerOptions, function(req, res){
    server.unifiedServer(req, res)
    });`,
                    text: "De momento creo que solo hay que explicar y comentar el objeto httpsServerOptions. Y cómo lo construimos con una línea de comando larguisima."
                },
                {
                    cod:`//descarga openssl si no funciona esta línea. Dejo link
//corre el comando en la carpeta que deseas los archivos
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`,
                    text:"Responde a todas las preguntas que te hacen."
                }
            ],
            url:"https://es.stackoverflow.com/questions/169491/c%C3%B3mo-instalar-openssl-en-windows-10"
        },
        segundo:{
            title: "unifiedServer",
            defBreve:"La lógica dentro del servidor http y https es la misma. Vamos a escribirla y a analizarla.",
            arrayCodigo:[
                {
                    cod:`/**************************************************************
*              UNIFIED --------------- SERVER
* *********************************************************** */

server.unifiedServer = (req, res) => {
    //get the url and pars it
    const parsedUrl = new URL(req.url, 'http://localhost:3002') // url.parse(req.url, true); // second argument accepts another dependencies we haven´t used (query) that's why we pass true unti we get there

    // geth the path
    const path = parsedUrl.pathname; // http:localhost:3000/pokemon pathname would be /pokemon
    const trimmedPath = path.replace(/^\/+|\/+$/g, ""); // regex is to trimm of any extra slashes. i.e. localhost:3000/pokemon = localhost:3000/pokemon/ y cosas similares

    // Get query string as an object
    const queryStringObject = parsedUrl.searchParams

    const method = req.method.toLowerCase();

    // Get the headers as an object
    const headers = req.headers;

    // Get the payload
    const decoder = new StringDecoder("utf-8");
    let buffer = "";
    req.on("data", (data) => {
    buffer += decoder.write(data);
    });
    req.on("end", () => {
    buffer += decoder.end();
    
    // construct the data object to send to the handlre
    const data = {
    'trimmedPath' : trimmedPath,
    'queryStringObject' : queryStringObject,
    'method' : method,
    'headers' : headers,
    'payload' : helpers.parseJsonToObject(buffer)
    }
        
    //we choose a handler and we use the route to do it
const chosenHandler = server.router[trimmedPath] || server.router.notFound
        
// check entry data     console.log('recibimos estos datos: ', trimmedPath, buffer, method, headers);
    //Route the request to the handler specified
    chosenHandler(data, function(statusCode, payload){
        //use status code callback by the handler or default 200
        statusCode= typeof(statusCode) == 'number' ? statusCode : 200
        //use the payload callback by the handlrer or a default empty object
        payload = typeof(payload) == 'object' ? payload : {}
        
        // convert the payload to a string
        const payloadString = JSON.stringify(payload)
        
        //return the response
        res.setHeader('Content-Type', 'application/json')        
        res.writeHead(statusCode)
        res.end(payloadString)
        if (statusCode === 200) {
            console.log('\x1b[32m%s\x1b[0m','returning response: ', statusCode, payloadString);  
        } else {
            console.log('\x1b[31m%s\x1b[0m','returning response: ', statusCode, payloadString);
        }
        
    })
    });
} 
`,
                    text: "Aquí la función completa del unified server. Vamos a dividirla en 3 partes. Construcción del reqDataObject, ChoosingHandler y BuildingAnswer"
                },
                {
                    cod:`(req, res) => {
//get the url and pars it
const parsedUrl = new URL(req.url, 'http://localhost:3002') // how to hardcode the baseurl?

// geth the path
const path = parsedUrl.pathname; // http:localhost:3000/pokemon pathname would be /pokemon
const trimmedPath = path.replace(/^\/+|\/+$/g, ""); // regex is to trimm of any extra slashes. i.e. localhost:3000/pokemon = localhost:3000/pokemon/ y cosas similares

// Get query string as an object
const queryStringObject = parsedUrl.searchParams // para obtener los params hay que usar metodo .get('paramName')

const method = req.method.toLowerCase();

// Get the headers as an object
const headers = req.headers;

// Get the payload
const decoder = new StringDecoder("utf-8");
let buffer = "";
req.on("data", (data) => {
buffer += decoder.write(data);
});
req.on("end", () => {
buffer += decoder.end();

// construct the data object to send to the handlre
const data = {
'trimmedPath' : trimmedPath,
'queryStringObject' : queryStringObject,
'method' : method,
'headers' : headers,
'payload' : helpers.parseJsonToObject(buffer)
}`,
                    text:"Cada parámetro se saca del req de una forma u otra, pero cuando hay un payload (req.body) la forma de extraerlo es de forma asíncrona a través de un decoder que genera un streamBuffer y al finalizar de leer, podemos ejecutar la segunda parte de elegir o enrutar el handler. Por qué hay que usar un decoder? Preguntar. Como los protocolos con los que trabajaremos son application/json, vamos a parsear objetos a json y viceversa."
                },
                {
                    cod:`//we choose a handler and we use the route to do it
const chosenHandler = server.router[trimmedPath] || server.router.notFound

.
.
.

/************************************************
 *                    ROUTER
 * ********************************************* */
// we define a router to choose which handler will handle which url req
server.router = {
    ping: handler.ping,
    users: handler.users,
    tokens: handler.tokens,
    notFound: handler.notFound,
    checks: handler.checks,
  };

                        `,
                        text:"Por como construimos el router y el handler, enrutar es muy sencillo."
                },
                {
                    cod:`chosenHandler(data, function(statusCode, payload){
    //use status code callback by the handler or default 200
    statusCode= typeof(statusCode) == 'number' ? statusCode : 200
   
    //use the payload callback by the handlrer or a default empty object
    payload = typeof(payload) == 'object' ? payload : {}
    
    // convert the payload to a string
    const payloadString = JSON.stringify(payload)
    
    //return the response
    res.setHeader('Content-Type', 'application/json')        
    res.writeHead(statusCode)
    res.end(payloadString)
    if (statusCode === 200) {
        console.log('\x1b[32m%s\x1b[0m','returning response: ', statusCode, payloadString);  
    } else {
        console.log('\x1b[31m%s\x1b[0m','returning response: ', statusCode, payloadString);
    }
    
})
}); `,
                    text:"Se entiende bastante bien. 2 cositas que quiero destacar. 1. res.setHeader es una forma de setear un header, pero existe otra, res.writeHead(statusCode, headers?), pero headers es opcional. 2 entender que toda esta lógica corre aún dentro del req.on('end, ()=> { ... A cada petición req que llega, tarda en procesarse, por tanto como todo evento, es asincrono, para llevar un control del flujo del timeline correcto, la respuesta se prepara dentro de la funcion(statusCode, payload) (callback). NOTA: Esta lógica puede modificarse y ampliarse para servir archivos estáticos como css, jpg, png, html, javascripts. PERO lo veremos en otro módulo."
                }
            ]
        },
        tercero:{
            title: "Inicialización del server y exportamos módulo",
            defBreve:"La lógica que hemos creado es potente y enrutable a cualquier petición que llegue a nuestra API. Ahora levantemos el servidor.",
            arrayCodigo:[
                {
                    cod:`//------------------------------------------------------------------------------------------------------------
                    // server starter function
//------------------------------------------------------------------------------------------------------------                            
server.init = function(){
// Start the server, and have it listen on port 3000
server.httpServer.listen(config.httpPort, () => {
console.log('\x1b[35m%s\x1b[0m',"Server up and listening on port: " + config.httpPort +' in ' + config.envName + ' mode');
});

// Start the server HTTPS, and have it listen on port 3001
server.httpsServer.listen(config.httpsPort, () => {
console.log('\x1b[36m%s\x1b[0m',"Server up and listening on port: " + config.httpsPort +' in ' + config.envName + ' mode');
}); 

}

//------------------------------------------------------------------------------------------------------------
                    // EXPORTING MODULE
//------------------------------------------------------------------------------------------------------------

module.exports = server

`,
                    text: "La función init cuando se inicialice, levantará el servidor y será escuchado en el puerto config.Port y finalizamos exportando el módulo. Ahora sería interesante como tratar una petición que llegue a nuestro servidor (un handler)"
                }
            ]
        },
        cuarto:{
            title: "Veamos un handler",
            defBreve:"Un mismo pathName o trimmedPath en nuestro caso, debe poder ejecutar los 4 distintos métodos de llamadas ala API post, get, put y delete. Ese es el protocolo correcto y la buena práctica. Hagamoslo así.",
            arrayCodigo:[
                {
                    cod:`handler.users = function (data, callback) {
//figure out which methods to trigger
const acceptableMethods = ["post", "get", "put", "delete"];
if (acceptableMethods.includes(data.method)) {
    handler._users[data.method](data, callback);
} else {
    callback(405); // the method is not acceptable
}
};`,
                    text: "Recuerda que el data es el objeto que preparamos al comienzo de unifiedServer y que el callback es el que espera recibir el statusCode que vamos a devolver y payload o res.body. Este handler recibe el trimmedPath users, y podremos enrutarlo al método correspondiente. Sigamos con un ejemplo, el método post que es el más complicado."
                },
                {
                    cod:`// methods like the nextone handler._users is a method that should be hidden for users methods, but available for the main methods handler.users
handler._users = {};
/***************************************************
 *              PARTE I
 * *************************************************/
// users-post
//Required data: firstName, lastName, phone, password, tosAgreement
//Optional data: none
handler._users.post = function (data, callback) {
    //Check that all required fields are filled out
    const firstName =
    typeof data.payload.firstName == "string" &&
    data.payload.firstName.trim().length > 0
        ? data.payload.firstName.trim()
        : false;
    const lastName =
    typeof data.payload.lastName == "string" &&
    data.payload.lastName.trim().length > 0
        ? data.payload.lastName.trim()
        : false;
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
    const tosAgreement =
    typeof data.payload.tosAgreement == "boolean" &&
    data.payload.tosAgreement === true;

    if (firstName && lastName && password && phone && tosAgreement) {
/******************************************
 *          PARTE II
 * ****************************************/
    //Make sure that the user doesnt already exist
    _data.read("users", phone, function (err, data) {
        if (err) {
        // Hash the password
        const hashedPasswor = helpers.hash(password);
        if (hashedPasswor) {
            // create the user Object
            const userObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            hashedPassword: hashedPasswor,
            tosAgreement: true,
            };

            // store the user
            _data.create("users", phone, userObject, function (err) {
            if (!err) {
                callback(200);
            } else {
                console.error(err);
                callback(400, { Error: "Could not create the nue user" });
            }
            });
        } else {
            callback(500, { Error: "Could not hash the users password" });
        }
        } else {
        callback(400, { Error: "User already exist" });
        }
    });
    } else {
    callback(400, { Error: "Missing required fields" });
    }
};`,
                    text:"La lógica de este método puede separarse en 2. Checkear que los datos que nos envían cumplen el contrato que hemos creado, 123 no es un número de teléfono adecuado y se debe rechazar la petición, Y la parte II viene dentro del condicional que afirma que todos los datos cumplen nuestro contrato. En este caso, asegurarse que post new user no está creando un usuario que ya existe, el hash del password funciona correctamente, que el file system crea correctamente el archivo json de nuestro nuevo usuario etc etc etc."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="31/07/2021"/>
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
        </div>
    )
}
