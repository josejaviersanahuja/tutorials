import React from 'react'
import { Link } from 'react-router-dom'

export default function Submenu({par}) {
    return (
        <ul>
            {par[1].map(e=> <li key={e}><Link to={`/${par[0]}/${e}`}>{e}</Link></li>)}
        </ul>
    )
}
