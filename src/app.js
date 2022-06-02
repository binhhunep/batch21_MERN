import "./app.scss";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Header from "./containers/header";

import Navbar from "./containers/navbar";
import Session1 from "./components/session1";
import Session2 from "./components/session2";
export default function App() {
  return (
    <BrowserRouter>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}
