import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
function State() {
  const [index, setIndex] = useState(1);
  const [start, setStart] = useState(true);
  const [hidePrevious, setHidePrevious] = useState(false);
  const [hideNext, setHideNext] = useState(false);
  const indexs = [1, 2, 3, 4, 5, 6];

  const previousClick = () => {
    if (index > 1) {
      setIndex(index - 1);
      setStart(true);
      setHideNext(false);
    } else {
      setHidePrevious(true);
    }
  };
  const nextClick = () => {
    if (index < 6) {
      setIndex(index + 1);
      setStart(true);
      setHidePrevious(false);
    } else {
      setHideNext(true);
    }
  };
  const imageCheckClick = (item) => {
    setIndex(item);
    setStart(false);
  };

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setIndex(index + 1);
        if (index === 6) {
          setIndex(1);
        }
      }, 2000);
      // clearing interval
      return () => clearInterval(timer);
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <FaLessThan
          className={styles.container_previous}
          onClick={previousClick}
          style={{ color: hidePrevious ? "#e3e3e3" : "#f2a728" }}
        />
        <img
          className={styles.container_imageTop}
          alt="Image State"
          src={`images/electronicShop/${index}.jpg`}
          width="200px"
          height="250px"
        />
        <FaGreaterThan
          className={styles.container_next}
          style={{ color: hideNext ? "#e3e3e3" : "#f2a728" }}
          onClick={nextClick}
        />
      </div>
      <div className={styles.container_allImages}>
        {indexs.map((item, number) => {
          return (
            <img
              key={number}
              alt="Image State"
              src={`images/electronicShop/${item}.jpg`}
              width="90px"
              height="100px"
              onClick={() => imageCheckClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default State;
