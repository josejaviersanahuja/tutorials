import React from 'react'
import 'App.css';
import useSeo from 'hooks/useSeo';


export default function Bienvenidos() {
    const title="Tutorial WebDev || by ZitrojjDev"
    useSeo({title})
    return (
        <> 
            <h2>
                Bienvenidos a este curso tutorial de FULLSTACK. Soy José Javier Sanahuja, @Zitrojj es mi pseudónimo y usuario en twitter, facebook y gmail.
                <p><a href="https://twitter.com/zitrojj" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/zitrojj" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://github.com/josejaviersanahuja" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
              </a>
              </p>
            </h2>
            <div className="cuerpo">
                <p>Esta es una guía de repaso y apuntes que hice con todos los cursos tutoriales que tuve que hacer para poder aprender a ser fullstack-developer</p>
                <p>Empecé mi aprendizaje como Front-end developer con el encierro por la pandemia, actualmente, en Mayo del 2021 estoy aprendiendo el Back-end</p>
                <h3>Mi objetivo</h3>
                <p>Tuve que desempolvar estos aputes y proyectos de novato que hice hace meses, para poder crear mi portafolio personalizado de desarrollo</p>
                <p>Te invito a que observes y evalúes cada componente y estilo que apliqué a esta página. Fue creada con React y es de código abierto. Incluso si consideras útil este contenido, te invito que visites mi github y aportes tus apuntes si así lo deseas</p>
                <p>Mi github es: josejaviersanahuja o haz click <a href="https://github.com/josejaviersanahuja/tutorials" target="_blank" rel="noreferrer">aquí</a></p>
                <h2>Buena Suerte!!!</h2>
            </div>
        </>
    )
}
