import React from "react";
import { Row, Col, Typography } from "antd";
import { EnvironmentFilled, AlignRightOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";
import { fontSize } from "@mui/system";

const { Text, Link } = Typography;

export default function Location({ loc }) {
  return (
    <Row justify="space-between" align="middle" className={styles.container}>
      <Col>
        <Row justify="start" gutter={4}>
          <Col
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: "1.2vw",
            }}
          >
            <EnvironmentFilled style={{ fontSize: "1.2vw", color: "white" }} />
          </Col>
          <Col
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Text style={{ fontSize: "1.2vw", color: "white" }}>{loc}</Text>
          </Col>
        </Row>
      </Col>
      <Col
        span={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <div
          style={{
            width: "2.5vw",
            height: "0.2vw",
            marginBottom: "0.5vw",
            border: "1px solid white",
            backgroundColor: "white",
          }}
        />
        <div
          style={{
            width: "3vw",
            height: "0.2vw",
            border: "1px solid white",
            backgroundColor: "white",
            color: "white",
          }}
        />
      </Col>
    </Row>
  );
}
