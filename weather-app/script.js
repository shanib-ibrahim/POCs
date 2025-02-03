import config from "./config.js";

const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

const getWeather = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.APIKEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      temperature.innerHTML = `${weatherTemp.toFixed(2)}°C`;
      const weatherDesc = data.weather[0].description;
      description.innerHTML = `${weatherDesc}`;
    });
};
