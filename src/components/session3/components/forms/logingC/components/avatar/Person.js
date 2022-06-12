import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Person({ avatar }) {
  return (
    <div className={styles.container}>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Lisa"
          src={`images/session3/avatar/${avatar}`}
          sx={{ width: 40, height: 40 }}
        />
      </Stack>
    </div>
  );
}

Person.prototype = {
  avatar: PropTypes.string,
};
