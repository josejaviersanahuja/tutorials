
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import ExpressGenerator from './ExpressGenerator'
import ExpressBasics from './ExpressBasics';
import Miscelanious from './Miscelanious';
import NodeMailer from './NodeMailer';

export default function Express() {
    return (
        <>
            <h1>
            Apuntes del tutorial de Express
                <p><a href="https://www.youtube.com/watch?v=Oe421EPjeBE" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>
            
            <Switch>
            <Route path="/express/:id" children={<Child />} />
            <Route path="/express" children={<WelcomeExpress />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial Express ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Metodos basicos"? <ExpressBasics/>: null }
        {id==="Express Generator"? <ExpressGenerator/>: null }
        {id==="NodeMailer"? <NodeMailer/>: null }
        {id==="Miscelanious"? <Miscelanious/>: null }
        </>
    );
  }

  function WelcomeExpress() {
    const title="Tutorial Express || by ZitrojjDev"
    useSeo({title})
    
      return (<>
        <h2>Bienvenido al curso de Express.</h2>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema 
          title="Puedes ver el curso de Express aquí"
          defBreve="Podrás seguir este curso aquí, está inglés."
          arrayCodigo={[]}
          />
          <iframe 
          width="400" height="210" 
          src="https://www.youtube.com/embed/Oe421EPjeBE" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        </>
      )
  }