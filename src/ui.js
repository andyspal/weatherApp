export default function ui() {

    // Header
    const header = document.createElement("header");

    const form = document.createElement('form');
    form.setAttribute('id', 'cityForm');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter a city');

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Search';

    form.append(input, button);
    header.appendChild(form);

    // Main
    const main = document.createElement('main');
  
    const weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('class', 'weather-container');

    const weatherInfo = document.createElement('div');
    weatherInfo.setAttribute('class', 'weather-info');

    const city = document.createElement('h2');
    city.setAttribute('class', 'city');

    const temperature = document.createElement('p');
    temperature.setAttribute('class', 'temperature');

    const humidity = document.createElement('p');
    humidity.setAttribute('class', 'humidity');

    const sky = document.createElement('p');
    sky.setAttribute('class', 'sky');

    weatherInfo.append(city, temperature, humidity, sky);
    weatherContainer.appendChild(weatherInfo);
    main.appendChild(weatherContainer);

    // Append elements to Body
    document.body.append(header,main);
}