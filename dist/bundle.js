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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_app__ = __webpack_require__(1);
// // ===============
// // JS
// // ===============




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(2);


var panel = document.querySelector('section');
var canvas = document.querySelector('canvas');
var quantity = document.querySelector('#quantity');
var speed = document.querySelector('#speed');
var size = document.querySelector('#size');
var fill = document.querySelector('#fill');
var refresh = document.querySelector('#refresh');
var c = canvas.getContext('2d');

var numCircles = 100;
var circleSpeed = 3;
var circleSize = 2;
var circleFill = true;
var circleArray = [];
var colorsArray = ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'];

quantity.value = numCircles;
speed.value = circleSpeed;
size.value = circleSize;

setEventHandlers();
init();
animate();

// ****************************************

function init() {
  canvas.width = window.innerWidth - panel.scrollWidth;
  canvas.height = window.innerHeight;

  clearCircles();
  generateCircles();
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  circleArray.forEach(circle => {
    circle.update();
  });
}

function setEventHandlers() {
  window.addEventListener('resize', init);

  quantity.addEventListener('input', function() {
    numCircles = this.value;
    generateCircles();
  });

  speed.addEventListener('input', function() {
    circleSpeed = this.value;
    adjustCircleSpeed();
  });

  size.addEventListener('input', function() {
    circleSize = this.value;
    adjustCircleSize();
  });

  fill.addEventListener('click', function() {
    setTimeout(function() {
      circleFill = !circleFill;
      adjustCircleFill();
    }, 150);
  });

  refresh.addEventListener('click', init);
}

// ****************************************

function adjustCircleFill() {
  circleArray.forEach(circle => {
    circle.fill = circleFill;
  });
}

function adjustCircleSpeed() {
  circleArray.forEach(circle => {
    circle.speed = circleSpeed;
  });
}

function adjustCircleSize() {
  circleArray.forEach(circle => {
    circle.size = circleSize;
  });
}

function clearCircles() {
  circleArray = [];
}

function createCircle() {
  var radius = Math.ceil(Math.random() * 10);
  var x =
    Math.random() * (canvas.width - circleSize * radius * 2) +
    circleSize * radius;
  var y =
    Math.random() * (canvas.height - circleSize * radius * 2) +
    circleSize * radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var color = colorsArray[Math.floor(Math.random() * 5)];

  circleArray.push(
    new __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* Circle */](
      canvas,
      c,
      circleSize,
      x,
      y,
      circleSpeed,
      dx,
      dy,
      radius,
      circleFill,
      color
    )
  );
}

function generateCircles() {
  var difference = numCircles - circleArray.length;
  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      createCircle();
    }
  } else if (difference < 0) {
    difference = Math.abs(difference);
    for (let i = 0; i < difference; i++) {
      removeCircle();
    }
  }
}

function removeCircle() {
  circleArray.pop();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Circle {
  constructor(canvas, c, size, x, y, speed, dx, dy, radius, fill, color) {
    this.canvas = canvas;
    this.c = c;
    this.size = size;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.fill = fill;
    this.color = color;

    this.originalDy = dy;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius * this.size, 0, Math.PI * 2, false);
    if (this.fill) {
      this.c.fillStyle = this.color;
      this.c.fill();
    } else {
      this.c.strokeStyle = this.color;
      this.c.stroke();
    }
  }

  update() {
    if (
      this.x + this.radius * this.size >= this.canvas.width ||
      this.x - this.radius * this.size <= 0
    ) {
      this.dx = -this.dx;
    }

    if (
      this.y + this.radius * this.size >= this.canvas.height ||
      this.y - this.radius * this.size <= 0
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    this.draw();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Circle;



/***/ })
/******/ ]);