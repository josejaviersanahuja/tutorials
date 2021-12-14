import React from 'react'
import 'App.css'
import useSeo from 'hooks/useSeo'
import DetallesSubtema from './DetallesSubtema'

export default function WelcomeMessage({tema, introBreve, youtubeCod}) {
    const title = `Tutorial ${tema} || by ZitrojjDev`
    useSeo({ title })
  
    return (<>
      <h3>Bienvenido al curso de {tema}.</h3>
      <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema
          title={tema}
          defBreve={introBreve}
          arrayCodigo={[]}
        />
        <iframe
          width="400" height="210"
          src={`https://www.youtube.com/embed/${youtubeCod}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    </>
    )
  }