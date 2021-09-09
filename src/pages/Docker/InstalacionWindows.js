import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function InstalacionWindows() {

    const detalles = {
        primero: {
            title: "Guía de instalación del Subsistema de Windows para Linux para Windows 10",
            defBreve: "Es mejor que sigas detenidamente el link que dejo más abajo, pero si voy a resumir ligeramente lo que se hace. Por ejemplo, debo añadir que es mejor seguir la instalación manual.",
            arrayCodigo: [
                {
                    cod: `// Paso 1: Habilitación del Subsistema de Windows para Linux
// ejecuta lo siguiente en el powershell como administrador

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

// Paso 2: comprobación de los requisitos para ejecutar WSL 2
// basicamente si no actualizas tu sistema operativo, revisa bien esta parte
// si se actualiza, seguro podemos pasar al tercer paso

//Paso 3: Habilitación de la característica Máquina virtual
// ejecuta como administrador en powershell

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

RESTART THE PC

// Paso 4: Descarga del paquete de actualización del kernel de Linux
// <a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi" data-linktype="external">Paquete de actualización del kernel de Linux en WSL&nbsp;2 para máquinas x64</a>
// es un ejecutable simple y sencillo de toda la life

// Paso 5: Definición de WSL 2 como versión predeterminada

// Ejecuta en powershell

wsl --set-default-version 2

...
`,
                    text: "Aunque los pasos continúan hasta llegar literalmente a correr linux dentro de windows, ya con estos pasos, podremos instalar docker para windows 10."
                }
            ],
            url: "https://docs.microsoft.com/es-es/windows/wsl/install-win10"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="08/09/2021" />
            <Subtitle
                Subtitle="Docker En Windows."
                parrafo="Docker es una herramienta que corre naturalmente en Linux, sin embargo, si configuramos bien nuestro ordenador, podemos correr linux en un entorno aislado, y por tanto correr docker. En esta sección mostraremos los links y pasos para aprender a usar docker en windows 10. Vamos a ello."
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
