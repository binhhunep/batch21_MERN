import React from "react";
import styles from "./styles.module.scss";

import { Typography, Space, Row, Col } from "antd";

import { MinusOutlined } from "@ant-design/icons";

import Group from "./components/group";
const { Text } = Typography;

export default function WeatherSmall({
  day,
  tem1,
  time1,
  icon1,
  tem2,
  time2,
  icon2,
  tem3,
  time3,
  icon3,
  tem4,
  time4,
  icon4,
  color,
}) {
  return (
    <div className={styles.container}>
      <Space size={[0, 8]} direction="vertical" align="center">
        <div
          style={{
            marginTop: "1vw",
            backgroundColor: "#E0E0E0",
            width: "2vw",
            height: "0.4vw",
          }}
        ></div>
        <div style={{ color: "black", fontWeight: "600", fontSize: "1.2vw" }}>
          {day}
        </div>
      </Space>
      <Row justify="space-around" align="middle">
        <Col lg={6} md={5} sm={5} xs={5}>
          <Group tem={tem1} time={time1} icon={icon1} color={"orange"} />
        </Col>
        <Col lg={6} md={5} sm={5} xs={5}>
          <Group tem={tem2} time={time2} icon={icon2} color={"#A04F3A"} />
        </Col>
        <Col lg={6} md={5} sm={5} xs={5}>
          <Group tem={tem3} time={time3} icon={icon3} color={"#6D5F92"} />
        </Col>
        <Col lg={6} md={5} sm={5} xs={5}>
          <Group tem={tem4} time={time4} icon={icon4} color={"#061348"} />
        </Col>
      </Row>
    </div>
  );
}
