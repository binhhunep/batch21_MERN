import React from "react";
import styles from "./styles.module.scss";

export default function Number({ index }) {
  return <div className={styles.container}>{index}</div>;
}
