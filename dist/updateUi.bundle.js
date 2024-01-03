(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["updateUi"],{

/***/ "./src/images lazy recursive ^\\.\\/.*$":
/*!****************************************************!*\
  !*** ./src/images/ lazy ^\.\/.*$ namespace object ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": [
		"./src/images/clear-day.svg",
		"src_images_clear-day_svg"
	],
	"./clear-night.svg": [
		"./src/images/clear-night.svg",
		"src_images_clear-night_svg"
	],
	"./clouds-day.svg": [
		"./src/images/clouds-day.svg",
		"src_images_clouds-day_svg"
	],
	"./clouds-night.svg": [
		"./src/images/clouds-night.svg",
		"src_images_clouds-night_svg"
	],
	"./default-day.svg": [
		"./src/images/default-day.svg",
		"src_images_default-day_svg"
	],
	"./default-night.svg": [
		"./src/images/default-night.svg",
		"src_images_default-night_svg"
	],
	"./drizzle-day.svg": [
		"./src/images/drizzle-day.svg",
		"src_images_drizzle-day_svg"
	],
	"./drizzle-night.svg": [
		"./src/images/drizzle-night.svg",
		"src_images_drizzle-night_svg"
	],
	"./rain-day.svg": [
		"./src/images/rain-day.svg",
		"src_images_rain-day_svg"
	],
	"./rain-night.svg": [
		"./src/images/rain-night.svg",
		"src_images_rain-night_svg"
	],
	"./searchIcon.svg": [
		"./src/images/searchIcon.svg",
		"src_images_searchIcon_svg"
	],
	"./snow-day.svg": [
		"./src/images/snow-day.svg",
		"src_images_snow-day_svg"
	],
	"./snow-night.svg": [
		"./src/images/snow-night.svg",
		"src_images_snow-night_svg"
	],
	"./thunderstorm-day.svg": [
		"./src/images/thunderstorm-day.svg",
		"src_images_thunderstorm-day_svg"
	],
	"./thunderstorm-night.svg": [
		"./src/images/thunderstorm-night.svg",
		"src_images_thunderstorm-night_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/images lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/updateUi.js":
/*!*************************!*\
  !*** ./src/updateUi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWeather: () => (/* binding */ updateWeather)
/* harmony export */ });
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
    let iconModule = await __webpack_require__("./src/images lazy recursive ^\\.\\/.*$")(`./${iconName}`);
    return  iconModule.default;
}
async function updateWeather(name, currentTemperature, description, tempMin, tempMax, humidity, timeCode){
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/updateUi.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlVWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhEQUFPLEdBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RDtBQUNBO0FBQ087QUFDUDtBQUNBLG9FQUFvRSxtQkFBbUI7QUFDdkY7QUFDQSxnRUFBZ0UsUUFBUTtBQUN4RSxnRUFBZ0UsUUFBUTtBQUN4RSx5REFBeUQsU0FBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy8gbGF6eSBeXFwuXFwvLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy91cGRhdGVVaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY2xlYXItZGF5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvY2xlYXItZGF5LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19jbGVhci1kYXlfc3ZnXCJcblx0XSxcblx0XCIuL2NsZWFyLW5pZ2h0LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvY2xlYXItbmlnaHQuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX2NsZWFyLW5pZ2h0X3N2Z1wiXG5cdF0sXG5cdFwiLi9jbG91ZHMtZGF5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvY2xvdWRzLWRheS5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfY2xvdWRzLWRheV9zdmdcIlxuXHRdLFxuXHRcIi4vY2xvdWRzLW5pZ2h0LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvY2xvdWRzLW5pZ2h0LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19jbG91ZHMtbmlnaHRfc3ZnXCJcblx0XSxcblx0XCIuL2RlZmF1bHQtZGF5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvZGVmYXVsdC1kYXkuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX2RlZmF1bHQtZGF5X3N2Z1wiXG5cdF0sXG5cdFwiLi9kZWZhdWx0LW5pZ2h0LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvZGVmYXVsdC1uaWdodC5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfZGVmYXVsdC1uaWdodF9zdmdcIlxuXHRdLFxuXHRcIi4vZHJpenpsZS1kYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9kcml6emxlLWRheS5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfZHJpenpsZS1kYXlfc3ZnXCJcblx0XSxcblx0XCIuL2RyaXp6bGUtbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9kcml6emxlLW5pZ2h0LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19kcml6emxlLW5pZ2h0X3N2Z1wiXG5cdF0sXG5cdFwiLi9yYWluLWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3JhaW4tZGF5LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19yYWluLWRheV9zdmdcIlxuXHRdLFxuXHRcIi4vcmFpbi1uaWdodC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3JhaW4tbmlnaHQuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3JhaW4tbmlnaHRfc3ZnXCJcblx0XSxcblx0XCIuL3NlYXJjaEljb24uc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9zZWFyY2hJY29uLnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19zZWFyY2hJY29uX3N2Z1wiXG5cdF0sXG5cdFwiLi9zbm93LWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3Nub3ctZGF5LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19zbm93LWRheV9zdmdcIlxuXHRdLFxuXHRcIi4vc25vdy1uaWdodC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3Nub3ctbmlnaHQuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3Nub3ctbmlnaHRfc3ZnXCJcblx0XSxcblx0XCIuL3RodW5kZXJzdG9ybS1kYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy90aHVuZGVyc3Rvcm0tZGF5LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc190aHVuZGVyc3Rvcm0tZGF5X3N2Z1wiXG5cdF0sXG5cdFwiLi90aHVuZGVyc3Rvcm0tbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy90aHVuZGVyc3Rvcm0tbmlnaHQuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3RodW5kZXJzdG9ybS1uaWdodF9zdmdcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDEgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiZnVuY3Rpb24gc2VsZWN0SWNvbihtYWluRGVzY3JpcHRpb24sIHRpbWVDb2RlKSB7XHJcbiAgICBzd2l0Y2ggKG1haW5EZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJDbGVhclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdGltZUNvZGUgPT09IFwiZFwiID8gXCJjbGVhci1kYXkuc3ZnXCIgOiBcImNsZWFyLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJDbG91ZHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVDb2RlID09PSBcImRcIiA/IFwiY2xvdWRzLWRheS5zdmdcIiA6IFwiY2xvdWRzLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcInJhaW4tZGF5LnN2Z1wiIDogXCJyYWluLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJEcml6emxlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcImRyaXp6bGUtZGF5LnN2Z1wiIDogXCJkcml6emxlLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJUaHVuZGVyc3Rvcm1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVDb2RlID09PSBcImRcIiA/IFwidGh1bmRlcnN0b3JtLWRheS5zdmdcIiA6IFwidGh1bmRlcnN0b3JtLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJTbm93XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcInNub3ctZGF5LnN2Z1wiIDogXCJzbm93LW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcImRlZmF1bHQtZGF5LnN2Z1wiIDogXCJkZWZhdWx0LW5pZ2h0LnN2Z1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkSWNvbihpY29uTmFtZSkge1xyXG4gICAgbGV0IGljb25Nb2R1bGUgPSBhd2FpdCBpbXBvcnQoYC4vaW1hZ2VzLyR7aWNvbk5hbWV9YCk7XHJcbiAgICByZXR1cm4gIGljb25Nb2R1bGUuZGVmYXVsdDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2VhdGhlcihuYW1lLCBjdXJyZW50VGVtcGVyYXR1cmUsIGRlc2NyaXB0aW9uLCB0ZW1wTWluLCB0ZW1wTWF4LCBodW1pZGl0eSwgdGltZUNvZGUpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXBlcmF0dXJlJykudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcGVyYXR1cmV9wrBgO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW4tdGVtcGVyYXR1cmVcIikudGV4dENvbnRlbnQgPSBgJHt0ZW1wTWlufcKwYDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4LXRlbXBlcmF0dXJlXCIpLnRleHRDb250ZW50ID0gYCR7dGVtcE1heH3CsGA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWA7XHJcblxyXG4gICAgaWYodGltZUNvZGUgPT09ICduJyl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ25pZ2h0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXRlbXBlcmF0dXJlLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ25pZ2h0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnbmlnaHQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnbmlnaHQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAyZjRjJztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwODVkNyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gc2VsZWN0SWNvbihkZXNjcmlwdGlvbiwgdGltZUNvZGUpO1xyXG4gICAgY29uc3QgbG9hZGVkSWNvbiA9IGF3YWl0IGxvYWRJY29uKGljb24pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpLnNyYyA9IGAke2xvYWRlZEljb259YDtcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==