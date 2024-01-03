"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["weather"],{

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
async function fetchData(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a22d1c330ef68dd88e2d6f66e709ee7`, {mode: "cors"});
      const data = await response.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }

 async function getData(city) {
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weather.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSx3RkFBd0YsS0FBSywyQ0FBMkMsYUFBYTtBQUNySjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVLElBQUksaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGNpdHkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD05YTIyZDFjMzMwZWY2OGRkODhlMmQ2ZjY2ZTcwOWVlN2AsIHttb2RlOiBcImNvcnNcIn0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShjaXR5KTtcclxuICBjb25zdCBzdGF0dXMgPSBkYXRhLmNvZDtcclxuICBpZihzdGF0dXMgPT09IDIwMCl7XHJcbiAgICBjb25zdCBuYW1lID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWA7XHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wIC0gMjczLjE1KTtcclxuICAgIGNvbnN0IHRlbXBNaW4gPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSk7XHJcbiAgICBjb25zdCB0ZW1wTWF4ID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICAgIGNvbnN0IHRpbWVDb2RlID0gKGRhdGEud2VhdGhlclswXS5pY29uKS5zbGljZSgtMSk7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcclxuXHJcbiAgICByZXR1cm4ge25hbWUsIGN1cnJlbnRUZW1wZXJhdHVyZSwgZGVzY3JpcHRpb24sIHRlbXBNaW4sIHRlbXBNYXgsIGh1bWlkaXR5LCB0aW1lQ29kZSwgc3RhdHVzfTtcclxuICB9XHJcbiAgZWxzZSBpZiAoc3RhdHVzID09PSA0MDQgfHwgc3RhdHVzID09IDQwMCl7XHJcbiAgICByZXR1cm4ge3N0YXR1c31cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHJldHVybiB7c3RhdHVzfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==