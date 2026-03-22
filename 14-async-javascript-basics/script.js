// Timer (1 to 10 using setInterval)
let timerBtn = document.getElementById("startTimer");
let timerDisplay = document.getElementById("timerDisplay");

timerBtn.addEventListener("click", () => {
  let count = 1;

  let timer = setInterval(() => {
    timerDisplay.innerText = count;
    count++;

    if (count > 10) {
      clearInterval(timer);
    }
  }, 1000);
});

// Delayed Alert using setTimeout
let delayBtn = document.getElementById("delayBtn");

delayBtn.addEventListener("click", () => {
  setTimeout(() => {
    alert("This alert appeared after 3 seconds!");
  }, 3000);
});

// Interval Start/Stop
let startInterval = document.getElementById("startInterval");
let stopInterval = document.getElementById("stopInterval");
let intervalDisplay = document.getElementById("intervalDisplay");

let interval;
let num = 0;

startInterval.addEventListener("click", () => {
  interval = setInterval(() => {
    intervalDisplay.innerText = num++;
  }, 1000);
});

stopInterval.addEventListener("click", () => {
  clearInterval(interval);
});
