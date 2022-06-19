import React, { useState, useEffect } from "react";

import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

export default function Logout({ onClick }) {
  const [isLogout, setIsLogout] = useState(false);

  const handleLogoutClick = () => {
    setIsLogout(!isLogout);
    onClick(isLogout);
  };

  return (
    <div>
      <Button
        style={{
          position: "absolute",
          left: "0px",
          bottom: "2.2vh",
          zIndex: "4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        type="danger"
        icon={<LogoutOutlined />}
        size="medium"
        onClick={handleLogoutClick}
      >
        Logout
      </Button>
    </div>
  );
}
