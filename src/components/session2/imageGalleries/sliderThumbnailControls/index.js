import styles from "./styles.module.scss";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//import animate
import Animate from "rc-animate";
/****************************************/
export default function SliderThumbnailControls() {
  //import animate
  const [show, setShow] = useState(true);
  /****************************************/
  const [imageSelect, setImageSelect] = useState(1);
  const dotSelect = [1, 2, 3, 4];
  const selectImageClick = (item) => {
    setImageSelect(item);
    setShow(!show);
  };
  const changeImageLeftClick = () => {
    if (imageSelect > 1) {
      setImageSelect(imageSelect - 1);
      setShow(!show);
    }
  };
  const changeImageRightClick = () => {
    if (imageSelect < 4) {
      setImageSelect(imageSelect + 1);
      setShow(!show);
    }
  };

  useEffect(() => {
    if (imageSelect) {
      const timer = setInterval(() => {
        setImageSelect(imageSelect + 1);
        setShow(!show);
        if (imageSelect === 4) {
          setImageSelect(1);
        }
      }, 6000);
      return () => clearInterval(timer);
    }
    //unmouting
  });

  return (
    <div className={styles.container}>
      <div className={styles.container_changeImage}>
        <div
          className={styles.container_changeImage_left}
          onClick={changeImageLeftClick}
        >
          <BiChevronLeft
            style={{ color: imageSelect === 1 ? "#C1C1C1" : "white" }}
            className={styles.container_chevron_left}
            size={"7vw"}
          />
        </div>
        <div
          className={styles.container_changeImage_right}
          onClick={changeImageRightClick}
        >
          <BiChevronRight
            style={{ color: imageSelect === 4 ? "#C1C1C1" : "white" }}
            className={styles.container_chevron_right}
            size={"7vw"}
          />
        </div>
      </div>
      <Animate>
        <img
          key={show}
          className={styles.container_image}
          alt="Standard Slider"
          src={`images/session2/imageGallaries/standardSlider/${imageSelect}.jpg`}
        />
      </Animate>
      <div className={styles.container_imageSelector}>
        {dotSelect.map((item, index) => {
          if (item === imageSelect) {
            return (
              <Animate
                key={index}
                className={styles.container_imageSelector_animation}
              >
                <img
                  onClick={() => selectImageClick(item)}
                  key={show}
                  className={styles.imageSelector_animation_item}
                  style={{ opacity: "1" }}
                  alt="Standard Slider"
                  src={`images/session2/imageGallaries/standardSlider/${item}.jpg`}
                />
              </Animate>
            );
          } else {
            return (
              <div
                key={index}
                className={styles.container_imageSelector_nonAnimation}
              >
                <img
                  onClick={() => selectImageClick(item)}
                  style={{ opacity: "0.5" }}
                  className={styles.imageSelector_animation_item}
                  alt="Standard Slider"
                  src={`images/session2/imageGallaries/standardSlider/${item}.jpg`}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
