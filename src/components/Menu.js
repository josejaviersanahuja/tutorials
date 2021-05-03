import React, {useState} from 'react'
import MenuList from 'components/ManuList'

const homeMenu=[]
const htmlMenu=["H1", "Div", "Form"]
const cssMenu=["Selectors", "Coloring", "Layouts"]
const menu= [
    ["Home",homeMenu],
    ["Html",htmlMenu],
    ["Css",cssMenu]
]

export default function Menu() {
    const [menuOpen, setOpenMenu] = useState([false,false,false])
   
    
    return (
        <ol>
            {menu.map(e=> 
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
