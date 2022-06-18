import React from "react";
import styles from "./styles.module.scss";

export default function TitleRight({ title }) {
  return (
    <div className={styles.container}>
      <h5 style={{ color: "", fontSize: "1.5vmax" }}>{title}</h5>
    </div>
  );
}
