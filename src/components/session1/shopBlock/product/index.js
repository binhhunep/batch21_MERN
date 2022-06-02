import React from "react";
import styles from "./styles.module.scss";

function Product({ productImage, productName, productInfor }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.container_productImage}
        alt="Product"
        src={`images/products/${productImage}`}
      />
      <div className={styles.container_productName}>{productName}</div>
      <div className={styles.container_productInfor}>{productInfor}</div>
    </div>
  );
}

export default Product;
