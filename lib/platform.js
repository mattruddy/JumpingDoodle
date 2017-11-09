
class Platform {
  constructor(ctx) {
    this.ctx = ctx;
    this.height = 10;
    this.width = 100;
    this.x;
    this.y;
  }
  startPlat() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 500);
    return this;
  }

  stepPlat() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 0);
    return this;
  }
}
