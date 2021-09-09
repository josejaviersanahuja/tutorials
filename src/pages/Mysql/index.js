
import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import 'App.css';
import DetallesSubtema from 'components/DetallesSubtema'
import useSeo from 'hooks/useSeo';
import ComandosBasicos from './ComandosBasicos';

export default function Mysql() {
    return (
        <>
            <h1>
                Apuntes del tutorial de Mysql en Nodejs
                <p><a href="https://www.youtube.com/watch?v=qJ5R9WTW0_E" target="_blank" rel="noreferrer">Link del curso.</a></p>
            </h1>

            <Switch>
                <Route path="/mysql/:id" children={<Child />} />
                <Route path="/mysql" children={<WelcomeMysql />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const title = `Tutorial Mysql ${id} || by ZitrojjDev`
    useSeo({ title })
    return (<>
        <h2>{id}</h2>
        {id === "Básico" ? <ComandosBasicos /> : null}

    </>
    );
}

function WelcomeMysql() {
    const title = "Tutorial Mysql || by ZitrojjDev"
    useSeo({ title })

    return (<>
        <h3>Bienvenido al curso de Mysql.</h3>
        <div className="cuerpo"> Seleccione en el menú de la izquierda lo que desee revisar
            <DetallesSubtema
                title="Este vídeo solo se trata de Mysql, en Nodejs."
                defBreve="Este curso pasa por entender como comunicarse con una base de datos de Mysql."
                arrayCodigo={[]}
            />
            <iframe
                width="400" height="210"
                src="https://www.youtube.com/embed/qJ5R9WTW0_E"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
    </>
    )
}