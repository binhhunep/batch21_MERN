import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import DurationTime from "./durationTime/DurationTime";
import CurrentTime from "./currentTime/Chevon";

export default function Duration({ duration, timer, currentValue }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_currentTime}>
        <CurrentTime currentValue={currentValue} />
      </div>
      <div className={styles.container_durationTime}>
        <DurationTime duration={duration} />
      </div>
    </div>
  );
}
