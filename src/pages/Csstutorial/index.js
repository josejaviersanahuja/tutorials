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
import Trucos from './Trucos';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
export default function Csstutorial() {
    return (
        <>
            <h2>
            Apuntes del tutorial de CSS
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
    
    const title=`Tutorial Css ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h3>{id}</h3>
        {id==="Selectors"? <Selector/>: null }
        {id==="Coloring"? <Coloring/>:null}
        {id==="Layouts"? <Layouts/>:null}
        {id==="Unit-types"? <UnitTypes/>:null}
        {id==="Text-manipulation"? <TextManipulation/> : null}
        {id==="Grid"? <Grid/> : null}
        {id==="Transition-property"? <TransitionProperty/> : null}
        {id==="Tricks"? <Trucos/>:null}
        
        </>
    );
  }

  function WelcomeCSS() {
    const title="Tutorial Css || by ZitrojjDev"
    useSeo({title})
      return (
          <>
          <h3>Bienvenido al curso de CSS.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
          <DetallesSubtema 
            title="Puedes ver el curso de freeboptcamp aquí"
            defBreve="Deberás saber inglés, y podras aprender las etiquetas más usadas."
            arrayCodigo={[]}
            />
          <iframe 
            width="400" 
            height="210" 
            src="https://www.youtube.com/embed/1Rs2ND1ryYc" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          </div>
          </>
      )
  }