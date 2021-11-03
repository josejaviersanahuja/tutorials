
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
import Instalacion from './Instalacion';
import Comandos from './Comandos';
import Vim from './Vim';

export default function Terminal() {
    return (
        <>
            <h1>
                Apuntes del tutorial de Terminal (CLI)
                <p><a href="https://amigoscode.com/p/terminal-and-vim-fundamentals" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h1>
            
            <Switch>
            <Route path="/terminal/:id" children={<Child />} />
            <Route path="/terminal" children={<WelcomeTerminal />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial Terminal ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Instalacion"? <Instalacion/>: null }
        {id==="Comandos"? <Comandos/>: null }
        {id==="Vim"? <Vim/>: null }        
        </>
    );
  }

  function WelcomeTerminal() {
    const title="Tutorial Terminal || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de Terminal.</h3>
          <div className="cuerpo"> Seamos directos... La terminal de comandos es fundamental para ser un buen programador. Así que quitemosnos el la pereza, el miedo a la terminal o el complejo de superioridad, sea cual sea tu excusa para no saber usar la terminal de comandos, deséchalo y empecemos a dar un cambio a nuestro perfil como desarrolladores
          <DetallesSubtema 
            title="Puedes ver el curso de Terminal aquí, con Nelson de AmigosCode"
            defBreve="Está en inglés y lo recomiendo muchísimo. Lo recomiendo."
            arrayCodigo={[]}
            />
            <p><a href="https://amigoscode.com/p/terminal-and-vim-fundamentals?wvideo=wbhd7sc7qu">
                <img src="https://embed-ssl.wistia.com/deliveries/b5f3f0b4014cde9dd2db2dcada0dae3230012ab5.jpg?image_crop_resized=800x450" width="400" height="225" style={{width: "400px", height: "225px"}} alt="iframe"/>
            </a></p>
            
            <p><a href="https://amigoscode.com/p/terminal-and-vim-fundamentals?wvideo=wbhd7sc7qu">Terminal and VIM Fundamentals | Amigoscode</a></p>
          
          </div>
          </>
      )
  }