import React from 'react'
import useAbrirCerrar from 'hooks/useAbrirCerrar'

export default function DetallesSubtema({title, defBreve, arrayCodigo}) {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="marco"><h4>{title}</h4>
                <div> {defBreve}</div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                        {arrayCodigo.map(e=> <li key={arrayCodigo.indexOf(e)+e.text}><b>{e.cod}</b> || {e.text}</li>)}
                        </ul>
                    </div> : null}
            </div>
    )
}
