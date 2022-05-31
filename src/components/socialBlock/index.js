import React from "react";
import styles from "./styles.module.scss";

function SocialBlock({ iconSocial, colorSocial, titleSocial, textSocial }) {
  return (
    <div className={styles.container} style={{ backgroundColor: colorSocial }}>
      <div className={styles.container_icon}>
        <i className={iconSocial} />
      </div>
      <div className={styles.container_content}>
        <p className={styles.container_title}>{titleSocial}</p>
        <p className={styles.container_text}>{textSocial}</p>
      </div>
    </div>
  );
}

export default SocialBlock;
