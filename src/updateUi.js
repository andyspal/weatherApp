function selectIcon(mainDescription, timeCode) {
    switch (mainDescription) {
        case "Clear":
            return timeCode === "d" ? "clear-day.svg" : "clear-night.svg";
        case "Clouds":
            return timeCode === "d" ? "clouds-day.svg" : "clouds-night.svg";
        case "Rain":
            return timeCode === "d" ? "rain-day.svg" : "rain-night.svg";
        case "Drizzle":
            return timeCode === "d" ? "drizzle-day.svg" : "drizzle-night.svg";
        case "Thunderstorm":
            return timeCode === "d" ? "thunderstorm-day.svg" : "thunderstorm-night.svg";
        case "Snow":
            return timeCode === "d" ? "snow-day.svg" : "snow-night.svg";
        default:
            return timeCode === "d" ? "default-day.svg" : "default-night.svg";
    }
}

async function loadIcon(iconName) {
    let iconModule = await import(`./images/${iconName}`);
    return  iconModule.default;
}
export async function updateWeather(name, currentTemperature, description, tempMin, tempMax, humidity, timeCode){
    document.querySelector(".name").textContent = name;
    document.querySelector('.current-temperature').textContent = `${currentTemperature}°`;
    document.querySelector(".description").textContent = description;
    document.querySelector(".min-temperature").textContent = `${tempMin}°`;
    document.querySelector(".max-temperature").textContent = `${tempMax}°`;
    document.querySelector(".humidity").textContent = `${humidity}%`;

    if(timeCode === 'n'){
        document.querySelector('.description-container').classList.add('night');
        document.querySelector('.daily-temperature-container').classList.add('night');
        document.querySelector('.city-container').classList.add('night');
        document.querySelector('.humidity-container').classList.add('night');
        document.body.style.backgroundColor = '#002f4c';
    }
    else{
        document.body.style.backgroundColor = '#0085d7';
    }
    const icon = selectIcon(description, timeCode);
    const loadedIcon = await loadIcon(icon);
    document.querySelector('.weather-icon').src = `${loadedIcon}`;

    
}


