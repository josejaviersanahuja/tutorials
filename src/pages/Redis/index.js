
import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import ComienzosConRedis from './ComienzosConRedis'

export default function Redis() {
    return (
        <>
            <h1>
                Apuntes del tutorial de Redis en Nodejs
                <p><a href="https://www.youtube.com/watch?v=jgpVdJB2sKQ" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>

            <Switch>
                <Route path="/redis/:id" children={<Child />} />
                <Route path="/redis" children={<WelcomeRedis />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title = `Tutorial Redis ${id} || by ZitrojjDev`
    useSeo({ title })
    return (<>
        <h2>{id}</h2>
        {id === "Básico" ? <ComienzosConRedis /> : null}

    </>
    );
}

function WelcomeRedis() {
    const title = "Tutorial Redis || by ZitrojjDev"
    useSeo({ title })

    return (<>
        <h3>Bienvenido al curso de Redis.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
            <DetallesSubtema
                title="Este vídeo solo se trata de redis en Nodejs, está en inglés."
                defBreve="Este curso pasa por entender como comunicarse con una base de datos de MongoDB, Aunque el código que expondré sale del curso de LinkedIn Learning, el tutorial de Kyle es muy bueno."
                arrayCodigo={[]}
            />
            <iframe
                width="400" height="210"
                src="https://www.youtube.com/embed/jgpVdJB2sKQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
    </>
    )
}