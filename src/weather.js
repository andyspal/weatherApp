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
  const status = data.cod;
  if(status === 200){
    const name = `${data.name}, ${data.sys.country}`;
    const currentTemperature = Math.round(data.main.temp - 273.15);
    const tempMin = Math.round(data.main.temp_min - 273.15);
    const tempMax = Math.round(data.main.temp_max - 273.15);
    const description = data.weather[0].main;
    const timeCode = (data.weather[0].icon).slice(-1);
    const humidity = data.main.humidity;
    
    return {name, currentTemperature, description, tempMin, tempMax, humidity, timeCode, status};
  }
  else if (status === 404 || status == 400){
    return {status}
  }
  else{
    return {status};
  }
}

