import React from "react";
import styles from "./styles.module.scss";

function ProductInfo({ productInfor }) {
  return <div className={styles.container}>{productInfor}</div>;
}

export default ProductInfo;
