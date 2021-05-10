import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import Selector from './Selector';
import Coloring from './Coloring';
import Layouts from './Layouts';
import UnitTypes from './UnitTypes';
import TextManipulation from './TextManipulation'
import Grid from './Grid'
import TransitionProperty from './TransitionProperty';
export default function Csstutorial() {
    return (
        <>
            <h2>
                Esta es la pag CSS
                <p><a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=1" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h2>
            
            <Switch>
            <Route path="/Css/:id" children={<Child />} />
            <Route path="/Css" children={<WelcomeCSS />} />
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
        {id==="Selectors"? <Selector/>: null }
        {id==="Coloring"? <Coloring/>:null}
        {id==="Layouts"? <Layouts/>:null}
        {id==="Unit-types"? <UnitTypes/>:null}
        {id==="Text-manipulation"? <TextManipulation/> : null}
        {id==="Grid"? <Grid/> : null}
        {id==="Transition-property"? <TransitionProperty/> : null}
        
        </>
    );
  }

  function WelcomeCSS() {
      return (
          <>
          <h3>Bienvenido al curso de CSS.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar</div>
          </>
      )
  }