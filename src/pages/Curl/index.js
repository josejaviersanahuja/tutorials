
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
import CurlCourse from './CurlCourse';
import CurlMostPopulars from './CurlMostPopulars';
import AJAX from './AJAX';

export default function Curl() {
    return (
        <>
            <h1>
            Apuntes del tutorial de CURL Y AJAX
                <p><a href="https://www.youtube.com/watch?v=I6id1Y0YuNk&t=88s" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h1>
            
            <Switch>
            <Route path="/curl/:id" children={<Child />} />
            <Route path="/curl" children={<WelcomeCurl />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    console.log(id);
    const title=`Tutorial Curl y AJAX${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="crashcourse"? <CurlCourse/>: null }
        {id==="Comandos Populares"? <CurlMostPopulars/>: null }
        {id==="Ajax"? <AJAX/>: null }
        </>
    );
  }

  function WelcomeCurl() {
    const title="Tutorial Curl y AJAX || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de Curl y AJAX.</h3>
          <div className="cuerpo"> Siempre fui rehacio a aprender Curl, hasta que en el curso de Node js me di cuenta de su importancia. Cada vez es más común que las llamadas a las API's más importantes se hagan a través de librerías creadas por sus empresas y cada vez es menor el control que tienen los programadores en las llamadas a las API's. Muchos estarán contentos con esto, pero yo no. Yo deseo saber que objetos requieren cada endpoint y donde conseguir esos objetos o saber como crearlos. Resulta que CURL trabaja de una forma muy similar a lo que yo busco. De ahí mi repentino interés por conocer como funciona. AJAX es exactamente lo mismo.
          <DetallesSubtema 
            title="Puedes ver el curso de freeboptcamp aquí con el mismisimo creador de CURL"
            defBreve="Deberás saber inglés, y podras aprender Curl con su mismisimo creador."
            arrayCodigo={[]}
            />
            <p>
            <iframe 
            width="400" 
            height="210" 
            src="https://www.youtube.com/embed/I6id1Y0YuNk" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            </p>
          
          </div>
          </>
      )
  }