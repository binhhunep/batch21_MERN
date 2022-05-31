import React from "react";
import styles from "./styles.module.scss";

function ProductPrices({ productPrices, saleOff, discount }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_prices}>{productPrices}</div>
      <div className={styles.container_discount}>{discount}</div>
      <div className={styles.container_saleOff}>{saleOff} off</div>
    </div>
  );
}

export default ProductPrices;
