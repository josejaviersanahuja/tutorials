
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import IniciosReact from './IniciosReact';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';

export default function ReactPage() {
    return (
        <>
            <h2>
                Esta es la pag React
                <p><a href="https://www.youtube.com/watch?v=T_j60n1zgu0" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h2>
            
            <Switch>
            <Route path="/React/:id" children={<Child />} />
            <Route path="/React" children={<WelcomeReact />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial React ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h3>{id}</h3>
        {id==="inicios"? <IniciosReact/>: null }
       
        </>
    );
  }

  function WelcomeReact() {
    const title="Tutorial React || by ZitrojjDev"
    useSeo({title})
    
      return (<>
        <h3>Bienvenido al curso de React.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema 
          title="Puedes ver el curso de React aquí"
          defBreve="Podrás seguir este curso aquí, con midudev. Lo recomiendo."
          arrayCodigo={[]}
          />
          <iframe 
          width="400" height="210" 
          src="https://www.youtube.com/embed/T_j60n1zgu0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        </>
      )
  }