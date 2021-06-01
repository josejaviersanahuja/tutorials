import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function MongoDB() {
    
    const detalles={
        primero:{
            title: "MongoDB",
            defBreve:"Entramos a mongodb.com y nos conectamos con nuestra cuenta gmail. Configuración inicial para un servicio gratuito y Además bajamos Robo 3T.",
            arrayCodigo:[
                {
                    cod:"Recomiendo guardar bien usuario, contraseñas, y el driver code que te da mongoDB",
                    text: "Como además soy novato, guardo también la IP que me asignó mongoDB"
                },
                {
                    cod:"En network acces incluimos la ip 0.0.0.0/0",
                    text: "Esto nos permitirá dar acceso a todas las IP's. Luego vemos como dar seguridad"
                },
                {
                    cod:"npm install mongoose",
                    text: "Instalará esta dependencia de producción. Recuerda quitar el caret ^"
                }
            ]
        },
        segundo:{
            title: "Creamos un modulo con Mongoose y Conectamos",
            defBreve:"Podremos establecer la conexión a la BD y hacer pruebas para confirmar la conexión y el buen funcionamiento. Para eso creamos el archivo mongo.js.",
            arrayCodigo:[
                {
                    cod:"const mongoose = require('mongoose'); const password = require('./password')",
                    text: "Requerimos mongoose, recuerdas el password que dijimos era tan importante??? lo copiamos también."
                },
                {
                    // eslint-disable-next-line no-template-curly-in-string
                    cod:"const connectionString = mongodb+srv: //zitrojj: ${password} @mypokemons. j6lhy.mongodb.net /MyPokemons ?retryWrites= true&w= majority",
                    text: "El driver de mongoDB también dijimoms que es importante guardar??? bueno, es importante."
                },
                {
                    cod:"mongoose.connect ( connectionString, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }) .then(() => { console.log ('database connected?') }).catch(e => { console.error(e) })",
                    text: "Establecemos la conexión con mongoose"
                }
            ]
        },
        tercero:{
            title: "Ahora creamos un contrato de objeto dentro de nuetra API",
            defBreve:"Usaremos 2 módulos de mongoose, Schema y model.",
            arrayCodigo:[
                {
                    cod:"const { Schema, model } = require('mongoose')",
                    text: "Schema es la declaración del contrato y model es la declaración del objeto que cumple ese contrato. La colección dentro de la BD tendrá el nombre del model. "
                },
                {
                    // eslint-disable-next-line no-template-curly-in-string
                    cod:"const zitropokemonSchema = new Schema ({ id: Number, name: String, base_attack: Number, base_defense: Number, base_stamina: Number, forms: Array, nodata: Boolean })",
                    text: "Este modelo lo usé en mi app smartpokemon go."
                },
                {
                    cod:"const Zitropokemon = model('Zitropokemon', zitropokemonSchema)",
                    text: " Creamos el nombre del objeto, y el contrato que debe cumplir. ya podemos crear un objeto"
                },
                {
                    cod:"const zitropok = new Zitropokemon ({ id: 235, name: 'Smeargle', base_attack: 100, base_defense: 100, base_stamina: 100, forms: [ { form: 'Normal' } ], nodata: false })",
                    text: " Este objeto no tiene sentido haberlo creado en este módulo, pero servirá de prueba"
                },
                {
                    cod:"zitropok.save() .then(result => { console.log(result) mongoose.connection.close() }).catch(e => { console.error(e) })",
                    text: "Con este comando guardamos el objeto en la base de datos, en la colección zitropokemons "
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
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
