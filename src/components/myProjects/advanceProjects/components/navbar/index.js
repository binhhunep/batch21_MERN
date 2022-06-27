import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import Logo from "./components/logo/Logo";
import Search from "./components/search/Search";
import { useScrollY } from "../hooks/useScrollY";
function Navbar() {
  const [scrollY] = useScrollY();
  return (
    <div
      className={styles.container}
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background" }
      }
    >
      <Logo />
      <Search />
    </div>
  );
}

export default Navbar;
