import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "./styles.css";

import Home from "./Home";
import Border from "./Border";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/border/:c1/:c2/:c3/:c4/:time">
          <Border />
        </Route>
      </Switch>
    </Router>
  );
}
