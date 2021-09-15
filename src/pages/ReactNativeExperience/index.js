
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import SettingEnviroments from './SettingEnviroment';
import PrepararIconos from './PrepararIconos';
import SplashImage from './SplashImage';
import CreandoBundle from './CreandoBundle';
import PublishingApp from './PublishingApp';
import Animations from './Animations';
import PanResponder from './PanResponder';

export default function ReactNativeExperience() {
    return (
        <>
            <h1>
            Apuntes del tutorial de React Native
                <p><a href="https://www.linkedin.com/learning/paths/become-a-react-native-developer" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>
            
            <Switch>
            <Route path="/react native/:id" children={<Child />} />
            <Route path="/react native" children={<WelcomeReactNative />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial React Native ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Setting Enviroment"? <SettingEnviroments/>: null }
        {id==="Antes de publicar"? <PrepararIconos/>: null }
        {id==="Splash Image"? <SplashImage/>: null }
        {id==="Building"? <CreandoBundle/>: null }
        {id==="Primera Publicación"? <PublishingApp/>: null }
        {id==="Animaciones"? <Animations/>: null }
        {id==="PanResponder"? <PanResponder/>: null }

        </>
    );
  }

  function WelcomeReactNative() {
    const title="Tutorial React Native || by ZitrojjDev"
    useSeo({title})
    
      return (<>
        <h3>Bienvenido al curso de React Native (SOLO ANDROID).</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema 
          title="Curso hecho con LinkedIn Learning"
          defBreve={`Es un curso que es parte del material de LinkedIn Learning. Es de pago pero LinkedIn Learning ofrece 1 mes de prueba gratis. \n
  
  Puedo adelantarles que trabajar con react native es muy similar a trabajar con React. Solo hay que acostumbrarse a los componentes nativos y ya con eso, podemos crear Apps nativas de forma muy sencilla con lo que ya sabemos actualmente. \n
  
  El curso está bastante desactualizado, pero es un reto distinto que se puede asumir buscando las documentaciones oficiales, ya que el principio de lo que te enseñan, sigue siendo válido aunque los paquetes que usen ya entén deprecados.`}
          arrayCodigo={[]}
          />
          
        </div>
        </>
      )
  }