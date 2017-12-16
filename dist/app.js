var panel = document.querySelector('section');
var canvas = document.querySelector('canvas');
var quantity = document.querySelector('#quantity');
var speed = document.querySelector('#speed');
var size = document.querySelector('#size');
var fill = document.querySelector('#fill');
var refresh = document.querySelector('#refresh');
var c = canvas.getContext('2d');

var mouse = { x: undefined, y: undefined }; // null = 0, so better to use undefined
var numCircles = 100;
var circleSpeed = 3;
var circleSize = 2;
var circleFill = true;
var circlesArray = [];
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

  canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x - panel.scrollWidth;
    mouse.y = event.y;
    circleArray.forEach(circle => {
      circle.mouse = mouse;
    });
  });

  canvas.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
  });

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
    circleFill = !circleFill;
    adjustCircleFill();
  });

  refresh.addEventListener('click', init);
}

// ****************************************

function adjustCircleFill() {
  circleArray.forEach(circle => {
    circle.fill = this.circleFill;
  });
}

function adjustCircleSpeed() {
  circleArray.forEach(circle => {
    circle.speed = this.circleSpeed;
  });
}

function adjustCircleSize() {
  circleArray.forEach(circle => {
    circle.size = this.circleSize;
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

  this.circleArray.push(
    new Circle(
      circleSize,
      x,
      y,
      circleSpeed,
      dx,
      dy,
      radius,
      circleFill,
      color,
      mouse
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
  this.circleArray.pop();
}
