import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import Sitemap1 from "./components/Sitemap1";
import Diagnoses2 from "./components/Diagnoses2";
import Flask3 from "./components/Flask3";
import Flask3Sub from "./components/Flask3Sub";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomeBody} />
          <Route path="/Sitemap1" exact component={Sitemap1} />
          <Route path="/Diagnoses2" exact component={Diagnoses2} />
          <Route path="/Flask3" exact component={Flask3} />
          <Route path="/Flask3/Flask3Sub" component={Flask3Sub} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
