import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function PlayPauseIcon({ select }) {
  return (
    <div className={styles.container}>
      {select ? (
        <BsPauseFill
          className={
            select ? styles.container_pauseNew : styles.container_pause
          }
        />
      ) : (
        <BsFillPlayFill style={{ fontSize: "1.2vmax" }} />
      )}
    </div>
  );
}
