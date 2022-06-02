import styles from "./styles.module.scss";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function RateButton() {
  const [star, setStar] = useState(0);
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const likeClick = (item) => {
    setStar(item);
  };
  return (
    <div className={styles.container}>
      {stars.map((item, index) => {
        if (star >= item) {
          return (
            <AiFillStar
              size="5vw"
              key={index}
              onClick={() => likeClick(item)}
            />
          );
        } else {
          return (
            <AiOutlineStar
              size="5vw"
              key={index}
              onClick={() => likeClick(item)}
            />
          );
        }
      })}
    </div>
  );
}
