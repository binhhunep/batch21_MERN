import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { BsChevronCompactDown } from "react-icons/bs";

export default function Chevon() {
  return (
    <div className={styles.container}>
      <BsChevronCompactDown style={{ fontSize: "1.8vmax" }} />
    </div>
  );
}
