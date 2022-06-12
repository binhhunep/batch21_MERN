import React from "react";
import styles from "./styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const name = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;

phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid");

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(name, "Invalid name")
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .matches(name, "Invalid name")
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Too Short!")
    .max(11, "Too Long!"),
  email: Yup.string().email("Invalid email!").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function TextField({ label, title }) {
  return (
    <div className={styles.container}>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          firstName: "Binh",
          lastName: "Doan Thanh",
          email: "binh.quatest2@gmail.com",
          phoneNumber: "0879806806",
        }}
      >
        <Form className={styles.container_form}>
          <label className={styles.container_form_label} htmlFor="userName">
            {label}
          </label>
          <Field
            className={styles.container_form_field}
            id={title}
            name={title}
            placeholder={label}
          />
          <div className={styles.container_form_error} style={{ color: "red" }}>
            <ErrorMessage name={title} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

TextField.prototype = { label: PropTypes.string, title: PropTypes.string };
