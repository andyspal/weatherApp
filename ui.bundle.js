"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["ui"],{

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorUi: () => (/* binding */ errorUi),
/* harmony export */   ui: () => (/* binding */ ui),
/* harmony export */   weatherUi: () => (/* binding */ weatherUi)
/* harmony export */ });
/* harmony import */ var _images_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/searchIcon.svg */ "./src/images/searchIcon.svg");


function ui() {

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
    icon.src = _images_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__;
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

    const footer = document.createElement('footer');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'https://github.com/andyspal');
    anchor.textContent = '@andyspal'
    footer.appendChild(anchor);

    // Append elements to Body
    document.body.append(header,main,footer);

    
    
}

function weatherUi() {
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

        const mapContainer = document.createElement('div');
        mapContainer.setAttribute('class', 'map-container');
        
        //appends
        main.append(weatherContainer);
        weatherContainer.append(cityContainer, descriptionContainer, dailyTemperatureContainer, humidityContainer);
    
        cityContainer.append(city);
    
        descriptionContainer.append(weather, description);
        weather.append(weatherIcon, currentTemperature)
    
        dailyTemperatureContainer.append(minTemperature, slash, maxTemperature);
        
        humidityContainer.append(humidity);
}

function errorUi(status){
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

/***/ }),

/***/ "./src/images/searchIcon.svg":
/*!***********************************!*\
  !*** ./src/images/searchIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9cfbd36ba30d8a43c88.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltYWdlcy9zZWFyY2hJY29uLnN2ZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1aSgpIHtcclxuXHJcbiAgICAvLyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnZm9ybS1jb250YWluZXInKVxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5Rm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGEgY2l0eScpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9hZGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGljb24uc3JjID0gc2VhcmNoSWNvbjtcclxuICAgIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NlYXJjaC1pY29uJyk7XHJcbiAgICBpY29uLnNldEF0dHJpYnV0ZSgnYWx0Jywnc2VhcmNoSWNvbicpXHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICBsb2FkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgZm9ybS5hcHBlbmQobG9hZGVyQ29udGFpbmVyLCBpbnB1dCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1jb250YWluZXInKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmR5c3BhbCcpO1xyXG4gICAgYW5jaG9yLnRleHRDb250ZW50ID0gJ0BhbmR5c3BhbCdcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBCb2R5XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsbWFpbixmb290ZXIpO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3ZWF0aGVyVWkoKSB7XHJcbiAgICAgICAgLy8gTWFpblxyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgLy93ZWF0aGVyIGNvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250YWluZXInKTtcclxuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgLy8gY2l0eSBjb250YWluZXI6IG5hbWVcclxuICAgICAgICBjb25zdCBjaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2l0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NpdHktY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb25Db250YWluZXI6IGljb24sIHRlbXBlcmF0dXJlLCBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRhaWx5VGVtcGVyYXR1cmVDb250YWluZXI6IHRlbXBNaW4gdGVtcE1heFxyXG4gICAgICAgIGNvbnN0IGRhaWx5VGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYWlseVRlbXBlcmF0dXJlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGFpbHktdGVtcGVyYXR1cmUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaHVtaWRpdHlDb250YWluZXI6IGh1bWlkaXR5XHJcbiAgICAgICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBodW1pZGl0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaHVtaWRpdHktY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jaXR5XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY2l0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWUnKTtcclxuICAgICAgICAvLyB3ZWF0aGVyXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdlYXRoZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3dlYXRoZXInKTtcclxuICAgICAgICAvLyB3ZWF0aGVyIGljb25cclxuICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHdlYXRoZXJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pY29uJyk7XHJcbiAgICAgICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnd2VhdGhlci1pY29uJyk7XHJcbiAgICAgICAgLy8gY3VycmVudFRlbXBlcmF0dXJlXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2N1cnJlbnQtdGVtcGVyYXR1cmUnKTtcclxuICAgICAgICAvLyBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAvLyBodW1pZGl0eVxyXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGh1bWlkaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaHVtaWRpdHknKTtcclxuXHJcbiAgICAgICAgLy8gbWluIHRlbXBlcmF0dXJlXHJcbiAgICAgICAgY29uc3QgbWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbWluVGVtcGVyYXR1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaW4tdGVtcGVyYXR1cmUnKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3NsYXNoXHJcbiAgICAgICAgY29uc3Qgc2xhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBzbGFzaC50ZXh0Q29udGVudCA9ICcvJ1xyXG4gICAgICAgIHNsYXNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xhc2gnKTtcclxuICAgICAgICAvLyBtYXggdGVtcGVyYXR1cmVcclxuICAgICAgICBjb25zdCBtYXhUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBtYXhUZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21heC10ZW1wZXJhdHVyZScpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hcHBlbmRzXHJcbiAgICAgICAgbWFpbi5hcHBlbmQod2VhdGhlckNvbnRhaW5lcik7XHJcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmQoY2l0eUNvbnRhaW5lciwgZGVzY3JpcHRpb25Db250YWluZXIsIGRhaWx5VGVtcGVyYXR1cmVDb250YWluZXIsIGh1bWlkaXR5Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGNpdHlDb250YWluZXIuYXBwZW5kKGNpdHkpO1xyXG4gICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKHdlYXRoZXIsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICB3ZWF0aGVyLmFwcGVuZCh3ZWF0aGVySWNvbiwgY3VycmVudFRlbXBlcmF0dXJlKVxyXG4gICAgXHJcbiAgICAgICAgZGFpbHlUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmQobWluVGVtcGVyYXR1cmUsIHNsYXNoLCBtYXhUZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGh1bWlkaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVWkoc3RhdHVzKXtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Vycm9yLW1lc3NhZ2UnKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gXCI0MDRcIiB8fCBzdGF0dXMgPT09IFwiNDAwXCIpe1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDaXR5IG5vdCBmb3VuZCwgZW50ZXIgYSB2YWxpZCBuYW1lLidcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBjb250YWN0IHN1cHBvcnQuJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9