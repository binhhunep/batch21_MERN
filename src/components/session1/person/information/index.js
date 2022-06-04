import React from "react";
import styles from "./styles.module.scss";

function Information({ iconName, title, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_icon}>
        <i className={`${styles.icon$} ${iconName}`} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.content_title}>{title}</div>
        <div className={styles.content_text}>{text}</div>
      </div>
    </div>
  );
}

export default Information;
