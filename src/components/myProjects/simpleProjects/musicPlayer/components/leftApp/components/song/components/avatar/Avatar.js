import React from "react";
import styles from "./styles.module.scss";

export default function Avatar({ avatar }) {
  return (
    <div className={styles.container}>
      <img src={avatar} />
    </div>
  );
}
