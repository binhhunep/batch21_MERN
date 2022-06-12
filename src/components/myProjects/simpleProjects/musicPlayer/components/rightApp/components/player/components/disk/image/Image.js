import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function Image({ avatar, play }) {
  return (
    <div
      className={play ? styles.containerNew : styles.container}
      style={{
        backgroundImage: `url(${avatar})`,
      }}
    >
      <div
        className={styles.container_center}
        style={{ backgroundColor: "#F8F9FE", width: "3vw", height: "3vw" }}
      />
    </div>
  );
}
