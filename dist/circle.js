class Circle {
  constructor(x, y, speed, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    if (
      this.x + this.radius >= window.innerWidth - panel.scrollWidth ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx;
    }

    if (
      this.y + this.radius >= window.innerHeight ||
      this.y - this.radius <= 0
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    // hover interactivity
    if (
      mouse.x - this.x < 75 &&
      mouse.x - this.x > -75 &&
      mouse.y - this.y < 75 &&
      mouse.y - this.y > -75 &&
      this.radius <= maxRadius
    ) {
      this.radius += 1;
    } else if (this.radius >= this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}
