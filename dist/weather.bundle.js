"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["weather"],{

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
async function fetchWeather(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a22d1c330ef68dd88e2d6f66e709ee7`, {mode: "cors"});
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error.message());
        return 0;
    }
}

async function getWeather(city){
    fetchWeather(city)
    console.log(data)
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weather.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSwwRkFBMEYsS0FBSywyQ0FBMkMsYUFBYTtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy93ZWF0aGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihjaXR5KXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9OWEyMmQxYzMzMGVmNjhkZDg4ZTJkNmY2NmU3MDllZTdgLCB7bW9kZTogXCJjb3JzXCJ9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UoKSk7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xyXG4gICAgZmV0Y2hXZWF0aGVyKGNpdHkpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=