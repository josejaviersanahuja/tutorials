/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function InstalacionConfiguracion() {
    
    const detalles={
        primero:{
            title: "Instalación.",
            defBreve:"Vamos a aprender cómo instalar postgres en Linux con solo 4 comandos será suficiente.",
            arrayCodigo:[
                {
                    cod:`# paso 1
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# paso 2
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# paso 3
sudo apt-get update

# paso 4
sudo apt-get install postgresql // Si quieres una versión específica copiala así postgresql-12
`,
                    text: "De esta forma ya deberíamos tener instalado postgres en nuestra máquina linux. Ahora veamos cómo interactuar con postgres desde la terminal de comandos."
                }
            ],
            url:"https://www.postgresqltutorial.com/install-postgresql-linux/"
        }, segundo:{
            title:"Postgres CLI",
            defBreve:"Vamos a aprender cómo interactuar con el programa de postgres desde la consola.",
            arrayCodigo:[
                {
                        cod:`# 1. ejecutamos el programa como super usuario
➜  ~ sudo -i -u postgres


# 2. entramos en el modo prompt de postgres
postgres@zitrojjdev:~$ psql

# 3. aprendamos a salir antes que nada
postgres=# (backslash)q

# 4. salimos de postgres
postgres@zitrojjdev:~$ exit
`,
                        text:"Esta sección es demasiado básica, solo muestra las formas de entrar y de salir correctamente de postgres, ahora empezaremos a ver otros comando y formas de cómo conectarnos."
                },{
                    cod:`# listar las databases
postgres=# (backslash)l

# listar los usuarios
postgres=# (backslash)du

# crear un usuario
postgres=# CREATE ROLE demorole1 WITH LOGIN ENCRYPTED PASSWORD 'password1';

# borrar el rol o usuario
postgres=# DROP ROLE demorole1;

# crear un superusuario
postgres=# CREATE ROLE mysuperuser2 WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'mysuperpass2';

# crear una base de dato
postgres=# CREATE DATABASE test;
                    
`,
                    text:"Ya hemos podido empezar a interactuar con el programa, y ya ganamos una ligera experiencia. Vamos a seguir con el curso, para ver a donde llegamos. Dato curioso, para que desde linux, podamos entrar al prompt de postgres desde nuestro usuario, sin necesidad de usar sudo -i -u postgres, debemos crear tanto el rol como una base de datos con el nombre de nuestro usuario, y una vez creado, ya podemos entrar a psql directamente desde nuestro shell."
                }
            ]
        },
        tercero:{
            title:"Cómo conectarnos a nuestra base de datos",
            defBreve:"Vamos a aprender comandos básicos de cómo crear y manipular bases de datos y tablas y cómo conectarnos.",
            arrayCodigo:[
                {
                    cod:`# HELP para aprender a configurar postgres
➜  ~ psql --help
 
# los flags más importantes serán -h, -p, -U
➜  ~ psql -h localhost -p 5432 -U zitrojj mathapp 
// Contraseña para usuario zitrojj:
// psql (14.1 (Ubuntu 14.1-2.pgdg20.04+1))
// Conexión SSL (protocolo: TLSv1.3, cifrado: TLS_AES_256_GCM_SHA384, bits: 256, compresión: desactivado)
// Digite «help» para obtener ayuda.

# la forma local de conectarnos a la base de datos
➜  ~ psql
zitrojj=# (backslash)c mathapp
//Ahora está conectado a la base de datos «mathapp» con el usuario «zitrojj».

`,
                    text:"Esto es realmente muy importante, porque muestra cómo podemos conectarnos de forma local y de forma remota a nuestra base de datos."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="14/12/2021"/>
            <Subtitle
                subtitle="Instalacion y Configuración en Linux."
                parrafo="Vamos a aprender a usar Postgres desde Linux y con la terminal de comandos."
            />
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
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
