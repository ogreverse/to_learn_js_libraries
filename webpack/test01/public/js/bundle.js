/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _additionCalculator = __webpack_require__(/*! ./modules/addition-calculator */ "./src/js/modules/addition-calculator.js");

var _additionCalculator2 = _interopRequireDefault(_additionCalculator);

var _taxCalculator = __webpack_require__(/*! ./modules/tax-calculator */ "./src/js/modules/tax-calculator.js");

var _taxCalculator2 = _interopRequireDefault(_taxCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 2つのアイテムの価格を合算し、消費税込みの価格を出力をするエントリーポイント。
var ITEM1_PRICE = 400;
var ITEM2_PRICE = 600;
var TAX = 1.08;

var totalPrice = (0, _additionCalculator2.default)(ITEM1_PRICE, ITEM2_PRICE);
var priceIncludeTax = (0, _taxCalculator2.default)(totalPrice, TAX);

console.log(priceIncludeTax);
console.log(ITEM1_PRICE);

/***/ }),

/***/ "./src/js/modules/addition-calculator.js":
/*!***********************************************!*\
  !*** ./src/js/modules/addition-calculator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = additionCalculator;
/**
 * 引数のnumber1とnumber2を合算して返す
 * @param number1
 * @param number2
 * @return {*}
 */
function additionCalculator(number1, number2) {
  return number1 + number2;
}

/***/ }),

/***/ "./src/js/modules/tax-calculator.js":
/*!******************************************!*\
  !*** ./src/js/modules/tax-calculator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = taxCalculator;
/**
 * 引数priceとtaxを乗算して返す
 * @param price
 * @param tax
 * @return {number}
 */
function taxCalculator(price, tax) {
  return Math.round(price * tax);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map