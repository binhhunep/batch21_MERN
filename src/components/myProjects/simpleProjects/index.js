import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import MusicPlayer from "./musicPlayer";

export default function SimpleProjects() {
  return (
    <div className={styles.container}>
      <MusicPlayer />
    </div>
  );
}
