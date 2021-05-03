import Menu from 'components/Menu';
import Bienvenidos from 'pages/Bienvenidos/Bienvenidos';
import Csstutorial from 'pages/Csstutorial';
import Home from 'pages/Home';
import Html from 'pages/Html';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Inicio</Link>
        <h1>Tutoriales</h1>
        <Switch>
          <Route exact path="/" ><Bienvenidos /></Route>
          <Route path="/home" ><Home /></Route>
          <Route path="/css" ><Csstutorial /></Route>
          <Route path="/html" ><Html /></Route>
        </Switch>
        <div className="menu">
          <Menu/>
        </div>
      </div>

    </Router>
  );
}




export default App;
