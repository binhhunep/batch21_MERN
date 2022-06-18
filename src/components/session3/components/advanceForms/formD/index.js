import React, { useState, useEffect } from "react";

import styles from "./styles.module.scss";

import {
  UploadOutlined,
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import {
  Button,
  Popconfirm,
  Space,
  Upload,
  Dropdown,
  Menu,
  Steps,
  Cascader,
  Form,
  Input,
  Checkbox,
  Modal,
} from "antd";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            {`1st menu item`}
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            {`2nd menu item`}
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            {`3rd menu item`}
          </a>
        ),
      },
    ]}
  />
);

const { Step } = Steps;

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

function FormD() {
  const onChange = (value) => {
    console.log(value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={styles.container}>
      <Space direction="vertical" align="center">
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Confirm</Button>
        </Popconfirm>
        <Space wrap>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottom">
            <Button>bottom</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
        </Space>
        <Space wrap>
          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="top">
            <Button>top</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>
        </Space>

        <Cascader
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={(value) => {
            console.log(value);
          }}
          onFinishFailed={(errorInfo) => {
            console.log("Failed:", errorInfo);
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title={<h1 style={{ fontSize: "10px" }}>Modal</h1>}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          centered={true}
          closable={false}
          cancelText={
            <div style={{ display: "flex", color: "#F43F54" }}>
              <CloseOutlined style={{ color: "#F43F54" }} />
            </div>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Space>
    </div>
  );
}

export default FormD;
