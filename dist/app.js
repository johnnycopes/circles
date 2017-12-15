var panel = document.querySelector('section');
var canvas = document.querySelector('canvas');
var quantity = document.querySelector('#quantity');
var speed = document.querySelector('#speed');
var size = document.querySelector('#size');
var refresh = document.querySelector('#refresh');
var c = canvas.getContext('2d');

var mouse = { x: undefined, y: undefined }; // null = 0, so better to use undefined
var numCircles = 80;
var circleSpeed = 3;
var circleSize = 2;
var maxRadius = 80;
var colorsArray = ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'];

var board = new Board(numCircles, circleSpeed, circleSize);
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

  board.clearCircles();
  board.generateCircles();
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  board.circleArray.forEach(circle => {
    circle.update();
  });
}

function setEventHandlers() {
  window.addEventListener('resize', init);

  canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x - panel.scrollWidth;
    mouse.y = event.y;
  });

  canvas.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
  });

  quantity.addEventListener('input', function() {
    board.numCircles = this.value;
    board.generateCircles();
  });

  speed.addEventListener('input', function() {
    board.circleSpeed = this.value;
    board.adjustCircleSpeed();
  });

  size.addEventListener('input', function() {
    board.circleSize = this.value;
    board.adjustCircleSize();
  });

  refresh.addEventListener('click', init);
}
