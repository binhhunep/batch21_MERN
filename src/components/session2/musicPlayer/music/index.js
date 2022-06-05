import styles from "./styles.module.scss";
import React, { useState } from "react";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsFillSuitHeartFill,
  BsSuitHeart,
} from "react-icons/bs";

export default function Music({
  index,
  avatar,
  audioName,
  author,
  duration,
  iconHeartColor,
}) {
  const [controlIcon, setControlIcon] = useState(false);
  const [like, setLike] = useState(false);
  const playClick = () => {
    setControlIcon(!controlIcon);
  };
  const likeClick = () => {
    setLike(!like);
  };
  return (
    <div className={`col-12 row ${styles.container}`}>
      <div
        className={`col-md-7 col-lg-7 col-sm-12 row ${styles.container_left}`}
      >
        <div className={`col-1 ${styles.container_left_index}`}>{index}</div>
        <div className={`col-2 ${styles.container_left_avatar}`}>
          <img
            style={{ width: "100%" }}
            alt="Avatar"
            src={`images/session2/musicPlayer/${avatar}.jpg`}
          />
        </div>
        <div
          className={`col-1 ${styles.container_left_iconControl}`}
          onClick={playClick}
        >
          {controlIcon ? (
            <BsPauseFill style={{ fontSize: "1vmax" }} />
          ) : (
            <BsFillPlayFill style={{ fontSize: "1vmax" }} />
          )}
        </div>
        <div className={`col-8 ${styles.container_left_audioName}`}>
          {audioName}
        </div>
      </div>
      <div
        className={`col-md-5 col-lg-5 col-sm-12 row ${styles.container_right}`}
      >
        <div className={`col-5 ${styles.container_right_author}`}>{author}</div>
        <div className={`col-5 ${styles.container_right_duration}`}>
          {duration}
        </div>
        <div
          className={`col-2 ${styles.container_right_iconHeart}`}
          style={{ color: iconHeartColor }}
          onClick={likeClick}
        >
          {like ? <BsFillSuitHeartFill /> : <BsSuitHeart />}
        </div>
      </div>
    </div>
  );
}
