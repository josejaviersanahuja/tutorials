import React from 'react'
import 'App.css'
import desierto from 'video/desierto.mp4'
import DetallesSubtema from 'components/DetallesSubtema'

export default function AdvancedTags() {
    
    const detalles ={
     primero:{
        title: "Videos",
        defBreve:"Como añadir un vídeo que tenemos guardado ",
        arrayCodigo:[
            {
                cod:"<video src='' controls width='' poster='imgsrc' (loop or autoplay)/>",
                text: "puedes cargar el vídeo "
            }
        ],
        video:desierto
    },
    segundo:{
        title: "Tables",
        defBreve:"Todo lo que podemos usar",
        arrayCodigo:[
            {
                cod:"<table> <caption> <th> <tr> <td> <thead> <tbody> <td colspan='2'>",
                text: " tabla, título, header de cada columna, fila, contenido de cada elemento. el colSpan es fabuloso tambien"
            }
        ]
    },
    tercero:{
        title: "Spans vs Divs",
        defBreve:"Ambos contenedores, pero uno es inline, el otro en bloque",
        arrayCodigo:[
            {
                cod:"<span>",
                text: "Este es inline"
            },
            {
                cod:"<div>",
                text: "Este es en bloque"
            }
        ]
    },
    cuarto:{
        title: "Forms de muchas formas",
        defBreve:"inputs, checkbox y mas",
        arrayCodigo:[
            {
                cod:"<input type=''/> <!--types='password, date, range'-->",
                text: "Si el type es password, sirve en log ins con password, type date es util para fechas, range puede poner una barra de rango"
            },
            {
                cod:"<input type=''/> <!--types='files, checkbox, radio'-->",
                text: "Puedes introducir un archivo, o un checkbox, radio con el mismo nombre es un checkbox excluyente. Para más input types, revisa el link al final de estos apuntes "
            },
            {
                cod:"<textarea rows='5' cols='10'/> {children} ",
                text:"es un bloque para introducir texto, el children pude aparecer  "
            }
        ],
        url:"https://www.w3schools.com/TagS/att_input_type.asp"
    },
    quinto:{
        title: "Iframes",
        defBreve:"Imbuir otra website dentro de la mia, como los vídeos de youtube que aparecen en el index de cada curso",
        arrayCodigo:[
            {
                cod:"<iframes src='http://localhost:3000' width='800' height='600' frameborder=''>{children}</iframe>",
                text: "Este es inline"
            },
            {
                cod:"<div>",
                text: "Este es en bloque"
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
                video={detalles.primero.video}
                language="html"
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="html"
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="html"
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
                url={detalles.cuarto.url}
                language="html"
            />
            <DetallesSubtema
                title={detalles.quinto.title}
                defBreve={detalles.quinto.defBreve}
                arrayCodigo={detalles.quinto.arrayCodigo}
                language="html"
            />
        </div>
    )
}
