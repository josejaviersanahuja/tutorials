
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import IniciosReact from './IniciosReact';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import ReactReduxBasics from './ReactReduxBasics';
import ReactReduxAdvanced from './ReactReduxAdvanced';
import ReactSuspense from './ReactSuspense';
import ReactTricks from './ReactTricks';

export default function ReactPage() {
    return (
        <>
            <h1>
            Apuntes del tutorial de React
                <p><a href="https://www.youtube.com/watch?v=T_j60n1zgu0" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>
            
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
        <h2>{id}</h2>
        {id==="inicios"? <IniciosReact/>: null }
        {id==="react-redux-basics"? <ReactReduxBasics/>: null }
        {id==="modern-redux"? <ReactReduxAdvanced/>: null }
        {id==="Lazy-Load"? <ReactSuspense/>: null }
        {id==="Tricks"? <ReactTricks/>: null }
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
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        </>
      )
  }