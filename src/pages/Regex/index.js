
import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import AllRegex from './AllRegex';

export default function Regex() {
  return (
    <>
      <h1>
        Apuntes del tutorial de Regex
        <p><a href="https://www.youtube.com/watch?v=rhzKDrUiJVk" target="_blank" rel="noreferrer">Link del curso.</a></p>
      </h1>

      <Switch>
        <Route path="/regex/:id" children={<Child />} />
        <Route path="/regex" children={<WelcomeRegex />} />
      </Switch>
    </>
  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const title = `Tutorial Regex ${id} || by ZitrojjDev`
  useSeo({ title })
  return (<>
    <h2>{id}</h2>
    {id === "Regex" ? <AllRegex /> : null}
    
  </>
  );
}

function WelcomeRegex() {
  const title = "Tutorial Regex || by ZitrojjDev"
  useSeo({ title })

  return (<>
    <h3>Bienvenido al curso de Regex.</h3>
    <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
      <DetallesSubtema
        title="Regex en 20 minutos con Kyle."
        defBreve="Regex a probado en muchas ocasiones ser de vital importancia para la manipulación de strings. Vamos a elevar nuestro nivel de programación aprendiendo las bases de estas reglas sintácticas."
        arrayCodigo={[]}
      />
      <iframe
        width="400" height="210"
        src="https://www.youtube.com/embed/rhzKDrUiJVk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div>
  </>
  )
}