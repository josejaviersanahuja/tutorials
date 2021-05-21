import React from 'react'
import { Link } from 'react-router-dom'
import Submenu from './Submenu'


export default function ManuList({par, menuOpen, setOpenMenu,index, handleClick}) {
    
    const changeState=()=>{
        let temp=[false]
        temp[index]=true
        setOpenMenu(temp)
    }
    const handleClick2 =()=>{
        handleClick()
        let temp=[false]
        temp[index]=false
        setOpenMenu(temp)
    }
    console.log(menuOpen);
    return (
        <li>
            <Link to={`/${par[0]}`} onClick={changeState}>{par[0]}</Link>
            {menuOpen[index]? <Submenu par={par} handleClick={handleClick2} />: null}
        </li>
    )
}
