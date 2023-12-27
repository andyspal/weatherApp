async function fetchWeather(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a22d1c330ef68dd88e2d6f66e709ee7`, {mode: "cors"});
      const data = await response.json();
      // const cityName = data.name;
      // const temperature = data.main.temp;
      // const weather = data.weather[0].main;
      return data;
    } catch(error) {
      console.log(error.message());
      return 0;
    }
  }

 export async function getWeatherData(city) {
  const data = await fetchWeather(city);
  const name = data.name;
  const temperature = Math.round(data.main.temp - 273.15);
  const conditions = data.weather[0].main;
  return {name, temperature, conditions};
}

export function displayWeatherData(name,temperature,conditions){
  const nameH2 = document.querySelector(".name");
  const temperatureP = document.querySelector(".temperature");
  const conditionsP = document.querySelector(".conditions");
  const weatherContainer = document.querySelector(".weather-container");

  nameH2.textContent = name;
  temperatureP.textContent = `${temperature}°C`;
  conditionsP.textContent = conditions;

  weatherContainer.style.display = "block";
}
