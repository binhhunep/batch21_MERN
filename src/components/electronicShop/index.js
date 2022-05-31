import React from "react";
import styles from "./styles.module.scss";

import Product from "./product";
import ProductInfo from "./productInfo";
import ProductPrices from "./productPrices";
import Audit from "./audit";
import SoldPercentage from "./soldPercentage";

function ElectronicShop({
  productImage = "1.jpg",
  productName = "",
  productInfor = "",
  productPrices = "",
  saleOff = "",
  discount = "",
  starColorOn = "",
  starColorOff = "",
  percentage = {},
  productSold = {},
}) {
  return (
    <div className={styles.container}>
      <Product
        className={styles.container_product}
        productImage={productImage}
        productName={productName}
        saleOff={saleOff}
      ></Product>
      <ProductPrices
        className={styles.container_productPrices}
        productPrices={productPrices}
        discount={discount}
        saleOff={saleOff}
      ></ProductPrices>
      <ProductInfo
        className={styles.container_ProductInfo}
        productInfor={productInfor}
      ></ProductInfo>
      <Audit
        className={styles.container_Audit}
        starColorOn={starColorOn}
        starColorOff={starColorOff}
      />
      <SoldPercentage
        className={styles.container_SoldPercentage}
        percentage={percentage}
        productSold={productSold}
      ></SoldPercentage>
    </div>
  );
}

export default ElectronicShop;
