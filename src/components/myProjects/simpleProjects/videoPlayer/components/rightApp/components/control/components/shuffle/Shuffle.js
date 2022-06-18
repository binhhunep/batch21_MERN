import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { FiShuffle } from "react-icons/fi";
import { TbArrowsRight } from "react-icons/tb";

export default function Control({ onClick, isShuffle }) {
  const shuffleClick = (message) => {
    onClick && typeof onClick === "function" && onClick(message);
  };
  return (
    <div className={styles.container} onClick={() => shuffleClick("shuffle")}>
      {!isShuffle ? (
        <FiShuffle style={{ fontSize: "1.3vmax" }} />
      ) : (
        <TbArrowsRight style={{ fontSize: "1.3vmax" }} />
      )}
    </div>
  );
}
