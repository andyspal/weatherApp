import  ui  from './ui';
import './styles/normalize.css'
import './styles/style.css';
import {getData} from './weather';

 ui();

 const cityForm = document.getElementById('cityForm');

 cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityForm.elements[1].value;
    const {name, temperature, mainDescription, description, tempMin, tempMax, humidity, timeCode} = await getData(city);
    
  

    event.target.reset();
  });