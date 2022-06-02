import React from "react";
import styles from "./styles.module.scss";

function StarIcon({ starColor }) {
  console.log(starColor);
  return (
    <div style={{ color: starColor }} className={styles.container}>
      <i className="fa-solid fa-star" />
    </div>
  );
}

export default StarIcon;
