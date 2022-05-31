import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "person",
  initialState: [
    {
      id: 1,
      imageName: "1-person.jpg",
      name: "ROBORT PATTISON",
      job: "Developing",
      information: [
        {
          iconName: "fas fa-calendar-alt",
          title: "DOB",
          text: "23/05/2014",
        },
        {
          iconName: "fa-solid fa-heart",
          title: "BG",
          text: "B+",
        },
        {
          iconName: "fa-solid fa-graduation-cap",
          title: "EDU",
          text: "MCA",
        },
        {
          iconName: "fa-solid fa-location-dot",
          title: "RES",
          text: "Bangalore",
        },
      ],
      contact: [
        {
          contact: "robot12@gmail.com",
          iconContact: "far fa-envelope",
          colorContact: "#31c8dd",
          titleContact: "EMAIL ID",
        },
        {
          contact: "8665543219",
          iconContact: "fa-solid fa-phone",
          colorContact: "#619cec",
          titleContact: "PHONE NO",
        },
      ],
    },
    {
      id: 2,
      imageName: "2-person.jpg",
      name: "JAMES SMITH",
      job: "Designer",
      information: [
        {
          iconName: "fas fa-calendar-alt",
          title: "DOB",
          text: "23/05/2014",
        },
        {
          iconName: "fa-solid fa-heart",
          title: "BG",
          text: "B+",
        },
        {
          iconName: "fa-solid fa-graduation-cap",
          title: "EDU",
          text: "MCA",
        },
        {
          iconName: "fa-solid fa-location-dot",
          title: "RES",
          text: "Bangalore",
        },
      ],
      contact: [
        {
          contact: "smith12@gmail.com",
          iconContact: "far fa-envelope",
          colorContact: "#f65250",
          titleContact: "EMAIL ID",
        },
        {
          contact: "8227749212",
          iconContact: "fa-solid fa-phone",
          colorContact: "#51d567",
          titleContact: "PHONE NO",
        },
      ],
    },
    {
      id: 3,
      imageName: "3-person.jpg",
      name: "TOM HANKS",
      job: "UI Designer",
      information: [
        {
          iconName: "fas fa-calendar-alt",
          title: "DOB",
          text: "23/05/2014",
        },
        {
          iconName: "fa-solid fa-heart",
          title: "BG",
          text: "B+",
        },
        {
          iconName: "fa-solid fa-graduation-cap",
          title: "EDU",
          text: "MCA",
        },
        {
          iconName: "fa-solid fa-location-dot",
          title: "RES",
          text: "Bangalore",
        },
      ],
      contact: [
        {
          contact: "peter1@gmail.com",
          iconContact: "far fa-envelope",
          colorContact: "#f78153",
          titleContact: "EMAIL ID",
        },
        {
          contact: "8665543219",
          iconContact: "fa-solid fa-phone",
          colorContact: "#fcd518",
          titleContact: "PHONE NO",
        },
      ],
    },
    {
      id: 4,
      imageName: "4-person.jpg",
      name: "SILVESTER STALIN",
      job: "Testing",
      information: [
        {
          iconName: "fas fa-calendar-alt",
          title: "DOB",
          text: "23/05/2014",
        },
        {
          iconName: "fa-solid fa-heart",
          title: "BG",
          text: "B+",
        },
        {
          iconName: "fa-solid fa-graduation-cap",
          title: "EDU",
          text: "MCA",
        },
        {
          iconName: "fa-solid fa-location-dot",
          title: "RES",
          text: "Bangalore",
        },
      ],
      contact: [
        {
          contact: "point12@gmail.com",
          iconContact: "far fa-envelope",
          colorContact: "#cb79e7",
          titleContact: "EMAIL ID",
        },
        {
          contact: "9937924265",
          iconContact: "fa-solid fa-phone",
          colorContact: "#fe60e8",
          titleContact: "PHONE NO",
        },
      ],
    },
  ],
  reducers: {},
});
export default slice;
