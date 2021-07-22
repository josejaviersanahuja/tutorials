import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function GitBranches() {

    const detalles = {
        primero: {
            title: "Git Branches, the basics",
            defBreve: "Este es un curo creado por un trabajador de Git Tower para FreecodeCamp. Dejo el link del vídeo. También usaremos una herramienta llamada SmartGit. Esto es un curso más avanzado del que ya hice una vez. Y finalizaremos con una prueba de rebase.",
            arrayCodigo: [
                {
                    cod: `git branch my-new-branch ?¿ <2b500o>`,
                    text: "Así creamos una rama nueva pero no basada en la última revisión."
                },
                {
                    cod: `git switch other-branch`,
                    text: "Debemos dejar de usar checkout para cambiar de ramas. Por qué? porque checkout es un comando muy complejo, puedes crear nuevas branches. Seguirá sirviendo pero para comandos más complejos."
                },
                {
                    cod: `git branch -m new-name`,
                    text: "Este comando sirve para renombrar una rama. La rama en remoto debe ser eliminada y volver a crearse con el nombre nuevo. Veamos como."
                },
                {
                    cod: `git push origin --delete old-name-branch

git push -u origin new-name-branch`,
                    text: "Lo más interesante de este comando es la -u. Por qué? porque sin el -u, el historial no quedará rastreable para las otras ramas, y cualquier pull request traerá problemas. Ejemlpo... Incluso podremos hacer push y pull sin escribir origin master."
                },
                {
                    cod: `git branch --track new-branch-on-origin origin/new-branch-on-origin
// OR                    
git checkout --track origin/new-branch-on-origin`,
                    text: "Imagina que trabajas en un proyecto grande, y que aparecen nuevas ramas en remoto que tu no tienes en el local. Este comando sirve para crear esa rama en el local, y si fue correctamente creado con -u entonces, se establece una conexión y con un git pull ya podemos tenerla."
                },
                {
                    cod: `git pull
                    
git push`,
                    text: "Si creamos nuestro remotes con el comando -u podemos usar eso solamente."
                }
            ],
            url:"https://www.youtube.com/watch?v=e2IbNHi4uCI"
        },
        segundo: {
            title: "Git branches, The Advanced",
            defBreve: "Empezamos a trabajar con los comandos más delicados. Dejaré un link abajo para una prueba final.",
            arrayCodigo: [
                {
                    cod: `git switch main
                    
git merge other-branch`,
                    text: "Siempre lo ejecutamos en la rama que deseamos traer nuevos datos. Cuando el merge es exitoso, veremos una ventana aparecer con el nombre del commit. Sal de la ventana, aunque podrías cambiar el nombre del commit, mejor dejalo. :exit puede ayudar con git bash. El resultado del merge es un grafo de ramas integradas."
                },
                {
                    cod: `git switch main
                    
git rebase other-branch`,
                    text: "La diferencia es que el historial del main tras el rebase exitoso quedará lineal. No habrán grafos detrás en el historial. Igualmente es como el merge. tras el exito aparecerá una ventana, :exit en git bash y se acabó. OJO, esto es 100% útil si eres tu el que traes el master a tu rama de trabajo, porque tu línea de trabajo será lineal."
                },
                {
                    cod: `git log branch-1..branch-2`,
                    text: "Esto compara 2 ramas, y esto podrá decirnos que commits existen en el 2 que no existen en el 1. Y qué sucede si hay un problema en el merge o el rebase? Cuando eso ocurre, el procedo queda suspendido y no podrás salir de esa rama en conflicto hasta que lo soluciones. La forma más facil es abriendo VS CODE. "
                },
                {
                    cod: `// planteamiento del caso
git rebase other-branch`,
                    text: "Aparece un error que dice. no se puede completar la acción porque hay un conflicto. En ese momento abre el VS CODE con el comando code .   En el editor selecciona qué cambios deseas obtener y cuales descartar. guarda los cambios pero no comitees, máximo solo haz el git add . para dejarlos en staged."
                },
                {
                    cod: `//Luego volvemos a consola de nuevo y escribimos
                    
git rebase --continue`,
                    text: "Ahora terminamos con un rebase o un merge exitoso. Realiza la prueba que dejo en el link de abajo. Suerte"
                }
            ],
            url:"https://github.com/superstruct-tech/challenge-react-rebase"
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="22/07/2021"/>
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
