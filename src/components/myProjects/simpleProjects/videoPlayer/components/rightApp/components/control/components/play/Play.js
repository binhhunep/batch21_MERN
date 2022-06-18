import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function Play({ onClick, play }) {
  const playClick = (message) => {
    onClick && typeof onClick === "function" && onClick(message);
  };
  return (
    <div className={styles.container}>
      {!play ? (
        <BsFillPlayFill
          onClick={() => playClick("play")}
          style={{ fontSize: "1.3vmax" }}
        />
      ) : (
        <BsPauseFill
          className={play ? styles.container_pauseNew : styles.container_pause}
          onClick={() => playClick("pause")}
          style={{ fontSize: "1.3vmax" }}
        />
      )}
    </div>
  );
}
