import React from "react";
import styles from "./styles.module.scss";

import TextField from "./components/textField/TextField";

export default function Fields() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div className={styles.header_left}>
          <TextField
            label1={"User Name"}
            title1={"userName"}
            label2={"Password"}
            title2={"password"}
          />
        </div>
      </div>
    </div>
  );
}
