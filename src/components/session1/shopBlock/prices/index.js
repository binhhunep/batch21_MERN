import React from "react";
import styles from "./styles.module.scss";

function Prices({ productPrices, unit, discount }) {
  return (
    <div className={styles.container}>
      <span className={styles.container_prices}>
        {unit}
        {productPrices}
      </span>
      <span className={styles.container_discount}>{discount}</span>
    </div>
  );
}

export default Prices;
