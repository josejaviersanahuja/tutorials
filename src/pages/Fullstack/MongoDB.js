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
                    cod:`const mongoose = require('mongoose'); 
const password = require('./password')`,
                    text: "Requerimos mongoose, recuerdas el password que dijimos era tan importante??? lo copiamos también."
                },
                {
                    // eslint-disable-next-line no-template-curly-in-string
                    cod:'const connectionString = mongodb+srv://zitrojj: ${password}@mypokemons. j6lhy.mongodb.net /MyPokemons ?retryWrites= true&w= majority',
                    text: "El driver de mongoDB también dijimoms que es importante guardar??? bueno, es importante."
                },
                {
                    cod:`mongoose.connect( connectionString, { 
    useCreateIndex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => { 
    console.log ('database connected?') 
}).catch(e => { 
    console.error(e) 
})`,
                    text: "Establecemos la conexión con mongoose"
                }
            ]
        },
        tercero:{
            title: "Ahora creamos un contrato de objeto dentro de nuetra API",
            defBreve:"Usaremos 2 módulos de mongoose, Schema y model. Y modulamos este esquema",
            arrayCodigo:[
                {
                    cod:"const { Schema, model } = require('mongoose')",
                    text: "Schema es la declaración del contrato y model es la declaración del objeto que cumple ese contrato. La colección dentro de la BD tendrá el nombre del model. "
                },
                {
                    // eslint-disable-next-line no-template-curly-in-string
                    cod:`const zitropokemonSchema = new Schema ({ 
    id: Number, 
    name: String, 
    forms: Array, 
    nodata: Boolean 
})`,
                    text: "Este modelo lo usé en mi app smartpokemon go."
                },
                {
                    cod:"const Zitropokemon = model('Zitropokemon', zitropokemonSchema)",
                    text: " Creamos el nombre del objeto, y el contrato que debe cumplir. ya podemos crear un objeto. Hasta aquí el módulo final. Pero hay que probar que funcione."
                },
                {
                    cod:`const zitropok = new Zitropokemon({ 
    id: 235, name: 'Smeargle', 
    base_attack: 100, 
    base_defense: 100, 
    base_stamina: 100, 
    forms: [ { form: 'Normal' } ], 
    nodata: false 
})`,
                    text: " Este objeto no tiene sentido haberlo creado en este módulo, pero servirá de prueba"
                },
                {
                    cod:`zitropok.save()
    .then(result => { 
        console.log(result) 
        mongoose.connection.close() 
    }).catch(e => { 
        console.error(e) 
    })`,
                    text: "Con este comando guardamos el objeto en la base de datos, en la colección zitropokemons "
                }
            ]
        },
        cuarto:{
            title: "Concretando detalles",
            defBreve:"Hay muchas cosas en el aire, .env, modular en archivos los esquemas, la conexión a mongodb, la desconexión, y como vamos a llamar a la base de datos para los get y los posts y los deletes.",
            arrayCodigo:[
                {
                    cod:"|1|npm install dotenv |2| incluir .env en el gitignore",
                    text: "Como el password se guarda en un archivo .env, para leerlo del archivo usamos un paquete llamado dotenv. "
                },
                {
                    cod:`//Añádir en nuestro index.js 
require('dotenv').config()  
require ('./mongo') 
const Zitropokemon = require('./models/Zitropokemons')` ,
                    text: "Importamos todo lo que hemos creado, solo que de formas especiales pero siempre en ese orden. En 1, importamos y ejecutamos, similar a un IIFE, en 2 funciona parecido a un middleware, pasamos por ahí si o si, y en 3, si hacemos una importación más normal."
                },
                {
                    cod:`(request, response, next) => {
    Zitropokemon.find().sort( { id: 1 } ) 
        .then (zitropokemon => { 
            response .json(zitropokemon) 
        }).catch(err => { 
            console .log(err); 
            next(err) 
        }) 
    }`,
                    text: "Así definimos un get a una base de datos. Usamos comandos de mongoose, siempre son promesas, y como es una conexión externa, siempre haremos un catch error y lo evaluaremos con un middleware al final que crearemos, para eso el next(err)."
                },
                {
                    cod:`app.post('/api/combos', (request, response, next) => { 
    const crearpokemon = new Zitropokemon(request.body) 
    crearpokemon.save()
        .then(result => { 
            console.log(result); 
            response.json(result) 
        }).catch(e => { 
            next(e) 
        }) 
    })`,
                    text: " Asi queda el post al final."
                }
            ]
        },
        quinto:{
            title: "Middleware finales handle404 y handleErrors",
            defBreve:"Por su importancia, mejor los modulamos.",
            arrayCodigo:[
                {
                    cod:`(request, response, next) => { 
    response.status(404).end() 
    console.log (request.body); 
}`,
                    text: "Evidentemente es el modulo del 404, el archivo fue llamado handle404.js."
                },
                {
                    cod:`(error, request, response, next) => { 
    console .error (error); 
    if (error.name === 'CastError') { 
        response.status(400).send({ 
            error: 'The id is wrong. should be from 1 to 890' 
        }) 
    } else { 
        response.status(500).end() 
    } 
    console .log (request.body) 
}`,
                    text: "Este es el modulo del handleError. NOTA: es IMPORTANTE que lleve de parámetro inicial el error, de lo contrario, podría entrar en el handle404"
                },
                {
                    cod:`const handleError = require('./middlewares/handleError') 
app.use (handleError)`,
                    text: "De estas formas importamos y usamos el middleware."
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
