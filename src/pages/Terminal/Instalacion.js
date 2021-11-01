import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Instalacion() {
    
    const detalles={
        primero:{
            title: "Instalación zsh.",
            defBreve:"Una vez tienes ya configurado el wsl en windows, es tan sencillo como ir a la tienda de windows y descargar ubuntu. Si aún no has instalado wsl, sigue el link de abajo, te llevará a la configuración de wsl que instalé cuando quise correr docker en mi windows 10. Con eso es suficiente, de todas formas, en mi tutorial de docker, también puse un link a la documentación oficial de microsoft para aprender a instalar y configurar wsl (windows subsystem for linux)",
            arrayCodigo:[
                {
                    cod:`// una vez en la terminal ubuntu...
echo $SHELL
-> /bin/bash

// esto significa que estamos corriendo en una terminal de bash.

sudo apt-get install zsh

chsh -s /bin/zsh

// ya hemos instalado y seteado zsh como terminal predeterminado.
`,
                    text: "No te olvides de cerrar la terminal y abrirla de nuevo, vuelve a correr el comando echo $SHELL y si todo fue bien, debes tener /bin/zsh como resultado. En medio de todo este proceso, deberás también setear el nombre del superUsuario de ubuntu y la clave de acceso. Ahora veamos cómo instalar oh my zsh "
                }
            ],
            url:"https://tutorials-vert.vercel.app/Docker/Instalaci%C3%B3n%20Windows10"          
        },
        segundo : {
            title:"Instalar Oh My Zsh",
            defBreve:"Oh My Zsh es un framework opensource para la terminal zsh. Nos ofrece mezclar las mejores funciones de todas las terminales en una sola terminal. Vamos a instalarla.",
            arrayCodigo:[
                {
                    cod:`// debemos instalar oh my zsh con curl
curl -Lo install.sh https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh
sh install.sh`,
                    text:"Con esto es suficiente de momento, pero si has encontrado problemas en medio del proceso, te dejo este otro link, donde muestran otra forma de instalar zsh y oh my zsh en windows 10."
                }
            ],
            url:"https://platzi.com/blog/como-instalar-zsh-en-windows/"
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="01/11/2021"/>
            <Subtitle
                subtitle="Vamos a instalar zsh y oh my zsh"
                parrafo="Al parecer, zsh es la terminal más querida por los desarrolladores porque puede personalizarse a niveles insospechados si eres nuevo en este mundo. Si estás en Windows deberás tener instalado y configurado el subsistema de linux en windows. Iré dejando links"
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
                url={detalles.segundo.url}
            />
            
        </div>
    )
}
