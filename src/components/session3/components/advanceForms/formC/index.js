import React, { useState, useEffect } from "react";
import {
  LockOutlined,
  UserOutlined,
  MessageOutlined,
  IdcardOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";

import styles from "./styles.module.scss";
import { any } from "prop-types";

export default function FormC() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className={styles.containerCover}>
      <div className={styles.container}>
        <div className={styles.container_header}>
          <div className={styles.header_brand}>
            <div className={styles.header_brand_icon} />
            <div className={styles.header_brand_content}>
              {`Anywhere app`}
              <span>.</span>
            </div>
          </div>
          <div className={styles.header_menu}>Home</div>
          <div className={styles.header_menu}>Join</div>
        </div>
        <div className={styles.container_form}>
          <div className={styles.form_contentUp}>Start For Free</div>
          <div className={styles.form_title}>
            {`Create new account`}
            <strong>.</strong>
          </div>
          <div className={styles.form_contentDown}>
            Already A Member? <strong>&nbsp;Log In</strong>{" "}
          </div>
          <Form
            name="normal_login"
            className={styles.login_form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                suffix={<IdcardOutlined style={{ color: "rgba(0,0,0,.5)" }} />}
                prefix={<UserOutlined className={styles.site_form_item_icon} />}
                placeholder="Username"
                style={{ fontSize: "1vw", width: "80%", marginTop: "10px" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                suffix={<IdcardOutlined style={{ color: "rgba(0,0,0,.5)" }} />}
                prefix={<LockOutlined className={styles.site_form_item_icon} />}
                type="password"
                placeholder="Password"
                style={{ fontSize: "1vw", width: "80%", marginTop: "0px" }}
              />
            </Form.Item>
            <div className={styles.login_form_forgotPass}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
              </Form.Item>
              <a className={styles.login_form_forgot} href="">
                Forgot password
              </a>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.login_form_button}
                style={{ width: "80%", marginTop: "10px" }}
              >
                Log in
              </Button>
              <span style={{ color: "white" }}>Or </span>
              <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
