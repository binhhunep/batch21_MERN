import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  Spin,
  Alert,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
} from "antd";

import Logout from "./components/Logout";
import Add from "./components/Add";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function Users({ onLogoutClick, onAddClick }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    username: "binhhunep",
    email: "binh.quatest2@gmail.com",
    password: "123456789",
    fullName: "Đoàn Thanh Bình",
  });

  const [loadingModal, setLoadingModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [deleteUserId, setDeleteUserId] = useState("62aec33bb6cfed1a32402d6b");
  const [editUserId, setEditUserId] = useState("62aec33bb6cfed1a32402d6b");
  const [placeholder, setPlaceholder] = useState({
    username: "binhdt",
    email: "binh.quatest2@gmail.com",
    password: "123456789",
    fullName: "Đoàn Thanh Bình",
  });
  const [message, setMessage] = useState("");
  const [regiterInfo, setRegiterInfo] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState();

  const columns = [
    {
      title: <h1 style={{ fontSize: "1.2vw", fontWeight: "700" }}>Number</h1>,
      width: 25,
      dataIndex: "index",
      key: "index",
      fixed: "left",
    },
    {
      title: (
        <h1 style={{ fontSize: "1.2vw", fontWeight: "700" }}>Full Name</h1>
      ),
      width: 55,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: <h1 style={{ fontSize: "1.2vw", fontWeight: "700" }}>Email</h1>,
      width: 60,
      dataIndex: "email",
      key: "email",
      fixed: "left",
    },
    {
      title: <h1 style={{ fontSize: "1.2vw", fontWeight: "700" }}>Action</h1>,
      key: "operation",
      fixed: "right",
      width: 30,
      render: (value) => (
        <div style={{ display: "flex" }}>
          {console.log("ham khai bao column")}
          <Space direction="horizontal" size={[15, 8]}>
            <div>
              <AiFillEdit
                style={{
                  fontSize: "1.5vw",
                  color: "#1890FF",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleEditClick(value);
                }}
              />
            </div>
            <div>
              <AiFillDelete
                style={{
                  fontSize: "1.5vw",
                  color: "#FF4D4F",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleDeleteClick(value);
                }}
              />
            </div>
          </Space>
        </div>
      ),
    },
  ];

  const handleDeleteClick = (value) => {
    console.log("ham delete");
    setDeleteUserId(value.id);
  };
  const handleEditClick = (value) => {
    console.log("ham edit");
    setMessage("Update new user's information!");
    setCurrentUserId(value.id);
    setIsEdit(!isEdit);
    setIsModal(!isModal);
    setPlaceholder(value);
  };

  const handleOk = () => {
    console.log("ham save");

    setTimeout(() => {
      // setEditUserId(editUserId);
      setLoadingModal(false);
      setUser(regiterInfo);
    }, 1000);
    setLoadingModal(!loadingModal);
  };
  const handleUpdate = () => {
    console.log("ham update");

    setTimeout(() => {
      setEditUserId(currentUserId);
      setLoadingModal(false);
      setCurrentUser(regiterInfo);
    }, 1000);
    setLoadingModal(!loadingModal);
  };
  const handleCancel = () => {
    console.log("ham cancle");
    setIsModal(!isModal);
    setIsEdit(false);
  };
  const handleAddClick = (isAdd) => {
    console.log("ham addClick");

    setMessage("Add new user now!");
    isAdd ? setIsModal(!isModal) : setIsModal(isModal);
  };
  const handleOnChange = (e) => {
    console.log("ham onchange");

    let { name, value } = e.target;
    setRegiterInfo({ ...regiterInfo, [name]: value });
  };

  const data = [];
  users.map((item, index) => {
    console.log("ham map users");
    return data.push({
      username: item.username,
      key: index,
      id: item._id,
      index: index + 1,
      name: item.fullName,
      email: item.email,
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      const config_addUser = {
        method: "POST",
        url: "https://training.softech.cloud/api/training/users/register",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmluaDEwIiwiZnVsbG5hbWUiOiJiaW5oMTAiLCJlbWFpbCI6ImJpbmgucXVhdGVzdDJAZ21haWwuY29tIn0sImlhdCI6MTY1NTgzMjUxMCwiZXhwIjoxNjU1OTE4OTEwLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyYWYyZTlkODc4MDY0Y2VhODAyZjM4ZSJ9.Mq2NUtgCyWbqzBWKAHrbYLN88QOLZlyioshZhmwmODWg4lihhOTUBSyxBP86kdqW5k7eW6AM8SwqyqCP8kddvA",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
      };
      await axios(config_addUser)
        .then(function (response) {
          console.log("ham API adduser");
          if (!response.data.message) {
            setLoading(!loading);
            setMessage("Add user success!");
          } else {
            setMessage(response.data.message);
          }
        })
        .catch(function (error) {
          setLoading(!loading);
          setMessage(error.message);
        });
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const config_deleteUser = {
        method: "DELETE",
        url: `https://training.softech.cloud/api/training/users/${deleteUserId}?id`,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmluaDEwIiwiZnVsbG5hbWUiOiJiaW5oMTAiLCJlbWFpbCI6ImJpbmgucXVhdGVzdDJAZ21haWwuY29tIn0sImlhdCI6MTY1NTgzMjUxMCwiZXhwIjoxNjU1OTE4OTEwLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyYWYyZTlkODc4MDY0Y2VhODAyZjM4ZSJ9.Mq2NUtgCyWbqzBWKAHrbYLN88QOLZlyioshZhmwmODWg4lihhOTUBSyxBP86kdqW5k7eW6AM8SwqyqCP8kddvA",
        },
      };
      await axios(config_deleteUser)
        .then(function (response) {
          console.log("ham API delete");
        })
        .catch(function (error) {
          setLoading(!loading);
        });
    };
    fetchData();
  }, [deleteUserId]);

  useEffect(() => {
    const fetchData = async () => {
      const config_editUser = {
        method: "PUT",
        url: `https://training.softech.cloud/api/training/users/${editUserId}?id`,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmluaDEwIiwiZnVsbG5hbWUiOiJiaW5oMTAiLCJlbWFpbCI6ImJpbmgucXVhdGVzdDJAZ21haWwuY29tIn0sImlhdCI6MTY1NTgzMjUxMCwiZXhwIjoxNjU1OTE4OTEwLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyYWYyZTlkODc4MDY0Y2VhODAyZjM4ZSJ9.Mq2NUtgCyWbqzBWKAHrbYLN88QOLZlyioshZhmwmODWg4lihhOTUBSyxBP86kdqW5k7eW6AM8SwqyqCP8kddvA",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(currentUser),
      };
      await axios(config_editUser)
        .then(function (response) {
          console.log("ham API edituser");

          if (response.data.value) {
            setLoading(!loading);
            setMessage("Update success!");
          }
        })
        .catch(function (error) {
          setLoading(!loading);
          setMessage(error.message);
        });
    };
    fetchData();
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      const config_getUsers = {
        method: "GET",
        url: "https://training.softech.cloud/api/training/users",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmluaDEwIiwiZnVsbG5hbWUiOiJiaW5oMTAiLCJlbWFpbCI6ImJpbmgucXVhdGVzdDJAZ21haWwuY29tIn0sImlhdCI6MTY1NTgzMjUxMCwiZXhwIjoxNjU1OTE4OTEwLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyYWYyZTlkODc4MDY0Y2VhODAyZjM4ZSJ9.Mq2NUtgCyWbqzBWKAHrbYLN88QOLZlyioshZhmwmODWg4lihhOTUBSyxBP86kdqW5k7eW6AM8SwqyqCP8kddvA",
        },
      };
      const apiGetUsers = await axios(config_getUsers)
        .then(function (response) {
          console.log("ham API getuser");
          if (response.data) {
            setLoading(!loading);
            setUsers(response.data);
          }
        })
        .catch(function (error) {
          setLoading(!loading);
          setMessage(error.message);
        });
    };
    fetchData();
  }, [deleteUserId, user, currentUser]);

  return (
    <div style={{ position: "relative" }}>
      <h1>Danh sách người dùng</h1>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Loading can duration some minutes! Plz waitting!."
              type="info"
            />
            {setLoading(!loading)}
          </Spin>
        </div>
      )}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 300,
          y: 300,
        }}
      />
      <Logout onClick={(isLogout) => onLogoutClick(isLogout)} />
      <Add onClick={(isAdd) => handleAddClick(isAdd)} />
      <Form
        {...layout}
        name="nest-messages"
        onFinish={handleOk}
        validateMessages={validateMessages}
      >
        <Modal
          className={styles.container_Modal}
          visible={isModal}
          title="Add new user"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button style={{ width: "60px" }} key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            !isEdit ? (
              <Button
                style={{ width: "60px" }}
                key="submit"
                htmlType="submit"
                type="primary"
                loading={loadingModal}
                onClick={handleOk}
              >
                Save
              </Button>
            ) : (
              <Button
                style={{ width: "60px" }}
                key="submit"
                htmlType="submit"
                type="primary"
                loading={loadingModal}
                onClick={handleUpdate}
              >
                Update
              </Button>
            ),
          ]}
        >
          <Form.Item
            name={["user", "username"]}
            label="Username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              disabled={isEdit ? true : false}
              placeholder={placeholder.username}
              value={regiterInfo.username}
              name="username"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input
              placeholder={placeholder.email}
              value={regiterInfo.email}
              name="email"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </Form.Item>
          <Form.Item
            name={["user", "password"]}
            label="Password"
            rules={[
              {
                type: "password",
                required: true,
              },
            ]}
          >
            <Input
              placeholder={placeholder.password}
              value={regiterInfo.password}
              name="password"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </Form.Item>
          <Form.Item
            name={["user", "fullName"]}
            label="Full Name"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Input
              placeholder={placeholder.fullName}
              value={regiterInfo.fullName}
              name="fullName"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </Form.Item>
          <Form.Item
            name={["user", "messeage"]}
            label="Message"
            rules={[
              {
                type: "string",
              },
            ]}
          >
            <p
              style={{
                fontSize: "14px",
                color: "red",
                fontStyle: "italic",
                margin: "auto 0",
              }}
            >
              {message}
            </p>
          </Form.Item>
        </Modal>
      </Form>
    </div>
  );
}
export default Users;
