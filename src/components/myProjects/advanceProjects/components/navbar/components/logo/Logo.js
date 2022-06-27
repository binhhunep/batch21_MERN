import React from "react";
import styles from "./styles.module.scss";

function Logo() {
  return (
    <div className={styles.container}>
      <img
        alt="Logo"
        src="images/myProjects/advanceProject/movie/logo/Netflix-logo.png"
        style={{ width: "120px", height: "100%" }}
      />
    </div>
  );
}

export default Logo;
