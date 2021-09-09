
import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import InstalacionWindows from './InstalacionWindows'
import PrimerosUsos from './PrimerosUsos';

export default function Docker() {
    return (
        <>
            <h1>
                Apuntes del tutorial de Docker
                <p><a href="https://www.youtube.com/watch?v=NVvZNmfqg6M" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>

            <Switch>
                <Route path="/docker/:id" children={<Child />} />
                <Route path="/docker" children={<WelcomeDocker />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title = `Tutorial Docker ${id} || by ZitrojjDev`
    useSeo({ title })
    return (<>
        <h2>{id}</h2>
        {id === "Instalación Windows10" ? <InstalacionWindows /> : null}
        {id === "Primer Uso" ? <PrimerosUsos /> : null}

    </>
    );
}

function WelcomeDocker() {
    const title = "Tutorial Docker || by ZitrojjDev"
    useSeo({ title })

    return (<>
        <h3>Bienvenido al curso de Docker.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
            <DetallesSubtema
                title="Este vídeo solo se trata de Docker en Linux, Fazt nos lo explica en español."
                defBreve="Este curso pasa por entender como usar docker, sin embargo mi primer uso práctico fue en el curso de LinkedIn Learning, fue muy amigable aunque muy poco productivo, pero puede ser una gran forma de introducirnos en Docker."
                arrayCodigo={[]}
            />
            <iframe
                width="400" height="210"
                src="https://www.youtube.com/embed/NVvZNmfqg6M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
    </>
    )
}