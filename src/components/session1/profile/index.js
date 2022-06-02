import React from "react";
import styles from "./styles.module.scss";

export default function Profile({ title, titleColor, name, followers }) {
  return (
    <div className={`col-12 ${styles.container}`}>
      <div
        className={styles.container_icon}
        style={{ backgroundColor: titleColor }}
      >
        <i className={`${name} fa-lg`} style={{ color: "white" }}></i>
      </div>
      <div className={styles.container_title}>{title}</div>
      <div className={styles.container_percentage}>
        <div
          className={styles.container_showPercentage}
          style={{
            backgroundColor: titleColor,
            width: `${followers}%`,
          }}
        ></div>
        <div
          className={styles.container_hidePercentage}
          style={{
            width: `${100 - followers}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
