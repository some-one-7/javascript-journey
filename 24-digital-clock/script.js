const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Run every second
setInterval(updateClock, 1000);

// Initial call (so it doesn't wait 1 sec)
updateClock();
