import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function SshKeys() {

    const detalles = {
        primero: {
            title: "SSH KEYS, cómo se genera",
            defBreve: "Es uno de los mecanismos de autentificación que usa Github para asegurarse que quien manipula el código en remoto, es realmente el dueño de la cuenta. Para ello, se crean un sistema de llave cerrojo (clave pública, clave local) que permite la conexión segura, entre el acceso remoto (github) y un ordenador local.",
            arrayCodigo: [
                {
                    cod: "ssh-keygen -t rsa -b 4096 -C 'email@github.com'",
                    text: "Este código se compila en consola del ordenador local. Esto genera un código ssh del tipo rsa (el más común) con una fuerza de encriptado de 4096 y asociado al email de github"
                },
                {
                    cod: "Se genera un archivo, por defecto en C:/Users/usuario/.ssh/id_rsa",
                    text: "Puedes configurar el sitio y el nombre de la carpeta a donde se va a generar este archivo encriptado."
                },
                {
                    cod: "Si estás en un ordenador público, o de uso compartido, CIFRA el archivo con una frase clave",
                    text: "Esto impedirá que otros puedan ver y copiar el ssh-key privado. Ya mencioné que se trata de una llave pública y otra privada"
                }
            ]
        },
        segundo: {
            title: "Cómo usar las claves generadas",
            defBreve: "Ver, Configurar ssh-key en github, y autentificar el ordenador local.",
            arrayCodigo: [
                {
                    cod: "cat id_rsa.pub",
                    text: "Si nos situamos en el directorio .ssh qye se generó en el paso 1, y ejecutamos ese comando, podremos observar la clave que se ha generado. NOTA: aunque debemos ver y copiar la clave pública, resulta que la clave privada, ni si quiera tenemos que verla."
                },
                {
                    cod: "Vamos a Github - Settings - SSH and GPG keys",
                    text: "Añadimos el sshkey con un título, que yo pongo de forma que recuerdo en qué ordenador y a qué usuario estoy conectando con mi github."
                },
                {
                    cod: "ssh-add ~/.ssh/id_rsa",
                    text: "Esto es lo que autentificará que esa máquina tiene tu permiso para trabajar con los repositorios de github. Ahora si la máquina es de una persona en la que corre riesgo tu repositorio de git (hacker, o amigo developer sin experiencia)Puedes repetir el proceso de ssh-key para proteger tu ssh-key que has generado. Dejo el Link."
                }
            ],
            url:"https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="15/01/2021"/>
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
