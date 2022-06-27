import styles from "./styles.module.scss";
import React, { useState, memo, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import MusicPlayer from "./musicPlayer";
import VideoPlayer from "./videoPlayer";
function SimpleProjects() {
  return (
    <div className={styles.container}>
      <MusicPlayer />
      <VideoPlayer />
    </div>
  );
}

export default SimpleProjects;
