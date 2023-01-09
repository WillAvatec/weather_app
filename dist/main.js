/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchWeather */ \"./src/modules/fetchWeather.js\");\n/* harmony import */ var _modules_DataHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DataHandler */ \"./src/modules/DataHandler.js\");\n/* harmony import */ var _modules_fetchGIF__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchGIF */ \"./src/modules/fetchGIF.js\");\n\n\n\n\n// When the user use space actualize search variable\n\nconst input = document.querySelector('#input');\n\ninput.addEventListener('keydown', (e) => {\n  if (e.key === 'Enter') {\n    const search = input.value;\n    input.value = '';\n    const json = (0,_modules_fetchWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search);\n    (0,_modules_DataHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json);\n    (0,_modules_fetchGIF__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(json);\n  }\n});\n\nconst apiDefault = (0,_modules_fetchWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconsole.log(apiDefault);\n(0,_modules_DataHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiDefault);\n(0,_modules_fetchGIF__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiDefault);\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/modules/DataHandler.js":
/*!************************************!*\
  !*** ./src/modules/DataHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataHandler)\n/* harmony export */ });\n/* eslint-disable require-jsdoc */\nasync function DataHandler(json) {\n  const ready = await json;\n  const title = document.querySelector('#title');\n  const temperature = document.querySelector('#temperature');\n  const weather = document.querySelector('#weather');\n  const description = document.querySelector('#description');\n\n  title.textContent = `${ready.name},${ready.sys.country}`;\n  temperature.textContent = `${ready.main.temp} °C`;\n  weather.textContent = ready.weather[0].main;\n  description.textContent = ready.weather[0].description;\n}\n\n\n//# sourceURL=webpack://weather_app/./src/modules/DataHandler.js?");

/***/ }),

/***/ "./src/modules/fetchGIF.js":
/*!*********************************!*\
  !*** ./src/modules/fetchGIF.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchGIF)\n/* harmony export */ });\nconst apiKey = 'CeCW20a0inT35xM4tX0SgHTQ5JTCSqjf';\nconst apiUrl = 'https://api.giphy.com/v1/gifs/translate';\nconst request = 'closed';\n\nasync function getGIF(defaulted) {\n  const data = defaulted.weather[0].description;\n  const response = await fetch(\n    `${apiUrl}?api_key=${apiKey}&s=${`${data} weather` || request}`,\n    { mode: 'cors' }\n  );\n\n  const json = await response.json();\n\n  return json;\n}\n\nasync function setGIF(json) {\n  const img = document.querySelector('#imagen');\n  const value = await json;\n  const gifUrl = await value.data.images.original.url;\n  img.src = gifUrl;\n}\n\nasync function searchGIF(search) {\n  const json = await search;\n  const returnedJSON = getGIF(json);\n  setGIF(returnedJSON);\n}\n\n\n//# sourceURL=webpack://weather_app/./src/modules/fetchGIF.js?");

/***/ }),

/***/ "./src/modules/fetchWeather.js":
/*!*************************************!*\
  !*** ./src/modules/fetchWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This function will return the values from the API Service as a json\n//  // Defining data values\n\nconst apiKey = 'a44ed5c8f946f714b0a5dec238292ecc';\nconst apiUrl = 'https://api.openweathermap.org/data/2.5/weather';\nconst search = 'London';\n\nasync function getData(input) {\n  const fetching = await fetch(\n    `${apiUrl}?q=${input || search}&appid=${apiKey}`,\n    {\n      mode: 'cors',\n    }\n  );\n\n  const json = await fetching.json();\n  return json;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://weather_app/./src/modules/fetchWeather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;