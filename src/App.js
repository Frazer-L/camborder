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
    ReactGA.initialize("UA-186475779-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
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
