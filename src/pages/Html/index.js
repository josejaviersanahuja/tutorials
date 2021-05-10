
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import BasicTags from './BasicTags'
import AdvancedTags from './AdvancedTags';
import Form from './Form';

export default function Html() {
    return (
        <>
            <h2>
                Esta es la pag HTML
                <p><a href="https://www.youtube.com/watch?v=pQN-pnXPaVg&t=88s" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h2>
            
            <Switch>
            <Route path="/html/:id" children={<Child />} />
            <Route path="/html" children={<WelcomeHTML />} />
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
        {id==="Basic-tags"? <BasicTags/>: null }
        {id==="Advanced-tags"? <AdvancedTags/> :null} 
        {id==="Form"? <Form/> : null}             
        </>
    );
  }

  function WelcomeHTML() {
      return (
          <>
          <h3>Bienvenido al curso de HTML.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar</div>
          </>
      )
  }