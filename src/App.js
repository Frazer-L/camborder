import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ReactGA from 'react-ga';

import "./styles.css";

import Home from "./Home";
import Border from "./Border";
import HowToPage from './HowToPage'

export default function App() {

  useEffect(()=> {
    ReactGA.initialize("G-34MWP60V9L")
    ReactGA.pageview('/')
  },[])



  return (
    <Router>
      <Switch>
      <Route path="/" exact>
          <Home />
        </Route>
        
        <Route path="/howto" exact>
          <HowToPage />
        </Route>

        <Route path="/border/:c1/:c2/:c3/:c4/:time">
          <Border />
        </Route>
      </Switch>
    </Router>
  );
}
