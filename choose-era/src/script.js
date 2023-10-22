function countingAnimation(clicks) {
  let valueDisplay = document.querySelector(".counting");
  let interval = 5000;
  console.log(valueDisplay);
  let startValue = 0;
  let endValue = clicks;
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}
