import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function NodejsExpress() {
 
   const detalles={
        primero:{
            title: "Node js Y NPM",
            defBreve:"Node.js desde 0.",
            arrayCodigo:[
                {
                    cod:"npm init -y",
                    text: "Inicializa un proyecto de Node.js. Te pregunta una serie de cosas como el nombre del proyectos y cosas similares. si pones el -y es como si setearas todas las respuestas a yes. Devuelve el archivo ---package.json--- "
                },
                {
                    cod:"node index.js --- Una vez creado el proyecto, podemos abrir en VSC o el que sea, crear nuestro index.js y ejecutarlo por consola ",
                    text: "Sin embargo lo ideal es trabajar con scripts, en el archivo package.json añadimos 'start':'node index.js' Por eso, npm start inicia el proyecto"
                },
                {
                    cod:"const http = require('http')",
                    text: "Importamos el modulo http que provee Node.js. Esa sintaxis es equivalente a import http from 'http'. Pero una sintaxis es CommonJS y la otra es ES6 (EmmaScript)"
                },
                {
                    cod:"const app = http.createServer(param) ",
                    text: "Con ese código, levantamos un servidor local. Veamos el parámetro más de cerca"
                },
                {
                    cod:"(request, response) => {response.writeHead(200, { 'Content-Type': 'text/plain' })response.end('Hello World')} ",
                    text: "El parámetro es una función callback. IMPORTANTÍSIMO. En este caso, es una acción que se dispara cada vez que le llegue una request."
                },
                {
                    cod:"const PORT = 3001; app.listen(PORT); console.log('Server running on port' $'{PORT}')",
                    text: "Añadimos el puerto por donde vamos a escuchar el servidor local que levantamos."
                },
                {
                    cod:"{ 'Content-Type': 'application/json' })response.end('JSON.stringifynotes')} ",
                    text: "Debemos decir al servidor que tipo de archivos va a crear con los datos que pasamos. Para eso usamos application/json para decir que crearemos un json. y JSON.stringify(array u objeto) nos va a pasar a string de forma correcta los datos. "
                }
            ] 
        },
        segundo:{
            title: "Ahora empecemos a ejecutar nuestro proyecto",
            defBreve:"Para evitar salir cada vez que haya un cambio y hacer npm start, vamos a instalar NODEMON",
            arrayCodigo:[
                {
                    cod:"npm install nodemon -D",
                    text: "Instalar en las dependencias del proyecto y no de modo global. incluir la -D para mostrar que es un dependencia de desarrollo"
                },
                {
                    cod:"'scripts': {'dev':'nodemon index.js', 'start': 'node index.js', 'test': '...'",
                    text: "Añadimos nodemon a nuestros scripts del package.json"
                },
                {
                    cod:"npm install express",
                    text: "express es una dependencia de producción que va a facilitar el manejo de requests y las respuestas que correspondan a cada request diferente"
                },
                {
                    cod:"'dependencies': {'express': '^4.17.1','unirest': '^0.6.0'},'devDependencies': {'nodemon': '^2.0.7'}}",
                    text: "el ^ es uno de los más grandes problemas que tiene NODEJS. Vamos a quitarlos y luego estudiamos mejor como controlarlos"
                }
            ]
        },
        tercero:{
            title: "Manejo de requests y responses con EXPRESS",
            defBreve:"Empecemos a trabajar con Express y su sintaxis",
            arrayCodigo:[
                {
                    cod:"app.get('/', (request, response) => {response.send('<h1>Bienvenido a la primera API de JJ</h1')})",
                    text: "Express recibe la ruta de entrada '/' y responde con un string que express interpreta inteligentemente como html"
                },
                {
                    cod:"app.get('/api/notes', (request, response) => {response.json(notes)})",
                    text: "Devolvemos todo el array de notes en formato json. el método .json de EXPRESS, reemplazaría al JSON.stringify de NODEJS"
                },
                {
                    cod:"app.get('/api/notes/:id', (request, response) => {	const id=request.params.id; const pokemon = notes.filter(e=> e.pokemon_id===Number(id)); response.json(pokemon); response.status(204).end('no hay poquemon con id' +id) ",
                    text: "Por partes. podemos trabajar con parámetros i.e.(id). Podemos dar distintas responses en base al parámetro. "
                },
                {
                    cod:"app.use(express.json())",
                    text: "Para gestión de posts, hace falta un parser que lea objetos en formato json por ejemplo. Esta línea de código, es la forma de usar el parser que ofrece expres."
                },
                {
                    cod:"app.post('/api/notes', (request, response) => {const note = request.body; if (Number(note.base_attack) && Number(note.base_defense) && Number(note.base_stamina) && note.form && note.pokemon_name) {const newpokemon = {'base_attack': Number(note.base_attack),'base_defense': Number(note.base_defense),'base_stamina': Number(note.base_stamina),'form': note.form,'pokemon_id': 1001,'pokemon_name': note.pokemon_name}; notes.push(newpokemon); response.status(201).json(newpokemon)} else{response.status(400).json({error:'no se recibió el objeto que se esperaba debe tener la siguiente forma',obj:{'base_attack': 'type number','base_defense': 'type number','base_stamina': 'type number','form': 'la forma que deba tener','pokemon_name': 'Nombre del pokemon'}}) }})",
                    text: "Este es un post que recibe un json dentro de un body. Lo leemos, y si nos gusta el formato y podemos trabajarlo, añadimos el post a nuestro array notes. Sino, devolvemos un status code 400 y explicamos como recibir el objeto"
                }
            ]
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
            <DetallesSubtema 
                title={detalles.primero.title} 
                defBreve={detalles.primero.defBreve} 
                arrayCodigo={detalles.primero.arrayCodigo}
                url="https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"
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
                url="https://developer.mozilla.org/es/docs/Web/HTTP/Status"
            />
            <DetallesSubtema 
                title={detalles.cuarto.title} 
                defBreve={detalles.cuarto.defBreve} 
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
        </div>
    )
}
