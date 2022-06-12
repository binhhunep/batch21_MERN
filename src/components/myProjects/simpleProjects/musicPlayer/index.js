import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import TitleApp from "./components/titleApp/TitleApp";
import LeftApp from "./components/leftApp";
import RightApp from "./components/rightApp";

export default function MusicPlayer() {
  return (
    <div className={`${styles.container}`}>
      <TitleApp
        title={"1. Music Player (Ver 2.0)"}
        className={`${styles.container_title}`}
      />
      <div className={`row ${styles.container_body}`}>
        <div
          className={[
            "col-lg-7",
            "col-md-12",
            "order-md-2",
            "order-sm-2",
            "order-2",
          ].join(" ")}
        >
          <LeftApp title={"Most Popular"} totalSongs={`${8} Songs`} />
        </div>
        <div
          className={["col-lg-5", "col-md-12", "order-md-1", "order-1"].join(
            " "
          )}
          style={{ marginBottom: "2vw" }}
        >
          <RightApp
            title={"Now Playing"}
            totalSongs={`${55} Items on the list`}
          />
        </div>
      </div>
    </div>
  );
}
