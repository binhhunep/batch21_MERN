import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function StandardSlider() {
  const [imageSelect, setImageSelect] = useState(1);
  const [inProp, setInProp] = useState(true);
  const dotSelect = [1, 2, 3];
  const changeImageClick = (item) => {
    setImageSelect(item);
  };
  useEffect(() => {
    if (imageSelect) {
      const timer = setInterval(() => {
        setImageSelect(imageSelect + 1);
        if (imageSelect === 3) {
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
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <img
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={styles.container_image}
            alt="Standard Slider"
            src={`images/session2/imageGallaries/standardSlider/${imageSelect}.jpg`}
          />
        )}
      </Transition>

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
