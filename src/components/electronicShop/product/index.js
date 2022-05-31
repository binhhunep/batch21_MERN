import React from "react";
import styles from "./styles.module.scss";

function Product({ productImage, productName, saleOff }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_saleOff}>{saleOff}</div>
      <img
        alt="product"
        src={`images/electronicShop/${productImage}`}
        className={styles.container_image}
      />
      <div className={styles.container_title}>{productName}</div>
    </div>
  );
}

export default Product;
