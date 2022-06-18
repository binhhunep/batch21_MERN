import styles from "./styles.module.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import Next from "./components/next/Next";
import Play from "./components/play/Play";
import Previous from "./components/previous/Previous";
import Shuffle from "./components/shuffle/Shuffle";
import Redo from "./components/redo/Redo";

export default function Control({ onClick, play, isShuffle, isRedo }) {
  return (
    <div className={styles.container}>
      <Shuffle
        isShuffle={isShuffle}
        onClick={(message) => {
          onClick(message);
        }}
      />
      <Previous
        onClick={(message) => {
          onClick(message);
        }}
      />
      <Play
        play={play}
        onClick={(message) => {
          onClick(message);
        }}
      />
      <Next
        onClick={(message) => {
          onClick(message);
        }}
      />
      <Redo
        isRedo={isRedo}
        onClick={(message) => {
          onClick(message);
        }}
      />
    </div>
  );
}
Control.prototype = {
  onClick: PropTypes.func,
  play: PropTypes.bool,
  isShuffle: PropTypes.bool,
  isRedo: PropTypes.bool,
};
