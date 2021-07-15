import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
export default function DeployHeroku() {
 
   const detalles={
        primero:{
            title: "Middleware",
            defBreve:"Es una función o método en el que siempre entra a ejecutarse.",
            arrayCodigo:[
                {
                    cod:`app.use(path?, función)`,
                    text: "el path es solo si queremos que se ejecute para ciertos path. sin el path se ejecuta siempre. La función recibe de parámetros el request, el response y el next"
                },
                {
                    cod:`(request, response, next) => {
    haga lo que haga. ya sea 
    console.log(request.path) 
    debe terminar en 
    next()
}`,
                    text: "Para lo que queramos que se use el middleware, debe terminar en next()"
                },
                {
                    cod:`app.use(express.json())`,
                    text: "Esto es un middleware, solo que express.json() ya incorpora todo lo que hay que hacer, hasta el next()"
                }
            ]
        },
        segundo:{
            title: "Modulos e importar modulos",
            defBreve:"Vamos a crear un middleware llamado logger, en un archivo a parte del proyecto, y vamos a importarlo",
            arrayCodigo:[
                {
                    cod:"module.exports=logger",
                    text: "Declaramos la función como constante, y la exportamos desde nuestro otro archivo."
                },
                {
                    cod:"const logger = require('./middlewares/logger')",
                    text: "Así lo importamos"
                }
            ]
        },
        tercero:{
            title: "CORS",
            defBreve:"Es un protocolo de comunicación del servidor. Con esto se establece con quienes puede comunicarse el servidor. Es complejo, solo veremos el caso de cómo dejar abierto nuestro servidor, y usaremos un middleware de EXPRESS para hacerlo",
            arrayCodigo:[
                {
                    cod:`npm install cors -E`,
                    text: "OJO. Es una dependencia de producción. Nota: el -E es para evitar el ^ en las dependencias"
                },
                {
                    cod:`const cors = require('cors')`,
                    text: "Así lo importamos"
                },
                {
                    cod:"app.use(cors())",
                    text: "Así lo seteamos por defecto, abierto para el mundo"
                }
            ]
        },
        cuarto:{
            title: "Deploy con Heroku",
            defBreve:"Heroku es un servicio de servidor gratuito para apps pequeñas y servidores pequeños. Soporta bien servicios Nodejs. Perfecto para nuestra API. Hay que descargar Heroku CLI en windows. Dejo el link al final de los apuntes",
            arrayCodigo:[
                {
                    cod:`Añadimos un archivo llamado Profile y añadimos la línea 
web: npm start`,
                    text: "Este es el archivo que le dirá a Heroku, qué servicio va a deployar y con qué comando lo hará"
                },
                {
                    cod:"const PORT = process.env.PORT || 3002",
                    text: "Antes del deploy, hay que modificar nuestra constante del puerto. Heroku va a asignar el puerto que ellos consideren, así que process.env.PORT les permite manejar a ellos esa variable."
                },
                {
                    cod:"heroku create",
                    text: "Heroku trabaja con GIT, así que esa línea de comando, la ejecutamos en un git bash por ejemplo. Esto va a crear mi url, y además añade la url a donde podemos hacer git remote."
                },
                {
                    cod:"git push heroku master",
                    text: "Como con heroku create, ya tenemos nuestro git remote configurado, podemos hacer push directamente. Tuve que pasar por un proceso de autentificación. Y ya está nuestra API aquí."
                }
            ],
            url:"https://devcenter.heroku.com/articles/heroku-cli"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="15/05/2021"/>
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
                url={detalles.cuarto.url}
            />
        </div>
    )
}
