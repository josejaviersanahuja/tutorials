import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function UnitTypes() {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="cuerpo">
            <div className="marco"><h4>Tipos de unidades</h4>
                <div>Existen 2 tipos a grandes rasgos. <b>Relativas y absolutas</b>. Los pixeles son especiales</div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li>Absolutas como <b>in</b>(ches), <b>cm</b>, <b>mm</b>|| Son absolutas, muy malas para las apps multiplataformas. 10cm es demasiado para un móvil, y muy poco para una TV de 47 pulgadas </li>
                            <li>Relativas con <b>fr, %</b> || Son medidas relativas a algo. % y fr, son relativas al elemento padre</li>
                            <li>Relativas con <b>em, rem</b> || Son medidas relativas a algo. em es relativo al font-size estandar</li>
                            <li>Relativas con <b>vw</b> (viewwidth), <b>vh</b> (viewheight) || Son medidas relativas a la pantalla. 1vw es 1% del ancho del body o del tag</li>
                            <li>los píxeles, <b>px, pt, pc</b>, son especiales  || Aunque se consideran absolutas, son relativas a la tecnología del dispositivo, HD ultraHD o low definition</li>
                        </ul>
                    </div> : null}
            </div>
        </div>
    )
}
