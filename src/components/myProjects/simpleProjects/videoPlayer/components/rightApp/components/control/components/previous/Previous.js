import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { MdSkipPrevious } from "react-icons/md";

export default function Previous({ onClick }) {
  const previousClick = (message) => {
    onClick && typeof onClick === "function" && onClick(message);
  };
  return (
    <div className={styles.container}>
      <MdSkipPrevious
        onClick={() => previousClick("previous")}
        style={{ fontSize: "1.3vmax" }}
      />
    </div>
  );
}
