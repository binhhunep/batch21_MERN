import React from "react";
import styles from "./styles.module.scss";

function ContactBlock({ iconContact, contact, colorContact, tiltleContact }) {
  return (
    <div className={styles.container} style={{ backgroundColor: colorContact }}>
      <h4 className={styles.container_title}>{tiltleContact}</h4>
      <div className={styles.container_contact}>
        <div className={styles.container_contact_icon}>
          <i className={iconContact} />
        </div>
        <div className={styles.container_contact_content}>{contact}</div>
      </div>
    </div>
  );
}

export default ContactBlock;
