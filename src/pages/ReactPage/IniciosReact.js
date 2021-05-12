import React from 'react'
import 'App.css'
import useAbrirCerrar from 'hooks/useAbrirCerrar'
export default function IniciosReact() {
    const { open, abrirCerrar } = useAbrirCerrar()



    return (
        <div className="cuerpo">
            <div className="marco"><h4 >Npx y NPM</h4>
                <div> Empecemos </div>
                <a href onClick={() => abrirCerrar(0)} ><h5>EJEMPLOS: </h5></a>
                {open[0] ?
                    <div>

                        <ul>
                            <li> <b>{"npx y npm es un gestor de paquetes que viene con nodejs"}</b>|| npx ejecuta, npm descarga. npx ejecuta la creación del proyecto. npm descarga paquetes como npm start. se ve en las herramientas de desarrollo </li>
                            <li><b>{"yarn es lo mismo pero de facebook, no de react."}</b> || yarn es una alternativa</li>
                            <li><b>{"pnpm es otra opcion..."}</b></li>
                        </ul>
                    </div> : null}
            </div>
            <div className="marco"><h4>El resto de los inicios, en otro vídeo de midudev</h4>
                <div> <a href="https://midu.dev/curso-gratis-react-2020/" target="_blank" rel="noreferrer">Curso de React</a></div>
                <div> Componentes, importar, y cosas similares</div>
            </div>
            
        </div>
    )
}
