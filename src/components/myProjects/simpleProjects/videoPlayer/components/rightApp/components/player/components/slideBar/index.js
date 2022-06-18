import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function SlideBar({ timer, onChange, currentValue }) {
  const [value, setValue] = useState(0);

  const currentTime = (e) => {
    onChange && typeof onChange === "function" && onChange(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        className={styles.container_seekbar_slider}
        min="0"
        max={timer}
        value={value}
        onChange={(e) => {
          currentTime(e);
        }}
      />
    </div>
  );
}
