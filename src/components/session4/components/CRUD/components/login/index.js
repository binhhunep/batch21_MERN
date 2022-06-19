import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { HelpCenter } from "@mui/icons-material";

//cau hinh Yup - khai bao Schema
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

//cau hinh theme

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function Login({ onClick, errorMessage, isLogin }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [text, setText] = useState("Show");
  const [user, setUser] = useState({ username: "", password: "" });
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
    text === "Show" ? setText("Hide") : setText("Show");
  };

  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickLogin = () => {
    onClick(user);
    setUser({ username: user.username, password: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ArrowBackIosNewIcon className={styles.header_arrowBack} />
        <h1 className={styles.header_title}>Sign up</h1>
      </div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          username: "binhhunep",
          password: "",
        }}
        onSubmit={() => {
          console.log("hello onSubmit");
        }}
      >
        <ThemeProvider theme={theme}>
          <Form className={styles.formik_signupForm}>
            <div className={styles.formik_signupForm_header}>
              <p className={styles.signupForm_footer_title1}>
                {`Looks like you have an account`}
              </p>
              <p
                className={styles.signupForm_footer_title1}
              >{`Let's login now with`}</p>
              <h5
                className={styles.signupForm_footer_title2}
              >{`binh.quatest2@gmail.com`}</h5>
            </div>
            <TextField
              className={styles.formik_signupForm_field}
              id="outlined-password-name"
              label="UserName"
              type="text"
              variant="filled"
              required={true}
              size={"small"}
              name="username"
              value={user.username}
              onChange={handleChangeValue}
            />

            <TextField
              className={styles.formik_signupForm_field}
              id="outlined-password-input"
              name="password"
              value={user.password}
              error={!isLogin}
              label="Password"
              variant="filled"
              type={isShowPassword ? null : "password"}
              required={true}
              size={"small"}
              helperText={
                isLogin && user.password.length <= 3
                  ? "Login Success!"
                  : errorMessage
              }
              onChange={(e) => {
                handleChangeValue(e);
              }}
              // sx={{ m: 0, width: "50ch" }}
            />
            <p
              className={styles.signupForm_content_title1}
              style={{
                textAlign: "end",
                cursor: "pointer",
                fontStyle: "italic",
                fontSize: "10px",
                fontWeight: "700",
                color: "#0DA74E",
              }}
              onClick={handleClickShowPassword}
            >
              {`${text} Password!`}
            </p>

            <div className={styles.formik_signupForm_content}>
              <p className={styles.signupForm_content_title1}>
                {`By selecting Agree and continue below`}
              </p>
              <p className={styles.signupForm_content_title2}>
                {`I agree to`}
                <strong>&nbsp;{`Terms of Service and Privacy Policy`}</strong>
              </p>
            </div>
            <Button
              onClick={handleClickLogin}
              className={styles.formik_signupForm_button}
              type="submit"
              variant="contained"
              color="secondary"
            >
              {`Agree and continue`}
            </Button>
          </Form>
        </ThemeProvider>
      </Formik>
    </div>
  );
}
