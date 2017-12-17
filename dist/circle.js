class Circle {
  constructor(size, x, y, speed, dx, dy, radius, fill, color) {
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
    c.beginPath();
    c.arc(this.x, this.y, this.radius * this.size, 0, Math.PI * 2, false);
    if (this.fill) {
      c.fillStyle = this.color;
      c.fill();
    } else {
      c.strokeStyle = this.color;
      c.stroke();
    }
  }

  update() {
    if (
      this.x + this.radius * this.size >= canvas.width ||
      this.x - this.radius * this.size <= 0
    ) {
      this.dx = -this.dx;
    }

    if (
      this.y + this.radius * this.size >= canvas.height ||
      this.y - this.radius * this.size <= 0
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    // on mousedown, if circles are within range...
    if (gravity) {
      this.color;
    }

    this.draw();
  }
}
