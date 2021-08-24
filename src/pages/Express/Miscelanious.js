import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Miscelanious() {
    
    const detalles={
        primero:{
            title: "Jimp",
            defBreve:"Cuando un usuario envía un foto, digamos para un avatar, es muy probable que sea un foto de unas dimensiones mayores a las deseadas. Podemos tratar esa foto con Jimp.",
            arrayCodigo:[
                {
                    cod:`//npm i jimp
const jimp = require('jimp')

module.exports = class ProcesaImagenes {
    //redimensionamos
    redimensionar(_infoArchivo, ancho=250, alto = 250){
        //devuelve una promesa
        return new Promise((resolve, reject)=>{
            jimp.read(_infoArchivo.path)
                .then((image)=>{
                    return image.resize(ancho, jimp.Auto)
                            .quality(80)
                            .writeAsync(
                                './public/images/optimizadas/$ {_infoArchivo.fileName}'
                            ).then(()=>{
                                resolve()
                            })
                            .catch(err=>{
                                reject()
                            })
                })
                .catch(err=>{
                    reject()
                })
        })
    }
}`,
                    text:"Así creamos y customizams nuestra función a implementar en nuestro servidor."
                },{
                    cod:`//La implementamos
const upload = require("./middleware/uploadMiddleware");

app.post("/confirmacion", upload.single("photo"), (req, res, next) => {
  const imagenes = new procesaImagenes();

  imagenes.redimensionar(req.file, 128, 128).then(() => {
    res.render("confirmacion", { datos: req.body, files: req.file });
  });
});`,
                    text:"Ojo que no solo es Jimp, ahí hay un middleware llamado multer que ayuda con todo el proceso de guardado automático de archivos que recibimos."
                }
            ],
            url:"https://www.npmjs.com/package/jimp"            
        },
        segundo:{
            title: "Multer",
            defBreve:"Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency. NOTE: Multer will not process any form which is not multipart (multipart/form-data). Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.",
            arrayCodigo:[
                {
                    cod:`const multer = require("multer");
const extension = require("../classes/MimeTypes");

var path = require("path");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "../", "public/images/sin-optimizar"));
  },
  filename: function(req, file, cb) {
    const ext = new extension();
    cb(
      null,
      file.fieldname + "-" + Date.now() + ext.getExtension(file.mimetype)
    );
  }
});

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024
  },
  dest: path.join(__dirname, "../", "public"),
  storage: storage
});

module.exports = upload;
`,
                    text:"Así configuramos multer del modo que deseamos, ahora veamos como ejecutarla"
                },{
                    cod:`const upload = require("./middleware/uploadMiddleware");

app.post("/confirmacion", upload.single("photo"), (req, res, next) => {
  const imagenes = new procesaImagenes();

  imagenes.redimensionar(req.file, 128, 128).then(() => {
    res.render("confirmacion", { datos: req.body, files: req.file });
  });
});
`,
                    text:"La const upload es el objeto que exportamos en la primera parte."
                }
            ],
            url:"https://www.npmjs.com/package/multer"
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="19/08/2021"/>
            <Subtitle
                subtitle="Miscelanious. NPM un mundo de posibilidades"
                parrafo="Aquí vamos a comentar muchos paquetes que son muy útiles y que a la hora de depender de Express y Nodejs, podemos usarlos y añadir un gran valor a nuestras APPs. Empecemos"
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
                url={detalles.segundo.url}
            />
        </div>
    )
}
