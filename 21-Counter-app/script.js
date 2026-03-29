let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Update UI
function updateCount() {
  countDisplay.innerText = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Events
increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});
