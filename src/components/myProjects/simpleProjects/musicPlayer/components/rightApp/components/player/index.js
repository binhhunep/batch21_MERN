import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import Duration from "./components/duration";
import Disk from "./components/disk";
import SlideBar from "./components/slideBar";

export default function Player({
  avatar,
  singer,
  audioName,
  duration,
  timer,
  onChange,
  play,
  currentValue,
}) {
  return (
    <div className={` ${styles.container}`}>
      <div className={` ${styles.container_disk}`}>
        <Disk
          play={play}
          avatar={avatar}
          singer={singer}
          audioName={audioName}
        />
      </div>
      <div className={`${styles.container_slideBar}`}>
        <SlideBar
          timer={timer}
          currentValue={currentValue}
          onChange={(message) => {
            onChange(message);
          }}
        />
      </div>
      <div className={`${styles.container_duration}`}>
        <Duration
          duration={duration}
          timer={timer}
          currentValue={currentValue}
        />
      </div>
    </div>
  );
}
Player.prototype = {
  avatar: PropTypes.string,
  singer: PropTypes.string,
  audioName: PropTypes.string,
  duration: PropTypes.string,
  timer: PropTypes.number,
  play: PropTypes.bool,
  currentValue: PropTypes.number,
};
