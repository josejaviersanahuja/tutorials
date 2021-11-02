import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Comandos() {
    
    const detalles={
        primero:{
            title: "Comandos Básicos. Comandos, Carpetas y Directorios",
            defBreve:"Vamos a ir construyendo comandos poco a poco",
            arrayCodigo:[
                {
                    cod:`// Comando 1
 ~ date
Mon Nov  1 14:14:59 WET 2021

// Comando 2
~ cal
November 2021
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6
7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30

// comando 3
~ cal 2020
                            2020
      January               February               March
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                     1   1  2  3  4  5  6  7
 5  6  7  8  9 10 11   2  3  4  5  6  7  8   8  9 10 11 12 13 14
12 13 14 15 16 17 18   9 10 11 12 13 14 15  15 16 17 18 19 20 21
19 20 21 22 23 24 25  16 17 18 19 20 21 22  22 23 24 25 26 27 28
26 27 28 29 30 31     23 24 25 26 27 28 29  29 30 31


       April                  May                   June
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                  1  2      1  2  3  4  5  6
 5  6  7  8  9 10 11   3  4  5  6  7  8  9   7  8  9 10 11 12 13
12 13 14 15 16 17 18  10 11 12 13 14 15 16  14 15 16 17 18 19 20
19 20 21 22 23 24 25  17 18 19 20 21 22 23  21 22 23 24 25 26 27
26 27 28 29 30        24 25 26 27 28 29 30  28 29 30
                      31

        July                 August              September
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                     1         1  2  3  4  5
 5  6  7  8  9 10 11   2  3  4  5  6  7  8   6  7  8  9 10 11 12
12 13 14 15 16 17 18   9 10 11 12 13 14 15  13 14 15 16 17 18 19
19 20 21 22 23 24 25  16 17 18 19 20 21 22  20 21 22 23 24 25 26
26 27 28 29 30 31     23 24 25 26 27 28 29  27 28 29 30
                      30 31

      October               November              December
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
             1  2  3   1  2  3  4  5  6  7         1  2  3  4  5
 4  5  6  7  8  9 10   8  9 10 11 12 13 14   6  7  8  9 10 11 12
11 12 13 14 15 16 17  15 16 17 18 19 20 21  13 14 15 16 17 18 19
18 19 20 21 22 23 24  22 23 24 25 26 27 28  20 21 22 23 24 25 26
25 26 27 28 29 30 31  29 30                 27 28 29 30 31

// Comando 4
~ whoami
zitrojj

// Comando 5 man
~ man date
// it redirects you to the manual inside the terminal. 
// press space bar to move to next page
// press q to exit.
`,
                    text: "De momento solo 5 comandos, muy simples y sencillos, pero que nos irán dando experiencia en la terminal. Sigamos con más comandos, esta vez de carpetas y directorios."
                },{
                    cod:`// Comando 1. man ls
~ ls
install.sh

~ ls -a // mostrar carpetas ocultas
.              .profile
..             .sudo_as_admin_successful
.bash_history  .viminfo
.bash_logout   .zcompdump
.bashrc        .zcompdump-SANAHUJA-ARRIECHE-5.8
.landscape     .zsh_history
.motd_shown    .zshrc
.oh-my-zsh     install.sh

// Comando 2 cd
cd .. - subir una carpeta
cd ../.. - subir 2 carpetas
cd /../ - subir al directorio raíz
cd /../home - vamos directo a la home
cd ~ - vamos a nuestro usuario /home/zitrojj
cd -  - este comando te lleva a la carpeta en la que te encontrabas antes de llegar ahí.

// Comando 3 
mkdir name
mkdir -p name/items/others // el -p nos permite crear subcarpetas también

// Comando 4 man rm
rm -rf name // así podemos borrar cualquier carpeta con todo su contenido

// Comando 5 mv
mv folder1 folder2 // mueve la carpeta folder1 dentro de la carpeta folder2
mv folder1/folder2 . // mueve la folder2 a la carpeta actual
// el . representa la carpeta actual.

// Comand 6 mv para cambiar el nombre de una carpeta.
mv folder1 unexistentFolder // esto va a cambiar el nombre de la carpeta folder1 a unexistentFolder
`,
                    text:"Excelente, yo les expongo las cosas nuevas que he aprendido. ls -a para ver carpetas ocultas, cd ~ y cd - se ven super útiles. mkdir -p, rm -rf también es super útil, y luego, aunque parezca mentira, me acabo de enterar que el . se refiere a la carpeta actual."
                }
            ]          
        }, segundo:{
            title:"Comandos Básicos. Files",
            defBreve:"Ahora vamos a ver los comandos básicos relacionados con la creación, lectura y escritura de archivos.",
            arrayCodigo:[
                {
                    cod:`// lectura de archivos
// Comando 1.
cat file // muestra el contenido del archivo en string

// Comando 2.
head file // muestra solo las primeras líneas

// Comando 3.
tail file // muestra las últimas líneas del archivo

// Comando 4.
less file // muestra y pagina el contenido del archivo
`,
                    text:"Con esos 4 comandos podemos leer archivos. Ahora veamos cómo crear y escribir sobre archivos."
                },{
                    cod:`// crear y escribir en archivos parte 1.
// Comando 1.
touch file // crea el archivo

mv file anotherfilename // cambia el nombre del archivo.

echo "texto argumento" > file // crea el archivo file con el texto argumento

echo "texto argumento" >> file // Añade el texto argumento al final del file
`,
                    text:"Parece ser que existen formas mucho más avanzadas de crear texto dentro archivos, usando editores de texto para terminales. VIM, ya lo estudiaremos más adelante, pero de momento esta es la forma de escribir dentro de archivos. Veamos más operaciones con archivos, como copy (cp), find, y find from content (grep)"
                },{
                    cod:`// Copy
// Comando 1. cp
cp file1 file1-copy // hace una copia del archivo

cp *.sql dir // copia todos los sql dentro del directorio dir

cp -r dir dir-copy // crea una copia de la carpeta y todo su contenido

// Comando 2. find
find . -name file(or dir) // busca dentro del current path el archivo o directorio por su nombre.

find . -type (d ó f) -name <fileOrDir> // type d es directorio type f es file

find . -iname file(or dir) // con la i hacemos una búsqueda ignorando mayusculas de minusculas.

find . -type d -empty // el tag empty busca directorios o archivos vacíos.

find . -type f -name file -delete // busca y elimina los archivos con ese nombre.

//Comando 3. grep
grep -r "argumento" dir // busca todos los archivos dentro de dir que contengan "argumento" escrito dentro.

grep -rn "argumento" dir // lo mismo pero además muestra en qué línea aparece escrito dicho "argumento"

grep -rni "argumento" dir // lo mismo pero además no presta distinción a las mayúsculas de minúsculas dentro del "argumento".

grep -rni -A 1 -B 3 "argumento" dir // lo mismo pero además muestra las 3 líneas previas y 1 línea posterior al "argumento"

`,
                    text:"Con eso ya tenemos con los comandos básicos de las terminales."
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="01/11/2021"/>
            <Subtitle
                subtitle="Comando de la Terminal"
                parrafo="Vamos a ir aprendiendo los comandos poco a poco. Vamos a empezar"
            />
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
            
        </div>
    )
}
