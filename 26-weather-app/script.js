const API_KEY = "YOUR_API_KEY"; // <-- replace this

async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerText = "Enter city name!";
    return;
  }

  try {
    result.innerText = "Loading...";

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();

    result.innerHTML = `
      <div class="card">
        <h2>${data.name}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>🌥️ ${data.weather[0].main}</p>
      </div>
    `;
  } catch (error) {
    result.innerText = error.message;
  }
}
