import React from "react";
import styles from "./styles.module.scss";
import { Divider } from "antd";

import WeatherToday from "./components/weather/forecastWeather";
import CRUD from "./components/CRUD";

export default function Session4() {
  return (
    <div className={` ${styles.container}`}>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="left"
          style={{ padding: "auto 1vw", margin: "auto 0" }}
        >
          <h1>{`1. Weather Today (REST API from OpenWeather)`}</h1>
        </Divider>
        <div className={`${styles.container_formLogin_body}`}>
          <WeatherToday />
        </div>
      </div>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="center"
          style={{ padding: "auto 1vw", margin: "auto 0" }}
        >
          <h1>{`2. CRUD (REST API from backend)`}</h1>
        </Divider>
        <div className={`${styles.container_formLogin_body}`}>
          <CRUD />
        </div>
      </div>
    </div>
  );
}
