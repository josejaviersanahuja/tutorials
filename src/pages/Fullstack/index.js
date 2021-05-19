
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import NodejsExpress from './NodejsExpress';
import DeployHeroku from './DeployHeroku';


export default function Fullstack() {
    return (
        <>
            <h2>
                Esta es la pag HTML
                <p><a href="https://fullstackopen.com/es/about" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h2>
            
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
    
    return (<>
        <h3>{id}</h3>
        {id==="Nodejs Y Express"? <NodejsExpress/>: null }
        {id==="Middleware y Deploy"? <DeployHeroku/> :null} 
        {id==="Form"? null : null}             
        </>
    );
  }

  function WelcomeFullstack() {
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
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
          
          </div>
          </>
      )
  }