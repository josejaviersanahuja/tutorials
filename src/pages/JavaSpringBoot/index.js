
import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import ConfiguracionInicial from './ConfiguracionInicial';

export default function JavaSpringBoot() {
  return (
    <>
      <h1>
        Apuntes del tutorial de Java Spring Boot
        <p><a href="https://amigoscode.com/p/spring-boot" target="_blank" rel="noreferrer">Link del curso.</a></p>
      </h1>

      <Switch>
        <Route path="/java springboot/:id" children={<Child />} />
        <Route path="/java springboot" children={<WelcomeJavaSpringBoot />} />
      </Switch>
    </>
  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const title = `Tutorial Java SpringBoot ${id} || by ZitrojjDev`
  useSeo({ title })
  return (<>
    <h2>{id}</h2>
    {id === "Configuracion inicial" ? <ConfiguracionInicial /> : null}
    
  </>
  );
}

function WelcomeJavaSpringBoot() {
  const title = "Tutorial Java SpringBoot || by ZitrojjDev"
  useSeo({ title })

  return (<>
    <h3>Bienvenido al curso de Java Spring Boot.</h3>
    <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
      <DetallesSubtema
        title="Java Spring Boot."
        defBreve="Vamos a sumergirnos en la piscina de spring boot para aprender desde adentro cómo construir servidores con Java. Vamos a ello."
        arrayCodigo={[]}
      />
      <iframe
        width="400" height="210"
        src="https://www.youtube.com/embed/9SGDpanrc8U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div>
  </>
  )
}