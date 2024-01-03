import searchIcon from './images/searchIcon.svg'

export function ui() {

    // Header
    const header = document.createElement("header");

    const formContainer = document.createElement('div');
    formContainer.setAttribute("class", 'form-container')
    const form = document.createElement('form');
    form.setAttribute('id', 'cityForm');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter a city');

    const loaderContainer = document.createElement('div');
    loaderContainer.setAttribute('class', 'loader-container');

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    const icon = new Image();
    icon.src = searchIcon;
    icon.setAttribute('class','search-icon');
    icon.setAttribute('alt','searchIcon')
    button.appendChild(icon);
    loaderContainer.appendChild(button)
    form.append(loaderContainer, input);
    formContainer.appendChild(form);
    header.appendChild(formContainer);

    const main = document.createElement('main');
    const weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('class', 'weather-container');
    main.appendChild(weatherContainer);

    // Append elements to Body
    document.body.append(header,main);

    
    
}

export function weatherUi() {
        // Main
        const main = document.querySelector('main');
        //weather container
        const weatherContainer = document.querySelector('.weather-container');
        weatherContainer.classList.add('success');

        // city container: name
        const cityContainer = document.createElement('div');
        cityContainer.setAttribute('class', 'city-container');
        
        // descriptionContainer: icon, temperature, description
        const descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class','description-container');
        
        // dailyTemperatureContainer: tempMin tempMax
        const dailyTemperatureContainer = document.createElement('div');
        dailyTemperatureContainer.setAttribute('class', 'daily-temperature-container');
        
        // humidityContainer: humidity
        const humidityContainer = document.createElement('div');
        humidityContainer.setAttribute('class','humidity-container');
        
        //city
        const city = document.createElement('h2');
        city.setAttribute('class', 'name');
        // weather
        const weather = document.createElement('div');
        weather.setAttribute('class','weather');
        // weather icon
        const weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('class', 'weather-icon');
        weatherIcon.setAttribute('alt', 'weather-icon');
        // currentTemperature
        const currentTemperature = document.createElement('p');
        currentTemperature.setAttribute('class', 'current-temperature');
        // description
        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        // humidity
        const humidity = document.createElement('p');
        humidity.setAttribute('class', 'humidity');

        // min temperature
        const minTemperature = document.createElement('p');
        minTemperature.setAttribute('class', 'min-temperature');
        
        //slash
        const slash = document.createElement('p')
        slash.textContent = '/'
        slash.setAttribute('class', 'slash');
        // max temperature
        const maxTemperature = document.createElement('p');
        maxTemperature.setAttribute('class', 'max-temperature');
        
        //appends
    
        main.append(weatherContainer);
        weatherContainer.append(cityContainer, descriptionContainer, dailyTemperatureContainer, humidityContainer);
    
        cityContainer.append(city);
    
        descriptionContainer.append(weather, description);
        weather.append(weatherIcon, currentTemperature)
    
        dailyTemperatureContainer.append(minTemperature, slash, maxTemperature);
        
        humidityContainer.append(humidity);
}

export function errorUi(status){
    const errorMessage = document.createElement('h2');
    errorMessage.setAttribute('class','error-message');
    if(status === "404" || status === "400"){
        errorMessage.textContent = 'City not found, enter a valid name.'
    }
    else{
        errorMessage.textContent = 'Something went wrong, contact support.'
    }
    
    return errorMessage;
}