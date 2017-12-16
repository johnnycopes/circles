class Circle {
  constructor(size, x, y, speed, dx, dy, radius, color, mouse) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minCircle = radius;
    this.growth = 0;
    this.color = color;
    this.mouse = mouse;
  }

  draw() {
    c.beginPath();
    c.arc(
      this.x,
      this.y,
      this.radius * this.size + this.growth,
      0,
      Math.PI * 2,
      false
    );
    c.fillStyle = this.color;
    c.fill();
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

    // hover interactivity
    // if (
    //   mouse.x - this.x < 75 &&
    //   mouse.x - this.x > -75 &&
    //   mouse.y - this.y < 75 &&
    //   mouse.y - this.y > -75 &&
    //   this.growth <= maxGrowth
    // ) {
    //   this.growth += 1;
    // } else if (this.growth >= 0 && this.minCircle >= 2) {
    //   this.growth -= 1;
    // }

    this.draw();
  }
}
