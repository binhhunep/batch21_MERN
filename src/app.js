import "./app.scss";
import React from "react";
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Header from "./containers/header";

import Navbar from "./containers/navbar";
import Session1 from "./components/session1";
import Session2 from "./components/session2";
import Session3 from "./components/session3";
import Session4 from "./components/session4";
import SimpleProjects from "./components/myProjects/simpleProjects";

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <div className="app_container">
              <Navbar />
              <Header />
            </div>
          </Route>
          <Route exact path="/Session1">
            <Navbar />
            <Session1 />
          </Route>
          <Route exact path="/Session2">
            <Navbar />
            <Session2 />
          </Route>
          <Route exact path="/Session3">
            <Navbar />
            <Session3 />
          </Route>
          <Route exact path="/Session4">
            <Navbar />
            <Session4 />
          </Route>
          <Route exact path="/SimpleProjects">
            <Navbar />
            <SimpleProjects />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
