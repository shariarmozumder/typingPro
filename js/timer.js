const Timer = ((_) => {
  const $wrapper = document.querySelector(".wrapper");
  const $countdown = $wrapper.querySelector(".wrapper__countdown");

  let milliseconds = 0;
  let timer;
  let stopwatch = [0, 0, 0]; // minute/seconds/milliseconds

  const countStart = (_) => {
    $countdown.style.backgroundColor = "#bb432c";
    clearInterval(timer);

    timer = setInterval(() => {
      milliseconds += 10;
      let clock = new Date(milliseconds);
      let currentTime =
        stopwatch[0] + ": " + stopwatch[1] + ": " + stopwatch[2];
      $countdown.innerHTML = currentTime;
      stopwatch[0] = ("0" + clock.getUTCMinutes()).slice(-2);
      stopwatch[1] = ("0" + clock.getUTCSeconds()).slice(-2);
      stopwatch[2] = ("0" + clock.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
  };
  const countPause = (_) => {
    clearInterval(timer);
  };
  const countReset = (_) => {
    clearInterval(timer);
    milliseconds = 0;
    $countdown.innerHTML = "00: 00: 00";
  };
  return {
    countStart,
    countPause,
    countReset,
  };
})();
export default Timer;
