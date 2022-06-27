import "./app.scss";
import React, { Fragment } from "react";
import { HashRouter, Route, Routes, Link, Redirect } from "react-router-dom";
import Header from "./containers/header";

import Navbar from "./containers/navbar";
import Session1 from "./components/session1";
import Session2 from "./components/session2";
import Session3 from "./components/session3";
import Session4 from "./components/session4";
import Session5 from "./components/session5";
import SimpleProjects from "./components/myProjects/simpleProjects";
import AdvanceProjects from "./components/myProjects/advanceProjects";

import NestedRoutes from "./components/session5/components/pages/NestedRoutes";
import Users from "./components/session5/components/pages/NestedRoutes/pages/Users";
import Roles from "./components/session5/components/pages/NestedRoutes/pages/Roles";

export default function App() {
  return (
    <HashRouter>
      <div className="app_container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/Batch_21/Session1" element={<Session1 />} />
          <Route exact path="/Batch_21/Session2" element={<Session2 />} />
          <Route exact path="/Batch_21/Session3" element={<Session3 />} />
          <Route exact path="/Batch_21/Session4" element={<Session4 />} />
          <Route exact path="/Batch_21/Session5" element={<Session5 />} />
          <Route
            exact
            path="/MyProjects/SimpleProjects"
            element={<SimpleProjects />}
          />
          <Route
            exact
            path="/MyProjects/AdvanceProjects"
            element={<AdvanceProjects />}
          />

          <Route exact path="/session1" element={<Session1 />} />
          <Route exact path="/session2" element={<Session2 />} />
          <Route exact path="/session3" element={<Session3 />} />

          {/* PARAMETER */}
          <Route exact path="/parameter/:id/:name" element={<Session4 />} />

          <Route exact path="/search" element={<SimpleProjects />} />

          {/* NESTED ROUTES */}
          <Route exact path="/nested-routes" element={<NestedRoutes />}>
            {/* INDEX ROUTE */}
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Administrator Area</p>
                </main>
              }
            />
            <Route path="/nested-routes/users" element={<Users />} />
            <Route path="/nested-routes/roles" element={<Roles />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", height: "100vh" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}
