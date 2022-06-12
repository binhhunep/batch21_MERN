import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { MdSkipNext } from "react-icons/md";

export default function Next({ onClick }) {
  const nextClick = (message) => {
    onClick && typeof onClick === "function" && onClick(message);
  };
  return (
    <div className={styles.container}>
      <MdSkipNext
        style={{ fontSize: "1.3vmax" }}
        onClick={() => {
          nextClick("next");
        }}
      />
    </div>
  );
}
