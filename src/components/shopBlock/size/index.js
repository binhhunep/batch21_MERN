import React from "react";
import styles from "./styles.module.scss";

function Size({ productSize }) {
  return <div className={styles.container}>{productSize}</div>;
}

export default Size;
