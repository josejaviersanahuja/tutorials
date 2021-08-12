import React, { useState } from 'react'
import MenuList from 'components/ManuList'

const homeMenu = []
const htmlMenu = ["Basic-tags", "Advanced-tags", "Form"]
const cssMenu = ["Selectors", "Coloring", "Unit-types", "Text-manipulation", "Layouts", "Grid","Transition-property", "Tricks"]
const sassMenu =["Variables_Funciones", "modern-sass"]
const reactMenu=["inicios","react-redux-basics","modern-redux", "Lazy-Load", "Tricks"]
const fullstackMenu=["Nodejs Y Express", "Middleware y Deploy", "MongoDB","Jest-testing"]
const gitMenu=["SSH-keys", "Primeros-Pasos","git-branches"]
const nextMenu=["Iniciar Proyecto", "Typescrip-Types"]
const webpackMenu=["Dependencias","Input-File", "Output", "Loaders", "Plugins"]
const nodejsMasterClass=["File-System","Z-Lib","Server","How to serve statics", "CLI"]
const apicallsMenu =["Twilio","Verify-email","Stripe","Mailgun"]
const curlMenu = ["crashcourse","Comandos Populares","Ajax"]
const menu = [
    ["Home", homeMenu],
    ["Html", htmlMenu],
    ["Css", cssMenu],
    ["Sass", sassMenu],
    ["React", reactMenu],
    ["Fullstack",fullstackMenu ],
    ["Git", gitMenu],
    ["NextJS/Typescript", nextMenu],
    ["Webpack", webpackMenu],
    ["NodeJS", nodejsMasterClass],
    ["Curl", curlMenu],
    ["Apicalls", apicallsMenu]
]

export default function Menu({handleClick}) {
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
