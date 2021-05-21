import Menu from 'components/Menu';
import Bienvenidos from 'pages/Bienvenidos/Bienvenidos';
import Csstutorial from 'pages/Csstutorial';
import Home from 'pages/Home';
import Html from 'pages/Html';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../src/images/css3.jpg'
import './App.css';
import Sass from 'pages/Sass';
import ReactPage from 'pages/ReactPage'
import Fullstack from 'pages/Fullstack';
import useClassNames from 'hooks/useClassNames';

function App() {

  const {handleClick, classNameBTN, classNameBTNMenu, classNameMenu2} =useClassNames()
console.log(classNameBTN);
  return (
    <Router>
      <div className="App">
        <div id="title">
          <h1> Tutoriales </h1>
          <Link to="/">
            <div id="divlink"></div>
          </Link>

        </div>
        <Switch>
          <Route exact path="/" ><Bienvenidos /></Route>
          <Route path="/home" ><Home /></Route>
          <Route path="/css" ><Csstutorial /></Route>
          <Route path="/html" ><Html /></Route>
          <Route path="/sass" ><Sass /></Route>
          <Route path="/react" ><ReactPage /></Route>
          <Route path="/fullstack" ><Fullstack /></Route>
        </Switch>

        <div className="menu">
          <Menu />
        </div>
      </div>
      <div style={{alignContent:"center"}}>
      <div className={classNameBTN}  onClick={handleClick}>
          <span className={classNameBTNMenu}></span>
        </div>
        </div>
      <div className={classNameMenu2}>
        
        <Menu handleClick={handleClick}/>
      </div>
    </Router>
  );
}




export default App;
