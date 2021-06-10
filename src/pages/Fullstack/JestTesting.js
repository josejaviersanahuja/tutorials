/* eslint-disable no-useless-escape */
import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function JestTesting() {

    const detalles = {
        primero: {
            title: "Tests con Jest",
            defBreve: "Jest es la herramienta de tests más popular de hoy día. Veremos como se descarga y cómo se configura.",
            arrayCodigo: [
                {
                    cod: "npm install jest -D",
                    text: "Ya sabemos lo que esto hace, recuerda quitar el caret del package.json"
                },
                {
                    cod: `"eslintConfig": { 
    "extends": "./node_modules/standard/eslintrc.json", 
    "env": { 
        "jest": true
    } 
}, 
"jest": { 
    "testEnvironment": "node"
}`,
                    text: "Hay que modificar 3 aspectos de package.json. 2 de ellos están en este código. El eslint y el propio jest. Uno para que el eslint haga excepciones con el jest, ya que la librería del jest no se importa, el eslint no lo detecta. Luego el propio jest, puede generar conflictos con la librería de tests de Node."
                },
                {
                    cod: `"scripts": {
    "lint": "eslint .", 
    "dev": "nodemon index.js", 
    "start": "node index.js", 
    "test": "jest --verbose"
}`,
                    text: "Esto nos permitirá añadir el script del jest y llamarlo con el comando npm run test"
                }
            ]
        },
        segundo: {
            title: "Tests Unitarios",
            defBreve: "Cómo usar Jest. Creamos una carpeta de tests y un archivo prueba.test.js. Los tests unitarios hacen pruebas a funciones individuales",
            arrayCodigo: [
                {
                    cod: "const {palindorme} = require('./dir/palindrome.js')",
                    text: "Se importa una funcion o el componente que se desa testear de nuestro proyecto."
                },
                {
                    cod: `test(' de ZITROJJ', () => { 
    const result = palindrome ('ZITROJJ'); 
    expect(result).toBe('JJORTIZ') 
})`,
                    text: "Así se genera un test unitario de una sola instancia."
                },
                {
                    cod: `describe('palidrome', () => { 
    test 1; 
    test 2; 
    test 3... 
})`,
                    text: "Esto es un conjunto de pruebas a la función palindrome, y se denomina test unitario. Dejo el Link para un mejor uso de los tests, sabes cómo hay que usar los expects."
                }
            ],
            url:"https://jestjs.io/docs/en/expect"
        },
        tercero: {
            title: "Tests Integración, configuración incial",
            defBreve: "Para estos tests, debemos configurar y preparar mejor nuestra API. Usaremos cross-env (SOLO WINDOW USERS) y supertest",
            arrayCodigo: [
                {
                    cod: `"scripts": { 
    "lint": "eslint .", 
    "dev": "cross-env NODE_ENV=development nodemon index.js", 
    "start": "cross-env NODE_ENV=production node index.js", 
    "test": "cross-env NODE_ENV=test jest --verbose --silent", 
    "test:watch": "npm run test -- --watch" 
}`,
                    text: "Así quedarán los scripts en el package.json. cross-env solo para Windows; --silent evita los mensajes del console.log; NODE_ENV va a ayudar a condicionar las varias de entorno como la base de datos, de esa forma no trabajaremos con nuestra base de datos original en modo test sino con otra base de datos. test:watch es un script para correr tests automaticamente al salvar el proyecto."
                },
                {
                    cod: "npm install cross-env",
                    text: "Esto va a ayudar a que las variables de entorno NODE_ENV no se haga un lío en WINDOWS."
                },
                {
                    cod: "npm install supertest -D",
                    text: "Es una biblioteca de métodos para muchos tipos de tests. Para nuestro test de integración lo vamos a necesitar. Recuerda quitar los carets ^"
                },
                {
                    cod: `const { MONGODB_URI, MONGODB_URI_TEST, NODE_ENV } = process.env; 
const connectionString = NODE_ENV === 'test' ? MONGODB_URI_TEST : MONGODB_URI`,
                    text: "Esta es la nueva cabecera de mongo.js. Creo que se entiende facilmente lo que significa. Evitamos que los tests modifiquen nuestra base de datos principal."
                },
                {
                    cod: `const supertest = require('supertest'); 
const mongoose = require('mongoose'); 
const { app, server } = require('../index'); 
const Zitropokemon = require('../models/Zitropokemons'); 
const api = supertest(app)`,
                    text: "Así va a quedar la cabecera de nuestro archivo de tests myfirstnode.test.js. Supertest va a transformar nuestra (Express)app en un elemento para hacer tests; mongoose es llamao a hacer tests también, por eso se modifcó la cabecera de mongo.js; app va a ser usada y el server debe cerrarse al finalizar el test; se importa el schema y modelo que creamos y empezamos a hacer tests."
                }
            ]
        },
        cuarto: {
            title: "Tests Integración",
            defBreve: "Una vez tenemos todo configurado, vamos a mostrar 3 fases de los tests. beforeEach, los tests, y afterAll",
            arrayCodigo: [
                {
                    cod: `const pokemons = [pokemon1, pokemon2]; 
beforeEach(async () => { 
    await Zitropokemon.deleteMany({}); 
    const pokemon1 = new Zitropokemon(pokemons[0]); 
    const pokemon2 = new Zitropokemon(pokemons[1]); 
    await pokemon1.save(); 
    await pokemon2.save() 
}) `,
                    text: "Lo primero que queremos controlar antes de correr los tests, es la base de datos, para eso el beforeEach. Para eso, llamamos a nuestro schema y model (recuerda que son métodos de mongoose) y llamamos al método deleteMany que al pasar un objeto vacío, borra TODA la base de datos. Por eso la importancia de cambiar las variables de entorno para tests. Luego añadimos nuestros 2 pokemones a la base de datos. Nota: pokemon1 y pokemon2, deben definirse acorde al esquema en otras líneas de código."
                },
                {
                    // eslint-disable-next-line no-useless-escape
                    cod: `describe('API combos ', () => { 
    test('are returned as json', async () => { 
        await api.get('/api/combos')
            .expect(200)
                .expect('content-type', /application\/json/) 
    }); 
    test('return an array ', async () => { 
        const response = await api.get('/api/combos') 
        expect(response.body).toHaveLength(pokemons.length) 
    }) 
})`,
                    text: "Vamos a correr solo 2 tests en los apuntes de esta clase. test1 vemos si nos devuelve status 200 y si repons.body es un json; el test2 vemos si el array que nos devuelve la base de datos tiene los mismos elementos con los que la inicializamos"
                },
                {
                    cod: `afterAll(() => { 
    mongoose.connection.close(); 
    server.close() 
})`,
                    text: "Jest se quejó en varias ocasiones de que el servidor nunca se cerró, y que la base de datos se mantuvo abierta en toda ocasión. cerramos ambas a mano."
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
                language="json"
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                url={detalles.segundo.url}
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
        </div>
    )
}
