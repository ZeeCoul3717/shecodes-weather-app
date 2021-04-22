let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
h3.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = input.value;
  search(input.value);
}
function search(city) {
  let apiKey = "b59f1577f392e8add8db9da9f75d4c82";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".temperature");
  let description = document.querySelector(".description");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");
  temperatureElement.innerHTML = `${temperature}ºC`;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = `${response.data.main.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed} km/h`;
}

