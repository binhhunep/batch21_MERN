import React from "react";
import axios from "axios";

function Login() {
  const data = JSON.stringify({
    username: "tungnt",
    password: "123456789",
  });

  const config = {
    method: "post",
    url: "https://training.softech.cloud/api/training/users/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return <div>Login</div>;
}

export default Login;
