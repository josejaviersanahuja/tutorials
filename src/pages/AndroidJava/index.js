
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
import AndroidJavaBasics from './AndroidJavaBasics';
import DeeperJava from './DeeperJava';

export default function AndroidJava() {
    return (
        <>
            <h1>
            Apuntes del tutorial de Andoird Apps con Java
                <p><a href="https://www.youtube.com/watch?v=fis26HvvDII" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h1>
            
            <Switch>
            <Route path="/androidapp with java/:id" children={<Child />} />
            <Route path="/androidapp with java" children={<WelcomeAndroidJava />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    console.log(id);
    const title=`Tutorial Android con Java ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Basics"? <AndroidJavaBasics/>: null }
        {id==="Java Part"? <DeeperJava/>: null }
        </>
    );
  }

  function WelcomeAndroidJava() {
    const title="Tutorial Android con Java || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de Android Apps con Java.</h3>
          <div className="cuerpo"> Este curso está en inglés, y además en este vídeo que publico, Meisam ha creado una versión resumida en 12 horas, pero la versión que yo estudio del mismo Meisam es de unas 30 horas y no incluye Kotlin, en otras palabras, el curso de Pirple que estoy haciendo es más extenso que el curso de freecodecamp que estoy mostrando. Igualmente, podemos aprender bastante.
          <DetallesSubtema 
            title="Puedes ver el curso de freecodecamp aquí con Meisam"
            defBreve="Deberás saber inglés, y podras aprender a crear Android Apps."
            arrayCodigo={[]}
            />
            <p>
            <iframe 
            width="400" 
            height="210" 
            src="https://www.youtube.com/embed/fis26HvvDII" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            </p>
          
          </div>
          </>
      )
  }