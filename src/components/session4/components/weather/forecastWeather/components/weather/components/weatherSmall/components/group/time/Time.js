import React from "react";
import styles from "./styles.module.scss";

import { IoMdSunny } from "react-icons/io";

export default function Time({ time }) {
  return (
    <div
      className={styles.container}
      style={{ fontSize: "0.8vw", color: "#C1C1C1" }}
    >
      {time}
    </div>
  );
}
