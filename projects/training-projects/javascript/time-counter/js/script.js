feather.replace()
let days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  intervalTimer;

let start = () => {
  intervalTimer = setInterval(() => {
    timerWork();
  }, 1000);
}

let pause = () => {
  clearInterval(intervalTimer);
}

let stop = () => {
  clearInterval(intervalTimer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('timer').innerHTML = '00:00:00:00';
}

let timerWork = () => {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
    if (minutes == 60) {
      hours++;
      minutes = 0;
      if (hours == 24) {
        days++;
        hours = 0;
      }
    }
  }
  document.getElementById('timer').innerHTML =
    (days < 10 ? '0' + days : days) +
    (hours < 10 ? ':0' + hours : ':' + hours) +
    (minutes < 10 ? ':0' + minutes : ':' + minutes) +
    (seconds < 10 ? ':0' + seconds : ':' + seconds);
}