import React from "react";
import styles from "./styles.module.scss";

import { Card } from "antd";
const { Meta } = Card;

function Poster({ src, title }) {
  return (
    <Card
      className={styles.container}
      cover={
        <img className={styles.container_img} alt="Poster_path" src={src} />
      }
    >
      <Meta
        className={styles.container_card_meta}
        title={<h5 className={styles.container_name}>{title}</h5>}
      />
    </Card>
  );
}

export default Poster;
