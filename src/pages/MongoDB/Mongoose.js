import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Mongoose() {
    
    const detalles={
        primero:{
            title: "MongoDB ATLAS",
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
            ],
            url:"https://www.mongodb.com/es/cloud/atlas/register"
        },
        segundo:{
            title: "Creamos un modulo con Mongoose y Conectamos",
            defBreve:"Podremos establecer la conexión a la BD y hacer pruebas para confirmar la conexión y el buen funcionamiento. Para eso creamos el archivo mongo.js.",
            arrayCodigo:[
                {
                    cod:`const mongoose = require('mongoose'); 
const password = require('./password')`,
                    text: "Requerimos mongoose, recuerdas el password que dijimos era tan importante??? lo copiamos también en el .env."
                },
                {
                    // eslint-disable-next-line no-template-curly-in-string
                    cod:`// Ejemplo del conection string
// const connectionString = mongodb+srv://zitrojj: $ {password}@mypokemons. j6lhy.mongodb.net /MyPokemons ?retryWrites= true&w= majority

//Ahora las buenas prácticas. Requerimos el conection string del .end
const { MONGODB_URI, MONGODB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'testing' ? MONGODB_URI_TEST : MONGODB_URI
`,
                    text: "El driver de mongoDB también dijimoms que es importante guardar??? bueno, es importante, por eso lo guardamos en un .env. Más allá de eso, creamos una BD paralela para poder correr nuestros tests, por eso MONGODB_URI_TEST existe."
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
                },{
                    cod:`//Schema version extendida
const zitropokemonSchema = new Schema ({ 
    id: {
        type: Number,
        unique:true,
        required:true
    },
    name: String, 
    forms: Array, 
    nodata: Boolean 
})`,
                    text:"type, unique y required son información adicional que se le puede pasar a mongoose. "
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
                }
            ]
        },
        quinto:{
            title: "Métodos disponibles con mongoose",
            defBreve:"Métodos como save, find, findById, updateOne, delete, son muy importantes conocoerlos y dominarlos. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`// POST
const zitropok = new zitroPokemonModel(objPokemon)
zitropok.save()
    .then(result => { 
        console.log(result) 
        mongoose.connection.close() 
    }).catch(e => { 
        console.error(e) 
    })`,
                    text: "Con este comando guardamos el objeto en la base de datos, en la colección zitropokemons. Es una promesa que nos devuelve el mismo pokemon que guardamos."
                },
                {
                    cod:`// método find GET ALL
Zitropokemon.find().sort( { id: 1 } ) 
    .then (zitropokemon => { 
        response .json(zitropokemon) 
    }).catch(err => { 
        console .log(err); 
        next(err) 
    }) 
    `,
                    text: "Así definimos un get a una base de datos. Nos devuelve un array, además en este ejemplo en particular, lo ordenamos por id."
                },{
                    cod:`// GET 1
userModel.findOne({_id:"el id del usuario"})`,
                    text:"Se comporta similar a find, pero no devulve un array sino el objeto en cuestión. Solo debemos garantizar que el parámetro _id sea único. Incluso si en el esquema definimos que user.phone tenga la propiedad unique, también podemos usar ese parámetro para hacer findOne."
                },{
                    cod:`// UPDATE versión 1
const answer = await userModel.updateOne({unique search param},{new fields})`,
                    text:"La constante answer tendrá campos como n, nModified, ok, que si todos tienen valor 1, está todo OK. PERO hay otra forma más intuitiva de modificar un dato. veamos"
                },{
                    cod:`//UPDATE version 2
const user = await usersModel.findOne({phone:"34664531802"})
user.firstName="JJ"
user.save()
`,
                    text:"De esta forma hemos modificado el campo firstName a nuestro usuario."
                },{
                    cod:`//UPDATE version 3
const user = await usersModel.findOneAndUpdate({phone:"34664531802"},{firstName:"JJ"})
// O
const user = await usersModel.findOneAndUpdate({phone:"34664531802"},{firstName:"JJ"}, {new:true})
`,
                    text:"De esta forma hemos modificado el campo firstName a nuestro usuario, la diferencia entre la opción new o sin opción new, es que la constante user, tendrá el valor del usuario sin modificar, o el valor modificado."
                },{
                    cod:`// ya sea deleteMany, o findOneAndDelete o deleteOne es muy intuitivo
usersModel.findOneAndDelete({phone:"666666666"})`,
                    text:"Ya conocemos todos los métodos CRUD de mongoose. A echar código."
                }
            ]
        },
        sexto:{
            title: "Populate",
            defBreve:"Seguimod añadiendo métodos avanzados para que la vida se haga realmente muy fácil al momento de trabajar con Mongoose. Empecemos por populate, que es una forma de establecer relaciones entre colecciones distintas, en el ejemplo que  mostraré, la colección tokens (session token), está muy relacionada con la colección users. Veamos cómo. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`//Empezamos por establecer en el Schema la relación
//tokens schema
const tokensSchema = new Schema({
  phone: String,
  id: {
      type:String,
      unique:true,
      required:true
    },
  expires: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref:'users' // collection
  }
});

/*
    DOCUMENTATION AND OTHER EXAMPLES
example 1:
    m.user = new mongoose.Types.ObjectId;
example 2:
    const toId = mongoose.Types.ObjectId
    m.user = toId(var)
*/
`,
                    text:"Esta es la forma de crear una relación o referencia entre 2 colecciones. Mira más abajo para qué puede servir."
                },{
                    cod:`//Llamamos a un token
const token = await tokensModel.find({}).populate('user') // porque user es el key que vamos a popular
//We must populate with the parameter of the field name`,
                    text:"Ahora, junto con el token, va a venir un campo user, traído de la colección users. Solo debemos asegurarnos que le pasamos el id correcto. A quién? bueno, cuando guardamos el token en la DB, la tuvimos que crear con un mongoose.Types.ObjectId o pasar el _id del user."
                }
            ]
        },
        septimo:{
            title: "Mayor y Menos que",
            defBreve:"Ahora vamos a ver como hacer delete, o update a multiples elementos sin tener que ir uno a uno. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`//delete o update es similar
tokensModel.deleteMany({expires:{$lte: Date.now()}})

checksModel.updateMany({timeResponse:{$gte: 3}},{timeResponse:5})`,
                    text:"En uno hemos borrado a todos los tokens que ya hayan expirado, en el segundo, modificamos a los timeResponse mayores a 3, para que sean 5"
                }
            ]
        },
        octavo:{
            title:"Queries.exec() Promesas",
            defBreve:"Mongoose tiene muchos métodos que son promesas como connect, o save, pero ninguna de sus queries son promesas aunque si son thenable. Esto quiere decir que aceptan .then como método, pero no significa que sean promesas. Sin embargo, podemos construirlas en promesas facilmente. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`const query = Band.findOne({name: "Guns N' Roses"});
assert.ok(!(query instanceof Promise));

// A query is not a fully-fledged promise, but it does have a .then().
query.then(function(doc) {
  // use doc
});

// .exec() gives you a fully-fledged promise
const promise = Band.findOne({name: "Guns N' Roses"}).exec();
assert.ok(promise instanceof Promise);

promise.then(function (doc) {
  // use doc
});`,
                    text:"Esto está sacado de la documentación oficial de Mongoose. Dejo el Link por si se quiere ver en más detalle. ¿Entonces debemos usar las queries con o sin exec? La única ventaja funcional de usar promesas, es el rastreo de los errores que puedan ocurrir. Mirar más a abajo."
                },{
                    cod:`//Ejemplo 1, funciona sin exec
const doc = await Band.findOne({ name: "Guns N' Roses" }); // works

//ejemplo 2, lanzamos error, sin exec
const badId = 'this is not a valid id';
try {
  await Band.findOne({ _id: badId });
} catch (err) {
  // Without exec(), the stack trace does **not** include the
  // calling code. Below is the stack trace:
  //
  // CastError: Cast to ObjectId failed for value "this is not a valid id" at path "_id" for model "band-promises"
  //   at new CastError (/app/node_modules/mongoose/lib/error/cast.js:29:11)
  //   at model.Query.exec (/app/node_modules/mongoose/lib/query.js:4331:21)
  //   at model.Query.Query.then (/app/node_modules/mongoose/lib/query.js:4423:15)
  //   at process._tickCallback (internal/process/next_tick.js:68:7)
  err.stack;
}

try {
  await Band.findOne({ _id: badId }).exec();
} catch (err) {
  // With exec(), the stack trace includes where in your code you
  // called exec(). Below is the stack trace:
  //
  // CastError: Cast to ObjectId failed for value "this is not a valid id" at path "_id" for model "band-promises"
  //   at new CastError (/app/node_modules/mongoose/lib/error/cast.js:29:11)
  //   at model.Query.exec (/app/node_modules/mongoose/lib/query.js:4331:21)
  // AQUI LA MAGIA 
  //   at Context.<anonymous> (/app/test/index.test.js:138:42) 
  // AQUI LA MAGIA
  //   at process._tickCallback (internal/process/next_tick.js:68:7)
  err.stack;
}`,
                    text:"Se entiende la ventaja de usar exec, aunque si no se usa, el resultado es el mismo."
                }
            ],
            url:"https://mongoosejs.com/docs/promises.html"
        },
        noveno:{
            title:"Mongoose Hooks",
            defBreve:"Mongoose permite que el dearrollador pueda implementar lógica dentro de los esquemas, y para ello, vamos a estudiar solo uno. Vamos a ver como un experto en bases de datos, implementa el esquema de un user.",
            arrayCodigo:[
                {
                    cod:`const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  email: {
    // Trim and lowercase
    type: String, 
    required: true, 
    index: { unique: true }, 
    lowercase: true, 
    trim: true,
  },
  password: {
    type: String, 
    required: true, 
    trim: true,
  },
  //Observa como usa un segundo parámetro en el esquema para pedir un timestamp 
  //cada vez que se crea y/o modifica un usuario.
}, { timestamps: true });

async function generateHash(password) {
  const COST = 12;
  return bcrypt.hash(password, COST);
}

//EL HOOK DEL QUE HABLABA

UserSchema.pre('save', function preSave(next) {
  const user = this;

  // Only create a new password hash if the field was updated
  if(user.isModified('password')) {
    return generateHash(user.password).then(hash => {
      user.password = hash;
      return next();
    }).catch(error => {
      return next(error);
    });
  }
  return next();
});

UserSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);`,
                    text:"Ahora, esta implementación es algo antigua. A partir de mongoose 5.0 el uso del next, se ha vuelto menos necesario y algo impredecible. Vamos a documentar un poco de lo que hablo."
                },
                {
                    cod:`//Pre middleware functions are executed one after another, when each middleware calls next.
const schema = new Schema(..);
schema.pre('save', function(next) {
  // do stuff
  next();
});

//Ahora la nueva forma

//In mongoose 5.x, instead of calling next() manually, 
//you can use a function that returns a promise. In particular, you can use async/await.
schema.pre('save', function() {
    return doStuff().
      then(() => doMoreStuff());
  });
  
  // Or, in Node.js >= 7.6.0:
  schema.pre('save', async function() {
    await doStuff();
    await doMoreStuff();
  });

  //WARNING
  //If you use next(), the next() call does not stop the rest of the code 
  //in your middleware function from executing. Use the early return pattern 
  //to prevent the rest of your middleware function from running when you call next().
`,
                    text:"Básicamente se usa este Hook, para dejar que el esquema maneje la operación de hashear o encriptar la contraseña. Un uso ciertamente interesante. Pero hay más."
                },
                {
                    cod:`//Use Cases
//Middleware are useful for atomizing model logic. Here are some other ideas:
//
//complex validation
//removing dependent documents (removing a user removes all their blogposts)
//asynchronous defaults
//asynchronous tasks that a certain action triggers`,
                    text:"Pueden ser muy poderosas para no embasurar nuestros códigos dentro de los endpoints. Dejo link para que se pueda buscar más información si fuera necesario."
                }
            ],
            url:"https://mongoosejs.com/docs/middleware.html#pre"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="18/08/2021"/>
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
            <DetallesSubtema
                title={detalles.octavo.title}
                defBreve={detalles.octavo.defBreve}
                arrayCodigo={detalles.octavo.arrayCodigo}
                url={detalles.octavo.url}
            />
            <DetallesSubtema
                title={detalles.noveno.title}
                defBreve={detalles.noveno.defBreve}
                arrayCodigo={detalles.noveno.arrayCodigo}
                url={detalles.noveno.url}
            />
        </div>
    )
}
