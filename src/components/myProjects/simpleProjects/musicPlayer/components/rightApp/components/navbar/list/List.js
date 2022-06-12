import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { BiListUl } from "react-icons/bi";

export default function List() {
  return (
    <div className={styles.container}>
      <BiListUl style={{ fontSize: "1.3vmax" }} />
    </div>
  );
}
