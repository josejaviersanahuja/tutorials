import React from 'react'
import { Link } from 'react-router-dom'

export default function Submenu({par, handleClick}) {

    return (
        <ul>
            {par[1].map(e=> 
                <li 
                    key={e}
                    id={'a'+par[1].indexOf(e).toString()}
                >
                    <Link to={`/${par[0]}/${e}`} onClick={handleClick}>{e}</Link>
                </li>)}
        </ul>
    )
}
