import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
export default function ButtonIcon() {
  return (
    <div className={styles.container}>
      <Button
        className={styles.formik_signupForm_button}
        type="submit"
        variant="contained"
      >
        Creat Account
      </Button>
    </div>
  );
}
