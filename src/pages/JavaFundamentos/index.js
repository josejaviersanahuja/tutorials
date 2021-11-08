
import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import FundamentosPrevios from './FundamentosPrevios';
import FundamentosNuevos from './FundamentosNuevos';

export default function JavaFundamentos() {
  return (
    <>
      <h1>
        Apuntes del tutorial de Java
        <p><a href="https://amigoscode.com/p/java-functional-programming" target="_blank" rel="noreferrer">Link del curso.</a></p>
      </h1>

      <Switch>
        <Route path="/java-fundamentos/:id" children={<Child />} />
        <Route path="/java-fundamentos" children={<WelcomeJava />} />
      </Switch>
    </>
  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const title = `Tutorial Java Fundamentos ${id} || by ZitrojjDev`
  useSeo({ title })
  return (<>
    <h2>{id}</h2>
    {id === "Fundamentos Previos" ? <FundamentosPrevios /> : null}
    {id === "Fundamentos Nuevos" ? <FundamentosNuevos /> : null}
  </>
  );
}

function WelcomeJava() {
  const title = "Tutorial Java Fundamentos || by ZitrojjDev"
  useSeo({ title })

  return (<>
    <h3>Bienvenido al curso de Java Fundamentos.</h3>
    <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
      <DetallesSubtema
        title="Fundamentos de Java con Nelson."
        defBreve="Lamento no traer una sección completa de apuntes, voy a empezar desde los fundamentos de la programación funcional. El link del curso y el link que dejo de youtube son distintos, uno es de la página web de amigoscode.com y el otro es de youtube. Suerte"
        arrayCodigo={[]}
      />
      <iframe
        width="400" height="210"
        src="https://www.youtube.com/embed/Qgl81fPcLc8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div>
  </>
  )
}