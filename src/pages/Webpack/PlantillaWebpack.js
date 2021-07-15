import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function PlantillaWebpack() {
    
    const detalles={
        primero:{
            title: "Todas las descargas aquí, paso a paso",
            defBreve:"Primero veamos todas las dependencias que necesitamos.",
            arrayCodigo:[
                {
                    cod:`"dependencies": {
                        "react": "^17.0.2",
                        "react-dom": "^17.0.2",
                        "react-router-dom": "^5.2.0"
                      }`,
                    text: "De momento son las dependencias que vamos a instalar. Aún debo averiguar como usar los hooks del react router con typescript. Se usa npm install react react-dom react-router-dom"
                },
                {
                    cod:`"devDependencies": {
                        "@babel/cli": "^7.14.3",
                        "@babel/core": "^7.14.3",
                        "@babel/preset-env": "^7.14.4",
                        "@babel/preset-react": "^7.13.13",
                        "@babel/preset-typescript": "^7.13.0",
                        "@types/jest": "^26.0.23",
                        "@types/node": "^15.12.1",
                        "@types/react": "^17.0.9",
                        "@types/react-dom": "^17.0.6",
                        "@types/react-router-dom": "^5.1.7",
                        "@typescript-eslint/eslint-plugin": "^4.26.0",
                        "@typescript-eslint/parser": "^4.26.0",
                        "babel-loader": "^8.2.2",
                        "css-loader": "^5.2.6",
                        "eslint": "^7.28.0",
                        "file-loader": "^6.2.0",
                        "html-webpack-plugin": "^5.3.1",
                        "image-webpack-loader": "^7.0.1",
                        "jest": "^27.0.4",
                        "react-hot-loader": "^4.13.0",
                        "style-loader": "^2.0.0",
                        "typescript": "^4.3.2",
                        "webpack": "^5.38.1",
                        "webpack-cli": "^4.7.0",
                        "webpack-dev-server": "^3.11.2",
                        "webpack-merge": "^5.7.3"
                      }`,
                    text: "Se usa npm install webpack ... -D . los puntos suspensivos implican cada dependencia listada arriba. Babel es el loader y requiere varios presets. De webpack necesitamos como 6 cosas distintas, luego necesitamos loaders de css, de imagenes (file-loader) etc etc."
                }
            ]
        },
        segundo:{
            title: "Los scripts del proyecto",
            defBreve:"npm run start, npm run dev npm run build y quizas algún otro.",
            arrayCodigo:[
                {
                    cod:`scripts": {
                        "build": "npm run clean-dist && webpack --config=configs/webpack/prod.js",
                        "clean-dist": "rimraf dist/*",
                        "lint": "eslint './src/**/*.{js,ts,tsx}' --quiet",
                        "start": "npm run start-dev",
                        "start-dev": "webpack serve --config=configs/webpack/dev.js",
                        "start-prod": "npm run build && node express.js",
                        "test": "jest --coverage --watchAll --config=configs/jest.json"
                      }`,
                    text: "Esta forma de configurar webpack, nos evita el archivo webpack.config.js PERO es básicamente lo mismo. Vamos a ver cada archivo de configuración uno a uno."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="25/03/2021"/>
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
                language="json"
            />
        </div>
    )
}
