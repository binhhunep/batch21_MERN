import styles from "./styles.module.scss";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Transition } from "react-transition-group";

export default function SliderThumbnailControls() {
  const [imageSelect, setImageSelect] = useState(1);
  const [inProp, setInProp] = useState(true);
  const dotSelect = [1, 2, 3, 4];
  const selectImageClick = (item) => {
    setImageSelect(item);
  };
  const changeImageLeftClick = () => {
    if (imageSelect > 1) {
      setImageSelect(imageSelect - 1);
    }
  };
  const changeImageRightClick = () => {
    if (imageSelect < 4) {
      setImageSelect(imageSelect + 1);
    }
  };

  useEffect(() => {
    if (imageSelect) {
      const timer = setInterval(() => {
        setImageSelect(imageSelect + 1);
        if (imageSelect === 4) {
          setImageSelect(1);
        }
      }, 4000);
      return () => clearInterval(timer);
    }
    //unmouting
  });
  const duration = 1000;
  const defaultStyle = {
    transition: `opacity ${duration}ms `,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Transition in={inProp} timeout={duration}>
          {(state) => (
            <>
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
              <img
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                className={styles.container_image}
                alt="Standard Slider"
                src={`images/session2/imageGallaries/standardSlider/${imageSelect}.jpg`}
              />
            </>
          )}
        </Transition>
        <div className={styles.container_imageSelector}>
          {dotSelect.map((item, index) => {
            if (item === imageSelect) {
              return (
                <img
                  onClick={() => selectImageClick(item)}
                  key={index}
                  className={styles.container_imageSelector_item}
                  style={{ opacity: "1" }}
                  alt="Standard Slider"
                  src={`images/session2/imageGallaries/standardSlider/${item}.jpg`}
                />
              );
            } else {
              return (
                <img
                  onClick={() => selectImageClick(item)}
                  key={index}
                  style={{ opacity: "0.5" }}
                  className={styles.container_imageSelector_item}
                  alt="Standard Slider"
                  src={`images/session2/imageGallaries/standardSlider/${item}.jpg`}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
