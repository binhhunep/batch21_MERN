import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.scss";

import Login from "./components/login";
import Users from "./components/user";

export default function CRUD() {
  const [admin, setAdmin] = useState({
    username: "binhhunep",
    password: "123456789",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const onLoginClick = (user) => {
    setAdmin(user);
    if (!isLogin) {
      setErrorMessage("Username or password invalid!");
    } else {
      setAdmin({
        username: "binhhunep",
        password: "123456789",
      });
      setIsLogin(!isLogin);
    }
  };

  const onAddClick = (regiterInfo) => {};

  const onLogoutClick = (isLogout) => {
    console.log(isLogout);
    setIsLogin(isLogout);
  };

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "post",
        url: "https://training.softech.cloud/api/training/users/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(admin),
      };

      const api = await axios(config)
        .then(function (response) {
          console.log(response.data);
          setIsLogin(response.data.login);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, [admin]);

  return (
    <div className={styles.container}>
      {isLogin ? (
        <Users
          onLogoutClick={(isLogout) => onLogoutClick(isLogout)}
          onAddClick={(regiterInfo) => onAddClick(regiterInfo)}
        />
      ) : (
        <Login
          onClick={(user) => onLoginClick(user)}
          errorMessage={errorMessage}
          isLogin={isLogin}
        />
      )}
    </div>
  );
}
