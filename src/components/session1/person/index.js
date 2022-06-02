import React from "react";
import styles from "./styles.module.scss";

import Avatar from "./avatar";
import Information from "./information";
import ContactBlock from "./contactBlock";

function Person({ imageName, name, job, information, contact }) {
  return (
    <div className={styles.container}>
      <Avatar
        className={styles.container_avatar}
        imageName={imageName}
        name={name}
        job={job}
      />
      <Information
        className={styles.container_information}
        iconName={information[0].iconName}
        title={information[0].title}
        text={information[0].text}
      />
      <Information
        className={styles.container_information}
        iconName={information[1].iconName}
        title={information[1].title}
        text={information[1].text}
      />
      <Information
        className={styles.container_information}
        iconName={information[2].iconName}
        title={information[2].title}
        text={information[2].text}
      />
      <Information
        className={styles.container_information}
        iconName={information[3].iconName}
        title={information[3].title}
        text={information[3].text}
      />
      <ContactBlock
        className={styles.container_contactBlock}
        contact={contact[0].contact}
        iconContact={contact[0].iconContact}
        colorContact={contact[0].colorContact}
        tiltleContact={contact[0].titleContact}
      />
      <ContactBlock
        className={styles.container_contactBlock}
        contact={contact[1].contact}
        iconContact={contact[1].iconContact}
        colorContact={contact[1].colorContact}
        tiltleContact={contact[1].titleContact}
      />
    </div>
  );
}

export default Person;
