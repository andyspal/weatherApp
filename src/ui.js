import searchIcon from './svgs/searchIcon.svg'

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
    const icon = new Image();
    icon.src = searchIcon;
    icon.setAttribute('class','search-icon');
    icon.setAttribute('alt','searchIcon')
    button.appendChild(icon);
    form.append(button, input);
    header.appendChild(form);

    // Main
    const main = document.createElement('main');
  
    const weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('class', 'weather-container');

    const weatherInfo = document.createElement('div');
    weatherInfo.setAttribute('class', 'weather-info');

    const name = document.createElement('h2');
    name.setAttribute('class', 'name');

    const temperature = document.createElement('p');
    temperature.setAttribute('class', 'temperature');

    const conditions = document.createElement('p');
    conditions.setAttribute('class', 'conditions');

    weatherInfo.append(name, temperature, conditions);
    weatherContainer.appendChild(weatherInfo);
    main.appendChild(weatherContainer);

    // Append elements to Body
    document.body.append(header,main);
}