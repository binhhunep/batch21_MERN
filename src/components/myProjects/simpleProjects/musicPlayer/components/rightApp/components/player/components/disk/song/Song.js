import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function Song({ audioName }) {
  return (
    <div className={styles.container}>
      <p style={{ fontSize: "1.3vmax" }}>{audioName}</p>
    </div>
  );
}
