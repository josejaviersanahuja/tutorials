import React, { useState } from 'react'
import MenuList from 'components/ManuList'

const homeMenu = []
const htmlMenu = ["Basic-tags", "Advanced-tags", "Form"]
const cssMenu = ["Selectors", "Coloring", "Unit-types", "Text-manipulation", "Layouts", "Grid", "Transition-property", "Tricks"]
const sassMenu = ["Variables_Funciones", "modern-sass"]
const terminal = ["Instalacion", "Comandos", "Vim"]
const reactMenu = ["inicios", "react-redux-basics", "modern-redux", "Lazy-Load", "Tricks"]
const fullstackMenu = ["Nodejs Y Express", "Middleware y Deploy", "MongoDB", "Jest-testing"]
const gitMenu = ["SSH-keys", "Primeros-Pasos", "git-branches"]
const nextMenu = ["Iniciar Proyecto", "Typescrip-Types"]
const webpackMenu = ["Dependencias", "Input-File", "Output", "Loaders", "Plugins"]
const nodejsMasterClass = ["File-System", "Z-Lib", "Server", "How to serve statics", "CLI", "Blindando La APP", "Performance Tricks", "Promesas vs Callbacks", "Node Con Typescript"]
const apicallsMenu = ["Twilio", "Verify-email", "Stripe", "Mailgun"]
const curlMenu = ["crashcourse", "Comandos Populares", "Ajax"]
const expressMenu = ["Metodos basicos", "Express Generator", "View Engine", "NodeMailer", "top10Node OwaspReport", "Security Packages", "Miscelanious"]
const mongoDBMenu = ["Mongo DB", "Mongoose"]
const reactNativeMenu = ["Setting Enviroment", "Antes de publicar", "Splash Image", "Building", "Primera Publicación", "Animaciones", "PanResponder"]
const redisMenu = ["Básico"]
const dockerMenu = ["Instalación Windows10", "Primer Uso"]
const mysqlMenu = ["Básico"]
const javaMenu = ["Fundamentos Previos", "Fundamentos Nuevos","Collections","Errores y Excepciones"]
const androidJavaMenu = ["Basics", "Java Part", "XML Part", "Main Menu", "Listas", "Navegación","Fragments","Debug & Testing", "Miscelanious"]
const menu = [
    ["Home", homeMenu],
    ["Html", htmlMenu],
    ["Css", cssMenu],
    ["Sass", sassMenu],
    ["Terminal", terminal],
    ["React", reactMenu],
    ["NextJS/Typescript", nextMenu],
    ["React Native", reactNativeMenu],
    ["Git", gitMenu],
    ["NodeJS", nodejsMasterClass],
    ["Express", expressMenu],
    ["MongoDB", mongoDBMenu],
    ["Redis", redisMenu],
    ["MYSQL", mysqlMenu],
    ["Docker", dockerMenu],
    ["Curl", curlMenu],
    ["Apicalls", apicallsMenu],
    ["Fullstack", fullstackMenu],
    ["Webpack", webpackMenu],
    ["Java-Fundamentos", javaMenu],
    ["Androidapp with java", androidJavaMenu]
]

export default function Menu({ handleClick }) {
    const [menuOpen, setOpenMenu] = useState(false)


    return (
        <ol >
            {menu.map(e =>
                <MenuList
                    key={menu.indexOf(e)}
                    par={e}
                    menuOpen={menuOpen}
                    setOpenMenu={setOpenMenu}
                    index={menu.indexOf(e)}
                    handleClick={handleClick}
                />
            )}
        </ol>
    )
}
