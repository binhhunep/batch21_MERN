import React from "react";
import styles from "./styles.module.scss";

import { Space } from "antd";
import Icon from "./icon/Icon";
import Time from "./time/Time";
import Tem from "./tem/Tem";
export default function Group({ icon, time, tem, color }) {
  return (
    <Space>
      <div className={styles.container}>
        <Icon icon={icon} color={color} />
        <Time time={time} />
        <Tem tem={tem} />
      </div>
    </Space>
  );
}
