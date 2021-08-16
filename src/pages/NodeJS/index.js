
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import FileSystem from './FileSystem';
import Zlib from './Zlib';
import BuildServer from './BuildServer';
import PrepareServerForStaticHTML from './PrepareServerForStaticHTML';
import CLI from './CLI';
import BlindandoLaAPP from './BlindandoLaAPP';
import PerformanceTricks from './PerformanceTricks';
import FromCallbacksToPromises from './FromCallbacksToPromises';

export default function NodeJS() {
    return (
        <>
            <h1>
            Apuntes del tutorial de NodeJS Master-Class
                <p><a href="https://www.pirple.com" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>
            
            <Switch>
            <Route path="/nodejs/:id" children={<Child />} />
            <Route path="/nodejs" children={<WelcomeNode />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial Node JS ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="File-System"? <FileSystem/>: null }
        {id==="Z-Lib"? <Zlib/>: null }
        {id==="Server"? <BuildServer/>: null }
        {id==="How to serve statics"? <PrepareServerForStaticHTML/>: null }
        {id==="CLI"? <CLI/>: null }
        {id==="Blindando La APP"? <BlindandoLaAPP/>: null }
        {id==="Performance Tricks"? <PerformanceTricks/>: null }
        {id==="Promesas vs Callbacks"? <FromCallbacksToPromises/>: null }
        </>
    );
  }

  function WelcomeNode() {
    const title="Tutorial Node || by ZitrojjDev"
    useSeo({title})
    
      return (<>
        <h3>Bienvenido al curso de Node JS.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema 
          title="Solo es la Intro del curso. El curso es Pago"
          defBreve="El curso nos enseñará las bases de NODE y nos dará experiencia en construcción de backend."
          arrayCodigo={[]}
          />
          <iframe 
          width="400" height="210" 
          src="https://www.youtube.com/embed/H9fg7GFagF4" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        </>
      )
  }