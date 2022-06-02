import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import StandardSlider from "./standardSlider";
export default function ImageGalleries() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} row`}>
        <div className={`${styles.header_title} col-md-6`}>
          <h3 className={styles.header_title_text}>Image Galleries</h3>
        </div>
        <div className={`${styles.header_content} col-md-6 text-right`}>
          <ol className={`${styles.header_oList} breadcrumb breadcrumb-2`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Elements</a>
            </li>
            <li className="active">Image Galleries</li>
          </ol>
        </div>
      </header>
      <section className={`${styles.body} row`}>
        <article className={`${styles.body_standardSlider} col-12`}>
          <div className={styles.body_standardSlider_tiltle}>
            <h4 className={styles.standardSlider_tiltle}> STANDARD SLIDER </h4>
            <p className={styles.standardSlider_content}>
              {`Image slider gallery with all controls. Initialize with
              'slider-all-controls' class.`}
            </p>
          </div>
          <div className={styles.body_standardSlider_image}>
            <StandardSlider />
          </div>
        </article>
        <article
          className={`${styles.body_sliderThumbNailControls} col-12`}
        ></article>
        <article
          className={`${styles.body_lightBoxGridGallery} col-12 row`}
        ></article>
      </section>
    </div>
  );
}
