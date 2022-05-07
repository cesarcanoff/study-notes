feather.replace();
setInterval(() => {
  var time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  document.getElementById('timer').innerHTML =
    (hours < 10 ? `0${hours}` : `${hours}`) +
    (minutes < 10 ? `:0${minutes}` : `:${minutes}`) +
    (seconds < 10 ? `:0${seconds}` : `:${seconds}`);
}, 500)