import Menu from 'components/Menu';
import Bienvenidos from 'pages/Bienvenidos/Bienvenidos';
import Csstutorial from 'pages/Csstutorial';
import Home from 'pages/Home';
import Html from 'pages/Html';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Sass from 'pages/Sass';
import ReactPage from 'pages/ReactPage'
import ReactNativeExperience from 'pages/ReactNativeExperience'
import Fullstack from 'pages/Fullstack';
import useClassNames from 'hooks/useClassNames';
import Git from 'pages/Git';
import NextConTypescript from 'pages/NextConTypescript';
import Webpack from 'pages/Webpack';
import NodeJS from 'pages/NodeJS';
import ApiCalls from 'pages/ApiCalls';
import Curl from 'pages/Curl';
import Express from 'pages/Express';
import MongoDB from 'pages/MongoDB';
import Redis from 'pages/Redis';

function App() {

  const { handleClick, classNameBTN, classNameBTNMenu, classNameMenu2 } = useClassNames()

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
          <Route path="/react native" ><ReactNativeExperience /></Route>
          <Route path="/fullstack" ><Fullstack /></Route>
          <Route path="/git" ><Git /></Route>
          <Route path="/nextjs/typescript"><NextConTypescript /></Route>
          <Route path="/webpack"><Webpack /></Route>
          <Route path="/nodejs"><NodeJS /></Route>
          <Route path="/apicalls"><ApiCalls /></Route>
          <Route path="/curl"><Curl /></Route>
          <Route path="/express"><Express /></Route>
          <Route path="/mongodb"><MongoDB /></Route>
          <Route path="/redis"><Redis /></Route>
        </Switch>

        <div className="menu">
          <Menu handleClick={handleClick} />
        </div>
      </div>
      <div style={{ alignContent: "center" }}>
        <div className={classNameBTN} onClick={handleClick}>
          <span className={classNameBTNMenu}></span>
        </div>
      </div>
      <div className={classNameMenu2}>

        <Menu handleClick={handleClick} />
      </div>
    </Router>
  );
}




export default App;
