import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, Input, Space, Tooltip } from "antd";
import "antd/dist/antd.css";

import * as Yup from "yup";

import PropTypes from "prop-types";

const name = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;

//cau hinh Yup - dung voi antd

const yupSync = {
  async validator({ field }, value) {
    await SignupSchema.validateSyncAt(field, { [field]: value });
  },
};

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .matches(name, "Invalid name")
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export default function TextField({ label1, title1, label2, title2 }) {
  //khai bao bien form (hook) de lien ket antd voi Yup
  const [form] = Form.useForm();

  return (
    <div className={styles.container}>
      <Form className={styles.container_form} form={form} name="form1">
        <Form.Item
          name={title1}
          label={label1}
          rules={[yupSync]}
          className={styles.container_form_left}
        >
          <Space direction="vertical">
            <Input
              className={styles.container_form_field}
              id={title1}
              name={title1}
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.5)" }} />
                </Tooltip>
              }
              size="medium"
              allowClear={true}
              placeholder={"Username"}
            />
          </Space>
        </Form.Item>
        <Form.Item
          name={title2}
          label={label2}
          rules={[yupSync]}
          className={styles.container_form_right}
        >
          <Space direction="vertical">
            <Input.Password
              className={styles.container_form_field}
              id={title2}
              name={title2}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              size="medium"
              allowClear={true}
              placeholder={"Password"}
            />
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

TextField.prototype = {
  label1: PropTypes.string,
  title1: PropTypes.string,
  label2: PropTypes.string,
  title2: PropTypes.string,
};
