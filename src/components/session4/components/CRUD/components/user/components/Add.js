import React, { useState, useEffect } from "react";

import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

export default function Add({ onClick }) {
  const handleAdddClick = () => {
    onClick(true);
  };

  return (
    <div>
      <Button
        style={{
          width: "80px",
          height: "25px",
          position: "absolute",
          top: "-1%",
          left: "0px",
          zIndex: "4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        type="primary"
        icon={<UserAddOutlined />}
        size="medium"
        onClick={handleAdddClick}
      >
        Add User
      </Button>
    </div>
  );
}
