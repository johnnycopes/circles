class Board {
  constructor(numCircles, circleSpeed, circleSize) {
    this.numCircles = numCircles;
    this.circleSpeed = circleSpeed;
    this.circleSize = circleSize;
    this.circleArray = [];
  }

  adjustCircleSpeed() {
    this.circleArray.forEach(circle => {
      circle.speed = this.circleSpeed;
    });
  }

  adjustCircleSize() {
    this.circleArray.forEach(circle => {
      circle.size = this.circleSize;
    });
  }

  clearCircles() {
    this.circleArray = [];
  }

  createCircle() {
    var size = this.circleSize;
    var radius = Math.round(Math.random() * 10);
    var x =
      Math.random() * (innerWidth - panel.scrollWidth - radius * size * 2) +
      radius * size;
    var y = Math.random() * (innerHeight - radius * size * 2) + radius * size;
    var speed = this.circleSpeed;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    var color = colorsArray[Math.floor(Math.random() * 5)];

    this.circleArray.push(new Circle(size, x, y, speed, dx, dy, radius, color));
  }

  generateCircles() {
    var difference = this.numCircles - this.circleArray.length;
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        this.createCircle();
      }
    } else if (difference < 0) {
      difference = Math.abs(difference);
      for (let i = 0; i < difference; i++) {
        this.removeCircle();
      }
    }
  }

  removeCircle() {
    this.circleArray.pop();
  }
}
