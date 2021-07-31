import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Zlib() {
    
    const detalles={
        primero:{
            title: "Veremos 2 funciones. Compress y Decompress donde llamaremos a File System y a Z-lib. Empezamos por COMPRESS",
            defBreve:"Vamos a crear un archivo comprimido .gz.b64 ",
            arrayCodigo:[
                {
                    cod:`//Compress the contents of  one .log file into .gz.b64 file within the same directory
lib.compress = function(logId, newFileId, callback){
    const sourceFile = logId+'.log'
    const destFile = newFileId+'.gz.b64'

    // Read the source file
    fs.readFile(lib.baseDir+ sourceFile, 'utf8', function(err, inputString){
        if (!err && inputString) {
            // Compress the data using gzip
            zlib.gzip(inputString, function(err, buffer){
                if (!err && buffer) {
                    //Send the data to the destination file
                    fs.open(lib.baseDir+destFile,'wx', function(err, fileDescriptor){
                        if (!err && fileDescriptor) {
                            //Write destination file
                            fs.writeFile(fileDescriptor, buffer.toString('base64'), function(err){
                                if (!err) {
                                    //Close the destination file
                                    fs.close(fileDescriptor, function(err){
                                        if (!err) {
                                            callback(false)
                                        } else {
                                            callback('Error logs.js line 87: ', err)
                                        }
                                    })
                                } else {
                                    callback('Error logs line 84: ', err)
                                }
                            })
                        } else {
                            callback(err)
                        }
                    })
                } else {
                    callback(err)
                }
            })
        } else {
            callback(err)
        }
    })
}`,
                    text: "3 Parámetros, path (o una forma de construirlo) para el archivos a comprimir, y el path (o una forma de construirlo) para el archivo comprimido. 1. fs.readFile - revisa como se usa en el apartado FileSystem, eso nos devuelve el contenido del file que se pasa por parámetro a paso 2. zlib.gzip(inputString, function(err, buffer) Aquí obtenemos un buffer codificado que se pasará al paso 4. Paso 3. fs.open(lib.baseDir+destFile,'wx', function(err, fileDescriptor) Abrimos el archivo .gz.b64 que pensabamos crear. Paso 4 fs.writeFile(fileDescriptor, buffer.toString('base64'), function(err) escribirmos sobre este archivo pasandole el buffer pasado a string en base 64. Paso 5 cerramos el archivo comprimido."
                }
            ]
        },
        segundo:{
            title: "DECOMPRESS",
            defBreve:"Descomprimimos lo que ya comprimimos",
            arrayCodigo:[
                {
                    cod:`lib.decompress = function(fileId, callback){
    const fileName = fileId+'.gz.b64'
    fs.readFile(lib.baseDir+fileName, 'utf8', function(err, str){
        if (!err && str) {
            //Decompress the data
            const inputBuffer = Buffer.from(str, 'base64')
            zlib.unzip(inputBuffer, function(err, outPutBuffer){
                if (!err && outPutBuffer) {
                    //Callback
                    const finalString = outPutBuffer.toString()
                    callback(false, finalString)
                } else {
                    callback(err)
                }
            })
        } else {
            callback(err)
        }
    })
}`,
                    text: "Vamos a descomprimirlo y dejaremos que algún callback maneje la información luego. 1 fs.readFile que nos deja un str con data comprimida. Paso 2 zlib.unzip(inputBuffer, function(err, outPutBuffer)... que nos  deja un outputBuffer que pasamos al callback parseado a string."
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
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
            />
        </div>
    )
}
