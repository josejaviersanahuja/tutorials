import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
export default function UnitTypes() {
    
    const detalles={
        primero:{
            title: "Tipos de unidades",
            defBreve:"Existen 2 tipos a grandes rasgos. Relativas y absolutas. Los pixeles son especiales",
            arrayCodigo:[
                {
                    cod:" in (de inches), cm, mm",
                    text: "Son absolutas, muy malas para las apps multiplataformas. 10cm es demasiado para un móvil, y muy poco para una TV de 47 pulgadas"
                },
                {
                    cod:"fr, %",
                    text: "Son medidas relativas a algo. % y fr, son relativas al elemento padre"
                },
                {
                    cod:"em, rem",
                    text: "Son medidas relativas a la resolución de la pantalla y subsecuentemente al disposivo con el que se mira. em es relativo al font-size estandar"
                },
                {
                    cod:"vw (viewwidth), vh (viewheight) ",
                    text: "Son medidas relativas a la pantalla. 1vw es 1% del ancho del body o del tag"
                },
                {
                    cod:"los píxeles, px, pt, pc, son especiales ",
                    text: "Aunque se consideran absolutas, son relativas a la tecnología del dispositivo, HD ultraHD o low definition"
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="15/11/2020"/>
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
