import "./style.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () =>(
  <>
    <Sidebar/>
    <Router>
      <div className="app">
        <Route path="/games" component={Home}/>
        <Route path="/skaters" component={Home}/>
        <Route path="/goalies" component={Home}/>
        <Route path="/lines" component={Home}/>
        <Route path="/teams" component={Home}/>
        <Route path="/settings" component={Home}/>
      </div>
    </Router>
  </>
);

export default App;

// #eefbff
// purple: #7485D7
//#4495EE
// blue: #355592
// red: #D64C4A
