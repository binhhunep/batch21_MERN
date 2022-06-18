import React from "react";
import styles from "./styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Person from "./components/avatar/Person";
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
      main: green[700],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function LoginC() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ArrowBackIosNewIcon className={styles.header_arrowBack} />
        <h1 className={styles.header_title}>Sign up</h1>
      </div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          name: "binh.quatest2@gmail.com",
          password: "",
        }}
        onSubmit={() => {
          console.log("hello onSubmit");
        }}
      >
        <ThemeProvider theme={theme}>
          <Form className={styles.formik_signupForm}>
            <div className={styles.formik_signupForm_header}>
              <div className={styles.signupForm_footer_title1}>
                <Person avatar={"2.gif"} />
              </div>
              <div className={styles.signupForm_footer_title}>
                <div
                  className={styles.signupForm_footer_title3}
                >{`Doan Thanh Binh`}</div>
                <div
                  className={styles.signupForm_footer_title2}
                >{`binh.quatest2@gmail.com`}</div>
              </div>
            </div>

            <TextField
              className={styles.formik_signupForm_field}
              id="outlined-password-input"
              label="Password"
              type="Password"
              autoComplete="current-password"
              variant="filled"
              required={true}
              size={"small"}
            />
            <Button
              className={styles.formik_signupForm_button}
              type="submit"
              variant="contained"
              color="secondary"
            >
              {`Agree and continue`}
            </Button>

            <div className={styles.formik_signupForm_content}>
              <p className={styles.signupForm_content_title}>
                {`Forgot your password?`}
              </p>
            </div>
          </Form>
        </ThemeProvider>
      </Formik>
    </div>
  );
}
