import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function FromCallbacksToPromises() {
    
    const detalles={
        primero:{
            title: "File System en forma de Promesas",
            defBreve:"En nuestra app de monitoreo, usamos el file system de forma indiscriminada. Vamos a ver como transformar todos esos callbacks en promesas",
            arrayCodigo:[
                {
                    cod:`const promesasNode = require("fs").promises;

promesasNode.copyFile("./archivos/original.pdf" , "./archivos/copia.txt")
            .then(() => console.log("copia terminada"))
            .catch(() => console.log("no se puede copiar el archivo"))
            .finally(() => console.log("...") )`,
                    text: "Solo añadiendo al final de require('fs') el .promises, ya podemos trabajar con todos los métodos del file system en forma de promesas."
                }
            ]
        },
        segundo:{
            title: "util.promisify",
            defBreve:"Practicamente podemos convertir cualquier función de callbacks de node en promesas con el módulo util",
            arrayCodigo:[
                {
                    cod:`const fs = require("fs");
const util = require("util");

const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa("./archivos/archivo.txt", "12345678" )
.then( ()=>{
    console.log("ok")
})
.catch( ()=>{
    console.log("error")
})`,
                    text:"Hemos convertido fs.writeFile en una promesa."
                }
            ]
        },
        tercero:{
            title: "Concatenando promesas o resolviendo promesas simultaneamente.",
            defBreve:"Si no deseas trabajar con async/await, trabajar con promesas concatenadas es no solo posible sino también sencillo.",
            arrayCodigo:[
                {
                    cod:`//Promesa1
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}
//Promesa 2 (solo se ejecuta si se resuelve la promesa 1)
function datosDeUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}
// Así se implementa
login().then( ()=>{
    console.log("usuario autenticado")
    // en el return está la clave
    return datosDeUsuario()
}).then( ()=>{
    console.log("datos de usuario OK")
}).catch( ()=>{
    console.log("error")
});`,
                    text:"La clave está en el return. Ahora veamos como resolver promesas de forma simultánea."
                },
                {
                    cod:`//Promesa 1
function mensajesPrivados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mensajes");
        }, 1500);
    });
}
//Promesa2
function galeriaDeFotos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fotos");
        }, 1500);
    });
}
//Promesa 3
function ultimasTransacciones() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("transacciones");
        }, 1500);
    });
}
//Son independientes y necesitamos las 3 para el siguiente bloque de nuestro programa.
//Lamamos Promise all
Promise.all( [ mensajesPrivados() , galeriaDeFotos() , ultimasTransacciones()  ] ).then( (valores)=>{
    console.log( valores );
})`,
                    text:"De esta forma evitamos llamar a las 3 promesas por separado."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="16/08/2021"/>
            <Subtitle
                subtitle="De Callbacks a Promesas"
                parrafo="Todo el curso de Nodejs de Pirple se construyó en base a callbacks, lo cual estaba bastante bien para aprender cómo se usan y para no enredarnos con try, catch, y cosas similares. Pero desde la llegada de E6, trabajar con promesas es mucho mejor. Veremos como pasar los callbacks a promesas."
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
        </div>
    )
}
