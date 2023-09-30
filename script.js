const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "74e3b9daf76f3e1b420b64918779daa4";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") weatherIcon.src = "images/clouds.png";
    else if (data.weather[0].main == "Clear")
      weatherIcon.src = "images/clear.png";
    else if (data.weather[0].main == "Rain")
      weatherIcon.src = "images/rain.png";
    else if (data.weather[0].main == "Drizzle")
      weatherIcon.src = "images/drizzle.png";
    else if (data.weather[0].main == "Mist")
      weatherIcon.src = "images/mist.png";
    // if(data.weather[0].main=="clouds") weatherIcon.src="images/clouds.png";
    // if(data.weather[0].main=="clouds") weatherIcon.src="images/clouds.png";

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
