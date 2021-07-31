import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function FileSystem() {
    
    const detalles={
        primero:{
            title: "File System (fs) Open File",
            defBreve:"Es un módulo nativo muy poderoso de Node.js para escribir, leer, borrar y hacer de todo con archivos.",
            arrayCodigo:[
                {
                    cod:`const fs = require('fs')`,
                    text: "Así importamos el módulo y estamos listos para usarlo"
                },
                {
                    cod:`fs.open(lib.baseDir + dir +'/'+ file + '.json', 'wx', function(err, fileDescriptor) {
    if (!err && fileDescriptor) {
              
    } else {

    }
})`,
                    text: "En este ejemplo hemos construído el path pero basta con un path, un código en string y un callback. Ya te imaginarás que este método es asíncrono, y si todo va bien, devuelve un fileDescriptor. Que es un número que referencia a dicho file. Así ya no necesitaremos otra vez el path para referirnos a ese file en concreto. fs.open crea el archivo si no existe previamente."
                },
                {
                    cod:`const fd = fs.openSync(lib.baseDir+logId+'.log', 'r+');`,
                    text: "Este es el mismo método que el de arriba pero llamado de forma síncrona. Si quieres saber más sobre los distintos flags como 'wx' o 'r+', dejo el link más abajo."
                }
            ],
            url:"https://www.geeksforgeeks.org/node-js-fs-open-method/"
        },
        segundo:{
            title: "Write File, Truncate File and Close File",
            defBreve:"En la primera parte vimos como abrir el file, ahora vamos a escribir sobre él.",
            arrayCodigo:[
                {
                    cod:`fs.writeFile(fileDescriptor, stringData, function(err){
        if(!err){
            
        } else {

        }
    })`,
                    text: "Recibe 3 parámetros, el file descriptor que es el número que ya mencioné en la primera parte, el string que vamos a escribir en el file y una función callback que nos permitirá controlar el flujo del programa en base a si hay o no hay error al escribir sobre el archivo."
                },{
                    cod:`fs.appendFile(fileDescriptor, str, function(err){
    if (!err) {

    }else{

    }
})`,
                    text:"Necesitamos un FileDescriptor por tanto iría dentro de un fs.open. También requiere de un string str a escribir."
                },
                {
                    cod:`fs.ftruncate(fileDescriptor, numbytes? ,function(err){
    if(!err){

    }else{

    }
})`,
                    text: "Recibe 2 o 3 parámetros. Si numbytes no es pasado será 0 por defecto. Este método trunca el contenido del file para que solo pese numbytes. Si ya el archivo es más pesado, el truncado borrará desde el final del archivo hasta que solo pese numbytes. Si numbytes es 0, el archivo quedará vacío."
                },
                {
                    cod:`fs.close(fd, function(err){
    if (!err) {
        callback(false)      
    } else {
        callback(err)
    }
})`,
                    text: "Así cerramos el file"
                }
            ]
        },
        tercero:{
            title: "Read Files",
            defBreve:"Ya creamos abrimos files, escribimos o borramos su contenido, ya sabemos cerrar el file, faltan pocas cosas. Leer el file.",
            arrayCodigo:[
                {
                    cod:`fs.readFile(lib.baseDir+ dir + '/' + file + '.json', 'utf8', function(err, data){
    if (!err && data) {
        const parsedData = helpers.parseJsonToObject(data)
        callback(false, parsedData)
    } else {
        callback(err, data)    
    }
})`,
                    text: "Recibe 3 parámetros, el file path, la codificación de caracteres, por si leemos chars arabes o cirilicos o romanos, utf8 es el típico occidental, y una función callback que nos permitirá controlar el flujo del programa en base a si hay o no hay error al escribir sobre el archivo. PD: lo del parseJsonToObject es un tema al leer json nada mas."
                }
            ]
        },
        cuarto:{
            title: "Read Directories",
            defBreve:"Esto va a leer los nombres de los files de cierto directorio.",
            arrayCodigo:[
                {
                    cod:`fs.readdir(lib.baseDir + dir + '/', function(err, data){
    if (!err && data && data.length>0) {
        const trimmedFileNames =  data.map(e => e.replace('.json', '') )
        callback(false, trimmedFileNames)
    } else {
        callback(err, data)
    }
})`,
                    text: "Recibe 2 parámetros, el file path, y una función callback que nos permitirá controlar el flujo del programa y nos devuelve DATA que es un ARRAY de nombres de directorios. PD: lo del map es para eliminar las extensiones, es un tema particular de esa App en concreto."
                }
            ]
        },
        quinto:{
            title: "Delete Files",
            defBreve:"Con esto terminamos este módulo por ahora.",
            arrayCodigo:[
                {
                    cod:`fs.unlink(lib.baseDir + dir + '/' + file + '.json', function(err){
    if(!err){
        callback(false)
    }else{
        callback('Error deleting the file')
    }
})`,
                    text: "Recibe 2 parámetros, el file path, y una función callback que nos permitirá controlar el flujo del programa por si hay un error. TAREA: CREA TU PROPIO DOTENV"
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
