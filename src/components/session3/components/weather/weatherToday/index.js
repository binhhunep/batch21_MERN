import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import axios from "axios";

import { Col, Row } from "antd";

import Weather from "./components/weather";
import { date } from "yup";

function WeatherToday() {
  const [date1, setDate1] = useState({
    day: "",
    title: "",
    temp: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    tem1: "",
    tem2: "",
    tem3: "",
    tem4: "",
  });
  const [date2, setDate2] = useState({
    day: "",
    title: "",
    temp: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    tem1: "",
    tem2: "",
    tem3: "",
    tem4: "",
  });
  const [date3, setDate3] = useState({
    day: "",
    title: "",
    temp: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    tem1: "",
    tem2: "",
    tem3: "",
    tem4: "",
  });

  const configDN = {
    method: "get",
    url: "https://api.openweathermap.org/data/2.5/forecast?lat=16&lon=108&appid=853d543718fd995001affe650733f07b",
    headers: {},
  };

  const currentDate = (today) => {
    let date =
      (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()) +
      "-" +
      (today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return date;
  };

  const currentTime = (today) => {
    let time =
      (today.getHours() < 10
        ? "0" + today.getHours()
        : today.getHours() > 12
        ? today.getHours() - 12
        : today.getHours()) +
      ":" +
      (today.getMinutes() < 10
        ? "0" + today.getMinutes()
        : today.getMinutes()) +
      (today.getHours() > 12 ? " PM" : " AM");
    return time;
  };

  const tempConvert = (tempK) => {
    let tempC = Math.floor(tempK - 273.15);
    return tempC;
  };

  const iconUrl = (iconId) => {
    let url = `http://openweathermap.org/img/w/${iconId}.png`;
    return url;
  };

  useEffect(() => {
    async function fetchData() {
      const DaNang = await axios(configDN)
        .then(function (response) {
          console.log(response.data);
          const currentDay = new Date();
          let currentHours = currentDay.getHours();
          //Date1
          let today1 = new Date(response.data.list[0].dt_txt);
          let tempK1_1 = response.data.list[0].main.temp;
          let tempK1_2 = response.data.list[2].main.temp;
          let tempK1_3 = response.data.list[4].main.temp;
          let tempK1_4 = response.data.list[6].main.temp;
          let title1_1 = response.data.list[0].weather[0].description;
          let title1_2 = response.data.list[2].weather[0].description;
          let title1_3 = response.data.list[4].weather[0].description;
          let title1_4 = response.data.list[6].weather[0].description;
          let iconId1_1 = response.data.list[0].weather[0].icon;
          let iconId1_2 = response.data.list[2].weather[0].icon;
          let iconId1_3 = response.data.list[4].weather[0].icon;
          let iconId1_4 = response.data.list[6].weather[0].icon;
          let time1_1 = new Date(response.data.list[0].dt_txt);
          let time1_2 = new Date(response.data.list[2].dt_txt);
          let time1_3 = new Date(response.data.list[4].dt_txt);
          let time1_4 = new Date(response.data.list[6].dt_txt);

          let title1 = title1_1;
          let tempC1 = tempConvert(tempK1_1);
          //Update Date 1
          if (currentHours <= time1_1.getHours()) {
            title1 = title1_1;
            tempC1 = tempConvert(tempK1_1);
          } else if (currentHours <= time1_2.getHours()) {
            title1 = title1_2;
            tempC1 = tempConvert(tempK1_2);
          } else if (currentHours <= time1_3.getHours()) {
            title1 = title1_3;
            tempC1 = tempConvert(tempK1_3);
          } else if (currentHours <= time1_4.getHours()) {
            title1 = title1_4;
            tempC1 = tempConvert(tempK1_4);
          }

          let day1 = currentDate(today1);
          let tim1_1 = currentTime(time1_1);
          let tim1_2 = currentTime(time1_2);
          let tim1_3 = currentTime(time1_3);
          let tim1_4 = currentTime(time1_4);
          let icon1_1 = iconUrl(iconId1_1);
          let icon1_2 = iconUrl(iconId1_2);
          let icon1_3 = iconUrl(iconId1_3);
          let icon1_4 = iconUrl(iconId1_4);
          let temC1_1 = tempConvert(tempK1_1);
          let temC1_2 = tempConvert(tempK1_2);
          let temC1_3 = tempConvert(tempK1_3);
          let temC1_4 = tempConvert(tempK1_4);

          setDate1({
            title: title1,
            temp: tempC1,
            day: day1,
            tem1: temC1_1,
            tem2: temC1_2,
            tem3: temC1_3,
            tem4: temC1_4,
            icon1: icon1_1,
            icon2: icon1_2,
            icon3: icon1_3,
            icon4: icon1_4,
            time1: tim1_1,
            time2: tim1_2,
            time3: tim1_3,
            time4: tim1_4,
          });
          //Date2
          let today2 = new Date(response.data.list[8].dt_txt);
          let tempK2_1 = response.data.list[8].main.temp;
          let tempK2_2 = response.data.list[10].main.temp;
          let tempK2_3 = response.data.list[12].main.temp;
          let tempK2_4 = response.data.list[14].main.temp;
          let title2_1 = response.data.list[8].weather[0].description;
          let title2_2 = response.data.list[10].weather[0].description;
          let title2_3 = response.data.list[12].weather[0].description;
          let title2_4 = response.data.list[14].weather[0].description;
          let iconId2_1 = response.data.list[8].weather[0].icon;
          let iconId2_2 = response.data.list[10].weather[0].icon;
          let iconId2_3 = response.data.list[12].weather[0].icon;
          let iconId2_4 = response.data.list[14].weather[0].icon;
          let time2_1 = new Date(response.data.list[8].dt_txt);
          let time2_2 = new Date(response.data.list[10].dt_txt);
          let time2_3 = new Date(response.data.list[12].dt_txt);
          let time2_4 = new Date(response.data.list[14].dt_txt);
          let title2 = title2_1;
          let tempC2 = tempConvert(tempK2_1);
          //Update Date 2
          if (currentHours <= time2_1.getHours()) {
            title2 = title2_1;
            tempC2 = tempConvert(tempK2_1);
          } else if (currentHours <= time2_2.getHours()) {
            title2 = title2_2;
            tempC2 = tempConvert(tempK2_2);
          } else if (currentHours <= time2_3.getHours()) {
            title2 = title2_3;
            tempC2 = tempConvert(tempK2_3);
          } else if (currentHours <= time2_4.getHours()) {
            title2 = title2_4;
            tempC2 = tempConvert(tempK2_4);
          }

          let day2 = currentDate(today2);
          let tim2_1 = currentTime(time2_1);
          let tim2_2 = currentTime(time2_2);
          let tim2_3 = currentTime(time2_3);
          let tim2_4 = currentTime(time2_4);
          let icon2_1 = iconUrl(iconId2_1);
          let icon2_2 = iconUrl(iconId2_2);
          let icon2_3 = iconUrl(iconId2_3);
          let icon2_4 = iconUrl(iconId2_4);
          let temC2_1 = tempConvert(tempK2_1);
          let temC2_2 = tempConvert(tempK2_2);
          let temC2_3 = tempConvert(tempK2_3);
          let temC2_4 = tempConvert(tempK2_4);

          setDate2({
            title: title2,
            temp: tempC2,
            day: day2,
            tem1: temC2_1,
            tem2: temC2_2,
            tem3: temC2_3,
            tem4: temC2_4,
            icon1: icon2_1,
            icon2: icon2_2,
            icon3: icon2_3,
            icon4: icon2_4,
            time1: tim2_1,
            time2: tim2_2,
            time3: tim2_3,
            time4: tim2_4,
          });

          //Date3
          let today3 = new Date(response.data.list[16].dt_txt);
          let tempK3_1 = response.data.list[16].main.temp;
          let tempK3_2 = response.data.list[18].main.temp;
          let tempK3_3 = response.data.list[20].main.temp;
          let tempK3_4 = response.data.list[22].main.temp;
          let title3_1 = response.data.list[16].weather[0].description;
          let title3_2 = response.data.list[18].weather[0].description;
          let title3_3 = response.data.list[20].weather[0].description;
          let title3_4 = response.data.list[22].weather[0].description;
          let iconId3_1 = response.data.list[16].weather[0].icon;
          let iconId3_2 = response.data.list[18].weather[0].icon;
          let iconId3_3 = response.data.list[20].weather[0].icon;
          let iconId3_4 = response.data.list[22].weather[0].icon;
          let time3_1 = new Date(response.data.list[16].dt_txt);
          let time3_2 = new Date(response.data.list[18].dt_txt);
          let time3_3 = new Date(response.data.list[20].dt_txt);
          let time3_4 = new Date(response.data.list[22].dt_txt);
          let title3 = title3_1;
          let tempC3 = tempConvert(tempK3_1);
          //Update Date 3
          if (currentHours <= time2_1.getHours()) {
            title3 = title3_1;
            tempC3 = tempConvert(tempK3_1);
          } else if (currentHours <= time3_2.getHours()) {
            title3 = title3_2;
            tempC3 = tempConvert(tempK3_2);
          } else if (currentHours <= time3_3.getHours()) {
            title3 = title3_3;
            tempC3 = tempConvert(tempK3_3);
          } else if (currentHours <= time3_4.getHours()) {
            title3 = title3_4;
            tempC3 = tempConvert(tempK3_4);
          }

          let day3 = currentDate(today3);
          let tim3_1 = currentTime(time3_1);
          let tim3_2 = currentTime(time3_2);
          let tim3_3 = currentTime(time3_3);
          let tim3_4 = currentTime(time3_4);
          let icon3_1 = iconUrl(iconId3_1);
          let icon3_2 = iconUrl(iconId3_2);
          let icon3_3 = iconUrl(iconId3_3);
          let icon3_4 = iconUrl(iconId3_4);
          let temC3_1 = tempConvert(tempK3_1);
          let temC3_2 = tempConvert(tempK3_2);
          let temC3_3 = tempConvert(tempK3_3);
          let temC3_4 = tempConvert(tempK3_4);

          setDate3({
            title: title3,
            temp: tempC3,
            day: day3,
            tem1: temC3_1,
            tem2: temC3_2,
            tem3: temC3_3,
            tem4: temC3_4,
            icon1: icon3_1,
            icon2: icon3_2,
            icon3: icon3_3,
            icon4: icon3_4,
            time1: tim3_1,
            time2: tim3_2,
            time3: tim3_3,
            time4: tim3_4,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Row
        gutter={[24, { xs: 4, sm: 24, md: 16 }]}
        align="middle"
        justify="center"
      >
        <Col
          className={styles.container_weather1}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 24 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Weather
            bg={7}
            loc={"Đà Nẵng"}
            temp={date1.temp}
            title={date1.title}
            color1={"#fafcfe"}
            color2={"#aee1f4"}
            day={date1.day}
            tem1={date1.tem1}
            time1={date1.time1}
            icon1={date1.icon1}
            tem2={date1.tem2}
            time2={date1.time2}
            icon2={date1.icon2}
            tem3={date1.tem3}
            time3={date1.time3}
            icon3={date1.icon3}
            tem4={date1.tem4}
            time4={date1.time4}
            icon4={date1.icon4}
          />
        </Col>
        <Col
          className={styles.container_weather2}
          lg={8}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 24 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Weather
            bg={8}
            loc={"Đà Nẵng"}
            temp={date2.temp}
            title={date2.title}
            color1={"#fafcfe"}
            color2={"#2474B9"}
            day={date2.day}
            tem1={date2.tem1}
            time1={date2.time1}
            icon1={date2.icon1}
            tem2={date2.tem2}
            time2={date2.time2}
            icon2={date2.icon2}
            tem3={date2.tem3}
            time3={date2.time3}
            icon3={date2.icon3}
            tem4={date2.tem4}
            time4={date2.time4}
            icon4={date2.icon4}
          />
        </Col>
        <Col
          className={styles.container_weather3}
          lg={8}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 24 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Weather
            bg={9}
            loc={"Đà Nẵng"}
            temp={date3.temp}
            title={date3.title}
            color1={"#fafcfe"}
            color2={"#856F95"}
            day={date3.day}
            tem1={date3.tem1}
            time1={date3.time1}
            icon1={date3.icon1}
            tem2={date3.tem2}
            time2={date3.time2}
            icon2={date3.icon2}
            tem3={date3.tem3}
            time3={date3.time3}
            icon3={date3.icon3}
            tem4={date3.tem4}
            time4={date3.time4}
            icon4={date3.icon4}
          />
        </Col>
      </Row>
    </div>
  );
}

export default WeatherToday;
