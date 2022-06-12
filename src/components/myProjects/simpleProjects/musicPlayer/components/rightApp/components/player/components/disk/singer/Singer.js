import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function Singer({ singer }) {
  return (
    <div className={styles.container}>
      <p style={{ fontSize: "1.2vmax", color: "#C7DCFE" }}>{singer}</p>
    </div>
  );
}
