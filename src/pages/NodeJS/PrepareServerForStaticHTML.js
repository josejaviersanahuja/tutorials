/* eslint-disable no-useless-escape */
import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function PrepareServerForStaticHTML() {
    
    const detalles={
        primero:{
            title: "Servidores HTTP Y HTTPS con Páginas STATICAS",
            defBreve:"Vamos a modificar el servidor que ya creamos en el módulo Build Server, el enrutador incorporado y daremos un ejemplo de como definir las acciones que se disparan para servir una página web desde el servidor. TODO desde el backend.",
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
let chosenHandler = server.router[trimmedPath] || server.router.notFound
if(trimmedPath.includes('public')){
    chosenHandler = server.router.public
}
        
// check entry data     console.log('recibimos estos datos: ', trimmedPath, buffer, method, headers);
    //Route the request to the handler specified
    chosenHandler(data, function(statusCode, payload, contentType = "json"){
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
        console.log('\x1b[32m%s\x1b[0m','returning response: ', statusCode, payloadString);  
        } else {
        console.log('\x1b[31m%s\x1b[0m','returning response: ', statusCode, payloadString);
        }
        
    })
    });
} 
                    
`,
                    text: "Aquí la función completa del unified server. Vamos a dividirla en 3 partes. Construcción del reqDataObject, ChoosingHandler y BuildingAnswer. PERO SOLO MOSTRAREMOS LAS PARTES 2 Y 3. ¿Por qué? porque la contruscción de reqDataObject es exactamente igual que en un servidor exclusivo para Content-Type:application/json."
                },
                {
                    cod:`//we choose a handler and we use the route to do it
    let chosenHandler = server.router[trimmedPath] || server.router.notFound
    
    // Esta vez diferenciamos las requests a recursos estáticos de las requests a la API
    // TODO recurso estático estará en la carpeta public.
    if(trimmedPath.includes('public')){
        chosenHandler = server.router.public
    }
.
.
.
/************************************************
 *                    ROUTER
 * ********************************************* */
// we define a router to choose which handler will handle which url req
server.router = {
    ping: handlerAPI.ping,
    notFound: handlerAPI.notFound,
    '':handlerHTML.index, //HTML
    'account/create':handlerHTML.accountCreate, //HTML
    'account/edit':handlerHTML.accountEdit, //HTML
    'account/deleted':handlerHTML.accountDeleted, //HTML
    'session/create':handlerHTML.sessionCreate, //HTML 
    'session/deleted':handlerHTML.sessionDeleted, //HTML
    'checks/all':handlerHTML.checksList, //HTML protected by sign in
    'checks/create':handlerHTML.checksCreate, //HTML protected by sign in
    'checks/edit':handlerHTML.checksEdit, //HTML protected by sign in
    'favicon.ico': handlerHTML.favicon, // FAVICON
    'public': handlerHTML.public, // FILES CSS y JS
    'api/users': handlerAPI.users,
    'api/tokens': handlerAPI.tokens,
    'api/checks': handlerAPI.checks,
};

                        `,
                        text:"Por como construimos el router y el handler, enrutar es muy sencillo."
                },
                {
                    cod:` //Route the request to the handler specified
    chosenHandler(data, function(statusCode, payload, contentType = "json"){
        
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
        console.log('\x1b[32m%s\x1b[0m','returning response: ', statusCode, payloadString);  
        } else {
        console.log('\x1b[31m%s\x1b[0m','returning response: ', statusCode, payloadString);
        }
        
    })
    });
}  `,
                    text:"Se lee bastante bien a pesar de lo largo, El mayor cambio es el TERCER PARÁMETRO DEL CALLBACK contentType. Al marcar por default si el parámetro llega undefined, nos permite seguir trabajado con la API REST que construimos en el módulo build server. Luego el truco está en settear el Header y como decidimos parsear el data de acuerdo al contentType que recibimos en el callback de la respuesta. El data que nos responde el handler, vendrá en forma de string para el contentType text/html pero en forma de BUFFER para todos los demás. El navegador, que es el que va a leer e interpretar los datos, va a saber mostrar la información en forma de estilos css, scripts de javascript, o imágenes. El final, la entrga de la respuesta es igual que siempre."
                }
            ]
        },
        segundo:{
            title: "Veamos un handlerHTML Para ver los detalles de cómo entregar los datos de un HTML.",
            defBreve:"Esta vez vamos a definir métodos GET solamente ya que estos datos son estáticos y terminarán convirtiendose en páginas web para GUI.",
            arrayCodigo:[
                {
                    cod:`//defining INDEX handler
handler.index = function (data, callback) {
    
    if (data.method === "get") {
        //Prepare data for interpolation
        const templateIndexData = {
            'head.title':'Uptime Monitoring APP',
            'head.description':'We offer free uptime monitoring for HTTP/HTTPS sites of all kinds. When your site goes down, this app is prepared to send a text message to the user',
            'body.class':'index'
        }

        //Read in  a template as a string
        helpers.getTemplate('index', templateIndexData ,function(err, str){
            if (!err && str) {
                callback(200, str, CONTENT_TYPE)
            } else {
                callback(500, 'Something is wrong with the template', CONTENT_TYPE);	
            }
        })
    } else {
        callback(405,undefined,CONTENT_TYPE)
    }
    
};`,
                    text: "Este handler llega a través de una key vacía (dato curioso router.''= handlerHTML.index). Y vamos a servir una página HTML. 1. rechazamos toda petición que no sea GET. 2. La CLAVE para entender este método consiste en estudiar el Método getTemplate, que va a leer el texto de varios archivos html (_header.html, index.html y _footer.html) y los juntará para servir un html final en la respuesta. Para no repetir tanto código, y usar buenas prácticas, ese método será capaz de reemplazar variables globales y variables locales de cada página."
                },
                {
                    cod:`// GET HTML TEMPLATE
helpers.getTemplate = function (templateName, data, callback) {
    // we check is the template name is a not empty string, otherwise will be false
    templateName = contractChecker.notEmptyString(templateName);
    // the data will contain the local variables or global variables to render
    data = contractChecker.object(data)
    if (templateName) {
        
        // todos los templates estarán en la carpeta templates
        const templateDir = path.join(__dirname, '/../templates/')
        
        //we start getting the header dentro de templates
        fs.readFile(templateDir+'_header.html', 'utf8', function(err, headerStr){

            let finalResponse = ''
            if (!err && headerStr) {
                //we add the header. Interpolamos las variables globales y/o locales
                finalResponse+=helpers.interpolate(headerStr, data)
                
                //now we  get the template
                fs.readFile(templateDir+templateName+'.html','utf8', function(err, templateStr){
                    if (!err && templateStr) {
                        //we add the template to the response. interpolamos variables
                        finalResponse+=helpers.interpolate(templateStr, data)
                
                        //now we get the footer
                        fs.readFile(templateDir+'_footer.html','utf8', function(err,footerStr){
                            if (!err && footerStr) {
                                //now we add the footer to the response. Interpolamos variables
                                finalResponse+=helpers.interpolate(footerStr, data)
                                
                                // Si no hubo errores devolvemos el html final en forma de texto.
                                callback(false, finalResponse)
                            } else {
                                callback('Internal Error building the footer html')
                            }
                        })
                    } else {
                        callback('Internal Error building template html')
                    }
                })
            } else {
                callback('Internal Error building header html')
            }
        })
    } else {
        callback('Not a valid template name')
    }
};
                    `,
                    text:"Parece simple, leemos el texto de 3 archivos con extensión html, la magia de las variables ocurre en el méto interpolate."
                },{
                    cod:`// FIND AND REPLACES ALL KEYS inside HTML TEMPLATES
helpers.interpolate = function(str, data){
    str = contractChecker.notEmptyString(str)
    data = contractChecker.object(data)

    //Add the template globals

    for (let keyName in config.templateGlobals) {
        data['global.'+keyName] = config.templateGlobals[keyName]
    }

    //For each key in the data object we want to insert its value into the str
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key) && typeof data[key] == 'string') {
            const replace = data[key];
            const find = '{'+key+'}'
            str = str.replace(find,replace)
        }
    }
    //returning the str mutated
    return str
}
                    `,
                    text:"El data original trae el objeto con las variables locales de cada template. (index.html o signup.html). Pero en esta función también leemos las variables globales que podemos definir en nuestro archivo config.js. Leemos y reemplazamos toda variable si encontramos un valor que las reemplace. OJO, ENTREGAR UNA PÁGINA HTML GENERA AL MENOS 2 PETICIONES EXTRAS AL SERVER, la hoja de styles con el css, y el archivo javascript con los scripts. Veamos entonces como se sirven en nuestros handlers."
                }
            ]
        },
        tercero:{
            title: "Veamos un handlerHTML Para ver cómo entregar imágenes, css y/o javascripts.",
            defBreve:"Igual que con los HTML, vamos a definir métodos GET solamente, ya que estos datos son estáticos y terminarán convirtiendose en assets de nuestra página web (GUI).",
            arrayCodigo:[
                {
                    cod:`//Lets get any public files
handler.public = function(data, callback){
    //check the method and reject others than get 
    if (data.method === 'get') {
        //get the file name and extension
        const trimmedAssetName = data.trimmedPath.replace('public/','').trim()
        if (trimmedAssetName.length >0) {
            //Lets read the file data
            helpers.getStaticAsset(trimmedAssetName, function(err, data){
                if (!err && data) {
                    const contentType = helpers.getFileContentType(trimmedAssetName)
                    callback(200, data, contentType)
                } else {
                    callback(404,'that file doesnt exist', CONTENT_TYPE)
                }
            })
        } else {
            callback(404,'That file doesn´t exist', CONTENT_TYPE)
        }
        
    } else {
        callback(405,'Only GET is allowed', CONTENT_TYPE)
    }
}`,
                    text:"Es simple de leer, nos apoyamos en 2 métodos que vamos a crear en breve, 1 donde leemos archivo, y otro donde determinamos por la extensión del archivo el contentType. Todos estos archivos se entregarán como búffers que el navegador interpretará, pero ya lo veremos en el método getStaticAsset."
                },{
                    cod:`//GET DATA FROM FILES
helpers.getStaticAsset = function(fileName, callback){
    fileName = contractChecker.notEmptyString(fileName)

    if (fileName) {
        const publicDir = path.join(__dirname,'/../public/')
        fs.readFile(publicDir+fileName, function(err, data){
            //no utf8 as we want the raw data
            if (!err && data) {
                callback(false, data)
            } else {
                callback('Error reading the file: ', fileName)
            }
        })
    } else {
        callback('Not a valid fileName')
    }
}`,
                    text:"Se trata de un lectura simple y sencilla de un archivo con fs module. ¿PERO cuál es el truco para entregar Búffer y no string? no introducimos el campo de codificación 'utf8'. Eso es todo. Ahora veamos como definimos el contentType."
                },{
                    cod:`//GET THE EXTENSION OF THE FILE
helpers.getFileContentType = function(fileFullName){
    if (fileFullName.includes('.css')) {
        return 'css'
    }
    /* else if (fileFullName.includes('.js')) {
        return 'plain'
    } */
    else if (fileFullName.includes('.png')) {
        return 'png'
    }
    else if (fileFullName.includes('.jpg')) {
        return 'jpg'
    }
    else if (fileFullName.includes('.ico')) {
        return 'favicon'
    }
    else if (fileFullName.includes('.png')) {
        return 'png'
    }
    else {
        return 'plain'
    }
}`,
                    text:"Solo basta con leer la extensión del archivo. eso es todo."
                }
            ]   
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="08/08/2021"/>
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
