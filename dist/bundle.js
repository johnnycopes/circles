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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = __webpack_require__(1);\n\nvar _app2 = _interopRequireDefault(_app);\n\n__webpack_require__(8);\n\n__webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBOzs7O0FBTUE7O0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PVxuLy8gSlNcbi8vID09PT09PT09PT09PT09PVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vanMvYXBwJztcblxuLy8gPT09PT09PT09PT09PT09XG4vLyBTQ1NTXG4vLyA9PT09PT09PT09PT09PT1cblxuaW1wb3J0ICcuL3Njc3MvcmVzZXQuc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _circle = __webpack_require__(2);\n\nvar panel = document.querySelector('section');\nvar canvas = document.querySelector('canvas');\nvar quantity = document.querySelector('#quantity');\nvar speed = document.querySelector('#speed');\nvar size = document.querySelector('#size');\nvar fill = document.querySelector('#fill');\nvar refresh = document.querySelector('#refresh');\nvar c = canvas.getContext('2d');\n\nvar numCircles = 100;\nvar circleSpeed = 3;\nvar circleSize = 2;\nvar circleFill = true;\nvar circleArray = [];\nvar colorsArray = ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'];\n\nquantity.value = numCircles;\nspeed.value = circleSpeed;\nsize.value = circleSize;\n\nsetEventHandlers();\ninit();\nanimate();\n\n// ****************************************\n\nfunction init() {\n  canvas.width = window.innerWidth - panel.scrollWidth;\n  canvas.height = window.innerHeight;\n\n  clearCircles();\n  generateCircles();\n}\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  c.clearRect(0, 0, innerWidth, innerHeight);\n\n  circleArray.forEach(function (circle) {\n    circle.update();\n  });\n}\n\nfunction setEventHandlers() {\n  window.addEventListener('resize', init);\n\n  quantity.addEventListener('input', function () {\n    numCircles = this.value;\n    generateCircles();\n  });\n\n  speed.addEventListener('input', function () {\n    circleSpeed = this.value;\n    adjustCircleSpeed();\n  });\n\n  size.addEventListener('input', function () {\n    circleSize = this.value;\n    adjustCircleSize();\n  });\n\n  fill.addEventListener('click', function () {\n    setTimeout(function () {\n      circleFill = !circleFill;\n      adjustCircleFill();\n    }, 150);\n  });\n\n  refresh.addEventListener('click', init);\n}\n\n// ****************************************\n\nfunction adjustCircleFill() {\n  circleArray.forEach(function (circle) {\n    circle.fill = circleFill;\n  });\n}\n\nfunction adjustCircleSpeed() {\n  circleArray.forEach(function (circle) {\n    circle.speed = circleSpeed;\n  });\n}\n\nfunction adjustCircleSize() {\n  circleArray.forEach(function (circle) {\n    circle.size = circleSize;\n  });\n}\n\nfunction clearCircles() {\n  circleArray = [];\n}\n\nfunction createCircle() {\n  var radius = Math.ceil(Math.random() * 10);\n  var x = Math.random() * (canvas.width - circleSize * radius * 2) + circleSize * radius;\n  var y = Math.random() * (canvas.height - circleSize * radius * 2) + circleSize * radius;\n  var dx = Math.random() - 0.5;\n  var dy = Math.random() - 0.5;\n  var color = colorsArray[Math.floor(Math.random() * 5)];\n\n  circleArray.push(new _circle.Circle(canvas, c, circleSize, x, y, circleSpeed, dx, dy, radius, circleFill, color));\n}\n\nfunction generateCircles() {\n  var difference = numCircles - circleArray.length;\n  if (difference > 0) {\n    for (var i = 0; i < difference; i++) {\n      createCircle();\n    }\n  } else if (difference < 0) {\n    difference = Math.abs(difference);\n    for (var _i = 0; _i < difference; _i++) {\n      removeCircle();\n    }\n  }\n}\n\nfunction removeCircle() {\n  circleArray.pop();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOlsicGFuZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW52YXMiLCJxdWFudGl0eSIsInNwZWVkIiwic2l6ZSIsImZpbGwiLCJyZWZyZXNoIiwiYyIsImdldENvbnRleHQiLCJudW1DaXJjbGVzIiwiY2lyY2xlU3BlZWQiLCJjaXJjbGVTaXplIiwiY2lyY2xlRmlsbCIsImNpcmNsZUFycmF5IiwiY29sb3JzQXJyYXkiLCJ2YWx1ZSIsInNldEV2ZW50SGFuZGxlcnMiLCJpbml0IiwiYW5pbWF0ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFdpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGVhckNpcmNsZXMiLCJnZW5lcmF0ZUNpcmNsZXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiY2lyY2xlIiwidXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkanVzdENpcmNsZVNwZWVkIiwiYWRqdXN0Q2lyY2xlU2l6ZSIsInNldFRpbWVvdXQiLCJhZGp1c3RDaXJjbGVGaWxsIiwiY3JlYXRlQ2lyY2xlIiwicmFkaXVzIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJ4IiwieSIsImR4IiwiZHkiLCJjb2xvciIsImZsb29yIiwicHVzaCIsImRpZmZlcmVuY2UiLCJsZW5ndGgiLCJpIiwiYWJzIiwicmVtb3ZlQ2lyY2xlIiwicG9wIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtBQUNBLElBQUlDLFNBQVNGLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLElBQUlFLFdBQVdILFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLElBQUlHLFFBQVFKLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLElB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Q0FBdEQsSUFDQTNCLGFBQWEyQixNQUZmO0FBR0EsTUFBSUssSUFDRkosS0FBS0UsTUFBTCxNQUFpQnhDLE9BQU9zQixNQUFQLEdBQWdCWixhQUFhMkIsTUFBYixHQUFzQixDQUF2RCxJQUNBM0IsYUFBYTJCLE1BRmY7QUFHQSxNQUFJTSxLQUFLTCxLQUFLRSxNQUFMLEtBQWdCLEdBQXpCO0FBQ0EsTUFBSUksS0FBS04sS0FBS0UsTUFBTCxLQUFnQixHQUF6QjtBQUNBLE1BQUlLLFFBQVFoQyxZQUFZeUIsS0FBS1EsS0FBTCxDQUFXUixLQUFLRSxNQUFMLEtBQWdCLENBQTNCLENBQVosQ0FBWjs7QUFFQTVCLGNBQVltQyxJQUFaLENBQ0UsbUJBQ0UvQyxNQURGLEVBRUVNLENBRkYsRUFHRUksVUFIRixFQUlFK0IsQ0FKRixFQUtFQyxDQUxGLEVBTUVqQyxXQU5GLEVBT0VrQyxFQVBGLEVBUUVDLEVBUkYsRUFTRVAsTUFURixFQVVFMUIsVUFWRixFQVdFa0MsS0FYRixDQURGO0FBZUQ7O0FBRUQsU0FBU3BCLGVBQVQsR0FBMkI7QUFDekIsTUFBSXVCLGFBQWF4QyxhQUFhSSxZQUFZcUMsTUFBMUM7QUFDQSxNQUFJRCxhQUFhLENBQWpCLEVBQW9CO0FBQ2xCLFNBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixVQUFwQixFQUFnQ0UsR0FBaEMsRUFBcUM7QUFDbkNkO0FBQ0Q7QUFDRixHQUpELE1BSU8sSUFBSVksYUFBYSxDQUFqQixFQUFvQjtBQUN6QkEsaUJBQWFWLEtBQUthLEdBQUwsQ0FBU0gsVUFBVCxDQUFiO0FBQ0EsU0FBSyxJQUFJRSxLQUFJLENBQWIsRUFBZ0JBLEtBQUlGLFVBQXBCLEVBQWdDRSxJQUFoQyxFQUFxQztBQUNuQ0U7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QnhDLGNBQVl5QyxHQUFaO0FBQ0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmNsZSB9IGZyb20gJy4vY2lyY2xlJztcblxudmFyIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xudmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIHF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG52YXIgc3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BlZWQnKTtcbnZhciBzaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemUnKTtcbnZhciBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGwnKTtcbnZhciByZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBudW1DaXJjbGVzID0gMTAwO1xudmFyIGNpcmNsZVNwZWVkID0gMztcbnZhciBjaXJjbGVTaXplID0gMjtcbnZhciBjaXJjbGVGaWxsID0gdHJ1ZTtcbnZhciBjaXJjbGVBcnJheSA9IFtdO1xudmFyIGNvbG9yc0FycmF5ID0gWycjRDhFMkRDJywgJyNGRkU1RDknLCAnI0ZGQ0FENCcsICcjRjRBQ0I3JywgJyM5RDgxODknXTtcblxucXVhbnRpdHkudmFsdWUgPSBudW1DaXJjbGVzO1xuc3BlZWQudmFsdWUgPSBjaXJjbGVTcGVlZDtcbnNpemUudmFsdWUgPSBjaXJjbGVTaXplO1xuXG5zZXRFdmVudEhhbmRsZXJzKCk7XG5pbml0KCk7XG5hbmltYXRlKCk7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBwYW5lbC5zY3JvbGxXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICBjbGVhckNpcmNsZXMoKTtcbiAgZ2VuZXJhdGVDaXJjbGVzKCk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgYy5jbGVhclJlY3QoMCwgMCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpO1xuXG4gIGNpcmNsZUFycmF5LmZvckVhY2goY2lyY2xlID0+IHtcbiAgICBjaXJjbGUudXBkYXRlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRFdmVudEhhbmRsZXJzKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5pdCk7XG5cbiAgcXVhbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBudW1DaXJjbGVzID0gdGhpcy52YWx1ZTtcbiAgICBnZW5lcmF0ZUNpcmNsZXMoKTtcbiAgfSk7XG5cbiAgc3BlZWQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBjaXJjbGVTcGVlZCA9IHRoaXMudmFsdWU7XG4gICAgYWRqdXN0Q2lyY2xlU3BlZWQoKTtcbiAgfSk7XG5cbiAgc2l6ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIGNpcmNsZVNpemUgPSB0aGlzLnZhbHVlO1xuICAgIGFkanVzdENpcmNsZVNpemUoKTtcbiAgfSk7XG5cbiAgZmlsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjaXJjbGVGaWxsID0gIWNpcmNsZUZpbGw7XG4gICAgICBhZGp1c3RDaXJjbGVGaWxsKCk7XG4gICAgfSwgMTUwKTtcbiAgfSk7XG5cbiAgcmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXQpO1xufVxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmZ1bmN0aW9uIGFkanVzdENpcmNsZUZpbGwoKSB7XG4gIGNpcmNsZUFycmF5LmZvckVhY2goY2lyY2xlID0+IHtcbiAgICBjaXJjbGUuZmlsbCA9IGNpcmNsZUZpbGw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RDaXJjbGVTcGVlZCgpIHtcbiAgY2lyY2xlQXJyYXkuZm9yRWFjaChjaXJjbGUgPT4ge1xuICAgIGNpcmNsZS5zcGVlZCA9IGNpcmNsZVNwZWVkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q2lyY2xlU2l6ZSgpIHtcbiAgY2lyY2xlQXJyYXkuZm9yRWFjaChjaXJjbGUgPT4ge1xuICAgIGNpcmNsZS5zaXplID0gY2lyY2xlU2l6ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2lyY2xlcygpIHtcbiAgY2lyY2xlQXJyYXkgPSBbXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2lyY2xlKCkge1xuICB2YXIgcmFkaXVzID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIHZhciB4ID1cbiAgICBNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIGNpcmNsZVNpemUgKiByYWRpdXMgKiAyKSArXG4gICAgY2lyY2xlU2l6ZSAqIHJhZGl1cztcbiAgdmFyIHkgPVxuICAgIE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIGNpcmNsZVNpemUgKiByYWRpdXMgKiAyKSArXG4gICAgY2lyY2xlU2l6ZSAqIHJhZGl1cztcbiAgdmFyIGR4ID0gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgdmFyIGR5ID0gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgdmFyIGNvbG9yID0gY29sb3JzQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSldO1xuXG4gIGNpcmNsZUFycmF5LnB1c2goXG4gICAgbmV3IENpcmNsZShcbiAgICAgIGNhbnZhcyxcbiAgICAgIGMsXG4gICAgICBjaXJjbGVTaXplLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjaXJjbGVTcGVlZCxcbiAgICAgIGR4LFxuICAgICAgZHksXG4gICAgICByYWRpdXMsXG4gICAgICBjaXJjbGVGaWxsLFxuICAgICAgY29sb3JcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2lyY2xlcygpIHtcbiAgdmFyIGRpZmZlcmVuY2UgPSBudW1DaXJjbGVzIC0gY2lyY2xlQXJyYXkubGVuZ3RoO1xuICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZlcmVuY2U7IGkrKykge1xuICAgICAgY3JlYXRlQ2lyY2xlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG4gICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2UpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmVyZW5jZTsgaSsrKSB7XG4gICAgICByZW1vdmVDaXJjbGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2lyY2xlKCkge1xuICBjaXJjbGVBcnJheS5wb3AoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Circle = exports.Circle = function () {\n  function Circle(canvas, c, size, x, y, speed, dx, dy, radius, fill, color) {\n    _classCallCheck(this, Circle);\n\n    this.canvas = canvas;\n    this.c = c;\n    this.size = size;\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.dx = dx;\n    this.dy = dy;\n    this.radius = radius;\n    this.fill = fill;\n    this.color = color;\n\n    this.originalDy = dy;\n  }\n\n  _createClass(Circle, [{\n    key: \"draw\",\n    value: function draw() {\n      this.c.beginPath();\n      this.c.arc(this.x, this.y, this.radius * this.size, 0, Math.PI * 2, false);\n      if (this.fill) {\n        this.c.fillStyle = this.color;\n        this.c.fill();\n      } else {\n        this.c.strokeStyle = this.color;\n        this.c.stroke();\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.x + this.radius * this.size >= this.canvas.width || this.x - this.radius * this.size <= 0) {\n        this.dx = -this.dx;\n      }\n\n      if (this.y + this.radius * this.size >= this.canvas.height || this.y - this.radius * this.size <= 0) {\n        this.dy = -this.dy;\n      }\n\n      this.x += this.dx * this.speed;\n      this.y += this.dy * this.speed;\n\n      this.draw();\n    }\n  }]);\n\n  return Circle;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2lyY2xlLmpzPzhhNDAiXSwibmFtZXMiOlsiQ2lyY2xlIiwiY2FudmFzIiwiYyIsInNpemUiLCJ4IiwieSIsInNwZWVkIiwiZHgiLCJkeSIsInJhZGl1cyIsImZpbGwiLCJjb2xvciIsIm9yaWdpbmFsRHkiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxNLFdBQUFBLE07QUFDWCxrQkFBWUMsTUFBWixFQUFvQkMsQ0FBcEIsRUFBdUJDLElBQXZCLEVBQTZCQyxDQUE3QixFQUFnQ0MsQ0FBaEMsRUFBbUNDLEtBQW5DLEVBQTBDQyxFQUExQyxFQUE4Q0MsRUFBOUMsRUFBa0RDLE1BQWxELEVBQTBEQyxJQUExRCxFQUFnRUMsS0FBaEUsRUFBdUU7QUFBQTs7QUFDckUsU0FBS1YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBLFNBQUtDLFVBQUwsR0FBa0JKLEVBQWxCO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLTixDQUFMLENBQU9XLFNBQVA7QUFDQSxXQUFLWCxDQUFMLENBQU9ZLEdBQVAsQ0FBVyxLQUFLVixDQUFoQixFQUFtQixLQUFLQyxDQUF4QixFQUEyQixLQUFLSSxNQUFMLEdBQWMsS0FBS04sSUFBOUMsRUFBb0QsQ0FBcEQsRUFBdURZLEtBQUtDLEVBQUwsR0FBVSxDQUFqRSxFQUFvRSxLQUFwRTtBQUNBLFVBQUksS0FBS04sSUFBVCxFQUFlO0FBQ2IsYUFBS1IsQ0FBTCxDQUFPZSxTQUFQLEdBQW1CLEtBQUtOLEtBQXhCO0FBQ0EsYUFBS1QsQ0FBTCxDQUFPUSxJQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS1IsQ0FBTCxDQUFPZ0IsV0FBUCxHQUFxQixLQUFLUCxLQUExQjtBQUNBLGFBQUtULENBQUwsQ0FBT2lCLE1BQVA7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUNFLEtBQUtmLENBQUwsR0FBUyxLQUFLSyxNQUFMLEdBQWMsS0FBS04sSUFBNUIsSUFBb0MsS0FBS0YsTUFBTCxDQUFZbUIsS0FBaEQsSUFDQSxLQUFLaEIsQ0FBTCxHQUFTLEtBQUtLLE1BQUwsR0FBYyxLQUFLTixJQUE1QixJQUFvQyxDQUZ0QyxFQUdFO0FBQ0EsYUFBS0ksRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDRDs7QUFFRCxVQUNFLEtBQUtGLENBQUwsR0FBUyxLQUFLSSxNQUFMLEdBQWMsS0FBS04sSUFBNUIsSUFBb0MsS0FBS0YsTUFBTCxDQUFZb0IsTUFBaEQsSUFDQSxLQUFLaEIsQ0FBTCxHQUFTLEtBQUtJLE1BQUwsR0FBYyxLQUFLTixJQUE1QixJQUFvQyxDQUZ0QyxFQUdFO0FBQ0EsYUFBS0ssRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDRDs7QUFFRCxXQUFLSixDQUFMLElBQVUsS0FBS0csRUFBTCxHQUFVLEtBQUtELEtBQXpCO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtHLEVBQUwsR0FBVSxLQUFLRixLQUF6Qjs7QUFFQSxXQUFLZ0IsSUFBTDtBQUNEIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjLCBzaXplLCB4LCB5LCBzcGVlZCwgZHgsIGR5LCByYWRpdXMsIGZpbGwsIGNvbG9yKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMuZHkgPSBkeTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcblxuICAgIHRoaXMub3JpZ2luYWxEeSA9IGR5O1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMgKiB0aGlzLnNpemUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICB0aGlzLmMuZmlsbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmMuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5jLnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnggKyB0aGlzLnJhZGl1cyAqIHRoaXMuc2l6ZSA+PSB0aGlzLmNhbnZhcy53aWR0aCB8fFxuICAgICAgdGhpcy54IC0gdGhpcy5yYWRpdXMgKiB0aGlzLnNpemUgPD0gMFxuICAgICkge1xuICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMueSArIHRoaXMucmFkaXVzICogdGhpcy5zaXplID49IHRoaXMuY2FudmFzLmhlaWdodCB8fFxuICAgICAgdGhpcy55IC0gdGhpcy5yYWRpdXMgKiB0aGlzLnNpemUgPD0gMFxuICAgICkge1xuICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cblxuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5zcGVlZDtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuc3BlZWQ7XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NpcmNsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmM5NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9yZXNldC5zY3NzP2QzODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9yZXNldC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);