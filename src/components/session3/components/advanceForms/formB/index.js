import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";

import * as Yup from "yup";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import Fields from "./components/fields";
import ButtonIcon from "./components/button/ButtonIcon";
import Selector from "./components/selector/Selector";

//cau hinh Yup - khai bao Schema
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

//cau hinh Yup - dung voi antd

const yupSync = {
  async validator({ field }, value) {
    await SignupSchema.validateSyncAt(field, { [field]: value });
  },
};

//cau hinh theme

export default function FormB() {
  //khai bao bien form (hook) de lien ket antd voi Yup
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

  return (
    <div className={styles.container}>
      <div className={styles.container_left} />
      <ThemeProvider theme={theme}>
        <div className={styles.container_right}>
          <img
            style={{
              width: "100px",
              height: "50px",
              position: "absolute",
              top: "10px",
              left: "2.6vw",
            }}
            className={styles.right_upper}
            src={"images/session3/icon/1.jpg"}
          />
          <div className={styles.right_header}>
            <div className={styles.right_title}>
              <h1>Login</h1>
            </div>
            <div className={styles.right_info}>
              <h5>Login to your account</h5>
            </div>
            <div className={styles.right_content}>
              <p>{`Thank you for get back to Grovia, let's access our the best recommendation contact for you `}</p>
            </div>
          </div>
          <hr />
          <div className={styles.right_body}>
            <Fields />
          </div>
          <div className={styles.right_footer}>
            <div>
              <Selector />
              <ButtonIcon />
              <div className={styles.right_footer_content}>
                <p>
                  {`Don't have an account yet?`}?&nbsp;
                  <strong> {`Join Grovia Now!`}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
