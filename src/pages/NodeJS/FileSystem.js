import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

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
        },
        sexto:{
            title: "Usar Streams en vez de leer archivos",
            defBreve:"Esto va a acelerar y a mejorar muchísimo la calidad y el performance de nuextro código.",
            arrayCodigo:[
                {
                    cod:`
const fs = require('fs');


console.time("tiempo de respuesta readFileSync");


 for(let i=0; i<= 10; i++) {
   fs.readFileSync('archivo.txt', 'utf8');
 }

 console.timeEnd("tiempo de respuesta readFileSync");

 console.time("tiempo de respuesta readStream");
for(let i=0; i<= 10; i++) {
  const streamEscritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8"
  });
}
console.timeEnd("tiempo de respuesta readStream");

// RESULTADO DE LA CONSOLA
tiempo de respuesta readFileSync: 15.926ms
tiempo de respuesta readStream: 0.999ms
`,
                    text:"1500% más lento es el método readFile y hacen exactamente lo mismo."
                },{
                    cod:`const fs = require("fs");

var contenido = "1234567890";
var iteraciones = 15;


const streamEscritura = fs.createWriteStream( "./archivos/mi_archivo.txt");

for (var i = 0; i < iteraciones; i++) {
    contenido += contenido;

    streamEscritura.write(contenido, res => {
        console.log("...");
    });
}`,
                    text:"No solo podemos hacer el trabajo más rápido, en este ejemplo, se ve que podemos ir trabajando en la escritura desde el mismo momento que recopilamos datos, no siempre es as así pero si los detos llegan en chuncks, (el for loop simula esa situación) podemos ir escribiendo los datos desde que van llegando."
                }
            ]
        },
        septimo:{
            title: "Método pipe de los streams",
            defBreve:"El método pipe nos va a permitir hacer muchas cosas cuando trabajamos con streams, desde chequear en medio de la captura de chunks, si los datos están bien, como transformarlos. Vamos a ver algunos ejemplos básicos de código.",
            arrayCodigo:[
                {
                    cod:`const fs = require("fs");

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

streamLectura.pipe(streamEscritura);

streamLectura.on("end" , () => {
    console.log("proceso finalizado");
});`,
                    text:"Esto se lee así, streamLectura lee y produce un evento on('data') (al que no llamamos ni hacemos referencia) que el método pipe recoge y pasa al streamEscritura que genera un evento de escritura. Y todo esto en una sola línea de código."
                },{
                    cod:`const fs = require("fs");
const { Duplex } = require("stream");

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

const reporte = new Duplex( {
    write(data, encode, callback){
        // para ver directamente el texto, reemplaza la llamada anterior por 
         console.log(data.toString()) 
        callback();
    },
    read(size){}
})

streamLectura.pipe(reporte).pipe(streamEscritura);`,
                    text:"Del módulo stream podemos definir un tipo de stream nuevo para nosotros, Duplex. Este nos permitiría crear un punto intermedio del pipe entre streamLectura y streamEscritura, ahí podríamos verificar si los datos van bien o no y tomardecisiones."
                },{
                    cod:`//DEPENDENCIES
const fs = require("fs");
const { Transform } = require("stream");

//INICIALIZING
const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

streamLectura.setEncoding("utf8");

//CREATING OUR FILTER AND TRANSFORMATION from Capital to UPPERCASE
const filtro = new Transform( {
    writableObjectMode: true,
    transform( data, encoding, callback){
        this.push(data.toString().toUpperCase())
        callback();
    },
    final(callback){
        callback();
    }
})
//Calling the pipe with the filter
streamLectura.pipe(filtro).pipe(streamEscritura);
`,
                    text:"Aquí vemos el 4to tipo de stream (TRANSFORM) y como podemos definirlo."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="30/07/2021"/>
            <Subtitle
                subtitle="FileSystem en NODEJS. "
                parrafo="Es un módulo extremadamente útil para todo programador, nos permite crear, abrir, leer, escribir, truncar y eliminar archivos de todo tipo. En un principio aprenderemos de PIRPLE los usos del readFile, writeFile, ftrnctate, pero luego de LINKEDIN TUTORIALS aprenderemos que es mejor usar streams en vez de trabajar con las lecturas síncronas o asíncronas."
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
        </div>
    )
}
