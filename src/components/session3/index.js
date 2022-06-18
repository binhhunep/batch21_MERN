import React from "react";
import styles from "./styles.module.scss";
import { Divider } from "antd";

import LoginA from "./components/forms/loginA";
import LoginB from "./components/forms/loginB";
import LoginC from "./components/forms/logingC";
import FormA from "./components/advanceForms/formA";
import FormB from "./components/advanceForms/formB";
import FormC from "./components/advanceForms/formC";
import FormD from "./components/advanceForms/formD";
import WeatherToday from "./components/weather/weatherToday";
import Users from "../../networkingAPI/Users";

export default function Session3() {
  return (
    <div className={` ${styles.container}`}>
      <div className={` ${styles.container_formLogin}`}>
        <Divider
          orientation="left"
          style={{ padding: "0 1vw", margin: "auto 0" }}
        >
          <h1>{`1. Standard Login Form (material UI)`}</h1>
        </Divider>
        <div className={`row ${styles.container_formLogin_body}`}>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <LoginA />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <LoginB />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <LoginC />
          </div>
        </div>
      </div>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="center"
          style={{ padding: "0 1vw", margin: "auto 0" }}
        >
          <h1>{`2. Advance Login Form (Formik + Yup)`}</h1>
        </Divider>
        <div
          className={`col-lg-8 col-md-8 col-sm-12 ${styles.container_formLogin_body}`}
        >
          <FormA />
        </div>
      </div>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="right"
          style={{ padding: "0 1vw", margin: "auto 0" }}
        >
          <h1>{`3. Advance Login Form (Antd + Yup)`}</h1>
        </Divider>
        <div
          className={`col-lg-8 col-md-8 col-sm-12 ${styles.container_formLogin_body}`}
        >
          <FormB />
        </div>
      </div>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="center"
          style={{ padding: "0 1vw", margin: "auto 0" }}
        >
          <h1>{`4. Advance Login Form (Antd)`}</h1>
        </Divider>
        <div
          className={`col-lg-8 col-md-8 col-sm-12 ${styles.container_formLogin_body}`}
        >
          <FormC />
        </div>
      </div>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="left"
          style={{ padding: "auto 1vw", margin: "auto 0" }}
        >
          <h1>{`5. Weather Today`}</h1>
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
          <h1>{`6. Networking`}</h1>
        </Divider>
        <div className={`${styles.container_formLogin_body}`}>
          <Users />
        </div>
      </div>
    </div>
  );
}
