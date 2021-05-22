
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import VariablesFunciones from './VariablesFunciones';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';

export default function Sass() {
    return (
        <>
            <h2>
            Apuntes del tutorial de Sass
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
   
    const title=`Tutorial Sass ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h3>{id}</h3>
        {id==="Variables_Funciones"? <VariablesFunciones/>: null }
       
        </>
    );
  }

  function WelcomeSass() {
    const title="Tutorial Sass || by ZitrojjDev"
    useSeo({title})
    
      return (
        <>
        <h3>Bienvenido al curso de Sass.</h3>
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
            src="https://www.youtube.com/embed/_a5j7KoflTs" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>

          </p>
        
        </div>
        </>
      )
  }