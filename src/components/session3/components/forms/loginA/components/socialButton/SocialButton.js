import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

//cau hinh theme

export default function SocialButton({
  color,
  backgroundColor,
  content,
  icon,
}) {
  return (
    <Button
      className={styles.container_button}
      type="submit"
      variant="contained"
      style={{ backgroundColor: backgroundColor }}
    >
      {icon === "f" && (
        <BsFacebook style={{ color: color }} className={styles.button_icon} />
      )}
      ;
      {icon === "g" && (
        <FcGoogle style={{ color: color }} className={styles.button_icon} />
      )}
      ;
      {icon === "a" && (
        <AiFillApple style={{ color: color }} className={styles.button_icon} />
      )}
      <p className={styles.button_content}>{content}</p>
    </Button>
  );
}

Button.prototype = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  content: PropTypes.string,
};
