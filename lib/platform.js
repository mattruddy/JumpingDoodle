
class Platform {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.height = 60;
    this.width = 100;
    this.image = document.getElementById("ice")
  }
  startPlat() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 590);
    if (this.x > 500) {
      this.x = this.x - 100
    }
    return this;
  }

  stepPlat() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 0);
    if (this.x > 500) {
      this.x = this.x - 100
    }
    return this;
  }
}
