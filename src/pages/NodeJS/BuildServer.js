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
                    cod:``,
                    text:"Responde a todas las preguntas que te hacen."
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
            />
        </div>
    )
}
