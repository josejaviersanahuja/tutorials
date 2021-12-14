/*
@TODO crear un componente que simplifique todo el index.js de todos los objetos
https://www.postgresqltutorial.com/install-postgresql-linux/
*/

import React from 'react'
import 'App.css'
import IndexPlantilla from '../../components/IndexPlantilla'
import WelcomeMessage from 'components/WelcomeMessage'
import { useParams, Switch, Route } from "react-router-dom";
import useSeo from 'hooks/useSeo';
import InstalacionConfiguracion from './InstalacionConfiguracion';

const tema="Postgres" 

export default function Postgres(){

  const ipath="postgres"
  const introBreve="Vamos a adentrarnos en el mundo de las bases de datos desde la terminal de comandos, ni docker ni GUI, aquí vamos a aprender de verdad todo lo que debemos saber sobre las bases de datos relacionales." 
  const youtubeCod="5hzZtqCNQKk" 
    return (<>
        <IndexPlantilla
            tema={tema}
            link="https://amigoscode.com/p/postgres" 
        />
        <Switch>
        <Route path={`/${ipath}/:id`} children={<Child/>} />
        <Route path={`/${ipath}/`} children={<WelcomeMessage tema={tema} introBreve={introBreve} youtubeCod={youtubeCod} />} />
      </Switch>
    </>)
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const title = `Tutorial ${tema} ${id} || by ZitrojjDev`
  useSeo({ title })
  return (<>
    <h2>{id}</h2>
    { id === "Instalacion y Configuración" && <InstalacionConfiguracion/> }    
  </>
  );
}