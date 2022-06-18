import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
export default function AddListIcon({}) {
  const [like, setLike] = useState(false);
  const playPauseClick = () => {
    setLike(!like);
  };
  return (
    <div className={styles.container}>
      {like ? (
        <BsFillSuitHeartFill onClick={playPauseClick} />
      ) : (
        <BsSuitHeart onClick={playPauseClick} />
      )}
    </div>
  );
}
