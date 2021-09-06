import "./style.css";
import "./Sidebar.css";
import "./Skaters.css";
import "./Goalies.css";
import "./Teams.css";

import Sidebar from "./components/Sidebar/Sidebar.js";
import Home from "./components/Home/Home.js";
import Games from "./components/Games/Games.js";
import Skaters from "./components/Skaters/Skaters.js";
import Goalies from "./components/Goalies/Goalies.js";
//import Lines from "./components/Lines/Lines.js";
import Teams from "./components/Teams/Teams.js";
//import Settings from "./components/Settings/Settings.js";

import { StateProvider } from "./functions/store.js"; 

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


const App = () =>(
  <>
    <StateProvider>
      <Sidebar/>
      <Router>
        <div className="app">
          <Switch>
            <Route extact path="/games" component={Games}/>
            <Route extact path="/skaters" component={Skaters}/>
            <Route extact path="/goalies" component={Goalies}/>
            <Route extact path="/teams" component={Teams}/>
            <Route extact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  </>
);

export default App;

/*
            <Route extact path="/lines" component={Lines}/>
            <Route extact path="/settings" component={Settings}/> 
*/


// #eefbff
// purple: #7485D7
//#4495EE
// blue: #355592
// red: #D64C4A
