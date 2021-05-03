import React from 'react'
import { Link } from 'react-router-dom'
import Submenu from './Submenu'


export default function ManuList({par, menuOpen, setOpenMenu,index}) {
    
    const changeState=()=>{
        let temp=[false,false,false]
        temp[index]=true
        setOpenMenu(temp)
    }
    
    return (
        <li>
            <Link to={`/${par[0]}`} onClick={changeState}>{par[0]}</Link>
            {menuOpen[index]? <Submenu par={par}/>: null}
        </li>
    )
}
