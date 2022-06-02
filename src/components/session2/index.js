import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import LikeButton from "./likeButton";
import ImageViewer from "./imageViewer";
import RateButton from "./rateButton";
export default function Session2() {
  return (
    <div className={styles.container}>
      <div className={styles.container_likeButton}>
        <h1>{"1.Like Button"}</h1>
        <LikeButton />
      </div>
      <div className={styles.container_rateButton}>
        <h1>{"2.Rate Button"}</h1>
        <RateButton />
      </div>
      <div className={styles.container_imageViewer}>
        <h1>{"3.Image Viewer"}</h1>
        <ImageViewer />
      </div>
    </div>
  );
}
