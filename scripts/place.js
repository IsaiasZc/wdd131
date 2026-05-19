
const temperature = 18;
const windSpeed = 15;

function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const windchillEl = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
  windchillEl.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
  windchillEl.textContent = "N/A";
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
