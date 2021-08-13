
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import BasicTags from './BasicTags'
import AdvancedTags from './AdvancedTags';
import Form from './Form';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';

export default function Html() {
    return (
        <>
            <h1>
            Apuntes del tutorial de HTML
                <p><a href="https://www.youtube.com/watch?v=pQN-pnXPaVg&t=88s" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h1>
            
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
    
    const title=`Tutorial Html ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Basic-tags"? <BasicTags/>: null }
        {id==="Advanced-tags"? <AdvancedTags/> :null} 
        {id==="Form"? <Form/> : null}             
        </>
    );
  }

  function WelcomeHTML() {
    const title="Tutorial Html || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de HTML.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
          <DetallesSubtema 
            title="Puedes ver el curso de freeboptcamp aquí"
            defBreve="Deberás saber inglés, y podras aprender las etiquetas más usadas."
            arrayCodigo={[]}
            />
            <p>
            <iframe 
            width="400" 
            height="210" 
            src="https://www.youtube.com/embed/pQN-pnXPaVg" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            </p>
          
          </div>
          </>
      )
  }