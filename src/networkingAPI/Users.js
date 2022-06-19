import React, { useState, useEffect } from "react";
import axios from "axios";

import { Spin, Alert, Table } from "antd";
const columns = [
  {
    title: <h1 style={{ fontSize: "1.2vw", fontWeight: "700" }}>Number</h1>,
    width: 25,
    dataIndex: "index",
    key: "index",
    fixed: "left",
  },
  {
    title: <h1 style={{ fontSize: "1.2vw", fontWeight: "700" }}>Full Name</h1>,
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
    render: () => <a>action</a>,
  },
];

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const data = [];
  users.map((item, index) => {
    return data.push({
      key: index,
      index: index + 1,
      name: item.fullName,
      email: item.email,
    });
  });

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "get",
        url: "https://training.softech.cloud/api/training/users",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250IiwiZnVsbG5hbWUiOiJOZ8O0IFRoYW5oIFTDuW5nIiwiZW1haWwiOiJ0dW5nbnRAc29mdGVjaC5lZHUudm4ifSwiaWF0IjoxNjU1NTQ2MzU1LCJleHAiOjE2NTU2MzI3NTUsImF1ZCI6InNvZnRlY2guY2xvdWQiLCJpc3MiOiJzb2Z0ZWNoLmNsb3VkIiwic3ViIjoiNjI4OGRmMTRjMDQyNmU4OWMzYjNmNDc4In0.jSgXiX5dKe4BjeTb6XgO3k9YVlgh9d9rH-U9sKDrOMnIpwdUBXcMVqGe_pP8F0FmuXBIgLYE4VbUVt_ikbZp8Q",
        },
      };
      const apiGetUsers = await axios(config)
        .then(function (response) {
          console.log(response.data);
          setLoading(!loading);
          setUsers(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(!loading);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
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
    </div>
  );
}

export default Users;
