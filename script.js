// variabel som pekar på container-diven i HTML
const container = document.getElementById("container");

// element för platsnamn
const nameElement = document.createElement("h1"); // Skapar p för plats
nameElement.textContent = response.name; // hämtar response fron data.js
container.appendChild(nameElement); // placerar det i container i HTML

// element för väderbeskrivning
const weatherElement = document.createElement("p");
weatherElement.textContent = response.description;
container.appendChild(weatherElement);

// element för temperatur
const tempElement = document.createElement("h3");
tempElement.textContent = response.temperature;
container.appendChild(tempElement);

// byta sol/måne beroende på tid på dygnet

const date = new Date();
const hours = date.getHours();
const sunElement = document.getElementById("sun");
const containerMoon = document.getElementById("container");

console.log("klockan är " + new Date().getHours());

if (hours < 6 || hours > 18) {
  sunElement.classList.add("moon");
  container.classList.add("moon");
  console.log("Och då är det måne");
} else {
  sunElement.classList.remove("moon");
  container.classList.remove("moon");
  console.log("Och då är det sol");
}

// väder API
async function getWeather() {
  const apiKey = "57ebb321f0adb9a307683b386862ec5d";
  const city = "Stockholm";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric&lang=se";

  const response = await fetch(url);
  const data = await response.json();

  const temp = Math.round(data.main.temp);

  document.getElementById("weather").innerText = data.name.trim() + ": " + temp + " °C, " + data.weather[0].description;

  // console.log(data);  document.getElementById("weather").innerText = `${data.name}: ${temp} °C, ${data.weather[0].description}`;

  const weather = document.getElementById("weather");
  container.appendChild(weather); // flyttar det sist i containern
}

getWeather();

// lägg till stil direkt med JS
weather.style.fontSize = "2rem";
// weather.style.fontWeight = "bold";
// weather.style.color = "#000000ff";
weather.style.background = "#e0ddbbff";
weather.style.border = "3px solid black";
weather.style.padding = "10px 15px";
weather.style.borderRadius = "8px";
weather.style.textAlign = "center";
weather.style.margin = "1rem";
