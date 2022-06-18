import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function DurationTime({ duration, timer }) {
  return (
    <div className={styles.container}>
      <p>{duration}</p>
    </div>
  );
}
