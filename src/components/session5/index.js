import React, { useMemo, memo } from "react";
import styles from "./styles.module.scss";
import { Divider } from "antd";

import Navigation1 from "./components/Navigation1";

function Session5() {
  return (
    <div className={` ${styles.container}`}>
      <div className={`row ${styles.container_formLogin}`}>
        <Divider
          orientation="left"
          style={{ padding: "auto 1vw", margin: "auto 0" }}
        >
          <h1>{`1. React Router Dom`}</h1>
        </Divider>
        <div className={`${styles.container_formLogin_navbar}`}>
          <Navigation1 />
        </div>
        <div className={`${styles.container_formLogin_body}`}></div>
      </div>
    </div>
  );
}
export default Session5;
