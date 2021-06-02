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
                    cod: '"eslintConfig": { "extends": "./node_modules/standard/eslintrc.json", "env": { "jest": true} }, "jest": { "testEnvironment": "node"}',
                    text: "Hay que modificar 3 aspectos de package.json. 2 de ellos están en este código. El eslint y el propio jest. Uno para que el eslint haga excepciones con el jest, ya que la librería del jest no se importa, el eslint no lo detecta. Luego el propio jest, puede generar conflictos con la librería de tests de Node."
                },
                {
                    cod: '"scripts": {"lint": "eslint .", "dev": "nodemon index.js", "start": "node index.js", "test": "jest --verbose"}',
                    text: "Esto nos permitirá añadir el script del jest y llamarlo con el comando npm run test"
                }
            ]
        },
        segundo: {
            title: "Cómo usar Jest",
            defBreve: "Ahora hay que saber como se usa. Creamos una carpeta de tests y un archivo prueba.test.js",
            arrayCodigo: [
                {
                    cod: "const {palindorme} = require('./dir/palindrome.js')",
                    text: "Se importa una funcion o el componente que se desa testear de nuestro proyecto."
                },
                {
                    cod: "test(' de ZITROJJ', () => { const result = palindrome ('ZITROJJ'); expect(result) .toBe('JJORTIZ') })",
                    text: "Así se genera un test unitario de una sola instancia."
                },
                {
                    cod: "describe ('palidrome', () => { test 1; test 2; test 3... })",
                    text: "Esto es un conjunto de pruebas a la función palindrome, y se denomina test unitario. Dejo el Link para un mejor uso de los tests, sabes cómo hay que usar los expects."
                }
            ],
            url:"https://jestjs.io/docs/en/expect"
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
                url={detalles.segundo.url}
            />
        </div>
    )
}
