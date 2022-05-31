import React from "react";
import styles from "./styles.module.scss";

export default function Column({ percentage, percentageColor, date }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_percentage}>
        <div
          className={styles.container_hidePercentage}
          style={{
            height: `${100 - percentage}%`,
          }}
        />
        <div
          className={styles.container_showPercentage}
          style={{
            backgroundColor: percentageColor,
            height: `${percentage}%`,
          }}
        />
      </div>
      <div className={styles.container_date}>{date}</div>
    </div>
  );
}
