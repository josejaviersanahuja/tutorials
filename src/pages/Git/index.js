
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
import SshKeys from './SshKeys';


export default function Git() {
    return (
        <>
            <h2>
                Apuntes del tutorial de Git y Github
                <p><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noreferrer">Link del curso</a></p>
            </h2>
            
            <Switch>
            <Route path="/git/:id" children={<Child />} />
            <Route path="/git" children={<WelcomeGit />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title=`Tutorial Git ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h3>{id}</h3>
        {id==="SSH-keys"? <SshKeys/>: null }
        </>
    );
  }

  function WelcomeGit() {
    const title="Tutorial Git || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido al curso de Git.</h3>
          <div className="cuerpo"> Aunque git parece fácil, es importante dominar cada función, incluso las que menos se usan. Por ello, apuntaré las funcionalidades que hasta la fecha no he dominado.
          <DetallesSubtema 
            title="Puedes ver el curso de Git aquí"
            defBreve="Podrás seguir este curso aquí, en inglés, con freecodecamp. Lo recomiendo."
            arrayCodigo={[]}
            />
            <iframe 
                width="400" height="210" 
                src="https://www.youtube.com/embed/RGOj5yH7evk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
          
          </div>
          </>
      )
  }