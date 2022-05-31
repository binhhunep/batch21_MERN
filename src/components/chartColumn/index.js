import React from "react";

import styles from "./styles.module.scss";

import Column from "./column";

export default function ChartColumn({
  text,
  total,
  unit,
  percentages,
  percentageColor,
  date,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div className={styles.header_title}>{text}</div>
        <div className={styles.header_total}>
          {unit}
          {total}
        </div>
      </div>
      <div className={styles.container_body}>
        <Column
          date={date[0]}
          percentageColor={percentageColor[0]}
          percentage={percentages[0]}
        />
        <Column
          date={date[1]}
          percentageColor={percentageColor[1]}
          percentage={percentages[1]}
        />
        <Column
          date={date[2]}
          percentageColor={percentageColor[2]}
          percentage={percentages[2]}
        />
        <Column
          date={date[3]}
          percentageColor={percentageColor[3]}
          percentage={percentages[3]}
        />
        <Column
          date={date[4]}
          percentageColor={percentageColor[4]}
          percentage={percentages[4]}
        />
      </div>
    </div>
  );
}
