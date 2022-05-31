import React from "react";
import styles from "./styles.module.scss";

function Avatar({ imageName, name, job }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.container_image}
        src={`images/persons/${imageName}`}
        alt="Person"
      />
      <h6 className={styles.container_title}>{name}</h6>
      <p className={styles.container_job}> {job}</p>
    </div>
  );
}

export default Avatar;
