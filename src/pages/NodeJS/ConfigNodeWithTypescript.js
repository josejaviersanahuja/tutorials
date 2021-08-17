import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ConfigNodeWithTypescript() {
    
    const detalles={
        primero:{
            title: "Inicializar un proyecto de Node con Typescript",
            defBreve:"Ya sabemos inicializar un proyecto de node con npm init, empecemos a añadir typescript.",
            arrayCodigo:[
                {
                    cod:"npm install -g typescript ",
                    text: "Esto permitirá que inicialicemos typescript en nuestros proyectos del mismo modo que usamos npm init"
                },{
                    cod:`tsc --init`,
                    text:"Así creamos nuestro tsconfig."
                }
            ]
        },
        segundo:{
            title: "Configuraciones",
            defBreve:"Debemos configurar no solo el package.json, y el tsconfig.json, también debemos configurar el eslint. Vamos a ello, empezamos con tsconfig.json",
            arrayCodigo:[
                {
                    cod:`{
  "compilerOptions": {
    "target": "es6",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "sourceMap": true,                           /* Generates corresponding '.map' file. */
    "outDir": "dist",                              /* Redirect output structure to the directory. */
    "watch": true,
    "strict": true,                                 /* Enable all strict type-checking options. */
    "declaration": true,                         /* Generates corresponding '.d.ts' file. */
  },
  //"lib":["es2015"],
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
`,
                    text: "Esta es la configuración que necesitamos para el tsconfig, ahora vamos a instalar 3 paquetes de desarrollo, typescripte, eslint, @types/node"
                },{
                    cod:`npm install -D typescript @types/node eslint`,
                    text:"Así descargamos nuestros paquetes que nos ayudarán a trabajar con la compilación y transpilación."
                },{
                    cod:`npx eslint --init`,
                    text:"Así iniciamos la configuración de eslint en el proyecto. Nos va a generar un archivo .eslintrc.json con su configuración y además nos va a instalar un montón de paquetes de ayuda de types. Ahora probemos que pasa si bajamos express. Al importar express eslint nos va a avisar que express no trae los types adecuados para trabajar con typescript."
                },{
                    cod:`npm install express
npm install -D @types/express`,
                    text:"Son necesarios también para poder trabajar con typescript. Ahora solo queda configurar el package.json" 
                },{
                    cod:`  "scripts": {
    "start": "tsc -b && node dist/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^16.6.1",
    "@typescript-eslint/eslint-plugin": "^4.29.2",
    "@typescript-eslint/parser": "^4.29.2",
    "eslint": "^7.32.0",
    "typescript": "^4.3.5"
  }
}`,
                    text:"El script se lee como la compilación tipo build de typescript y la ejecución normal de node en el archivo resultante de la compilación de typescript. También podemos ver todas las dependencias que tuvimos que instalar."
                }
            ]
        },
        tercero:{
            title: "Comprobemos que el proyecto si funciona",
            defBreve:"Voy a escribir un hola mundo y veremos que dificultades encontramos.",
            arrayCodigo:[
                {
                    cod:`import express from "express"
import http from "http"

const app = express()

app.get('/', (req, res)=>{
	res.end('HOLAAAAAA')
})

const server = http.createServer(app)

server.listen(3001, ()=>{
	console.log("Server running on port 3001 ")
})`,
                    text:"La mayor dificultad fue que el eslint lo configuré de forma muy estricta con muchas normas. Eliminé casi todas las normas y con eso fue suficiente."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="17/08/2021"/>
            <Subtitle
                subtitle="NODEJS CON TYPESCRIPT"
                parrafo="Node no soporta de forma nativa typescript, pero si configuramos correctamente typescript podemos hacer que funcione. La ventaja de Typescript aparece porque muchos paquetes que corren en Node si dan soporte a Typescript. Incluso Node, proporciona un paquete de types."
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
                language="json"
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
