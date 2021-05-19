import React from 'react'
import useAbrirCerrar from 'hooks/useAbrirCerrar'

export default function DetallesSubtema({title, defBreve, arrayCodigo, url}) {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="marco"><h4>{title}</h4>
                <div > {defBreve}</div>
                {arrayCodigo.length>0? <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>:null}
                {open[0] ?
                    <div className="efecto__animacion__contenido">

                        <ul>
                        {arrayCodigo.map(e=> <li key={arrayCodigo.indexOf(e)+e.text}><b>{e.cod}</b> || {e.text}</li>)}
                        {url? <li>Para más información, visita este <a href={url} target="_blank" rel="noreferrer">link</a></li> : null}
                        </ul>
                    </div> : null}
            </div>
    )
}
