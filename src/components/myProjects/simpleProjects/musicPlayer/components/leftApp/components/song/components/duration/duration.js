import React from "react";
import styles from "./styles.module.scss";

export default function Duration({ duration }) {
  return <div className={styles.container}>{duration}</div>;
}
