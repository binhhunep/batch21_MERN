import React from "react";
import styles from "./styles.module.scss";

export default function Singer({ author }) {
  return <div className={styles.container}>{author}</div>;
}
