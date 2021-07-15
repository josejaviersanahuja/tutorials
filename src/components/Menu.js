import React, { useState } from 'react'
import MenuList from 'components/ManuList'

const homeMenu = []
const htmlMenu = ["Basic-tags", "Advanced-tags", "Form"]
const cssMenu = ["Selectors", "Coloring", "Unit-types", "Text-manipulation", "Layouts", "Grid","Transition-property", "Tricks"]
const sassMenu =["Variables_Funciones"]
const reactMenu=["inicios","react-redux-basics"]
const fullstackMenu=["Nodejs Y Express", "Middleware y Deploy", "MongoDB","Jest-testing"]
const gitMenu=["SSH-keys", "Primeros-Pasos"]
const nextMenu=["Iniciar Proyecto", "Typescrip-Types"]
const webpackMenu=["Dependencias","Input-File", "Output", "Loaders", "Plugins"]
const menu = [
    ["Home", homeMenu],
    ["Html", htmlMenu],
    ["Css", cssMenu],
    ["Sass", sassMenu],
    ["React", reactMenu],
    ["Fullstack",fullstackMenu ],
    ["Git", gitMenu],
    ["NextJS/Typescript", nextMenu],
    ["Webpack", webpackMenu]
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
