import Menu from 'components/Menu';
import Bienvenidos from 'pages/Bienvenidos/Bienvenidos';
import Csstutorial from 'pages/Csstutorial';
import Home from 'pages/Home';
import Html from 'pages/Html';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import '../src/images/css3.jpg'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 id="title">Tutoriales 
          <Link to="/"><p>
            <img src="https://th.bing.com/th/id/OIP.JTwVXe6Pc_U2eakkW7eE9wHaEK?w=293&h=180&c=7&o=5&pid=1.7" alt="css logo"></img>
          </p></Link>
        </h1>
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
