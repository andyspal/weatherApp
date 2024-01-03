import {ui, weatherUi, errorUi} from './ui';
import './styles/normalize.css'
import './styles/style.css';
import './styles/loader.css'
import { getData } from './weather';
import { updateWeather } from './updateUi';

ui();
const cityForm = document.getElementById('cityForm');

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  document.querySelector('button img').style.display = 'none';
  document.querySelector('button').classList.add('loader');
  const weatherContainer = document.querySelector('.weather-container');
  weatherContainer.classList.remove('success');
  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  const city = cityForm.elements[1].value;
  const { name, currentTemperature, description, tempMin, tempMax, humidity, timeCode, status} = await getData(city);
  if(status === 200){
    weatherUi();
    await updateWeather(name, currentTemperature, description, tempMin, tempMax, humidity, timeCode)
  }
  else{
    weatherContainer.appendChild(errorUi(status));
  }
  document.querySelector('button img').style.display = 'flex';
  document.querySelector('button').classList.remove('loader');
  input.style.display = 'flex';
  event.target.reset();
});

const input = document.querySelector('input');
input.style.display = 'none';
input.value = "Cordoba";

const submitButton = document.querySelector('button');
submitButton.click();

