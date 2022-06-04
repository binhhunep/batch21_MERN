import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
//import animate
import Animate from "rc-animate";
/****************************************/
export default function StandardSlider() {
  //animation
  const [show, setShow] = useState(true);
  /**************************************/
  const [imageSelect, setImageSelect] = useState(1);
  const dotSelect = [1, 2, 3];
  const changeImageClick = (item) => {
    setImageSelect(item);
  };

  //unmouting
  useEffect(() => {
    if (imageSelect) {
      const timer = setInterval(() => {
        setImageSelect(imageSelect + 1);
        setShow(!show);
        if (imageSelect === 3) {
          setImageSelect(1);
        }
      }, 4000);
      return () => clearInterval(timer);
    }
  });
  return (
    <div className={styles.container}>
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
              <div
                key={index}
                className={styles.container_imageSelector_item}
                onClick={() => changeImageClick(item)}
              >
                <FaDotCircle size={"2vw"} />
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className={styles.container_imageSelector_item}
                onClick={() => changeImageClick(item)}
              >
                <FaRegDotCircle size={"2vw"} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
