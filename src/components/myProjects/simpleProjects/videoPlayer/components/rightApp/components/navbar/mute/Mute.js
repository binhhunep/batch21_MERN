import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { GoUnmute, GoMute } from "react-icons/go";
import { message } from "antd";

export default function Mute({ onClick, isMute }) {
  const muteClick = (message) => {
    onClick && typeof onClick && onClick(message);
    console.log(isMute);
  };
  return (
    <div className={styles.container}>
      {!isMute ? (
        <GoUnmute
          onClick={() => muteClick("mute")}
          style={{ fontSize: "1.3vmax" }}
        />
      ) : (
        <GoMute
          onClick={() => muteClick("mute")}
          style={{ fontSize: "1.3vmax" }}
        />
      )}
    </div>
  );
}
