import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PrimerosUsos() {

    const detalles = {
        primero: {
            title: "Descargar y usar bases de datos en un entorno local.",
            defBreve: "Solo repetiré lo que dijo el instructor en el curso de LinkedIn Learning Databases for Nodejs. 'Configurar todas estas bases de datos puede llevarnos tiempo y no es un proceso que nos enseñe demasiado sobre sus usos, por eso usaremos docker para que este se encargue de descargar y usar de forma inmediata. Para el que no lo sepa, Docker ejecuta de forma aislada distintos programas. MongoDB, Redis, MySQL son programas famosos y Docker tiene una imagen actualizada disponible para descargar y setear de forma automática. Por ese motivo, el trabajo es basicamente, descargar y usar los programas.",
            arrayCodigo: [
                {
                    cod: `// Paso 1: decargamos mongodb
docker pull mongodb

// paso 2
docker run --name mongodb -p 37017:36017 -d mongodb

`,
                    text: "Previo a esto, ya debimos instalar y correr docker previamente. Con estos dos comando, ya tenemos mongodb corriendo en docker, en un entorno local donde podemos llamar a mongodb://localhost:37017 y con esa url, podemos setear mongodb en nuestro backend con nodejs"
                }, {
                    cod: `// Paso 1: decargamos redis
docker pull redis

// paso 2
docker run --name redis -p 7379:6379 -d redis

`,
                    text: "Redis usa por defecto el puerto 6379, por eso escogemos esos números, no son al azar."
                }, {
                    cod: `// Paso 1: decargamos mysql
docker pull mysql

// paso 2
docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=****** -d mysql

`,
                    text: "My sql requiere un password y usa por defecto el puerto 3306. Eso es todo, con esto ya podemos usar nuestros programas GUI favoritos para conectar con nuestras bases de datos locales, o usar nodejs para conectar con nuestras bases de datos."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="09/09/2021" />
            <Subtitle
                Subtitle="Docker Primeros Usos."
                parrafo="Docker es una gran herramienta pero pueder parecer retador, no es para principiantes. Sin embargo, mi primera toma de contacto con docker ha sido tan benigna, que deseo compartirla, para que podamos adquirir confianza el día de mañana. Vamos a ello."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
