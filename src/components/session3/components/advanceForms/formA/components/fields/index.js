import React from "react";
import styles from "./styles.module.scss";

import TextField from "./components/textField/TextField";

export default function Fields() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div className={styles.header_left}>
          <TextField label={"First Name"} title={"firstName"} />
        </div>
        <div className={styles.header_right}>
          <TextField label={"Last Name"} title={"lastName"} />
        </div>
      </div>
      <div className={styles.container_body}>
        <div className={styles.body_left}>
          <TextField label={"Phone Number"} title={"phoneNumber"} />
        </div>
        <div className={styles.body_right}>
          <TextField label={"Email"} title={"email"} />
        </div>
      </div>
      <div className={styles.container_footer}>
        <div className={styles.footer_left}>
          <TextField label={"Password"} title={"password"} />
        </div>
        <div className={styles.footer_right}>
          <TextField label={"Confirm Password"} title={"confirmPassword"} />
        </div>
      </div>
    </div>
  );
}
