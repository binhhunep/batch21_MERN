import React from "react";
import styles from "./styles.module.scss";
import { Input, Space } from "antd";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className={styles.container}>
      <BsSearch className={styles.container_iconSearch} />
      <Input className={styles.container_input} />
    </div>
  );
}

export default Search;
