import React from "react";
import styles from "./styles.module.scss";

export default function ChartBar1({
  title,
  titleColor,
  percentage,
  percentageColor,
}) {
  return (
    <div className={`col-9 row ${styles.container}`}>
      <div
        className={`col-6 ${styles.container_title}`}
        style={{ backgroundColor: titleColor }}
      >
        {title}
      </div>
      <div className={`col-8 row ${styles.container_percentage}`}>
        <div
          className={styles.container_showPercentage}
          style={{
            backgroundColor: percentageColor,
            width: `${percentage}%`,
          }}
        >
          {percentage} %
        </div>
        <div
          className={styles.container_hidePercentage}
          style={{
            width: `${100 - percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
