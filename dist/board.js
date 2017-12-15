class Board {
  constructor(numCircles, circleSpeed) {
    this.numCircles = numCircles;
    this.circleSpeed = circleSpeed;
    this.circleArray = [];
  }

  adjustCircleSpeed() {
    this.circleArray.forEach(circle => {
      circle.speed = this.circleSpeed;
    });
  }

  clearCircles() {
    this.circleArray = [];
  }

  createCircle() {
    var radius = Math.round(Math.random() * 10) + 5;
    var x =
      Math.random() * (innerWidth - panel.scrollWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var speed = this.circleSpeed;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    var color = colorsArray[Math.floor(Math.random() * 5)];

    this.circleArray.push(new Circle(x, y, speed, dx, dy, radius, color));
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
