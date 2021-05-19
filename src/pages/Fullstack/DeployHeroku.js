import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function DeployHeroku() {
 
   const detalles={
        primero:{
            title: "Middleware",
            defBreve:"Es una función o método en el que siempre entra a ejecutarse.",
            arrayCodigo:[
                {
                    cod:"app.use(path?, función)",
                    text: "el path es solo si queremos que se ejecute para ciertos path. sin el path se ejecuta siempre. La función recibe de parámetros el request, el response y el next"
                },
                {
                    cod:"(request, response, next) => {haga lo que haga. ya sea console.log(request.path) debe terminar en next()}",
                    text: "Para lo que queramos que se use el middleware, debe terminar en next()"
                },
                {
                    cod:"app.use(express.json())",
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
        terceroo:{
            title: "CORS",
            defBreve:"Es un protocolo de comunicación del servidor. Con esto se establece con quienes puede comunicarse el servidor. Es complejo, solo veremos el caso de cómo dejar abierto nuestro servidor, y usaremos un middleware de EXPRESS para hacerlo",
            arrayCodigo:[
                {
                    cod:"npm install cors -E",
                    text: "OJO. Es una dependencia de producción. Nota: el -E es para evitar el ^ en las dependencias"
                },
                {
                    cod:"const cors = require('cors')",
                    text: "Así lo importamos"
                },
                {
                    cod:"app.use(cors())",
                    text: "Así lo seteamos por defecto, abierto para el mundo"
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
            
        </div>
    )
}
