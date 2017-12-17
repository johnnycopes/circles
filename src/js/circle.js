export class Circle {
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
