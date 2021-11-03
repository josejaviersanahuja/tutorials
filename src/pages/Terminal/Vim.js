import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Vim() {
    
    const detalles={
        primero:{
            title: "Cómo empezar a usar Vim",
            defBreve:"Vim viene instalado por defecto en Linux y Mac, así que lo más seguro es que  no tengamos que instalarlo. Vamos directo al grano.",
            arrayCodigo:[
                {
                    cod:`// Comando 1. Abrir o crear un archivo
vim file

// Comando 2.
vim +num file // abre el archivo y posiciona el cursor en la línea num
`,
                    text: "Ya con esto podemos empezar a usar vim, se va a abrir el archivo en nuestra terminal y podremos empezar a desplazarnos libremente. Una cosa más, vim tiene 2 modos de operar, los llamaré 'Modo comando' y 'Modo insertar'"
                },{
                    cod:`// Comand Mode
// Es modo es donde podemos navegar con el teclado sobre vim sin editar el texto del archivo
// Es el modo en el que entramos por defecto.

// Comando 1. swap to insert mode
i - tecleando i podemos cambiar al Modo insertar justo donde el cursor se encuentra
a - tecleando a podemos entrar al modo insertar un espacio después del cursor.
supr - tecleando suprimir podemos entrar suprimiendo la siguiente letra
o - tecleando o podemos entrar creando una línea nueva abajo del cursor.
shift + o - podemos entrar creando una línea nueva antes de donde se encuentra el cursor
shift + a - podemos entrar en modo insertar justo al final de la línea donde se encuentra el cursor

// Comando 2. Salir del modo insertar
esc - con escape podemos volver al modo comando
`,
                    text:"Ya hemos visto como entrar y salir del modo insert. Ahora veamos el modo comando incluyendo las formas de salir y guardar los cambios de los archivos."
                },{
                    cod:`// Comando 1. navegar por la terminal.
                    
gg - moves to the first line
shift + g - moves to the last line
num + gg - moves to the line number num
0 - moves to the begining of the line
$ - moves to the end of the line
^ - moves to the first char of the line
w - moves to the next word
b - moves to the prev. word
h - moves ←
j - moves ↓
k - moves ↑
l - moves →

// Comando 2. Acciones Básicas
u - undo changes, similar a ctrl + z
ctrl +r - redo changes
:w - guardar cambios
:wq - guardar y salir del programa
:q! - salir del programar sin guardar cambios
:set nu - permite mostrar el número de la línea en el editor
:syntax on - permite dar un color al formato del texto. highlighter

// Comando 3. Cortar, Pegar
dd - corta toda la línea
dw - corta la palabra siguient al cursor
(num)dd - corta las siguientes num líneas
dG - corta todo el contenido del archivo
db - corta la palabra previa
d0 - corta desde el cursor al comienzo de la línea
d$ - corta desde el cursor al final de la línea
p - Pegar lo que se encuentre en el clipboard

// Comando 4. Buscar, Buscar y Reemplazar
/word - busca la palabra word en el texto
n - se posiciona en la siguiente instancia de word en el texto
shift + n - se posiciona en la instancia previa de la palabra word.
:%s/word/newWord/gc - vamos a explicarlo por paso. El comando es search word and replace por newWord
// el flag g, permite que el cambio se aplique en todo el texto.
// el flag c, permite que se pida confirmación del cambio instancia por instancia.`,
                    text:"Y con esto acabamos de momento con Vim. Queda crear el archivo .vimrc que es donde se configura todo el programa vim. Dejo link para ver como puede configurarse."
                }
            ],
            url:"https://github.com/amix/vimrc"          
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="03/11/2021"/>
            <Subtitle
                subtitle="Vim"
                parrafo="Vim es el mejor editor de texto accesible desde una terminal. Si, no es gran cosa, si poseemos un sistema operativo, por qué no usar VS Code o IntelliJ o notepad? Pero cuando debemos actuar sobre un servidor remoto y solo tenemos acceso a través de una terminal, Vim se vuelve la herramienta más poderosa a nuestro alcance. Por eso debemos aprender Vim. Vamos a ello."
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
