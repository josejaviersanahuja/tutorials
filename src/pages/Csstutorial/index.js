import React from 'react'
import { Switch, Route, useParams} from "react-router-dom";
import 'App.css';
import Selector from './Selector';
import Coloring from './Coloring';
import Layouts from './Layouts';
export default function Csstutorial() {
    return (
        <>
            <h2>
                Esta es la pag CSS
                <p><a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=1">Link del curso</a></p>
            </h2>
            
            <Switch>
            <Route path="/Css/:id" children={<Child />} />
            </Switch>
        </>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    
  
    return (<>
        <h3>{id}</h3>
        {id==="Selectors"? <Selector/>: null }
        {id==="Coloring"? <Coloring/>:null}
        {id==="Layouts"? <Layouts/>:null}
        </>
    );
  }