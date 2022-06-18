import React from "react";
import { Row, Col, Typography } from "antd";
import { EnvironmentFilled, AlignRightOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";
import { fontSize } from "@mui/system";

const { Text, Link } = Typography;

export default function Temperature({ title, temp, color1, color2 }) {
  return (
    <Row align="middle" justify="space-between" className={styles.container}>
      <Col>
        <Col
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Text
            className={styles.container_temp}
            style={{
              fontSize: "4vw",
              fontWeight: "700",
              background: `linear-gradient( ${color1} 50% , ${color2} 100% )`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {temp}&deg;C
          </Text>
        </Col>
      </Col>
      <Col
        span={10}
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "-2vw",
        }}
      >
        <Text
          style={{
            fontSize: "1.2vw",
            color: "white",
            transform: "rotate(-90deg)",
          }}
        >
          {title}
        </Text>
      </Col>
    </Row>
  );
}
