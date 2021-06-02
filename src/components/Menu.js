import React, { useState } from 'react'
import MenuList from 'components/ManuList'

const homeMenu = []
const htmlMenu = ["Basic-tags", "Advanced-tags", "Form"]
const cssMenu = ["Selectors", "Coloring", "Unit-types", "Text-manipulation", "Layouts", "Grid","Transition-property", "Tricks"]
const sassMenu =["Variables_Funciones"]
const reactMenu=["inicios"]
const fullstackMenu=["Nodejs Y Express", "Middleware y Deploy", "MongoDB","Jest-testing"]
const gitMenu=["SSH-keys"]
const menu = [
    ["Home", homeMenu],
    ["Html", htmlMenu],
    ["Css", cssMenu],
    ["Sass", sassMenu],
    ["React", reactMenu],
    ["Fullstack",fullstackMenu ],
    ["Git", gitMenu]
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
