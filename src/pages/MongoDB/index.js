
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import Mongoose from './Mongoose'

export default function NodeJS() {
    return (
        <>
            <h1>
            Apuntes del tutorial de MongoDB
                <p><a href="https://www.youtube.com/watch?v=gfP3aqV38q4" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>
            
            <Switch>
            <Route path="/mongodb/:id" children={<Child />} />
            <Route path="/mongodb" children={<WelcomeMongoDB />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial MongoDB ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Mongoose"? <Mongoose/>: null }
        </>
    );
  }

  function WelcomeMongoDB() {
    const title="Tutorial MongoDB || by ZitrojjDev"
    useSeo({title})
    
      return (<>
        <h3>Bienvenido al curso de MongoDB.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema 
          title="Este vídeo solo se trata de mongoose, cuando amplíe conocimientos pondré uno mejor."
          defBreve="Este curso pasa por entender como comunicarse con una base de datos de MongoDB."
          arrayCodigo={[]}
          />
          <iframe 
          width="400" height="210" 
          src="https://www.youtube.com/embed/gfP3aqV38q4" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        </>
      )
  }