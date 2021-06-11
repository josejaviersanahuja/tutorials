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
            ], 
            url:"https://www.atlassian.com/es/git/tutorials/atlassian-git-cheatsheet"
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
        },
        cuarto: {
            title: "Probemos una complicación sencilla.",
            defBreve: "Vamos a intentar un pull request a master en github, y otro pull request en local. Ya eso lo vimos arriba. En github es muy sencillo.",
            arrayCodigo: [
                {
                    cod: `//intentemos mejorar el master y pushear
git push origin master`,
                    text: "Oh oh! Error, Rejected. ¿Por qué? Pasa que ambos pull request generan un id único, y como se hizo uno en remoto y otro en local, ahora, esos ids no se reconocen entre sí. ¿Como lo arreglamos? La idea es más que interesante, porque nos ayudará a trabajar en proyectos grandes. Vamos a aprender a hacer un rebase."
                },
                {
                    cod: "git pull --rebase origin master ",
                    text: "De esa forma conseguimos que ambos commits se fucionen entre sí. No funciona igual a la fusión de un pull request en github (merge en remoto) o a nuestro merge local. Esta funcionalidad se creó para que multiples personas puedan aportar simultaneamente al mismo proyecto. Imagina al desarrollador A trabajando en un componente complicado y tarda 7 días, y los desarrolladores B y C tardan solo 2 días en lanzar sus mejoras, se testean se aprueban y lanzan al quinto día el pullrequest de B y de C. Ya el origin master va a ser desconocido para el desarrollador A. El desarrollador A irá haciendo git pull --rebase origin master siempre haya un cambio, para asegurarse que siempre estará trabajando sobre la última actualización del proyecto."
                },
                {
                    cod: "git push origin master",
                    text: "Ahora es posible volver a pushear a nuestro master con las mejoras que hicimos en local. Nuestro amigo imaginario 'desarrollador A' puede hacer el push a su branch y crear un pulll request en github. Los administradores del proyecto, decidirán si lo añaden o no, pero nuestro amigo sabe que subió un proyecto actualizado y con su mejora añadida."
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
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
        </div>
    )
}
