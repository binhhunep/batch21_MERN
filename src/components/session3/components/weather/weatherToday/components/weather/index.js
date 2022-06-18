import React from "react";
import styles from "./styles.module.scss";

import Location from "./components/location/Location";
import Temperature from "./components/temperature/Temperature";
import WeatherSmall from "./components/weatherSmall";
function Weather({
  bg,
  loc,
  temp,
  title,
  color1,
  color2,
  day,
  time,
  tem1,
  time1,
  icon1,
  tem2,
  time2,
  icon2,
  tem3,
  time3,
  icon3,
  tem4,
  time4,
  icon4,
}) {
  return (
    <div
      style={{
        backgroundImage: `url(
         images/session3/background/${bg}.jpg
        )`,
      }}
      className={styles.container}
    >
      <div className={styles.container_location}>
        <Location loc={loc} />
      </div>
      <div className={styles.container_location}>
        <Temperature
          temp={temp}
          title={title}
          color1={color1}
          color2={color2}
        />
      </div>
      <div className={styles.container_weatherSmall}>
        <WeatherSmall
          day={day}
          time={time}
          tem1={tem1}
          time1={time1}
          icon1={icon1}
          tem2={tem2}
          time2={time2}
          icon2={icon2}
          tem3={tem3}
          time3={time3}
          icon3={icon3}
          tem4={tem4}
          time4={time4}
          icon4={icon4}
        />
      </div>
    </div>
  );
}

export default Weather;
