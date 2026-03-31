const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");

btn.addEventListener("click", () => {
  const randomColor = generateColor();

  document.body.style.backgroundColor = randomColor;
  colorCode.innerText = randomColor;
});

// Function to generate random hex color
function generateColor() {
  const chars = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    color += chars[randomIndex];
  }

  return color;
}
