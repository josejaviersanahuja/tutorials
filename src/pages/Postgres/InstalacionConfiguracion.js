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
        </div>
    )
}
