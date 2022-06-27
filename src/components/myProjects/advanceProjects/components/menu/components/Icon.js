import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-scroll";
function Icon({ IconName, title, color, target }) {
  return (
    <div className={styles.container}>
      <div style={{ color: color }} className={styles.container_icon}>
        <IconName className={styles.icon_logo} />
        <Link
          activeClass="active"
          to={target}
          smooth={true}
          offset={-300}
          duration={300}
          delay={300}
        >
          <span className={styles.icon_title}>{title}</span>
        </Link>
      </div>
    </div>
  );
}

export default Icon;
