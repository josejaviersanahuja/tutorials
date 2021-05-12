import React, { useState } from 'react'
import MenuList from 'components/ManuList'

const homeMenu = []
const htmlMenu = ["Basic-tags", "Advanced-tags", "Form"]
const cssMenu = ["Selectors", "Coloring", "Unit-types", "Text-manipulation", "Layouts", "Grid","Transition-property"]
const sassMenu =["Variables_Funciones"]
const reactMenu=["inicios"]
const menu = [
    ["Home", homeMenu],
    ["Html", htmlMenu],
    ["Css", cssMenu],
    ["Sass", sassMenu],
    ["React", reactMenu]
]

export default function Menu() {
    const [menuOpen, setOpenMenu] = useState([false, false, false])


    return (
        <ol>
            {menu.map(e =>
                <MenuList
                    key={menu.indexOf(e)}
                    par={e}
                    menuOpen={menuOpen}
                    setOpenMenu={setOpenMenu}
                    index={menu.indexOf(e)}
                />
            )}
        </ol>
    )
}
