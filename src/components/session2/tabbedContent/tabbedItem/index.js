import styles from "./styles.module.scss";
import React, { useState } from "react";

export default function TabbedItem({ title, backgroundColor, color }) {
  return (
    <div
      style={{ backgroundColor: backgroundColor, color: color }}
      className={styles.container}
    >
      {title}
    </div>
  );
}
