import React from "react";
import styles from "./styles.module.scss";

export default function TotalSongs({ totalSongs }) {
  return (
    <div>
      <p style={{ color: "#C7E3FE" }}>{totalSongs}</p>
    </div>
  );
}
