import React from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

function Navigation1() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li style={{ zIndex: "6" }}>
          <NavLink to="/session1" style={{ width: "100%", textAlign: "start" }}>
            <span>
              <ion-icon name="home-outline" />
            </span>
            <p style={{ margin: "auto 0" }}>Session1</p>
          </NavLink>
        </li>
        <li style={{ zIndex: "5" }}>
          <NavLink
            to="/session2"
            style={{
              width: "100%",
              textAlign: "start",
            }}
          >
            <span>
              <ion-icon name="information-circle-outline"></ion-icon>
            </span>
            <p style={{ margin: "auto 0" }}> Session2 </p>
          </NavLink>
        </li>
        <li style={{ zIndex: "4" }}>
          <NavLink to="/session3" style={{ width: "100%", textAlign: "start" }}>
            <span>
              <ion-icon name="apps-outline" />
            </span>
            <p style={{ margin: "auto 0" }}> Session3 </p>
          </NavLink>
        </li>
        <li style={{ zIndex: "3" }}>
          <NavLink
            to="/parameter/123456/person"
            style={{ width: "100%", textAlign: "start" }}
          >
            <span>
              <ion-icon name="image-outline" />
            </span>
            <p style={{ margin: "auto 0" }}>Session4</p>
          </NavLink>
        </li>
        <li style={{ zIndex: "2" }}>
          <NavLink
            to="/search?name=Tony&age=27"
            style={{ width: "100%", textAlign: "start" }}
          >
            <span>
              <ion-icon name="people-outline" />
            </span>
            <p style={{ margin: "auto 0" }}> SimpleProjects</p>
          </NavLink>
        </li>
        <li style={{ zIndex: "1" }}>
          <NavLink
            to="/nested-routes"
            style={{ width: "100%", textAlign: "start" }}
          >
            <span>
              <ion-icon name="mail-outline" />
            </span>
            <p style={{ margin: "auto 0" }}> Nested Routes </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation1;
