import React from 'react'
import 'App.css';
import useSeo from 'hooks/useSeo';

export default function Home() {
    const title="Tutorial Web Development || by ZitrojjDev"
    useSeo({title})
    
    return (
        <>
           
            <h2>
                Bienvenidos a este curso tutorial de FULLSTACK
            </h2>
            <div className="cuerpo">
                <p>Esta es una guía de repaso y apuntes que hice con todos los cursos tutoriales que tuve que hacer para poder aprender a ser fullstack-developer</p>
                <p>Empecé mi aprendizaje como Front-end developer con el encierro por la pandemia, actualmente, en Mayo del 2021 estoy aprendiendo el Back-end</p>
                <p>Si estas aquí por primera vez, debes tener en cuenta 2 cosas. Debes saber <b>inglés</b>, y debes ser <b>autodidacta</b> ya que solo puedes aprender este oficio,  a través del ensayo y error. </p>
                <p>Casi lo olvido, debes tener nociones de programación, y/o nociones de javascript.</p>
                <p>Si cumples esas 3 condiciones, tienes un premio. Todo el contenido aquí expuesto, proviene de tutoriales gratuitos.</p>
                <h2>Buena Suerte!!!</h2>
            </div>
        </>
    )
}
