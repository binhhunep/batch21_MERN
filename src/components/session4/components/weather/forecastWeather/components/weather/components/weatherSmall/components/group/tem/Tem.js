import React from "react";
import styles from "./styles.module.scss";

import { IoMdSunny } from "react-icons/io";

export default function Tem({ tem }) {
  return (
    <div
      className={styles.container}
      style={{ fontSize: "1.2vw", color: "black" }}
    >
      {tem}&deg;C
    </div>
  );
}
