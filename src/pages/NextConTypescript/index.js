
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
import IniciarProyecto from './IniciarProyecto';
import TypescriptTypes from './TypescriptTypes';


export default function NextConTypescript() {
    return (
        <>
            <h2>
                Apuntes del tutorial de Typescript integrado en Next.js .
                <p><a href="https://nextjs.org/learn/excel/typescript" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h2>
            
            <Switch>
            <Route path="/nextjs/typescript/:id" children={<Child />} />
            <Route path="/nextjs/typescript" children={<WelcomeNext />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial Nextjs ${id} || by ZitrojjDev`
    useSeo({title})
    
    return (<>
        <h3>{id}. Les recuerdo que estos apuntes tratan más de la integración con typescript que de NextJS</h3>
        
        {id==="Iniciar Proyecto" ? <IniciarProyecto/>: null }
        {id==="Typescrip-Types" ? <TypescriptTypes/>: null }
        </>
    );
  }

  function WelcomeNext() {
    const title="Tutorial Nextjs || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de Nextjs.</h3>
          <div className="cuerpo"> 
          <p>Seleccione en el menú de la izquierda lo que desee revisar. <b>Adevertencia: El curso consiste en crear una AppClone de twitter con Nextjs y mis apuntes contendrán datos donde me interesa es la integración con Typescript</b></p>
          <DetallesSubtema 
            title="Puedes ver el curso de Nextjs con JS aquí"
            defBreve="Podrás seguir este curso aquí, con midudev. Lo recomiendo."
            arrayCodigo={[]}
            />
            <iframe 
                width="400" height="210" 
                src="https://www.youtube.com/embed/2jxc8DMzt0I" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
          
          </div>
          </>
      )
  }