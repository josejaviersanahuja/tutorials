
import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema';
import useSeo from 'hooks/useSeo';
import Twilio from './Twilio';
import VerifyEmail from './VerifyEmail';
import Stripe from './Stripe';
import Mailgun from './Mailgun';

export default function ApiCalls() {
    return (
        <>
            <h1>
            Apuntes del tutorial de ApiCalls
                <p>Apuntes de llamadas exitosas a API's importantes o útiles</p>
            </h1>
            
            <Switch>
            <Route path="/apicalls/:id" children={<Child />} />
            <Route path="/apicalls" children={<WelcomeApiCalls />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    
    const title=`Apuntes de Api-calls ${id} || by ZitrojjDev`
    useSeo({title})
    return (<>
        <h2>{id}</h2>
        {id==="Twilio"? <Twilio/>: null }
        {id==="Verify-email"? <VerifyEmail/>: null }
        {id==="Stripe"? <Stripe/>: null }
        {id==="Mailgun"? <Mailgun/>: null }
        </>
    );
  }

  function WelcomeApiCalls() {
    const title="Apuntes de Api-calls || by ZitrojjDev"
    useSeo({title})
    
      return (
          <>
          <h3>Bienvenido a los apuntes de llamas a API's.</h3>
          <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
          <DetallesSubtema 
            title="Twilio, Stripe, NodeMailer, Mailgun "
            defBreve="Todas estas API's son valiosas y las primeras llamadas a estas API's marcarán un antes y un después en el potencial y alcance de tus aplicaciones. Así que vamos a ello."
            arrayCodigo={[]}
            />
            <p>
            <iframe 
            width="400" 
            height="210" 
            src="https://www.youtube.com/embed/o9eij8FEvuA" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            </p>
          
          </div>
          </>
      )
  }