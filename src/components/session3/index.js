import React from "react";
import styles from "./styles.module.scss";

import LoginA from "./components/forms/loginA";
import LoginB from "./components/forms/loginB";
import LoginC from "./components/forms/logingC";
import FormA from "./components/advanceForms/formA";

export default function Session3() {
  return (
    <div className={` ${styles.container}`}>
      <div className={` ${styles.container_formLogin}`}>
        <h1>{`1. Standard Login Form`}</h1>
        <div className={`row ${styles.container_formLogin_body}`}>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <LoginA />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <LoginB />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <LoginC />
          </div>
        </div>
      </div>
      <div className={`row ${styles.container_formLogin}`}>
        <h1>{`2. Advance Login Form`}</h1>
        <div
          className={`col-lg-8 col-md-8 col-sm-12 ${styles.container_formLogin_body}`}
        >
          <FormA />
        </div>
      </div>
    </div>
  );
}
