import React from "react";
import styles from "./styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { RiComputerLine } from "react-icons/ri";

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

export default function FormA() {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.left_title}>
          <RiComputerLine style={{ fontSize: "20px" }} />
          <span style={{ fontWeight: "700", fontSize: "10px" }}>
            &nbsp;Lottery Display
          </span>
        </div>
        <div className={styles.left_content}>
          {`A few clicks away \nfrom creating your \n Lottery Display`}
        </div>
      </div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email: "binh.quatest2@gmail.com",
          password: "",
        }}
        onSubmit={() => {
          console.log("hello onSubmit");
        }}
      >
        <ThemeProvider theme={theme}>
          <div className={styles.container_right}>
            <div className={styles.right_header}>
              <div className={styles.right_title}>
                <h1>Register</h1>
              </div>
              <div className={styles.right_info}>
                <h5>Manage all your lottery efficiently</h5>
              </div>
              <div className={styles.right_content}>
                <p>{`Let's get you all set up so you can verify your password account and begin setting up your profile `}</p>
              </div>
            </div>
            <div className={styles.right_body}>
              <Fields />
            </div>
            <div className={styles.right_footer}>
              <div>
                <Selector />
                <ButtonIcon />
                <div className={styles.right_footer_content}>
                  <p>
                    Already have an account?&nbsp;<strong> Log in</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </Formik>
    </div>
  );
}
