
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import VariablesFunciones from './VariablesFunciones';

export default function Sass() {
    return (
        <>
            <h2>
                Esta es la pag Sass
                <p><a href="https://www.youtube.com/watch?v=_a5j7KoflTs" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h2>
            
            <Switch>
            <Route path="/sass/:id" children={<Child />} />
            <Route path="/sass" children={<WelcomeSass />} />
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
        {id==="Variables_Funciones"? <VariablesFunciones/>: null }
       
        </>
    );
  }

  function WelcomeSass() {
      return (
          <>
          <h3>Bienvenido al curso de Sass.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar</div>
          </>
      )
  }