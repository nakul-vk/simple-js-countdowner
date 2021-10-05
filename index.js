function calculateVars() {
  let current = new Date().getTime();
  let target = new Date("Oct 20, 2021 19:41:00").getTime();

  let millisecondsRemaining = target - current;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let daysRemaining = Math.floor(millisecondsRemaining / day);
  let hoursRemaining = Math.floor((millisecondsRemaining % day) / hour);
  let minutesRemaining = Math.floor((millisecondsRemaining % hour) / minute);
  let secondsRemaining = Math.floor((millisecondsRemaining % minute) / second);

  let timeArr = [
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
  ];

  let idArr = [
    "daysRemaining",
    "hoursRemaining",
    "minutesRemaining",
    "secondsRemaining",
  ];

  if (millisecondsRemaining < 1000) {
    for (let items of idArr) {
      $(`#${items}`).text("0");
    }
  } else {
    let i = 0;
    i < 4;
    for (let items of idArr) {
      $(`#${items}`).text(`${timeArr[i]}`);
      i++;
    }
  }
}

$(function () {
  setInterval(() => {
    calculateVars();
  }, 1000);
});
