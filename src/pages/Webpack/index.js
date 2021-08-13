
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import InputFile from './InputFile';
import OutputFile from './OutputFile';
import Loaders from './Loaders';
import Plugins from './Plugins';
import PlantillaWebpack from './PlantillaWebpack';

export default function Webpack() {
    return (
        <>
            <h1>
            Apuntes del tutorial de Webpack. A diferencia que en el vídeo tutorial. Mis apuntes contendrán la configuración de una plantilla de Webpack, para trabajar con React y Typescript, usando Babel como loader.
                <p><a href="https://www.youtube.com/watch?v=ansUGkcrhwY" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>
            
            <Switch>
            <Route path="/webpack/:id" children={<Child />} />
            <Route path="/webpack" children={<WelcomeWebpack />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial Webpack ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Dependencias"? <PlantillaWebpack/>: null }
        {id==="Input-File"? <InputFile/>: null }
        {id==="Output"? <OutputFile/>: null }
        {id==="Loaders"? <Loaders/>: null }
        {id==="Plugins"? <Plugins/>: null }
        </>
    );
  }

  function WelcomeWebpack() {
    const title="Tutorial Webpack || by ZitrojjDev"
    useSeo({title})
    
      return (<>
        <h3>Bienvenido al curso de Webpack.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
        <DetallesSubtema 
          title="Puedes ver el curso de Webpack aquí"
          defBreve="Podrás seguir este curso, con midudev. Lo recomiendo y es en español."
          arrayCodigo={[]}
          />
          <iframe 
          width="400" height="210" 
          src="https://www.youtube.com/embed/ansUGkcrhwY" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        </>
      )
  }