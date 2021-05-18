import {useState} from 'react'

export default function useClassNames() {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    
    let classNameBTN="btn"
    let classNameMenu2="menu2"
    let classNameBTNMenu="btn-menu"

    if(isMenuOpen){
        classNameBTN="btn__open"
        classNameMenu2="menu2__open"
        classNameBTNMenu="btn-menu__open"
    }
    
    const handleClick =() =>{
        setisMenuOpen(!isMenuOpen)
    }

    return {isMenuOpen, handleClick, classNameBTN, classNameBTNMenu, classNameMenu2}
}
