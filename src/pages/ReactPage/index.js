
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import IniciosReact from './IniciosReact';

export default function Sass() {
    return (
        <>
            <h2>
                Esta es la pag Sass
                <p><a href="https://www.youtube.com/watch?v=YLvT1ELnaX4" target="_blank" rel="noreferrer">Link del curso. Episodio 2</a></p>
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
    
    return (<>
        <h3>{id}</h3>
        {id==="inicios"? <IniciosReact/>: null }
       
        </>
    );
  }

  function WelcomeReact() {
      return (
          <>
          <h3>Bienvenido al curso de React.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar</div>
          </>
      )
  }