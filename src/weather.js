async function fetchData(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a22d1c330ef68dd88e2d6f66e709ee7`, {mode: "cors"});
      const data = await response.json();
      return data;
    } catch(error) {
      console.log(error.message());
    }
  }

 export async function getData(city) {
  const data = await fetchData(city);
  if(data.cod === 200){
    const name = data.name;
    const temperature = Math.round(data.main.temp - 273.15);
    const tempMin = (data.main.temp_min - 273.15).toFixed(2);
    const tempMax = (data.main.temp_max - 273.15).toFixed(2);
    const mainDescription = data.weather[0].main;
    const description = data.weather[0].description;
    const timeCode = (data.weather[0].icon).slice(-1);
    console.log(timeCode);
    const humidity = data.main.humidity;

    return {name, temperature, mainDescription, description, tempMin, tempMax, humidity, timeCode};
  }
  else if (data.cod === 404){
    return {error:'City not found'}
  }
  else{
    return {error: data.message};
  }
}

