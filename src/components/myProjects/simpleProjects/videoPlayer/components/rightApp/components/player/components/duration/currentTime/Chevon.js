import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function CurrentTime({ currentValue }) {
  let m = Math.floor(currentValue / 60);
  let s = Math.floor(currentValue % 60);
  let b = m,
    c = s;
  if (s > 59) {
    m = m + 1;
    s = 0;
  }
  c < 10 ? (c = `0${s}`) : (c = s);
  b < 10 ? (b = `0${m}`) : (b = m);

  return (
    <div className={styles.container}>
      <p>
        {b}:{c}
      </p>
    </div>
  );
}
