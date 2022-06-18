import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import Chevon from "./chevon/Chevon";
import Mute from "./mute/Mute";
import List from "./list/List";

export default function NavBar({ isMute, onClick }) {
  return (
    <div className={styles.container}>
      <div>
        <Chevon />
      </div>
      <div className={styles.container_icon}>
        <Mute isMute={isMute} onClick={(message) => onClick(message)} />
        <List />
      </div>
    </div>
  );
}
