import React from "react";
import styles from "./styles.module.scss";

import TextField from "./components/textField/TextField";

export default function Fields() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div className={styles.header_left}>
          <TextField
            label1={"First Name"}
            title1={"firstName"}
            label2={"Last Name"}
            title2={"lastName"}
          />
        </div>
      </div>
      <div className={styles.container_body}>
        <div className={styles.body_left}>
          <TextField
            label1={"Phone Number"}
            title1={"phoneNumber"}
            label2={"Email"}
            title2={"email"}
          />
        </div>
      </div>
      <div className={styles.container_footer}>
        <div className={styles.footer_left}>
          <TextField
            label1={"Password"}
            title1={"password"}
            label2={"Confirm Password"}
            title2={"confirmPassword"}
          />
        </div>
      </div>
    </div>
  );
}
