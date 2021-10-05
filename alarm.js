let crash = new Audio("./sounds/crash.mp3");

function alarm() {
  const current = new Date().getTime();
  let target = new Date("Aug 14, 2021 16:46:00").getTime();
  setTimeout(() => {
    crash.play();
    crash.play();
  }, Math.abs(target - current));
}
