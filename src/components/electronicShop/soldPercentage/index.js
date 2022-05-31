import React from "react";
import styles from "./styles.module.scss";

function SoldPercentage({ percentage, productSold }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_percentage}>
        <div
          className={styles.container_showPercentage}
          style={{ width: `${percentage}%` }}
        ></div>
        <div className={styles.container_hidePercentage}></div>
      </div>
      <div className={styles.container_sold}>Sold:{productSold}</div>
    </div>
  );
}

export default SoldPercentage;
