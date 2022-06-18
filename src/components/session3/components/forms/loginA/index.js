import React from "react";
import styles from "./styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import SocialButton from "./components/socialButton/SocialButton";

//cau hinh Yup - khai bao Schema
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  // password: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
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

export default function LoginA() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ArrowBackIosNewIcon className={styles.header_arrowBack} />
        <h1 className={styles.header_title}>Hi!</h1>
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
          <Form className={styles.formik_signupForm}>
            <TextField
              className={styles.formik_signupForm_field}
              required
              id="email"
              name="email"
              label="Email"
              defaultValue="binh.quatest2@gmail.com"
              variant="filled"
              type="email"
              size={"small"}
              color="secondary"
            />

            <div style={{ color: "red" }}>
              <ErrorMessage name="email" />
            </div>
            <Button
              className={styles.formik_signupForm_button}
              type="submit"
              variant="contained"
              color="secondary"
            >
              CONTINUE
            </Button>
            <p className={styles.formik_signupForm_content}>or</p>
            <div className={styles.formik_signupForm_button}>
              <SocialButton
                color={"#1D70D8"}
                backgroundColor={"#EAEFEE"}
                content={"Continue with Facebook"}
                icon={"f"}
              />
            </div>
            <div className={styles.formik_signupForm_button}>
              <SocialButton
                color={"#EAEFEE"}
                backgroundColor={"#EAEFEE"}
                content={"Continue with Google"}
                icon={"g"}
              />
            </div>
            <div className={styles.formik_signupForm_button}>
              <SocialButton
                color={"#000000"}
                backgroundColor={"#EAEFEE"}
                content={"Continue with Apple"}
                icon={"a"}
              />
            </div>
            <div className={styles.formik_signupForm_footer}>
              <h5 className={styles.signupForm_footer_title1}>
                {`Don't have an account?`}
                <span>&nbsp; Sign up</span>
              </h5>
              <h5
                className={styles.signupForm_footer_title2}
              >{`Forgot your password?`}</h5>
            </div>
          </Form>
        </ThemeProvider>
      </Formik>
    </div>
  );
}
