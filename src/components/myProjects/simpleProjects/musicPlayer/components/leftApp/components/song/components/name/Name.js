import React from "react";
import styles from "./styles.module.scss";

export default function Name({ audioName, select }) {
  return (
    <div className={select ? styles.containerNew : styles.container}>
      {audioName}
    </div>
  );
}
