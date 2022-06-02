import styles from "./styles.module.scss";
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export default function LikeButton() {
  const [dislike, setDislike] = useState(true);
  const handleClick = () => {
    setDislike(!dislike);
  };
  return (
    <div className={styles.container}>
      {dislike ? (
        <AiOutlineLike size="10vw" onClick={handleClick} />
      ) : (
        <AiFillLike size="10vw" onClick={handleClick} />
      )}
    </div>
  );
}
