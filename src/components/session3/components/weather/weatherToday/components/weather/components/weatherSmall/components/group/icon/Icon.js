import React from "react";
import styles from "./styles.module.scss";

export default function Icon({ icon, color }) {
  return (
    <div className={styles.container}>
      <img style={{ width: "2.5vw", height: "2.5vw" }} src={icon} alt="icon" />
    </div>
  );
}
