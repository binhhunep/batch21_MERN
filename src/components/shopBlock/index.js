import React from "react";
import styles from "./styles.module.scss";

import Prices from "./prices";
import Product from "./product";
import Size from "./size";

function ShopBlock({
  productImage,
  productName,
  productInfor,
  productSize,
  productPrices,
  discount,
  unit,
}) {
  return (
    <div className={`${styles.container}`}>
      <Product
        className={styles.container_product}
        productImage={productImage}
        productName={productName}
        productInfor={productInfor}
      />
      <Size className={styles.container_size} productSize={productSize} />
      <Prices
        className={styles.container_prices}
        productPrices={productPrices}
        unit={unit}
        discount={discount}
      />
      <button className={styles.container_button}>
        <i className="fa-solid fa-cart-shopping" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default ShopBlock;
