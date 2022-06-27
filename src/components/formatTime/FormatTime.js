export const currentDate = (today) => {
  let currentDate = new Date(today);
  let date =
    (currentDate.getDate() < 10
      ? "0" + currentDate.getDate()
      : currentDate.getDate()) +
    "-" +
    (currentDate.getMonth() + 1 < 10
      ? "0" + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1) +
    "-" +
    currentDate.getFullYear();
  return date;
};

export const currentTime = (today) => {
  let currentDate = new Date(today);
  let time =
    (currentDate.getHours() < 10
      ? "0" + currentDate.getHours()
      : currentDate.getHours() > 12
      ? currentDate.getHours() - 12
      : currentDate.getHours()) +
    ":" +
    (currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes()) +
    (currentDate.getHours() > 12 ? " PM" : " AM");
  return time;
};
