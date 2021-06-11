import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function PrimerosComandos() {

    const detalles = {
        primero: {
            title: "Empecemos nuestros primeros comandos",
            defBreve: "Git empieza flojo, pero luego se vuelve interesante.",
            arrayCodigo: [
                {
                    cod: "git init",
                    text: "Así se inicializa git en tu proyecto. Crea la carpeta invisible .git donde se guarda todo el flow de tu código."
                },
                {
                    cod: "git status",
                    text: "Te permite ver que archivos aún no sigue el sistema git, y te permite ver cuales si sigue y ya ha detectado cambios."
                },
                {
                    cod: "git add <archivo> | git add .",
                    text: "En el primer caso, te permite seguir un archivo nuevo, o un archivo que haya sido cambiado. En el segundo caso te permite seguir todos los archivos cambiados."
                },
                {
                    cod: `git commit <branch> -m "titulo del commit" -m "cuerpo del commit" `,
                    text: "La segunda m, la del cuerpo del commit es opcional."
                }
            ]
        },
        segundo: {
            title: "Ahora usemos nuestro Github",
            defBreve: "En el tema anterior vimos una forma de autentificar nuestra máquina de trabajo con nuestra cuenta github, usemosla.",
            arrayCodigo: [
                {
                    cod: `1) En nuestro github creamos un nuevo repositorio vacío 
| O 2)  lo creamos con nuestro README.md y lo clonamos
git clone https://github.com/josejaviersanahuja/newrep.git`,
                    text: "Usa la opción 1, si ya comenzaste el proyecto, y la opción 2, si aún no has comenzado el proyecto y quieres comenzarla con el git ya inicializado y el remote también."
                },
                {
                    cod: "git remote add origin https://github.com/josejaviersanahuja/newrepo.git",
                    text: "Si escogiste hacer primero tu proyecto, debes añadir el sitio remoto donde vas a guardar ese proyecto. El nuevo repo que hiciste en el paso 1."
                },
                {
                    cod: "git push origin <branch>",
                    text: "OJO con la rama en la que estás trabajando, si tipeas mal, crearás una nueva rama en tu repo de github."
                }
            ]
        },
        tercero: {
            title: "Intentemos algo ligeramente más complejo, pero igualmente sencillo.",
            defBreve: "Vamos a suponer que tenemos ya un proyecto con una primera versión terminada y ya deployada. Pero queremos mejorar ciertas cosas del proyecto y no queremos un proyecto a medias en nuestro deploy. ¿Qué hacemos? vamos a crear una rama nueva, con nuestra mejora mejorEstilo le llamaremos",
            arrayCodigo: [
                {
                    cod: `git checkout -b mejorEstilo`,
                    text: "Abrimos nuestro editor de código, y VSC en la esquinita inferior izquierda muestra la rama en la que estás trabajando. Nos quedamos retocando solo esa rama."
                },
                {
                    cod: "git push origin mejorEstilo",
                    text: "De esa forma añadimos nuestra nueva rama a nuestro repositorio en github. Y trabajamos hasta terminar esta mejora."
                },
                {
                    cod: "git checkout master && git merge mejorEstilo",
                    text: "Asegurate de que en ambas ramas esta todo commiteado y pusheado. Si no trabajaste nunca en el master simultaneamente al mejorEstilo, será un commit sin complicaciones."
                },
                {
                    cod: "git branch -d mejorEstilo",
                    text: "En el local, tener la rama mejorEstilo, no tiene sentido. Aunque puede ser una buena práctica dejar el branch mejorEstilo en remoto, por si surgieran bugs que haya que trabajar."
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
