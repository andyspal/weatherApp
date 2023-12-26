"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["ui"],{

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ui)
/* harmony export */ });
function ui() {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aSgpIHtcclxuXHJcbiAgICAvLyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5Rm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGEgY2l0eScpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kKGlucHV0LCBidXR0b24pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIC8vIE1haW5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgXHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2VhdGhlckluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWluZm8nKTtcclxuXHJcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaXR5Jyk7XHJcblxyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXBlcmF0dXJlJyk7XHJcblxyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBodW1pZGl0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2h1bWlkaXR5Jyk7XHJcblxyXG4gICAgY29uc3Qgc2t5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2t5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2t5Jyk7XHJcblxyXG4gICAgd2VhdGhlckluZm8uYXBwZW5kKGNpdHksIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgc2t5KTtcclxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckluZm8pO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gQm9keVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLG1haW4pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9