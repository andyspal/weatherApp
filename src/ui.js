import searchIcon from './images/searchIcon.svg'

export default function ui() {

    // Header
    const header = document.createElement("header");

    const formContainer = document.createElement('div');
    formContainer.setAttribute("class", 'form-container')
    const form = document.createElement('form');
    form.setAttribute('id', 'cityForm');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter a city');

    const errorMessage = document.createElement("p");
    errorMessage.setAttribute('class', 'error-message');

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    const icon = new Image();
    icon.src = searchIcon;
    icon.setAttribute('class','search-icon');
    icon.setAttribute('alt','searchIcon')
    button.appendChild(icon);
    form.append(button, input);
    formContainer.append(form, errorMessage);
    header.appendChild(formContainer);

    // Main
    const main = document.createElement('main');
    //weather container
    const weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('class', 'weather-container');
    // weather: weather icon, current temperature, description
    const weather = document.createElement('div');
    weather.setAttribute('class', 'weather');
    // temperatureContainer: maxTemp minTemp
    const dailyTemperature = document.createElement('div');
    dailyTemperature.setAttribute('class','daily-temperature');
    
    // detailedWeather: humidity, feelslike
    const detailedWeather = document.createElement('div');
    detailedWeather.setAttribute('class', 'detailed-weather');
    // name
    const name = document.createElement('h2');
    name.setAttribute('class', 'name');
    // weather icon
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class', 'weather-icon')
    // temperature
    const currentTemperature = document.createElement('p');
    currentTemperature.setAttribute('class', 'current-temperature');
    // description
    const description = document.createElement('p');
    description.setAttribute('class', 'description');
    // humidity
    const humidity = document.createElement('p');
    humidity.setAttribute('class', 'humidity');
    // feels like
    const feelsLike = document.createElement('p');
    feelsLike.setAttribute('class', 'feels-like');
    // max temperature
    const maxTemperature = document.createElement('p');
    maxTemperature.setAttribute('class', 'max-temperature');
    // min temperature
    const minTemperature = document.createElement('p');
    minTemperature.setAttribute('class', 'min-temperature');
    
    //appends
    main.append(name, weatherContainer);
    weatherContainer.append(weather,dailyTemperature, detailedWeather);

    weather.append(weatherIcon, currentTemperature, description);
    dailyTemperature.append(maxTemperature, minTemperature);
    detailedWeather.append(humidity, feelsLike);

    // Append elements to Body
    document.body.append(header,main);
}