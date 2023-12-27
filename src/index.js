import  ui  from './ui';
import './styles/normalize.css'
import './styles/style.css';
import { getWeatherData, displayWeatherData } from './weather';

 ui();

 const cityForm = document.getElementById('cityForm');

 cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const city = cityForm.elements[1].value;
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.style.display = "none";
    const {name, temperature, conditions} = await getWeatherData(city);

    displayWeatherData(name,temperature,conditions);

    event.target.reset();
  });