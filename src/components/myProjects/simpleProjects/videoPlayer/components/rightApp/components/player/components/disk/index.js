import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import Image from "./image/Image";
import Singer from "./singer/Singer";
import Song from "./song/Song";

export default function Disk({ avatar, singer, audioName, play }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_song}>
        <Song audioName={audioName} />
      </div>
      <div className={styles.container_singer}>
        <Singer singer={singer} />
      </div>
    </div>
  );
}
