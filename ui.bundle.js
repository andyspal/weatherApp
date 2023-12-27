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
/* harmony import */ var _svgs_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgs/searchIcon.svg */ "./src/svgs/searchIcon.svg");


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
    const icon = new Image();
    icon.src = _svgs_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ }),

/***/ "./src/svgs/searchIcon.svg":
/*!*********************************!*\
  !*** ./src/svgs/searchIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9cfbd36ba30d8a43c88.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQzlDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi9zdmdzL3NlYXJjaEljb24uc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWkoKSB7XHJcblxyXG4gICAgLy8gSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2l0eUZvcm0nKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBhIGNpdHknKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBpY29uLnNyYyA9IHNlYXJjaEljb247XHJcbiAgICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZWFyY2gtaWNvbicpO1xyXG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsJ3NlYXJjaEljb24nKVxyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgZm9ybS5hcHBlbmQoYnV0dG9uLCBpbnB1dCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgLy8gTWFpblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBcclxuICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdlYXRoZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3ZWF0aGVySW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItaW5mbycpO1xyXG5cclxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY2l0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NpdHknKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRlbXBlcmF0dXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcGVyYXR1cmUnKTtcclxuXHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGh1bWlkaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaHVtaWRpdHknKTtcclxuXHJcbiAgICBjb25zdCBza3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBza3kuc2V0QXR0cmlidXRlKCdjbGFzcycsICdza3knKTtcclxuXHJcbiAgICB3ZWF0aGVySW5mby5hcHBlbmQoY2l0eSwgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCBza3kpO1xyXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW5mbyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBCb2R5XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsbWFpbik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=