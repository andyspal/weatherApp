"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


 (0,_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ3hCO0FBQ0EsQ0FBQywrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7QUNGWTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgdWkgIGZyb20gJy4vdWknO1xyXG5cclxuIHVpKCk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWkoKSB7XHJcblxyXG4gICAgLy8gSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2l0eUZvcm0nKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBhIGNpdHknKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcclxuXHJcbiAgICBmb3JtLmFwcGVuZChpbnB1dCwgYnV0dG9uKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAvLyBNYWluXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIFxyXG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2VhdGhlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdlYXRoZXJJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pbmZvJyk7XHJcblxyXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2l0eScpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGVtcGVyYXR1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wZXJhdHVyZScpO1xyXG5cclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaHVtaWRpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdodW1pZGl0eScpO1xyXG5cclxuICAgIGNvbnN0IHNreSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNreS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NreScpO1xyXG5cclxuICAgIHdlYXRoZXJJbmZvLmFwcGVuZChjaXR5LCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHNreSk7XHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIEJvZHlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcixtYWluKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==