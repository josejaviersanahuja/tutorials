
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import NodejsExpress from './NodejsExpress';
import DeployHeroku from './DeployHeroku';
import MongoDB from './MongoDB';
import useSeo from 'hooks/useSeo';
import JestTesting from './JestTesting';


export default function Fullstack() {
    return (
        <>
            <h1>
                Apuntes del tutorial de FullStack
                <p><a href="https://fullstackopen.com/es/about" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h1>
            
            <Switch>
            <Route path="/fullstack/:id" children={<Child />} />
            <Route path="/fullstack" children={<WelcomeFullstack />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial FullStack ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Nodejs Y Express"? <NodejsExpress/>: null }
        {id==="Middleware y Deploy"? <DeployHeroku/> :null} 
        {id==="MongoDB"? <MongoDB/> : null}   
        {id==="Jest-testing"? <JestTesting/> : null}            
        </>
    );
  }

  function WelcomeFullstack() {
    const title="Tutorial FullStack || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de Fullstack.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
          <DetallesSubtema 
            title="Puedes ver el curso de fullstackopen aquí"
            defBreve="Podrás seguir este curso aquí, con midudev. Lo recomiendo."
            arrayCodigo={[]}
            />
            <iframe 
                width="400" height="210" 
                src="https://www.youtube.com/embed/wTpuKOhGfJE" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
          
          </div>
          </>
      )
  }