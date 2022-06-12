import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { AiOutlineRedo } from "react-icons/ai";

export default function Redo({ onClick, isRedo }) {
  const redoClick = (message) => {
    onClick && typeof onClick && onClick(message);
  };
  return (
    <div className={styles.container} onClick={() => redoClick("redo")}>
      <AiOutlineRedo
        className={isRedo ? styles.containerNew_icon : styles.container_icon}
        style={{ fontSize: "1.3vmax" }}
      />
    </div>
  );
}
