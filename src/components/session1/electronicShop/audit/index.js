import React, { useState } from "react";
import styles from "./styles.module.scss";
import StarIcon from "./starIcon";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function Audit({ starColorOn, starColorOff }) {
  const [star, setStar] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  const starClick = (item) => {
    setStar(item);
  };
  return (
    <div className={styles.container}>
      {stars.map((item, index) => {
        if (item <= star) {
          return (
            <AiFillStar
              size="1.2vw"
              key={index}
              style={{ color: "orange" }}
              onClick={() => starClick(item)}
            />
          );
        } else {
          return (
            <AiOutlineStar
              size="1.2vw"
              key={index}
              style={{ color: "orange" }}
              onClick={() => starClick(item)}
            />
          );
        }
      })}
    </div>
  );
}

export default Audit;
