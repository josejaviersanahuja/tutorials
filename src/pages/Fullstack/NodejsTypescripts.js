import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function NodejsTypescripts() {
 
   const detalles={
        primero:{
            title: "Node js Y Express con Typescript",
            defBreve:"Configuración desde 0.",
            arrayCodigo:[
                {
                    cod:"npm init -y",
                    text: "Inicializa un proyecto de Node.js. Te pregunta una serie de cosas como el nombre del proyectos y cosas similares. si pones el -y es como si setearas todas las respuestas a yes. Devuelve el archivo ---package.json--- "
                },
                {
                    cod:`node index.ts
//Si el código es exclusivo de typescript, va a dar error. 
//Hay que configurarlo todo`,
                    text: "Necesitaremos dependencias para configurar correctamente desde 0 el proyecto."
                },
                {
                    cod:`"devDependencies": {
    "@types/cors": "^2.8.10",
    "@types/express": "^4.17.12",
    "@types/node": "^15.12.4",
    "eslint": "^7.29.0",
    "mongoose-types": "^1.0.3",
    "nodemon": "^2.0.7",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.4"
},
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.12.14"
}`,
                    text: "Ya a estas alturas deberíamos saber npm install -D para las devDependencies y npm install para las depencies. Nota: ESlint descargará más dependencias de acuerdo a la configuración que tu escojas."
                },
                {
                    cod:`npx tsc --init
// Creará un archivo tsconfig importante para el proyecto
// ejemplo 1 de configuración
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "dist",
        "sourceMap": true
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
// ejemplo 2
{
    "compilerOptions": {
      /* Basic Options */
      "target": "es6",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
      "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
       "sourceMap": true,                           /* Generates corresponding '.map' file. */
       "outDir": "./dist",                              /* Redirect output structure to the directory. */
       "rootDir": "./src",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
      /* Strict Type-Checking Options */
      "strict": true,                                 /* Enable all strict type-checking options. */
      /* Additional Checks */
      "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      /* Advanced Options */
      "skipLibCheck": true,                           /* Skip type checking of declaration files. */
      "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
    }
  }
  
`,
                    text: "Existen más ejemplo  y más funciones. Ya veremos si esta configuración es la definitiva para nuestro proyecto, yo escogí la 2."
                },
                {
                    cod:`// Configuramos nodemon. Abrimos un archivo nodemon.json
{
    "restartable": "rs",
    "ignore": [".git", "node_modules/", "dist/", "coverage/"],
    "watch": ["src/"],
    "execMap": {
        "ts": "node -r ts-node/register"
    },
    "env": {
        "NODE_ENV": "development"
    },
    "ext": "js,json,ts"
}
                    `,
                    text: "..."
                },
                {
                    cod:`"scripts": {
    "dev": "nodemon --config nodemon.json src/index.ts",
    "dev:debug": "nodemon --config nodemon.json --inspect-brk src/index.ts"
}`,
                    text:"De esta forma tenemos configurado la ejecución automática del código en desarrollo cada vez que guardemos un cambio."
                },
                {
                    cod:`npx eslint --init`,
                    text:"Y sigue las preguntas. para selección multiple en consola usa la barra espaciadora. El resto es intuitivo."
                },
                {
                    cod:"import express from 'express'",
                    text: "Como Typescript transpila, podremos mantener la sintaxis de import - from'...'"
                },
                {
                    cod:"const app = express() ",
                    text: "Con ese código, levantamos un servidor local. Veamos el parámetro más de cerca"
                },
                {
                    cod:`const PORT = 3001; 
app.listen(PORT); 
console.log('Server running on port' $'{PORT}')`,
                    text: "Añadimos el puerto por donde vamos a escuchar el servidor local que levantamos."
                }
            ],
            url:"https://ichi.pro/es/typescript-y-nodemon-la-configuracion-definitiva-125347184037003" 
        },
        segundo:{
            title: "Ahora empecemos a ejecutar nuestro proyecto",
            defBreve:"Empecemos a trabajar con Express y su sintaxis",
            arrayCodigo:[
                {
                    cod:`app.get('/', (request, response) => {
    response.send('<h1>Bienvenido a la primera API de JJ</h1')
})`,
                    text: "Express recibe la ruta de entrada '/' y responde con un string que express interpreta inteligentemente como html"
                },
                {
                    cod:`app.get('/api/notes', (request, response) => {
    response.json(notes)
})`,
                    text: "Devolvemos todo el array de notes en formato json. el método .json de EXPRESS, reemplazaría al JSON.stringify de NODEJS"
                },
                {
                    cod:`app.get('/api/notes/:id', (request, response) => {	
    const id=request.params.id; 
    const pokemon = notes.filter(e=> e.pokemon_id===Number(id)); 
    pokemon.length!==0? response.json(pokemon): response.status(204).end('no hay poquemon con id' +id)
}`,
                    text: "Por partes. podemos trabajar con parámetros i.e.(id). Podemos dar distintas responses en base al parámetro. "
                },
                {
                    cod:"app.use(express.json())",
                    text: "Para gestión de posts, hace falta un parser que lea objetos en formato json por ejemplo. Esta línea de código, es la forma de usar el parser que ofrece expres."
                },
                {
                    cod:`app.post('/api/notes', (request, response) => {
    const note = request.body; 
    if (Number(note.base_attack) && Number(note.base_defense) && Number(note.base_stamina) && note.form && note.pokemon_name) {
        const newpokemon = {
            'base_attack': Number(note.base_attack),
            'base_defense': Number(note.base_defense),
            'base_stamina': Number(note.base_stamina),
            'form': note.form,
            'pokemon_id': 1001,
            'pokemon_name': note.pokemon_name
        }; 
        notes.push(newpokemon); 
        response.status(201).json(newpokemon)
    } else{
        response.status(400).json({
            error:'no se recibió el objeto que se esperaba debe tener la siguiente forma',
                obj:{
                    'base_attack': 'type number',
                    'base_defense': 'type number',
                    'base_stamina': 'type number',
                    'form': 'la forma que deba tener',
                    'pokemon_name': 'Nombre del pokemon'
                }
        }) 
    }
})`,
                    text: "Este es un post que recibe un json dentro de un body. Lo leemos, y si nos gusta el formato y podemos trabajarlo, añadimos el post a nuestro array notes. Sino, devolvemos un status code 400 y explicamos como recibir el objeto"
                }
            ],
            url:"https://developer.mozilla.org/es/docs/Web/HTTP/Status"
        },
        cuarto:{
            title: "Eslint",
            defBreve:"Es la más común de todas, y es imprescindible en cualquier proyecto, en especial en nodejs.",
            arrayCodigo:[
                {
                    cod:"npm install eslint -D || npm install standard -D",
                    text: "Instala como dependencia de desarrollo. standard es un eslint ya preconfigurado"
                }
            ]
       }
    }

    return (
        <div className="cuerpo">
            <h3>Creado el 25/06/2021</h3>
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
                language="json"
            />
            <DetallesSubtema 
                title={detalles.tercero.title} 
                defBreve={detalles.tercero.defBreve} 
                arrayCodigo={detalles.tercero.arrayCodigo}
                url={detalles.tercero.url}
            />
            <DetallesSubtema 
                title={detalles.cuarto.title} 
                defBreve={detalles.cuarto.defBreve} 
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
        </div>
    )
}
