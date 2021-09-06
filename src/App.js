import "./style.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Games from "./components/Games/Games";
import Skaters from "./components/Skaters/Skaters";
import Goalies from "./components/Goalies/Goalies";
import Lines from "./components/Lines/Lines";
import Teams from "./components/Teams/Teams";
import Settings from "./components/Settings/Settings";

import { StateProvider } from "./functions/store"; 

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
