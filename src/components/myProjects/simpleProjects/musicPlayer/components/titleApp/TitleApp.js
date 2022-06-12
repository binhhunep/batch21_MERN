import styles from "./styles.module.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import PropTypes from "prop-types";

export default function Title({ title }) {
  return (
    <div className={styles.container}>
      <h2 style={{ color: "", fontSize: "1.8vmax" }}>{title}</h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
